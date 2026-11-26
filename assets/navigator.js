/* Masgouf theme by ZeronKit (https://zeronkit.com). Free theme - not for resale or redistribution. © 2026 ZeronKit. */
/*
  The navigator menu. Imported on first interaction with a menu trigger.
*/

/* ---------- Navigator: columns that open level by level ---------- */
class CwNavigator extends HTMLElement {
  connectedCallback() {
    this.dialog = this.closest('dialog');
    this.addEventListener('click', (event) => {
      const trigger = event.target.closest('.cw-nav__root [aria-controls]');
      if (trigger) this.show(trigger.getAttribute('aria-controls'), true);
      if (event.target.closest('[data-cw-back]')) this.back();
    });
    this.dialog?.addEventListener('cw:open', (event) => {
      const panel = event.detail?.opener?.dataset.cwPanel;
      const wide = window.matchMedia('(min-width: 750px)').matches;
      const first = this.querySelector('.cw-nav__root [aria-controls]');
      if (panel) this.show(panel, true);
      else if (wide && first) this.show(first.getAttribute('aria-controls'), false);
      else this.back(false);
    });
  }

  show(id, moveFocus) {
    this.querySelectorAll('.cw-nav__root [aria-controls]').forEach((button) => {
      const active = button.getAttribute('aria-controls') === id;
      button.setAttribute('aria-expanded', String(active));
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      if (panel) panel.hidden = !active;
    });
    const panel = document.getElementById(id);
    if (moveFocus && panel) {
      const narrow = window.matchMedia('(max-width: 749px)').matches;
      (narrow ? panel.querySelector('[data-cw-back]') : panel.querySelector('a'))?.focus({ preventScroll: true });
    }
  }

  back(moveFocus = true) {
    const open = this.querySelector('.cw-nav__root [aria-expanded="true"]');
    this.querySelectorAll('.cw-nav__panel').forEach((panel) => { panel.hidden = true; });
    this.querySelectorAll('.cw-nav__root [aria-controls]').forEach((button) => button.setAttribute('aria-expanded', 'false'));
    if (moveFocus) open?.focus();
  }
}
if (!customElements.get('cw-navigator')) customElements.define('cw-navigator', CwNavigator);
