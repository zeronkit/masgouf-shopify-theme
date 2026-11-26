# Masgouf

A free Shopify theme for food and drink stores: bakeries, coffee roasters, cafes and specialty grocers. Made by [ZeronKit](https://zeronkit.com).

Masgouf is built on Online Store 2.0: JSON templates, sections everywhere, header and footer section groups, theme blocks (nested), app blocks and Custom Liquid. It ships with English and Arabic (full right-to-left support) and has no app dependencies, no build step and no frameworks.

## Free, as is, no warranty

- Masgouf is free to use and change on your own store or stores. It is distributed only by ZeronKit, not from the Shopify Theme Store.
- It is **not for resale or redistribution**: do not sell it, share it, upload it to theme marketplaces or present it as your own work.
- It is provided **as is, without any warranty**, to the extent permitted by law. See `LICENSE`.
- **Support is best-effort, on request only**, through https://zeronkit.com. Support is not guaranteed.
- **Updates are released when needed and when time allows.** There is no schedule and no guarantee of future updates.

## Installing

1. Download the theme zip.
2. In Shopify admin go to **Online Store > Themes > Add theme > Upload zip file**.
3. Customize it, then publish when you are ready.
4. Fill in three store settings: **Theme settings > Cart > Free delivery bar** (the same amount and countries as your free rate in Settings > Shipping and delivery), **Theme settings > Brand assets > Store contact email** (leave empty to show only the contact form) and **Home page description**.
5. Give your About page the `about` template and your FAQ page the `faq` template (**Online Store > Pages >** the page **> Theme template**). The FAQ reads every h2 heading of the page as a question.
6. In the editor, pick the stall photos (Collections list, Contact form and Fill your basket), the **Popular today** collection under **Theme settings > Search**, and any bake times for the header chips (**Header > Hints on the category chips**, one `collection-handle: hint` per line).

See `CHANGELOG.md` for what changed in each version.

## Updating

Themes uploaded as a zip **do not update automatically** in Shopify. To update:

1. **Duplicate your current theme first** (Themes > ... > Duplicate). This keeps a backup of your settings and content.
2. Upload the new zip as a new theme.
3. Copy your settings across, or re-apply your customizations, and check every page before you publish.

## Signature features

Masgouf is designed as a riverside stall on the Tigris at night, the place where masgouf is grilled by the fire: reed straw background, paper cards, Tigris green chalk boards with prices on dotted leaders, turmeric for the fire and sumac for prices. Headings in Bricolage Grotesque, text in Rubik, chalk prices in Caveat, Arabic in Cairo. Plain fills only.

### Header and footer
- **Stall header.** A turmeric painted sign with the shop name and a short note, a Tigris chalk board holding the menu, and on the reed side a white boxed search field, language, account and a Tigris basket with its count. On phones: name, search, basket and menu; the menu opens as a chalk board drawer.
- **Riverside footer.** A baking week board (seven days, the baking days lit in turmeric, set in the footer settings), the shop name, menus as chalk columns, the sign up on a paper slip, then language, currency, payments and policies.

### The idea of every page
Text first lists with prices, like a chalk menu board and an order ticket: names and prices read down a list with dotted leaders, and photos are small round plates beside the words.

### Header, menu and search
- **Stall counter header.** The sign, a big "What would you like today?" field and the Basket with count and total; an awning of category chips with bake times under it. No hamburger on phones: the chip strip starts with "Everything".
- **The whole board.** The menu is a full width chalk board with one column per menu item and text lines with counts or prices.
- **Order ticket search.** A paper ticket hangs from the field with a torn foot: popular words and Popular today, then results as menu lines.

### Home page
- **Board first hero** with the shop photo as a round plate and tonight's products as menu lines with a "+".
- **Fill your basket:** category tabs hanging from an awning over a stall photo.
- **When the tannour is lit**, **Fresh this week** as a tray of round plates with price tags, **the whole board**, **ingredients and allergens**, **today's special** chalk card, and **baking days** with the newsletter as a tear-off stub.

### Product page
- **The menu card.** The name and price as one menu line, a centred order ticket with the photo as a round plate on its corner, sizes as menu lines with prices, Add to cart with Buy it now as an outline, the stock and delivery box and the baking days.
- **From the pantry.** Ingredients and allergens, nutrition and serving ideas in a row.

### Other pages
- **Collection and search:** one chalk board of menu lines in two columns with tabs and a chalk sort; filters in a drawer.
- **Collections list:** a stall picture with numbered pins and a key.
- **Cart:** a narrow ticket from the Basket button; the cart page is a board with the total, gift note and Checkout over round plates.
- **Contact:** the stall front, an hours board on the photo and the form on a ticket.
- **About and FAQ:** `page.about` (zig-zag plate rows and facts) and `page.faq` (questions in two columns on a board).
- **Journal and article:** a recipe board of text lines; articles as a recipe card with At a glance and Shop the ingredients.
- **404:** one board, the missing address struck through as sold out.
- **Password:** shutter down, a full screen board with the password as one chalk line.
- **Footer:** the baking week, then a chalk board of links with short hints.

### Kept from the ZeronKit base
Cart drawer or cart page, predictive search, facet filters, per-page selector, scroll rows with arrows (no scrollbars), seven header layouts including the stall and a side bar, logo position, style presets, full right-to-left support and the theme credit setting.

### Presets
| Preset | Mood |
| --- | --- |
| Riverside (default) | Reed, Tigris green, turmeric and sumac, Bricolage Grotesque and Rubik |
| Bakehouse | Flour and paprika, serif headings, pill buttons |
| Roastery | Dark roast, slab headings |
| Greengrocer | Herb green, airy spacing |
| Patisserie | Elegant serif, outline buttons |

## Theme Store feature checklist

| Feature | Where |
| --- | --- |
| Discounts per item, per order, in cart | `snippets/cart-lines.liquid`, `snippets/cart-summary.liquid` |
| Accelerated checkout on product and cart | `snippets/buy-form.liquid` (`payment_button`), `snippets/cart-summary.liquid` |
| Faceted filtering on collection and search | `snippets/facets.liquid`, `assets/facets.js` |
| Gift card page (Apple Wallet, code, QR 140 px, logo or shop name) | `templates/gift_card.liquid` |
| Image focal points | `snippets/image.liquid` |
| `page_image` for social sharing | `snippets/meta-tags.liquid` |
| Country/currency and language selectors | `snippets/localization.liquid` (header navigator and footer) |
| Nested menus (3 levels) | `sections/header.liquid` |
| Newsletter | stub in the visit card (`sections/home-visit.liquid`), `sections/newsletter.liquid`, password page |
| Pickup availability | `sections/pickup-availability.liquid` |
| Related and complementary products | `sections/product-recommendations.liquid`, complementary block |
| Rich media (video, external video, 3D, AR) incl. featured product | `snippets/media.liquid` |
| Search template and predictive search | `sections/main-search.liquid`, `sections/predictive-search.liquid` |
| Selling plans on product and in cart | `snippets/buy-form.liquid`, `snippets/cart-lines.liquid` |
| Shop Pay Installments banner | `payment_terms` in `snippets/buy-form.liquid` |
| Unit pricing on collection, product and cart | `snippets/price.liquid`, `snippets/cart-lines.liquid` |
| Variant images and swatches | `snippets/variant-picker.liquid`, `snippets/swatch.liquid` |
| Follow on Shop | footer |
| `shopify-account` component | header |
| SEO, canonical, Open Graph, Twitter, structured data | `layout/theme.liquid`, `snippets/meta-tags.liquid` |
| Social icons | `snippets/social-icons.liquid` |
| App blocks and Custom Liquid | product, footer, canvas, hero, apps section, Custom Liquid section and block |

## Metafields used (all optional, namespace `masgouf`)

Every block works without metafields: it falls back to the product description parts, tags (`allergen:nuts`, `diet:vegan`), block settings or store data.

| Key | Type | Purpose |
| --- | --- | --- |
| `ingredients` | Multi-line text | Ingredient list (product page and home) |
| `allergens` | List of single line text | Contains |
| `may_contain` | List of single line text | May contain |
| `dietary` | List of single line text | Free from and diet labels |
| `nutrition` | Multi-line text | One row per line: `Name \| amount \| per serving`; lines starting with `-` are sub-rows |
| `nutrition_basis`, `serving_size` | Single line text | Nutrition column headings |
| `net_weight`, `servings`, `pieces` | Single line text | Weight and servings (variant metafields win) |
| `delivery_days` | List of single line text | Delivery days, for example `tue` or `Tuesday` |
| `fresh_note`, `storage`, `shelf_life` | Text | Freshness block and the storage tab |
| `recipe` | Rich or multi-line text | Recipe text |
| `recipe_article` | Article reference | Recipe card |
| `pairing` | List of products | Pairs well with |

## Accessibility and performance

Keyboard support everywhere, visible focus, labelled controls, 4.5:1 text contrast in the default schemes, 24 px minimum touch targets (most are 44 px), `prefers-reduced-motion` respected, forced colours supported. One CSS file, one small ES module, section scripts loaded only when their section is on the page, responsive images with focal points, video and 3D loaded on request.

## Theme credit

The footer shows a small "Theme by ZeronKit" link. You can switch it off in **Theme settings > Theme credit**.

## Licence

Copyright (c) 2026 ZeronKit. Masgouf is released under the ZeronKit Free Theme Licence (see `LICENSE`). In short:

- You may use and modify it, free of charge, on stores you own or run.
- You may not redistribute, resell, sublicense or upload it to theme marketplaces, or present it as your own work.
- Copyright, author and signature notices must stay in the files.
- It is provided as is, with no warranty.

Fonts are served by Shopify's font library under their own licences. Payment icons, the Apple Wallet badge and the QR code script are provided by Shopify at runtime and are not part of this package.

## Authenticity

Every copy made by ZeronKit carries the signature `ZK-MASGOUF-AA054DDEB651`: in the `--zk-sig` property in `assets/theme.css`, a comment in `assets/theme.js`, and a comment, a generator meta tag and the `data-zk` attribute in `layout/theme.liquid` and `layout/password.liquid`. It is plain static text: it sends nothing, tracks nothing and does not change how the store works.

## Developer notes

- Prefix: every class, custom element, data attribute and CSS variable uses `cw-` (`.cw-section`, `<cw-slider>`, `--cw-accent`). JS classes use `Cw`. The global helper is `window.Masgouf` (announce, parseHTML, strings, routes, afterAdd, readJSON, cartSectionIds, closeDialog).
- CSS files: `theme.css` (base, global), `pages.css` (collection, search, cart, contact, blog, 404; loaded globally), `masgouf.css` (the Riverside Stall layer, loaded last in the head), `home.css` (home sections) and `product.css` (product sections), both loaded by their sections. No build step.
- Colour variables per scheme (`snippets/scheme-vars.liquid`): `--cw-bg`, `--cw-text`, `--cw-accent`, `--cw-accent-soft`, `--cw-button`, `--cw-button-label`, `--cw-line`, `--cw-muted`, `--cw-tint`, `--cw-soft`. Put `color-{{ section.settings.color_scheme }}` on the section root.
- Default schemes (Riverside): scheme-1 reed `#F1E3B8`, scheme-2 Tigris `#10463F`, scheme-3 paper `#FFFBEF`, scheme-4 turmeric `#E9A21B`, scheme-5 charcoal `#2B2421`, scheme-6 plain white. Theme texts live in `locales/*.json` under `mg.*`; merchant text in a setting always wins.
- Global tokens: `--cw-font-heading`, `--cw-font-body`, `--cw-page-width`, `--cw-gutter`, `--cw-space-section`, `--cw-radius`, `--cw-radius-lg`, `--cw-button-radius`, `--cw-shadow`, `--cw-rule`, `--cw-card-ratio`, `--cw-ease`, `--cw-fast`, `--cw-slow`, `--cw-dir` (1 in LTR, -1 in RTL).
- Rules: logical CSS properties only, phone first (750px and 990px breakpoints), motion only inside `prefers-reduced-motion: no-preference` and respecting `html[data-motion="off"]`, plain colour backgrounds, English everywhere except `locales/ar.json`, no em dashes.
