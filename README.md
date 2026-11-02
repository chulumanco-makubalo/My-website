# My-website
# Sibahle Naturals - WEDE5020 POE Part 2

## Student Information
**Name**: Chulumanco Makubalo
**Student Number**: ST10535196ss
**Course**: WEDE5020
# Sibahle Naturals - Chulumanco Makubalo
# README additions for Part 3

Paste these sections into your existing `README.md`. Check each statement against
your own repository before you submit, because the changelog must be accurate.

---

## Responsive design screenshots

> Feedback: "Missing screenshots for the demonstration of responsiveness."

Take these in Chrome: press F12, click the device toolbar icon (or Ctrl+Shift+M),
choose "Responsive", set the width, and use the three-dot menu > "Capture screenshot".
Save the images in a `screenshots/` folder in the repository.

| Page | Mobile (390px) | Tablet (768px) | Desktop (1280px) |
| --- | --- | --- | --- |
| Home | ![Home mobile](Screenshots/home-mobile.png) | ![Home tablet](screenshots/home-tablet.png) | ![Home desktop](screenshots/home-desktop.png) |
| About Us | ![About mobile](screenshots/about-mobile.png) | ![About tablet](screenshots/about-tablet.png) | ![About desktop](screenshots/about-desktop.png) |
| Our Range | ![Range mobile](screenshots/services-mobile.png) | ![Range tablet](screenshots/services-tablet.png) | ![Range desktop](screenshots/services-desktop.png) |
| Contact Us | ![Contact mobile](screenshots/contact-mobile.png) | ![Contact tablet](screenshots/contact-tablet.png) | ![Contact desktop](screenshots/contact-desktop.png) |
| Enquiry | ![Enquiry mobile](screenshots/enquiry-mobile.png) | ![Enquiry tablet](screenshots/enquiry-tablet.png) | ![Enquiry desktop](screenshots/enquiry-desktop.png) |

Also add one screenshot of the mobile menu open (`screenshots/menu-open-mobile.png`).

Breakpoints used in `css/style.css`: mobile (below 600px), tablet (600px and up),
desktop (900px and up).

---

## Changelog

### Part 3 (30 October 2026): changes made from Part 2 feedback

| Date | File | Change | Reason (feedback) |
|---|---|---|---|
| 30 Oct 2026 | `css/style.css` | Removed the duplicated copy of the entire stylesheet so every rule appears once. | "CSS code is repeated" (Typography, Layout, Decoration and Colour, Pseudo Classes, Media Queries) |
| 30 Oct 2026 | `css/style.css` | Replaced the repeated per-section selectors (`#oils ul, #creams ul, #wash ul, #styling ul` and matching `li` rules, repeated three times) with one reusable `.product` component and one `.grid-list` component. | "CSS code is repeated" |
| 30 Oct 2026 | `css/style.css` | Removed the repeated `max-width: none !important; margin-left: 0 !important;` overrides. Classed lists now opt out of the generic list rule through `:not([class])`, so no overrides are needed. | "CSS code is repeated" |
| 30 Oct 2026 | `css/style.css` | Combined identical rules: photo and caption styles (`.range-photo` and `.photo-grid`), the map and video embed, label and legend styles, and the focus outline (one `:focus-visible` rule instead of several). Repeated shadow values moved to `--shadow-card` and `--shadow-hover`, and the divider colour on dark surfaces to `--line-light`. | "CSS code is repeated" |
| 30 Oct 2026 | `css/style.css` | Removed unused rules left over from earlier markup (`#mission-vision`, `#target-audience`, `dl`/`dt`/`dd`, `footer .footer-inner`). | "CSS code is repeated" |
| 30 Oct 2026 | `css/style.css` | Hover, focus and active states for the navigation grouped into shared selectors, and the current page now highlighted with `[aria-current="page"]`. | "CSS code is repeated" (Pseudo Classes) |
| 30 Oct 2026 | `css/style.css` | Media queries reduced to two breakpoints (600px, 900px) that share selectors instead of repeating them. | "CSS code is repeated" (Media Queries) |
| 30 Oct 2026 | `css/style.css`, all `.html` pages | Rebuilt the footer. The old `max-width: 72rem` on `footer` stopped the dark bar short of the right edge on wide screens. The footer is now full width, its content lines up with the page content through a shared `--gutter` value, and it has a top row (navigation, address, social icons) and a bottom row (date and clock, copyright). Layout changes at the tablet and desktop breakpoints. | "Footer section layout needs attention" |
| 30 Oct 2026 | `README.md` | Added screenshots of every page at mobile, tablet and desktop widths. | "Missing screenshots for the demonstration of responsiveness" |
| 30 Oct 2026 | Git history | Changes are committed in small steps with descriptive messages (see the commit history). | "Add Multiple Descriptive Commits" |

### Part 3: new features

| Date | File(s) | Change |
|---|---|---|
| 30 Oct 2026 | `js/main.js`, `css/style.css`, all pages | Hamburger navigation for small screens (opens and closes, closes on Esc and when a link is chosen). |
| 30 Oct 2026 | `js/main.js`, `about.html`, `enquiry.html` | Accordions for the About sections and the FAQ, using buttons with `aria-expanded`. Content stays visible if JavaScript is off. |
| 30 Oct 2026 | `js/main.js`, `index.html`, `services.html` | Image gallery with a lightbox (native `<dialog>`, closes with Esc, the close button or a click outside). |
| 30 Oct 2026 | `js/main.js`, `css/style.css` | Scroll animation: sections fade in as they enter the screen (IntersectionObserver). Turned off for visitors who prefer reduced motion. |
| 30 Oct 2026 | `js/main.js`, all pages | Date stamp and live clock in the footer. |
| 30 Oct 2026 | `js/products.js`, `js/range.js`, `services.html` | Dynamic content: the product cards are built by JavaScript from one product list (names, categories, sizes, prices, stock). |
| 30 Oct 2026 | `js/range.js`, `services.html` | Search box, category filter and sort menu (name, price low to high, price high to low) with a live results count and a "no results" message. |
| 30 Oct 2026 | `js/quiz.js`, `index.html` | One-question hair quiz that recommends a product and links to the enquiry form with the product pre-filled. |
| 30 Oct 2026 | `js/forms.js`, `contact.html`, `enquiry.html` | JavaScript form validation with inline error messages: required fields, email format, South African phone number format, whole-number quantity (1 to 50), collection date (not in the past, within 90 days, not a Sunday) and minimum lengths. |
| 30 Oct 2026 | `js/forms.js`, `enquiry.html` | Enquiry form processing: once validated, the form shows a reply with the chosen product, size, price, total for the quantity, stock availability and collection details. The product's size list changes with the product. |
| 30 Oct 2026 | `js/forms.js`, `enquiry.html` | AJAX submission: the enquiry is sent with `fetch()` without reloading the page, with "sending", success and failure messages. The address to post to is set in the form's `data-endpoint` attribute. |
| 30 Oct 2026 | `js/forms.js`, `contact.html` | Contact form: once validated, the details are compiled into an email addressed to hello@sibahlenaturals.co.za and the visitor's email app opens to send it. The form's `action` attribute is the same `mailto:` address for visitors without JavaScript. |
| 30 Oct 2026 | `js/map.js`, `contact.html` | Interactive map using Leaflet and OpenStreetMap, with a marker and popup. The marker is placed by looking up the shop address, with a fallback position. |
| 30 Oct 2026 | all pages | SEO: unique title and meta description per page, one `h1` per page with a logical heading order, descriptive alt text, clean page URLs, internal links, `aria-current`, skip link, and font preconnect for faster loading. |
| 30 Oct 2026 | `index.html`, `contact.html` | Local SEO: LocalBusiness structured data (JSON-LD) with the address, phone, email and opening hours. |
| 30 Oct 2026 | `robots.txt`, `sitemap.xml` | Added a robots.txt for search engine crawlers and a sitemap listing all five pages. |
| 30 Oct 2026 | `_headers` | Security headers (no content sniffing, no framing, strict referrer policy, camera, microphone and location blocked). All external links use `rel="noopener"`, and page text is written with `textContent` rather than `innerHTML`. |

---

## Deployment checklist

1. Replace `YOUR-SITE-ADDRESS` in `robots.txt` and `sitemap.xml` with the real address once the site is deployed.
2. Replace the YouTube placeholder in `index.html` with a real video ID.
3. Replace the Facebook and Instagram links in every footer with the real profile links, then add them to the `sameAs` list in the JSON-LD.
4. Check the products, sizes, prices and stock in `js/products.js` against the shop. The sizes beyond your first four prices are sample data.
5. Compress the images (for example with squoosh.app or tinypng.com) and consider WebP for page speed.
6. To send enquiries for real, put a form-service address (Formspree, or Netlify Forms on Netlify) into the enquiry form's `data-endpoint` attribute. While it is empty, the form runs in demo mode.
7. Deploy: on Netlify drag the project folder onto app.netlify.com/drop (or connect the GitHub repository); on GitHub Pages use Settings > Pages > Deploy from branch `main`.

---

## References

Use the IIE Harvard style. Fill in the access date with the day you actually
used each source, and add every image source you used.

- Font Awesome (n.d.) *Font Awesome icons*. Available at: https://fontawesome.com (Accessed: 30 October 2026).
- Google (n.d.) *Google Fonts: Fraunces and Karla*. Available at: https://fonts.google.com (Accessed: 30 October 2026).
- Mozilla Developer Network (n.d.) *The dialog element*. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog (Accessed: 30 October 2026).
- Mozilla Developer Network (n.d.) *ARIA: aria-expanded attribute*. Available at: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded (Accessed: 30 October 2026).
- Mozilla Developer Network (n.d.) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 30 October 2026).
- Agafonkin, V. (n.d.) *Leaflet: an open-source JavaScript library for interactive maps*. Available at: https://leafletjs.com (Accessed: 30 October 2026).
- OpenStreetMap contributors (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org (Accessed: 30 October 2026).
- Mozilla Developer Network (n.d.) *Using the Fetch API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch (Accessed: 30 October 2026).
- Mozilla Developer Network (n.d.) *Intersection Observer API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API (Accessed: 30 October 2026).
- Schema.org (n.d.) *LocalBusiness*. Available at: https://schema.org/LocalBusiness (Accessed: 30 October 2026).
- Sitemaps.org (n.d.) *Sitemaps XML format*. Available at: https://www.sitemaps.org/protocol.html (Accessed: 30 October 2026).
- Add: the source and licence for each photo (`sibahle-naturals-afro.jpg`, `bantu-knots.jpg`, `sibahle-naturals-products.png`) and the logo.

---

## Suggested commit sequence

Run these from the project folder, one commit per change (the messages are the
descriptive part the lecturer asked for):


