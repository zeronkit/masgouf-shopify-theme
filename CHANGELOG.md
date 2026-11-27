# Masgouf changelog

## 1.0.2 (2026-11-26)

A small fix after the owner's second review of 26 November 2026. Masgouf 1.0.1 is public, so this comes as 1.0.2.

### Fixed

- **Product page, round photo while scrolling**: on computers and tablets the main photo (the round plate) stays in view while you scroll, and it used to slide over the size lines, the Add to cart button and the delivery days. The order ticket now keeps a free lane on its end side all the way down (it is a little wider on large screens to make room), so the plate never covers anything. Why: the review found the plate over the size lines at 1280 px.
- **Crossed out sale price**: with a reduced size chosen, its crossed out price in the size line (for example $25.00) was hidden under the round plate. It now always shows in full. The price tag at the top of the page was already fine. Why: the review saw the old price cut off at 1280 px.

### How to update a store

1. In Online Store, Themes, open the menu of your current Masgouf theme and choose Duplicate, so you keep a copy.
2. Upload the new zip (Add theme, Upload zip file). It arrives as an unpublished theme.
3. Copy your settings: open the new theme in the editor and set it up as your current theme, or copy `config/settings_data.json` and the `templates/*.json` files from the old theme (Edit code) into the new one. There are no new settings in 1.0.2.
4. Check a product with sizes on a computer in English and Arabic, then publish.

## 1.0.1 (2026-11-26)

A small update after the owner's review of 26 November 2026. Masgouf 1.0.0 is public, so these fixes come as 1.0.1.

### Added

- **Favicon and home screen icon**: Theme settings, Brand assets, Favicon now also gives the apple touch icon (180 x 180) next to the 32 x 32 browser tab icon. Why: the review found no icon in the page head. Use a square image of at least 180 x 180 px.
- **Default share image** setting (Theme settings, Brand assets). Every page now has a share picture (og:image and twitter:image): the page's own picture first (product, collection, post), then this setting, then the brand logo. Why: the home, about, contact, FAQ, policy, journal and search pages had no picture when shared. Use 1200 x 630 px.
- **Structured data**: collection pages describe themselves as a CollectionPage with a list of the products shown, the journal as a Blog with its posts, and each post as a BlogPosting with author, dates, picture and publisher. The Product, BreadcrumbList, Organization and WebSite data stay as before. Why: search engines could not read the collection and journal pages as lists.

### Changed

- **Product price**: the price box shows only the price of the chosen size, with its own Sale badge and crossed out price, and it changes with the size. The extra line "Sale, Mixed nut now $22.00" about another size is gone; each reduced size already shows its old and new price in the size lines. Why: shoppers saw two prices from two sizes at once.
- **Tap targets**: the shop name link in the footer band is 44px tall.
- **Arabic price tag**: the small dot on the product price tag no longer touches the price in right to left languages.

### How to update a store

1. In Online Store, Themes, open the menu of your current Masgouf theme and choose Duplicate, so you keep a copy.
2. Upload the new zip (Add theme, Upload zip file). It arrives as an unpublished theme.
3. Copy your settings: open the new theme in the editor and set it up as your current theme, or copy `config/settings_data.json` and the `templates/*.json` files from the old theme (Edit code) into the new one.
4. New settings: Theme settings, Brand assets, choose a Favicon (square, at least 180 x 180 px) and a Default share image (1200 x 630 px).
5. Check the home page, a product with sizes, a collection and the journal in English and Arabic, then publish.

## 1.0.0 (2026-11-25)

Masgouf 1.0.0 is not public yet, so the second round of review fixes goes into 1.0.0 itself instead of a new version. The reasons come from four store reviews that found the same problems in several ZeronKit themes.

### Page layouts (third round, also in 1.0.0)

Why: a comparison of the six ZeronKit stores found that Masgouf shared most of its page skeletons with the others (one bar header, list and tiles menu, title band with a product grid, gallery beside a panel, side summary cart, centred text pages). The owner's rule is that every store looks different on every page, so each page now follows the stall's own idea: text first lists with prices, like a chalk menu board and an order ticket, with photos as small round plates.

- **Header**: two rows. The sign, a large "What would you like today?" field in the centre and the Basket with its count and total; under it an awning of category chips (a bake time can be shown on a chip) and plain words for the pages. Phones show the name, search and Basket, then the chip strip starting with "Everything". New setting: Header, Hints on the category chips.
- **Menu**: "the whole board", a full width chalk board dropping from under the awning, one column per top menu item with text lines, item counts or prices, the pages as the last column, language and currency at the foot.
- **Search panel**: a paper order ticket hanging from the header field with a torn foot. Popular searches and "Popular today" lines before typing, then suggestions, products as menu lines, collections, pages and "See all results". Languages without Shopify predictive search get a "See all results" line. New setting: Search, Popular today collection.
- **Search results**: the board with "You asked for", type tabs as chalk words and results as menu lines; an empty search says "Not on the board today".
- **Collection**: the products are menu lines in two columns on one board (round plate, name, dotted leader, price, a "+" to add or "Choose" for sizes), with category or filter tabs and a chalk sort. Filters stay in the drawer. New settings: round photos, short description, tabs menu.
- **Collections list**: a stall picture with numbered pins and a key in two columns.
- **Product**: the name and price as one menu line, a centred order ticket with the photo as a round plate on its corner, sizes as menu lines with prices (new picker style "Menu lines"), facts as a small table, the larder cards in a row.
- **Cart drawer**: a narrow paper ticket hanging from the Basket button, with text lines, a small stepper and small round plates (setting). The gift note sits in a fold that starts open.
- **Cart page**: a dark board on top with the total, delivery meter, gift note and Checkout, then the lines as round plates in two columns.
- **Home**: a board first hero with the shop photo as a round plate, "Fresh this week" as a tray of plates with price tags (new layout "Tray"), the featured product as a "today's special" chalk card, the newsletter as a tear-off stub in the visit card (the separate newsletter band is gone), and the category list as tabs hanging from an awning over a stall photo (new shape "Awning").
- **Contact**: a stall photo with an hours board and the form on a ticket (new layout "Stall front", hours lines as blocks, phone setting).
- **About and FAQ**: new templates `page.about` (zig-zag plate rows and a facts list) and `page.faq` (questions in two columns on a board, topic words).
- **Blog and article**: the newest post on a round plate and every post as a text line on a board; articles as a recipe card with a sticky "At a glance" card (ingredients and Shop the ingredients) beside the numbered method.
- **404 and password**: the 404 is one board with the missing address struck through; the password page is a "shutter down" board with the password as one chalk line.
- **Footer**: the baking week stays; the links are one chalk board in three columns with short hints, and a slim band below. The footer newsletter block is gone (sign up is in the visit card).

### Added

- **Basket meter** in the cart drawer and on the cart page. It shows "Add $X more for free delivery", then a done message, in English and Arabic. Set the amount and the countries in Theme settings, Cart, Free delivery bar, using the same numbers as Settings, Shipping and delivery. Why: shoppers could not see how close they were to free delivery.
- **Store contact email** setting (Theme settings, Brand assets), empty by default. When it is empty, the contact page shows the form and no email line. Why: the theme vendor's address appeared as the store's address.
- **Home page description for search engines** setting, plus a description on every template (collections list, collection, product, blog, article, page, search, cart and policies) built from the page's own text, with a short fallback line in each language. Why: nine pages had no meta description.
- **Breadcrumb data** for search engines on product pages, next to the product data.
- **Sale line on the product page** when the chosen size is full price but another size is reduced, with the same Sale badge as the cards (removed again in 1.0.1).

### Changed

- **Product page**: the round plate photo stays beside the order ticket while it scrolls (no empty column), on desktop and tablet.
- **Buy it now** is an ink outline button. Add to cart is the only filled button on the ticket. Button text stays on one line on phones.
- **Delivery text**: one line in the stock box, built from the free delivery settings and the shopper's country. The full delivery and returns text lives only in the "Delivery and returns" fold. The "Shipping calculated at checkout" line under the price is gone.
- **Cart**: the line price is shown once (the price of one item only appears when the quantity is more than one), product photos on the cart page are 112 to 120px round plates (the drawer is a text ticket with small plates), and the checkout button is turmeric with ink in both the drawer and the cart page.
- **Gift note**: the order note is open by default and labelled "Gift note or order note", in the drawer and on the cart page. Why: the announcement promises a handwritten gift note.
- **Badges**: one badge per card (Sold out, then Sale, then New). New shows for products tagged "new" or published within the days set in Theme settings, Product cards (30 by default, 0 uses the tag only).
- **Collection toolbar**: the Filter button and the per page choice are hidden on lists with fewer than 12 products. Filter groups with fewer than two choices are hidden.
- **Menu**: a clear title ("Browse the stall") and links on one line.
- **Tap targets** of at least 44px on phones and tablets for footer links, legal links, the announcement buttons, slider buttons, breadcrumbs and home page links.
- **Announcement bar** on one line at 390px in English and Arabic, with shorter texts and the currency sign.
- **Search fields** have a shorter placeholder that fits the field on phones in both languages.
- **Gift cards** show no Buy it now, no delivery lines and no baking, storage or food panels.
- **Arabic**: the home page, footer, cart and product panel texts were rewritten in natural Modern Standard Arabic.
- Decorative copies of photos (hover photos, small thumbnails beside a title) have empty alt text. Real photos keep the alt text from the store.

### Fixed

- The reduced price and Sale badge were missing on the product page while the cards showed them.
- Phone menu items wrapped onto three lines because a hidden number column still took space.
- The New badge showed on every product next to the Sale badge.

### How to update a store

1. In Online Store, Themes, open the menu of your current Masgouf theme and choose Duplicate, so you keep a copy.
2. Upload the new zip (Add theme, Upload zip file). It arrives as an unpublished theme.
3. Copy your settings: open the new theme in the editor, set the colours, fonts, logo and sections as in your current theme, or copy `config/settings_data.json` and the `templates/*.json` files from the old theme (Edit code) into the new one.
4. New settings to fill in: Theme settings, Cart, Free delivery bar (amount and countries), and Theme settings, Brand assets, Store contact email and Home page description. For the new page layouts: assign the About page to the `about` template and the FAQ page to the `faq` template (Pages, the page, Theme template), choose the stall and contact photos in the editor, and check the header chip hints and the Search, Popular today collection.
5. Check the home page, a product, a collection, the cart and the contact page in English and Arabic, then publish.

---

## العربية

### الإصدار 1.0.2 (26 نوفمبر 2026)

إصلاح صغير بعد المراجعة الثانية للمالك في 26 نوفمبر 2026. الإصدار 1.0.1 منشور، لذلك يأتي هذا الإصلاح في الإصدار 1.0.2.

#### أُصلح

- **صفحة المنتج، الصورة الدائرية أثناء التمرير**: على الحاسوب والجهاز اللوحي تبقى الصورة الرئيسية (الطبق الدائري) ظاهرة أثناء التمرير، وكانت تنزلق فوق أسطر الأحجام وزر الإضافة إلى السلة وأيام التوصيل. صارت بطاقة الطلب تترك مساحة فارغة على جانبها حتى آخرها (وهي أعرض قليلًا على الشاشات الكبيرة لتتسع لذلك)، فلا تغطي الصورة أي شيء. السبب: وجدت المراجعة الصورة فوق أسطر الأحجام بعرض 1280 بكسل.
- **السعر القديم المشطوب**: عند اختيار حجم مخفّض كان سعره القديم المشطوب في سطر الحجم (مثل $25.00) يختفي تحت الصورة الدائرية. صار يظهر كاملًا دائمًا. بطاقة السعر أعلى الصفحة كانت سليمة. السبب: رأت المراجعة السعر القديم مقطوعًا بعرض 1280 بكسل.

#### طريقة التحديث

1. من المتجر الإلكتروني، القوالب، اختر "إنشاء نسخة" من قالب مسكوف الحالي.
2. ارفع الملف المضغوط الجديد، فيصل قالبًا غير منشور.
3. انقل إعداداتك إلى القالب الجديد من المحرر، أو انسخ ملف `config/settings_data.json` وملفات `templates/*.json` من القالب القديم. لا إعدادات جديدة في 1.0.2.
4. راجع منتجًا له أحجام على الحاسوب بالعربية والإنجليزية، ثم انشر القالب.

### الإصدار 1.0.1 (26 نوفمبر 2026)

تحديث صغير بعد مراجعة المالك في 26 نوفمبر 2026. الإصدار 1.0.0 منشور، لذلك تأتي هذه الإصلاحات في الإصدار 1.0.1.

#### أُضيف

- **أيقونة الموقع وأيقونة الشاشة الرئيسية**: إعداد "أيقونة الموقع" في عناصر العلامة يعطي الآن أيقونة الهاتف (180 × 180) إلى جانب أيقونة تبويب المتصفح (32 × 32). السبب: لم تكن في رأس الصفحة أي أيقونة. استخدم صورة مربعة لا تقل عن 180 × 180 بكسل.
- **صورة المشاركة الافتراضية** في عناصر العلامة. لكل صفحة الآن صورة مشاركة: صورة الصفحة نفسها أولًا (المنتج أو المجموعة أو المقالة)، ثم هذا الإعداد، ثم شعار العلامة. السبب: صفحات الرئيسية ومن نحن والتواصل والأسئلة والسياسات والمدونة والبحث كانت بلا صورة عند مشاركتها. المقاس المناسب 1200 × 630 بكسل.
- **بيانات منظمة لمحركات البحث**: صفحة المجموعة تُوصف بأنها CollectionPage مع قائمة بالمنتجات المعروضة، والمدونة بأنها Blog مع مقالاتها، وكل مقالة بأنها BlogPosting مع الكاتب والتواريخ والصورة والناشر. بيانات المنتج ومسار التنقل والمتجر والموقع باقية كما هي.

#### تغيّر

- **سعر المنتج**: يعرض مربع السعر سعر الحجم المختار فقط، مع شارة التخفيض والسعر القديم المشطوب الخاصين به، ويتغير مع تغيير الحجم. حُذف السطر الإضافي عن حجم آخر مخفّض، لأن أسطر الأحجام تعرض السعر القديم والجديد لكل حجم. السبب: كان المتسوق يرى سعرين لحجمين في وقت واحد.
- **أهداف اللمس**: رابط اسم المتجر في شريط التذييل بارتفاع 44 بكسل.
- **بطاقة السعر بالعربية**: النقطة الصغيرة على بطاقة سعر المنتج لم تعد تلامس السعر في اللغات التي تُكتب من اليمين إلى اليسار.

#### طريقة التحديث

1. من المتجر الإلكتروني، القوالب، اختر "إنشاء نسخة" من قالب مسكوف الحالي.
2. ارفع الملف المضغوط الجديد، فيصل قالبًا غير منشور.
3. انقل إعداداتك إلى القالب الجديد من المحرر، أو انسخ ملف `config/settings_data.json` وملفات `templates/*.json` من القالب القديم.
4. الإعدادات الجديدة: من إعدادات القالب، عناصر العلامة، اختر أيقونة الموقع (مربعة، 180 × 180 بكسل على الأقل) وصورة المشاركة الافتراضية (1200 × 630 بكسل).
5. راجع الصفحة الرئيسية ومنتجًا له أحجام ومجموعة والمدونة بالعربية والإنجليزية، ثم انشر القالب.

### الإصدار 1.0.0 (25 نوفمبر 2026)

لم يُنشر الإصدار 1.0.0 من مسكوف بعد، لذلك أُدرجت الجولة الثانية من الإصلاحات فيه مباشرة بدل إصدار جديد. جاءت هذه الإصلاحات من أربع مراجعات لمتاجر وجدت المشكلات نفسها في عدة قوالب من ZeronKit.

### تخطيطات الصفحات (الجولة الثالثة، ضمن 1.0.0 أيضًا)

السبب: وجدت مقارنة متاجر ZeronKit الستة أن مسكوف يشارك معظم هياكل صفحاته مع غيره، وقاعدة المالك أن يختلف كل متجر في كل صفحة. لذلك صارت كل صفحة تتبع فكرة البسطة: قوائم نصية بالأسعار مثل لوح الطباشير وتذكرة الطلب، والصور أطباق دائرية صغيرة.

- **الترويسة**: صفّان؛ اللافتة وحقل كبير "ماذا تشتهي اليوم؟" والسلة مع العدد والمجموع، وتحتها مظلة بشرائح الأصناف وكلمات الصفحات. وعلى الهاتف الاسم والبحث والسلة ثم شريط الشرائح.
- **القائمة**: لوح طباشير كامل العرض ينزل من تحت المظلة، بأعمدة وأسطر نصية وعدد الأصناف أو الأسعار.
- **لوحة البحث**: تذكرة ورقية معلّقة من حقل البحث، والمنتجات أسطر قائمة. وللغات التي لا يدعمها البحث الفوري في Shopify سطر "عرض كل النتائج".
- **نتائج البحث والمجموعة**: لوح واحد بأسطر قائمة في عمودين، طبق دائري واسم وخط منقّط وسعر وزر "+" أو "اختر" للأحجام، مع تبويبات وفرز بالطباشير. التصفية باقية في الدرج.
- **قائمة المجموعات**: صورة للبسطة بدبابيس مرقّمة ودليل في عمودين.
- **المنتج**: الاسم والسعر سطر قائمة واحد، وتذكرة طلب في الوسط والصورة طبق دائري على زاويتها، والأحجام أسطر بأسعارها.
- **درج السلة**: تذكرة ورقية ضيقة من زر السلة. **صفحة السلة**: لوح في الأعلى بالمجموع والملاحظة وزر الدفع، ثم الأسطر أطباقًا دائرية.
- **الرئيسية**: لوح أولًا مع صورة المتجر طبقًا دائريًا، وصينية "طازج هذا الأسبوع"، وبطاقة "طبق اليوم"، وقسيمة النشرة داخل بطاقة الزيارة، وتبويبات الأصناف معلّقة من مظلة فوق صورة البسطة.
- **التواصل ومن نحن والأسئلة**: واجهة البسطة مع لوح المواعيد واستمارة على تذكرة، وقالبان جديدان `page.about` و`page.faq`.
- **المدونة والمقال**: الأحدث على طبق دائري وكل المقالات أسطر على لوح، والمقال بطاقة وصفة مع "نظرة سريعة".
- **404 وصفحة كلمة المرور والتذييل**: لوح واحد بالعنوان المشطوب، و"الستارة مغلقة"، وتذييل بلوح روابط من ثلاثة أعمدة مع تلميحات قصيرة.

### أُضيف

- **مؤشر السلة** في درج السلة وصفحة السلة: "أضف X$ إلى سلتك لتحصل على توصيل مجاني"، ثم رسالة عند بلوغ الحد، بالعربية والإنجليزية. حدّد المبلغ والدول من إعدادات القالب، السلة، بالأرقام نفسها الموجودة في إعدادات الشحن والتوصيل.
- **البريد الإلكتروني للتواصل مع المتجر** في إعدادات القالب، فارغ افتراضيًا. إذا بقي فارغًا تعرض صفحة التواصل النموذج وحده.
- **وصف الصفحة الرئيسية لمحركات البحث**، ووصف لكل قالب صفحة مأخوذ من نصها، مع سطر احتياطي قصير بكل لغة.
- **بيانات مسار التنقل** لمحركات البحث في صفحات المنتجات.
- **سطر التخفيض في صفحة المنتج** عندما يكون حجم آخر مخفّض السعر، مع شارة التخفيض نفسها الموجودة في البطاقات (حُذف في الإصدار 1.0.1).

### تغيّر

- **صفحة المنتج**: تبقى الصور بجانب بطاقة الطلب أثناء التمرير، وتظهر الصور والبطاقة جنبًا إلى جنب على الأجهزة اللوحية.
- **اشترِ الآن** زر بإطار فقط، و"أضف إلى السلة" هو الزر الممتلئ الوحيد.
- **نص التوصيل**: سطر واحد في مربع التوفر مبني على إعدادات التوصيل المجاني، والتفاصيل الكاملة في قسم "التوصيل والإرجاع" وحده.
- **السلة**: سعر السطر مرة واحدة، وصور بحجم 112 إلى 120 بكسل تقريبًا، وزر إتمام الطلب بلون الكركم نفسه في الدرج وفي الصفحة.
- **بطاقة الإهداء**: حقل الملاحظة مفتوح دائمًا وعنوانه واضح.
- **الشارات**: شارة واحدة لكل بطاقة، و"جديد" للمنتجات الموسومة new أو المنشورة خلال عدد الأيام المحدد.
- **شريط الأدوات**: يختفي زر التصفية وخيار العدد في القوائم التي فيها أقل من 12 منتجًا، وتختفي مجموعات التصفية ذات الخيار الواحد.
- **قائمة الهاتف**: كل رابط في سطر واحد، وعنوان واضح، وشريط الدولة واللغة لا يغطي نهاية القائمة الفرعية.
- **أهداف اللمس** بحجم 44 بكسل على الأقل في الهاتف.
- **شريط الإعلانات** في سطر واحد بعرض 390 بكسل.
- **حقول البحث** بنص إرشادي أقصر يتسع في الحقل.
- **بطاقات الهدايا** بلا زر "اشترِ الآن" وبلا أسطر التوصيل أو أقسام الطعام.
- **العربية**: أُعيدت كتابة نصوص الصفحة الرئيسية والتذييل والسلة ولوحات المنتج بعربية فصحى طبيعية.

### أُصلح

- سعر المقارنة وشارة التخفيض لم يظهرا في صفحة المنتج.
- روابط قائمة الهاتف كانت تنكسر على ثلاثة أسطر.
- شارة "جديد" كانت تظهر على كل المنتجات إلى جانب شارة التخفيض.

### طريقة التحديث

1. من المتجر الإلكتروني، القوالب، اختر "إنشاء نسخة" من قالب مسكوف الحالي.
2. ارفع الملف المضغوط الجديد، فيصل قالبًا غير منشور.
3. انقل إعداداتك إلى القالب الجديد من المحرر، أو انسخ ملف `config/settings_data.json` وملفات `templates/*.json` من القالب القديم.
4. اربط صفحة "من نحن" بالقالب about وصفحة الأسئلة بالقالب faq، واختر صور البسطة والتواصل من المحرر. ثم املأ الإعدادات الجديدة: التوصيل المجاني في إعدادات السلة، والبريد الإلكتروني ووصف الصفحة الرئيسية في عناصر العلامة.
5. راجع الصفحة الرئيسية ومنتجًا ومجموعة والسلة وصفحة التواصل بالعربية والإنجليزية، ثم انشر القالب.
