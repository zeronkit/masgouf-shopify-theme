/* Masgouf theme by ZeronKit (https://zeronkit.com). Free theme - not for resale or redistribution. © 2026 ZeronKit. */
/*
  Colour swatches on product cards: a tap shows that colour's first image (and its second image on hover)
  and points the card link at that colour. Loaded only when such swatches are on the page.
*/

document.addEventListener('click', (event) => {
  const swatch = event.target.closest('[data-cw-card-swatch]');
  if (!swatch) return;
  const card = swatch.closest('[data-cw-card]');
  if (!card) return;
  const media = card.querySelector('.cw-card__media');
  const main = card.querySelector('.cw-card__img:not(.cw-card__img--alt)');
  const second = card.querySelector('.cw-card__img--alt');
  if (main && swatch.dataset.srcset) {
    main.srcset = swatch.dataset.srcset;
    main.src = swatch.dataset.srcset.split(' ')[0];
  }
  if (second) {
    if (swatch.dataset.altSrcset) {
      second.sizes = main ? main.sizes : '50vw';
      second.srcset = swatch.dataset.altSrcset;
      second.src = swatch.dataset.altSrcset.split(' ')[0];
      second.hidden = false;
      media?.classList.add('cw-card__media--swap');
    } else {
      second.hidden = true;
      media?.classList.remove('cw-card__media--swap');
    }
  }
  const link = card.querySelector('.cw-card__link');
  if (link && swatch.dataset.url) link.href = swatch.dataset.url;
  card.querySelectorAll('[data-cw-card-swatch]').forEach((button) => button.setAttribute('aria-pressed', String(button === swatch)));
});
