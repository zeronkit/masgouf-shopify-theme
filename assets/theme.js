/* Masgouf theme by ZeronKit (https://zeronkit.com). Free theme - not for resale or redistribution. © 2026 ZeronKit. */
/* Signature: ZK-MASGOUF-AA054DDEB651 */
/*
  Small core of web components. No dependencies, no build step.
  Header, product, search, navigator and facets modules load only when needed.
*/

const config = JSON.parse(document.getElementById('cw-config')?.textContent || '{}');
const strings = config.strings || {};
const routes = config.routes || {};
const modules = config.modules || {};

const announce = (message) => {
  const live = document.getElementById('cw-live');
  if (!live || !message) return;
  live.textContent = '';
  window.setTimeout(() => { live.textContent = message; }, 50);
};

const parseHTML = (html) => new DOMParser().parseFromString(html, 'text/html');

const defineOnce = (name, constructor) => {
  if (!customElements.get(name)) customElements.define(name, constructor);
};

/* ---------- Dialogs: navigator, search, drawers, size guide ---------- */
let lastOpener = null;

// Masgouf drops (the whole board, the search ticket, the basket ticket) hang from the header or from their button.
const placeDrop = (dialog) => {
  const mode = dialog?.dataset.mgDrop;
  if (!mode) return;
  const header = document.querySelector('cw-header');
  const bottom = header ? Math.max(0, header.getBoundingClientRect().bottom) : 0;
  dialog.style.setProperty('--mg-drop', `${Math.round(bottom)}px`);
  const anchor = document.querySelector(mode === 'search' ? '[data-mg-search-anchor]' : mode === 'basket' ? '[data-mg-basket]' : null);
  const rect = anchor?.getBoundingClientRect();
  dialog.classList.toggle('is-anchored', Boolean(rect && rect.width));
  if (!rect || !rect.width) return;
  dialog.style.setProperty('--mg-anchor-top', `${Math.round(rect.top)}px`);
  dialog.style.setProperty('--mg-anchor-bottom', `${Math.round(rect.bottom)}px`);
  dialog.style.setProperty('--mg-anchor-left', `${Math.round(rect.left)}px`);
  dialog.style.setProperty('--mg-anchor-right', `${Math.round(document.documentElement.clientWidth - rect.right)}px`);
  dialog.style.setProperty('--mg-anchor-w', `${Math.round(rect.width)}px`);
};
window.addEventListener('resize', () => document.querySelectorAll('dialog[open][data-mg-drop]').forEach(placeDrop), { passive: true });

const openDialog = (dialog, opener) => {
  if (!dialog || dialog.open) return;
  lastOpener = opener || document.activeElement;
  placeDrop(dialog);
  dialog.showModal();
  dialog.dispatchEvent(new CustomEvent('cw:open', { detail: { opener } }));
};

const reducedMotion = () => document.documentElement.dataset.motion === 'off' || window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Plays the closing animation (unless reduced motion is on), then closes the dialog.
const closeDialog = (dialog) => {
  if (!dialog?.open || dialog.classList.contains('is-closing')) return;
  if (reducedMotion()) {
    dialog.close();
    return;
  }
  dialog.classList.add('is-closing');
  const done = () => {
    dialog.classList.remove('is-closing');
    if (dialog.open) dialog.close();
  };
  dialog.addEventListener('animationend', done, { once: true });
  window.setTimeout(done, 450);
};

// Esc fires "cancel": run the same animated close.
document.addEventListener('cancel', (event) => {
  if (event.target instanceof HTMLDialogElement) {
    event.preventDefault();
    closeDialog(event.target);
  }
}, true);

document.addEventListener('click', (event) => {
  const opener = event.target.closest('[data-cw-open]');
  if (opener) {
    const dialog = document.getElementById(opener.dataset.cwOpen);
    if (dialog) {
      event.preventDefault();
      // The navigator script is imported on first use, then the dialog opens.
      const ready = dialog.querySelector('cw-navigator') && modules.navigator ? import(modules.navigator).catch(() => {}) : Promise.resolve();
      ready.then(() => openDialog(dialog, opener));
    }
    return;
  }
  const closer = event.target.closest('[data-cw-close]');
  if (closer) {
    closeDialog(closer.closest('dialog'));
    return;
  }
  // A click on the backdrop lands on the dialog element itself, outside its box.
  if (event.target instanceof HTMLDialogElement && event.target.open) {
    const rect = event.target.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right && event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) closeDialog(event.target);
  }
});

document.addEventListener('close', (event) => {
  if (event.target instanceof HTMLDialogElement && lastOpener && document.contains(lastOpener)) {
    lastOpener.focus({ preventScroll: true });
  }
}, true);

/* ---------- Quantity stepper ---------- */
class CwQuantity extends HTMLElement {
  connectedCallback() {
    this.input = this.querySelector('input');
    this.addEventListener('click', (event) => {
      const button = event.target.closest('[data-step]');
      if (!button) return;
      const min = Number(this.input.min || 0);
      const next = Math.max(min, Number(this.input.value || 0) + Number(button.dataset.step));
      if (next === Number(this.input.value)) return;
      this.input.value = next;
      this.input.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }
}
defineOnce('cw-quantity', CwQuantity);

/* ---------- Cart ---------- */
const cartSectionIds = () => {
  const ids = new Set();
  document.querySelectorAll('cw-cart[data-section-id]').forEach((el) => ids.add(el.dataset.sectionId));
  if (config.cartType === 'drawer' && document.getElementById('CartDrawer')) ids.add('cart-drawer');
  return [...ids];
};

const renderCartSections = (sections) => {
  if (!sections) return;
  let count = null;
  let label = null;
  let total = null;
  document.querySelectorAll('cw-cart[data-section-id]').forEach((cart) => {
    const html = sections[cart.dataset.sectionId];
    if (!html) return;
    const fresh = parseHTML(html).querySelector('[data-cw-cart-content]');
    const current = cart.querySelector('[data-cw-cart-content]');
    if (fresh && current) {
      current.replaceWith(fresh);
      count = fresh.dataset.count;
      label = fresh.dataset.countLabel;
      total = fresh.dataset.total ?? null;
    }
  });
  if (count !== null) {
    document.querySelectorAll('[data-cw-cart-count]').forEach((el) => {
      el.textContent = count;
      el.hidden = Number(count) === 0;
    });
    document.querySelectorAll('[data-cw-cart-label]').forEach((el) => { el.textContent = label; });
    document.querySelectorAll('[data-mg-cart-total]').forEach((el) => {
      if (total !== null) el.textContent = total;
      el.hidden = Number(count) === 0;
    });
  }
};

const readJSON = async (response) => {
  const data = await response.json();
  if (!response.ok || data.status) throw new Error(data.description || data.message || strings.error);
  return data;
};

const postJSON = async (url, body) => readJSON(await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  body: JSON.stringify(body)
}));

const afterAdd = (data) => {
  const drawer = document.getElementById('CartDrawer');
  if (config.cartType !== 'drawer' || !drawer) {
    window.location.href = routes.cart;
    return;
  }
  renderCartSections(data.sections);
  openDialog(drawer);
  announce(strings.added);
};

class CwCart extends HTMLElement {
  connectedCallback() {
    this.addEventListener('change', (event) => {
      const input = event.target.closest('input[data-line]');
      if (input) {
        window.clearTimeout(this.timer);
        this.timer = window.setTimeout(() => this.update(input.dataset.line, Number(input.value)), 300);
      }
      if (event.target.matches('[data-cw-note]')) {
        postJSON(`${routes.cart}/update.js`, { note: event.target.value }).catch(() => {});
      }
    });
    this.addEventListener('click', (event) => {
      const remove = event.target.closest('[data-cw-remove]');
      if (remove) this.update(remove.dataset.cwRemove, 0);
    });
  }

  async update(line, quantity) {
    const row = this.querySelector(`.cw-line[data-line="${line}"]`);
    row?.setAttribute('aria-busy', 'true');
    try {
      const data = await postJSON(`${routes.cartChange}.js`, { line: Number(line), quantity, sections: cartSectionIds().join(',') });
      renderCartSections(data.sections);
      const target = this.querySelector(`input[data-line="${line}"]`) || this.querySelector('input[data-line]') || this.querySelector('[data-cw-cart-content] a');
      target?.focus({ preventScroll: true });
    } catch (error) {
      row?.removeAttribute('aria-busy');
      const message = row?.querySelector('[data-cw-line-error]');
      if (message) {
        message.textContent = error.message;
        message.hidden = false;
      }
    }
  }
}
defineOnce('cw-cart', CwCart);

document.addEventListener('click', (event) => {
  const toggle = event.target.closest('[data-cw-cart-toggle]');
  const drawer = document.getElementById('CartDrawer');
  if (toggle && drawer && config.cartType === 'drawer') {
    event.preventDefault();
    openDialog(drawer, toggle);
  }
});



/* ---------- Menu lines: "+" adds to the basket, "Choose" opens the sizes under the line ---------- */
document.addEventListener('submit', async (event) => {
  const form = event.target.closest?.('form[data-mg-quick]');
  if (!form) return;
  event.preventDefault();
  const button = form.querySelector('button');
  button?.setAttribute('aria-busy', 'true');
  try {
    const body = new FormData(form);
    body.append('sections', cartSectionIds().join(','));
    body.append('sections_url', window.location.pathname);
    const response = await fetch(`${routes.cartAdd}.js`, { method: 'POST', headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' }, body });
    afterAdd(await readJSON(response));
  } catch (error) {
    announce(error.message || strings.error);
  } finally {
    button?.removeAttribute('aria-busy');
  }
});

document.addEventListener('click', (event) => {
  const toggle = event.target.closest('[data-mg-choose]');
  if (!toggle) return;
  const list = document.getElementById(toggle.getAttribute('aria-controls'));
  if (!list) return;
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  list.classList.toggle('is-open', open);
  if (open) list.querySelector('button')?.focus({ preventScroll: true });
});

/* ---------- Stall map: a key line and its pin light up together ---------- */
const lightPin = (event) => {
  const map = event.target.closest?.('[data-mg-map]');
  if (!map) return;
  const id = event.type === 'pointerout' || event.type === 'focusout' ? null : event.target.closest('[data-mg-pin]')?.dataset.mgPin;
  map.querySelectorAll('[data-mg-pin]').forEach((el) => el.classList.toggle('is-lit', el.dataset.mgPin === id));
};
['pointerover', 'pointerout', 'focusin', 'focusout'].forEach((type) => document.addEventListener(type, lightPin));

/* Print buttons (article, gift card) without inline handlers, so a strict CSP still allows them. */
document.addEventListener('click', (event) => {
  if (event.target.closest('[data-cw-print]')) window.print();
});

/* ---------- Search dialog ---------- */
document.getElementById('SearchDialog')?.addEventListener('cw:open', (event) => {
  if (modules.search) import(modules.search);
  event.currentTarget.querySelector('input[type="search"]')?.focus();
});

/* ---------- Lazy modules (import on need) ---------- */
window.Masgouf = { announce, parseHTML, strings, routes, afterAdd, readJSON, cartSectionIds, closeDialog };

const loadModules = () => {
  if (modules.product && document.querySelector('cw-product, cw-product-form, cw-recommendations, cw-pickup, cw-deferred-media, cw-model, cw-ambient-video')) import(modules.product);
  if (modules.header && document.querySelector('cw-header, cw-announce')) import(modules.header);
  if (modules.motion && !reducedMotion()) import(modules.motion);
  if (modules.cards && document.querySelector('[data-cw-card-swatch]')) import(modules.cards);
  if (modules.slider && document.querySelector('cw-slider')) import(modules.slider);
  if (modules.search && document.querySelector('main [data-cw-recent], [data-cw-search-collections]')) import(modules.search);
  if (modules.facets && document.querySelector('cw-facets')) import(modules.facets);
  if (modules.search && document.activeElement?.closest?.('cw-predictive-search')) import(modules.search);
};
loadModules();
document.addEventListener('shopify:section:load', loadModules);
document.addEventListener('pointerover', (event) => {
  if (modules.navigator && event.target.closest?.('[data-cw-open="Navigator"]')) import(modules.navigator);
}, { passive: true });
document.addEventListener('focusin', (event) => {
  if (modules.navigator && event.target.closest?.('[data-cw-open="Navigator"]')) import(modules.navigator);
  if (modules.search && event.target.closest?.('cw-predictive-search')) import(modules.search);
});
