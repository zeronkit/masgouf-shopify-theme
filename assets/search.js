/* Masgouf theme by ZeronKit (https://zeronkit.com). Free theme - not for resale or redistribution. © 2026 ZeronKit. */
/*
  Predictive search combobox, recent searches and matching collections.
  Loaded on demand by theme.js.
*/

const { announce, parseHTML, closeDialog, strings = {}, routes = {} } = window.Masgouf || {};
const defineOnce = (name, constructor) => {
  if (!customElements.get(name)) customElements.define(name, constructor);
};

/* ---------- Predictive search (combobox) ---------- */
class CwPredictiveSearch extends HTMLElement {
  connectedCallback() {
    this.input = this.querySelector('input[type="search"]');
    this.results = this.querySelector('[data-cw-results]');
    this.cache = new Map();
    this.active = -1;
    this.input.addEventListener('input', () => {
      window.clearTimeout(this.timer);
      this.timer = window.setTimeout(() => this.search(this.input.value.trim()), 220);
    });
    this.input.addEventListener('keydown', (event) => this.onKey(event));
    this.addEventListener('focusout', (event) => {
      if (!this.contains(event.relatedTarget)) this.close();
    });
  }

  async search(term) {
    if (!term) {
      this.close();
      return;
    }
    if (!this.cache.has(term)) {
      this.setAttribute('aria-busy', 'true');
      try {
        const params = new URLSearchParams({ q: term, 'resources[type]': 'product,collection,page,article,query', 'resources[limit]': '6', section_id: 'predictive-search' });
        const response = await fetch(`${this.dataset.url}?${params}`);
        // Some languages have no predictive search on Shopify: offer the full search page as the one line instead.
        this.cache.set(term, response.ok ? await response.text() : this.fallback(term));
      } catch (error) {
        return;
      } finally {
        this.removeAttribute('aria-busy');
      }
    }
    if (term !== this.input.value.trim()) return;
    const content = parseHTML(this.cache.get(term)).querySelector('[data-cw-predictive-content]');
    this.results.replaceChildren(...(content ? [content] : []));
    this.results.hidden = false;
    this.input.setAttribute('aria-expanded', 'true');
    this.active = -1;
    announce(this.results.querySelector('[data-cw-predictive-status]')?.textContent);
  }

  fallback(term) {
    const doc = document.implementation.createHTMLDocument('');
    const wrap = doc.createElement('div');
    wrap.setAttribute('data-cw-predictive-content', '');
    wrap.className = 'cw-predictive__inner';
    const list = doc.createElement('ul');
    list.className = 'cw-predictive__list';
    list.setAttribute('role', 'listbox');
    list.setAttribute('aria-label', (this.dataset.all || '').replace('%Q%', term));
    const item = doc.createElement('li');
    item.className = 'cw-predictive__all';
    item.id = 'cw-ps-all';
    item.setAttribute('role', 'option');
    item.setAttribute('aria-selected', 'false');
    const link = doc.createElement('a');
    const form = this.closest('form');
    link.href = `${form?.getAttribute('action') || '/search'}?q=${encodeURIComponent(term)}&options%5Bprefix%5D=last`;
    link.tabIndex = -1;
    link.textContent = (this.dataset.all || '%Q%').replace('%Q%', term);
    item.append(link);
    list.append(item);
    wrap.append(list);
    return wrap.outerHTML;
  }

  options() { return [...this.results.querySelectorAll('[role="option"]')]; }

  onKey(event) {
    // Esc closes the suggestion list first. The next Esc closes the search dialog itself: the
    // browser will not send a second close request after the first one was taken, so do it here.
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      if (!this.results.hidden) {
        this.close();
        return;
      }
      const dialog = this.closest('dialog');
      if (dialog && dialog.open && closeDialog) closeDialog(dialog);
      return;
    }
    const options = this.options();
    if (!options.length || this.results.hidden || !['ArrowDown', 'ArrowUp', 'Enter'].includes(event.key)) return;
    if (event.key === 'Enter') {
      if (this.active >= 0) {
        event.preventDefault();
        options[this.active].querySelector('a')?.click();
      }
      return;
    }
    event.preventDefault();
    this.active = event.key === 'ArrowDown' ? (this.active + 1) % options.length : (this.active - 1 + options.length) % options.length;
    options.forEach((option, index) => option.setAttribute('aria-selected', String(index === this.active)));
    this.input.setAttribute('aria-activedescendant', options[this.active].id);
    options[this.active].scrollIntoView({ block: 'nearest' });
  }

  close() {
    this.results.hidden = true;
    this.input.setAttribute('aria-expanded', 'false');
    this.input.removeAttribute('aria-activedescendant');
    this.active = -1;
  }
}
defineOnce('cw-predictive-search', CwPredictiveSearch);

/* ---------- Recent searches (stored only in this browser) ---------- */
const RECENT_KEY = 'cw-recent-searches';
const readRecent = () => {
  try {
    const list = JSON.parse(window.localStorage.getItem(RECENT_KEY) || '[]');
    return Array.isArray(list) ? list.filter((item) => typeof item === 'string').slice(0, 6) : [];
  } catch (error) {
    return [];
  }
};
const writeRecent = (list) => {
  try { window.localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, 6))); } catch (error) { /* storage blocked */ }
};
const searchUrl = (term) => `${routes.searchPage || '/search'}?q=${encodeURIComponent(term)}&options%5Bprefix%5D=last`;

const renderRecent = () => {
  const recent = readRecent();
  document.querySelectorAll('[data-cw-recent]').forEach((block) => {
    const list = block.querySelector('[data-cw-recent-list]');
    if (!list) return;
    list.replaceChildren(...recent.map((term) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.className = 'cw-pill';
      link.href = searchUrl(term);
      link.textContent = term;
      item.append(link);
      return item;
    }));
    block.hidden = recent.length === 0;
  });
};

document.addEventListener('submit', (event) => {
  const input = event.target.querySelector?.('input[name="q"]');
  const term = input?.value.trim();
  if (!term) return;
  writeRecent([term, ...readRecent().filter((item) => item.toLowerCase() !== term.toLowerCase())]);
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('[data-cw-recent-clear]')) return;
  writeRecent([]);
  renderRecent();
});

renderRecent();

/* ---------- Matching collections on the search page ---------- */
const collectionsBlock = document.querySelector('[data-cw-search-collections]');
if (collectionsBlock && collectionsBlock.dataset.terms && routes.search) {
  const params = new URLSearchParams({ q: collectionsBlock.dataset.terms, 'resources[type]': 'collection', 'resources[limit]': '8' });
  fetch(`${routes.search}.json?${params}`)
    .then((response) => (response.ok ? response.json() : null))
    .then((data) => {
      const found = data?.resources?.results?.collections || [];
      if (!found.length) return;
      const list = collectionsBlock.querySelector('[data-cw-search-collections-list]');
      list.replaceChildren(...found.map((collection) => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.className = 'cw-pill';
        link.href = collection.url;
        link.textContent = collection.title;
        item.append(link);
        return item;
      }));
      collectionsBlock.hidden = false;
    })
    .catch(() => {});
}
