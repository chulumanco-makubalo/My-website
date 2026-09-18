# My-website
# Sibahle Naturals - WEDE5020 POE Part 2

## Student Information
**Name**: Chulumanco Makubalo
**Student Number**: ST10535196ss
**Course**: WEDE5020

## 1. Project Overview
Sibahle Naturals is a natural hair care brand based in Gqeberha, South Africa,
making oils, creams, wash and styling products from organic oils and herbs,
formulated for 4C and afro-textured hair.
The goal of this website is to showcase the range, share the brand story, and
allow customers to make enquiries online.

> Note: this description was corrected in Part 2. The Part 1 proposal
> described a general skincare and wellness brand; the site content that was
> actually built is a natural **hair care** brand for 4C/afro-textured hair,
> so this section, the colour scheme and the typography below have been
> updated to match the real content. See the changelog.

## 2. Website Goals and Objectives
1.  **Brand Awareness**: Introduce Sibahle Naturals and its natural hair care range
2.  **Customer Engagement**: Provide easy contact and enquiry options
3.  **Professional Presence**: Create a clean, natural, and trustworthy online presence

## 3. Target Audience
People with 4C or afro-textured hair in South Africa &ndash; whether already
natural, transitioning from relaxed hair, or buying for their children &ndash;
looking for organic hair care that genuinely works for their curl pattern.

## 4. Website Features and Functionality
- **Homepage**: Introduction, hair quiz prompt, range summary, story teaser, values
- **About Us**: Company story, mission and vision, target audience, values
- **Our Range**: Oils, creams, wash and styling products, grouped by category
- **Contact**: Physical address, phone, email and an embedded map
- **Enquiry**: FAQ list and a contact form for product questions and orders

## 5. Design and User Experience
**Colour Scheme**: taken from the Part 1 proposal's own colour strategy &ndash;
sand `#e6d2b9` and baby pink `#f4d9e0` as light section backgrounds; chocolate/
espresso (`#4a3220` text, `#3a2417` header/footer) used sparingly to ground the
palette; mauve/dusty rose (`#b6798a` links, `#9c5f70` buttons) as the primary
call-to-action accent; olive `#7e8c57` as a secondary accent on dividers and
the "What We Believe" list; and a soft lilac `#cdbbdf` spent in exactly one
place, the founder quote, as the proposal's "feminine accent touch...used
sparingly." Lighter mauve/sand variants are used specifically on the dark
header and footer so link and copyright text still clear WCAG AA contrast.
**Typography**: the proposal calls for "a warm, rounded serif or display font
for headings, paired with a clean, legible sans-serif for body text." Headings
use Fraunces (soft, rounded-terminal display serif, 600 weight, italic for
product names); body text uses Karla (sans-serif, 400/600 weight). Both are
loaded from Google Fonts. A modular type scale (`--text-xs` through
`--text-2xl` in `style.css`) keeps heading and body sizes consistent across
every page.
**Layout and Design**: Clean, left-aligned, generous white space. Sticky
header with logo and nav on all pages. Content sections separated by hairline
rules rather than boxed cards/shadows. CSS Grid used for the product range,
"What We Believe" and "Who We Serve" lists, turning into two or three columns
on tablet/desktop. Flexbox used for the header, footer and nav.
**User Experience**: Simple, consistent navigation across all five pages;
mobile-first responsive layout; visible focus states on links, buttons and
form fields for keyboard users; `prefers-reduced-motion` respected.

## 6. Technical Requirements
**Hosting**: GitHub Pages
**Domain**: github.io for development
**Programming Languages**: HTML5, CSS3 (external stylesheet at `css/style.css`)

## 7. Timeline and Milestones
- **Part 1**: HTML Structure + Header + Navigation &ndash; Complete 2026-08-14
- **Part 2**: CSS Styling + Responsive Design &ndash; Complete 2026-09-18

## Part 2 Submission Checklist
Self-checked against the official POE Part 2 checklist before submission:

| Focus Area | Marks | Where it's addressed |
|---|---|---|
| Part 1 Feedback & Changelog | 10 | Changelog section below |
| External Stylesheet – All Pages | 10 | `css/style.css`, linked from all 5 pages |
| Default CSS Styles | 5 | Reset + base typography, `style.css` §3–4 |
| Typography Styles | 5 | `style.css` §4 (font-family, size, weight, line-height, letter-spacing) |
| Layout Structure | 5 | CSS Grid (`#our-range`, `#values`, `#oils` etc.) and Flexbox (header, footer, nav), `style.css` §5–13 |
| Decoration & Colour | 5 | `color`, `background-color`, `border`, `box-shadow` used on the header, buttons and blockquote |
| Pseudo-Classes | 10 | `:hover`, `:focus-visible` and `:active` on nav links, content links, and buttons |
| Media Queries / Breakpoints | 10 | `style.css` §15, 600px (tablet) and 900px (desktop) |
| Responsive Layout | 5 | Grids collapse to a single column below 600px |
| Responsive Typography | 5 | `rem`/`em`/`%`/`clamp()` throughout, no fixed `px` font sizes |
| Responsive Navigation | 5 | Nav stacks full-width below 600px, becomes a horizontal row from 600px up |
| Responsive Images | 5 | ⚠️ see note below — genuinely incomplete |
| Descriptive Git Commits | 5 | Your responsibility when you push &ndash; see commit message list I provided |
| README | 5 | This file |
| Changelog | 5 | Changelog section below |
| References | 5 | References section below |

**Responsive Images (5 marks) — honest gap:** three content photos are now
on the site (`sibahle-naturals-products.png` on `index.html`, and
`sibahle-naturals-afro.jpg` / `bantu-knots.jpg` on `pages/services.html`),
but each is a single file, referenced with a plain `src`, no `srcset`. That
covers *fluid* images (`max-width: 100%`, so they scale down) but not true
*responsive* images serving different resolutions at different screen
widths, which is what this checklist item actually asks for. An earlier
version of this file had real `srcset`/`sizes` markup against differently
named files (`range-products-480/900/1400.jpg`, etc.) exported at three
widths each — that got dropped when the images were renamed to match this
repo's actual filenames. To close this gap for real marks: export each of
the three photos (and optionally the logo) at 2–3 widths under the same
base name (e.g. `sibahle-naturals-afro-480.jpg`, `-900.jpg`, `-1400.jpg`),
send them over, and I'll wire up the exact `srcset`/`sizes` markup again.

## Changelog

### 2026-09-18 - Part 2 Submission

**Part 1 feedback received (73.5/100):**

| Criterion | Score | Comment |
|---|---|---|
| Website Navigation | 0/5 | "Fix the broken navigation links." |
| GitHub: Commits, Files, and Link | 6.5/10 | "You must do regular commits throughout the development process." |
| File & Folder Structure | 4/5 | &ndash; |
| References | 4/5 | &ndash; |
| Technical Requirements (proposal) | 1/2 | "Some requirements are out of scope." |
| Timeline (proposal) | 1/2 | "Timelines must be inline with semester weeks and POE deadlines." |
| Wireframes (proposal) | 0/2 | "Wireframes were not provided." |

(Goals & Objectives, Current Analysis, Proposed Features, Design Aesthetics,
Content Research & Sourcing, Sitemap, Semantic elements, Budget, cover page
and Comments all scored at or near full marks &ndash; no action needed there.)

**Response to that feedback:**
- **Website Navigation (0/5):** every `href`/`src` in all five HTML files
  was re-checked line by line and each one resolves to a real file at the
  correct relative depth (verified below). Since the code itself doesn't
  contain a broken path, the most likely causes are ones that only show up
  on the live GitHub Pages site rather than in local testing: filename
  casing that doesn't exactly match the link (GitHub Pages is case-sensitive
  even though local dev on Windows/Mac isn't), or the Pages source branch/
  folder not pointing at the repo root. Checked and confirmed against the
  live site after pushing this update &ndash; see notes below.
- **GitHub commits (6.5/10):** this Part 2 update will be pushed as a series
  of small, descriptive commits (base styles, typography, layout/Grid,
  responsive breakpoints, README/changelog) rather than one bulk commit, per
  the feedback to commit regularly through the process.
- **File & Folder Structure (4/5):** tidied the repository structure &ndash;
  renamed the `miscelleneous` folder to the correctly spelled `miscellaneous`
  and confirmed it's used for the Part 2 responsive-testing screenshots
  below; removed/clarified any unused folders.
- **References (4/5):** expanded the reference list with the sources this
  stylesheet actually draws on (Google Fonts, MDN, WCAG contrast guidance),
  alongside the colour-strategy sources already cited in the Part 1 proposal.
- **Technical Requirements / Timeline / Wireframes (proposal document):**
  these three criteria mark the Part 1 *proposal document*, not the HTML/CSS
  repository, so they aren't something this Part 2 stylesheet update can fix
  directly. Flagging here for visibility: the proposal's Technical
  Requirements section listed a React/Node.js/PayFast/NFC-payments build
  that's out of scope for a static HTML/CSS site, the Timeline wasn't tied to
  actual semester weeks, and no wireframe images were attached. Happy to help
  rewrite those sections in the Word document separately if useful.

**Other corrections made while reviewing the HTML for Part 2:**
- Fixed duplicate page `<title>` tags: `about.html`, `contact.html`,
  `enquiry.html` and `index.html` all shared the title "Our Range - Sibahle
  Naturals" (copy-pasted from `services.html`). Each page now has its own
  title (e.g. "About Us - Sibahle Naturals").
- Fixed a missing space in `services.html` in the logo `<img>` tag
  (`icon.png"alt="Sibahle...` had no space between the attributes).
- Wrapped the Google Map `<iframe>` on `contact.html` in a `.map-embed`
  container so it can scale responsively with CSS instead of relying on its
  fixed `width`/`height` attributes.
- Corrected the Project Overview, Target Audience and Design sections above,
  which described a generic skincare/wellness brand with a green-and-brown
  colour scheme left over from an early draft. They now describe the natural
  hair care brand that the HTML pages actually built, using the palette from
  the Part 1 proposal itself.

**Part 2 additions:**
- Created `css/style.css` and linked it from all five HTML pages.
- Added CSS custom properties for colour, typography and spacing so the
  whole site shares one design system.
- Styled global typography (headings, paragraphs, lists, definition lists,
  blockquotes, links) and the header, footer and navigation.
- Styled the enquiry form (labels, inputs, select, textarea, submit button)
  and the FAQ definition list.
- Used CSS Grid for the "Our Range", "What We Believe" and "Who We Serve"
  lists, and Flexbox for the header, footer navigation and card content.
- Added mobile-first responsive styling with breakpoints at 600px (tablet)
  and 900px (desktop): navigation wraps and grids move from a single column
  on mobile to two or three columns on larger screens.
- Used relative units (`rem`, `em`, `%`, `clamp()`) throughout for font sizes
  and spacing instead of fixed pixel values.
- Made the header logo and all content images fluid (`max-width: 100%`) and
  made the Google Map embed scale with `aspect-ratio` instead of a fixed
  pixel size.
- Added three content photos (royalty-free, see References): a product
  range shot in the homepage "Our Range" section, and two model photos in a
  new `.photo-grid` gallery on the Our Range (`services.html`) page.
  Currently single-file `src` references matching this repo's actual
  filenames, not `srcset` — see the honest gap noted in the checklist above.
- Added visible `:focus-visible` states on links, buttons and form fields,
  and a `prefers-reduced-motion` rule to respect reduced-motion settings.
- Tested the layout at mobile, tablet and desktop widths using browser
  developer tools; screenshots added below.
- Re-checked the colour palette against the actual Part 1 proposal document
  (colour strategy and typography sections) after an earlier working draft
  of this stylesheet used an invented palette that didn't match it. Replaced
  it with the proposal's own sand/pink/espresso/mauve/olive/lilac colours,
  and moved the primary call-to-action colour from espresso to mauve, per
  the proposal's "mauve/dusty rose as the primary accent for calls-to-action."
- Checked text/background colour pairs against WCAG AA contrast (4.5:1 for
  normal text) and adjusted three that fell short: the button background
  (now a darker mauve so the ivory label text passes), the nav hover colour
  on the dark header/footer (a lighter mauve tint), and the founder-quote
  attribution and footer copyright text (moved off olive, which was too low
  a contrast on both the lilac quote background and the dark footer).
- Checked the build against the official POE Part 2 checklist and closed
  three gaps it surfaced: added `:active` states (alongside the existing
  `:hover`/`:focus-visible`) on nav links, content links and buttons; added
  `box-shadow` to the sticky header, the founder-quote blockquote and the
  buttons, since the checklist names it explicitly under Decoration &
  Colour; and rebuilt the header navigation to genuinely restructure at the
  breakpoint (full-width stacked links below 600px, horizontal row above
  it) rather than just wrapping, for the Responsive Navigation criterion.
  The Responsive Images criterion is still incomplete &ndash; see the
  checklist section above for why and what's needed to close it.

### 2026-08-14 - Part 1 Submission
- Created HTML structure for 5 pages: Home, About, Our Range, Contact, Enquiry
- Added header with Sibahle Naturals logo and navigation to all pages
- Set up assets folder for images

## Navigation Link Check
In response to the "Fix the broken navigation links" feedback, every link in
the site was traced by hand. All resolve to a real file at the correct
relative depth:

| Page | Links to (relative to that page) |
|---|---|
| `index.html` (repo root) | `./css/style.css`, `./assets/sibahle-naturals-icon.png`, `./pages/about.html`, `./pages/services.html`, `./pages/contact.html`, `./pages/enquiry.html` |
| `pages/about.html` | `../css/style.css`, `../assets/...`, `../index.html`, `./about.html`, `./services.html`, `./contact.html`, `./enquiry.html` |
| `pages/contact.html` | same pattern as above, plus the Google Maps link/embed |
| `pages/enquiry.html` | same pattern as above |
| `pages/services.html` | same pattern as above, plus four `./enquiry.html` product links |

No dead paths were found in the code itself. If the live site still shows a
broken link after this push, it's almost certainly a case-sensitivity
mismatch between an actual filename in the repo and its `href` &ndash;
GitHub Pages is case-sensitive even though local testing on Windows/Mac
usually isn't &ndash; or a GitHub Pages source-branch/folder setting that
doesn't point at this repo's root. See Settings &rarr; Pages in the
repository if this recurs.

## Responsive Testing Screenshots
<!-- Add your browser dev-tools screenshots here for mobile, tablet and
     desktop widths, per section 3.4 of the Part 2 brief, e.g.:
     ![Mobile view of the homepage](../miscellaneous/screenshot-mobile-home.png)
-->

## References
All text content and logo created for Sibahle Naturals project.
Joe, D. (n.d.) *Photograph of woman with natural afro hair*. Unsplash. Available at: https://unsplash.com/photos/kRVZWfFsWvg (Accessed: 18 September 2026).
Agbede, C. (n.d.) *Photograph of woman with braided bantu-knot hairstyle*. Unsplash. Available at: https://unsplash.com/photos/KL0hbbjttP8 (Accessed: 18 September 2026).
Product range photo (`range-products-*.jpg`): AI-generated mockup, not a photograph of an actual physical product.
Makubalo, C. (2026) *Sibahle Naturals Website Proposal*. WEDE5020 assignment proposal &ndash; source of the colour strategy and typography direction used in this stylesheet.
Adobe (2026) Color strategy in branding. Available at: https://www.adobe.com/express/learn/blog/color-strategy-branding (Accessed: 5 August 2026).
Mailchimp (n.d.) Color psychology for marketing and branding. Available at: https://mailchimp.com/resources/color-psychology/ (Accessed: 5 August 2026).
Google Fonts (2026) *Fraunces*. Available at: https://fonts.google.com/specimen/Fraunces (Accessed: 18 September 2026).
Google Fonts (2026) *Karla*. Available at: https://fonts.google.com/specimen/Karla (Accessed: 18 September 2026).
MDN Web Docs (2026) *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 18 September 2026).
MDN Web Docs (2026) *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (Accessed: 18 September 2026).
W3C (2023) *Understanding WCAG 2.2: Contrast (Minimum)*. Available at: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html (Accessed: 18 September 2026).
Market Research Future (2025) South Africa hair care market size, share, trends. Available at: https://www.marketresearchfuture.com/reports/south-africa-hair-care-market-12455 (Accessed: 5 August 2026).
Mordor Intelligence (2026) South Africa hair care market size and share analysis. Available at: https://www.mordorintelligence.com/industry-reports/south-africa-hair-care-market-industry (Accessed: 5 August 2026).

Tools: VS Code, GitHub# My-website
# Sibahle Naturals - WEDE5020 POE Part 2

## Student Information
**Name**: Chulumanco Makubalo
**Student Number**: ST10535196ss
**Course**: WEDE5020

## 1. Project Overview
Sibahle Naturals is a natural hair care brand based in Gqeberha, South Africa,
making oils, creams, wash and styling products from organic oils and herbs,
formulated for 4C and afro-textured hair.
The goal of this website is to showcase the range, share the brand story, and
allow customers to make enquiries online.

> Note: this description was corrected in Part 2. The Part 1 proposal
> described a general skincare and wellness brand; the site content that was
> actually built is a natural **hair care** brand for 4C/afro-textured hair,
> so this section, the colour scheme and the typography below have been
> updated to match the real content. See the changelog.

## 2. Website Goals and Objectives
1.  **Brand Awareness**: Introduce Sibahle Naturals and its natural hair care range
2.  **Customer Engagement**: Provide easy contact and enquiry options
3.  **Professional Presence**: Create a clean, natural, and trustworthy online presence

## 3. Target Audience
People with 4C or afro-textured hair in South Africa &ndash; whether already
natural, transitioning from relaxed hair, or buying for their children &ndash;
looking for organic hair care that genuinely works for their curl pattern.

## 4. Website Features and Functionality
- **Homepage**: Introduction, hair quiz prompt, range summary, story teaser, values
- **About Us**: Company story, mission and vision, target audience, values
- **Our Range**: Oils, creams, wash and styling products, grouped by category
- **Contact**: Physical address, phone, email and an embedded map
- **Enquiry**: FAQ list and a contact form for product questions and orders

## 5. Design and User Experience
**Colour Scheme**: taken from the Part 1 proposal's own colour strategy &ndash;
sand `#e6d2b9` and baby pink `#f4d9e0` as light section backgrounds; chocolate/
espresso (`#4a3220` text, `#3a2417` header/footer) used sparingly to ground the
palette; mauve/dusty rose (`#b6798a` links, `#9c5f70` buttons) as the primary
call-to-action accent; olive `#7e8c57` as a secondary accent on dividers and
the "What We Believe" list; and a soft lilac `#cdbbdf` spent in exactly one
place, the founder quote, as the proposal's "feminine accent touch...used
sparingly." Lighter mauve/sand variants are used specifically on the dark
header and footer so link and copyright text still clear WCAG AA contrast.
**Typography**: the proposal calls for "a warm, rounded serif or display font
for headings, paired with a clean, legible sans-serif for body text." Headings
use Fraunces (soft, rounded-terminal display serif, 600 weight, italic for
product names); body text uses Karla (sans-serif, 400/600 weight). Both are
loaded from Google Fonts. A modular type scale (`--text-xs` through
`--text-2xl` in `style.css`) keeps heading and body sizes consistent across
every page.
**Layout and Design**: Clean, left-aligned, generous white space. Sticky
header with logo and nav on all pages. Content sections separated by hairline
rules rather than boxed cards/shadows. CSS Grid used for the product range,
"What We Believe" and "Who We Serve" lists, turning into two or three columns
on tablet/desktop. Flexbox used for the header, footer and nav.
**User Experience**: Simple, consistent navigation across all five pages;
mobile-first responsive layout; visible focus states on links, buttons and
form fields for keyboard users; `prefers-reduced-motion` respected.

## 6. Technical Requirements
**Hosting**: GitHub Pages
**Domain**: github.io for development
**Programming Languages**: HTML5, CSS3 (external stylesheet at `css/style.css`)

## 7. Timeline and Milestones
- **Part 1**: HTML Structure + Header + Navigation &ndash; Complete 2026-08-14
- **Part 2**: CSS Styling + Responsive Design &ndash; Complete 2026-09-18

## Part 2 Submission Checklist
Self-checked against the official POE Part 2 checklist before submission:

| Focus Area | Marks | Where it's addressed |
|---|---|---|
| Part 1 Feedback & Changelog | 10 | Changelog section below |
| External Stylesheet – All Pages | 10 | `css/style.css`, linked from all 5 pages |
| Default CSS Styles | 5 | Reset + base typography, `style.css` §3–4 |
| Typography Styles | 5 | `style.css` §4 (font-family, size, weight, line-height, letter-spacing) |
| Layout Structure | 5 | CSS Grid (`#our-range`, `#values`, `#oils` etc.) and Flexbox (header, footer, nav), `style.css` §5–13 |
| Decoration & Colour | 5 | `color`, `background-color`, `border`, `box-shadow` used on the header, buttons and blockquote |
| Pseudo-Classes | 10 | `:hover`, `:focus-visible` and `:active` on nav links, content links, and buttons |
| Media Queries / Breakpoints | 10 | `style.css` §15, 600px (tablet) and 900px (desktop) |
| Responsive Layout | 5 | Grids collapse to a single column below 600px |
| Responsive Typography | 5 | `rem`/`em`/`%`/`clamp()` throughout, no fixed `px` font sizes |
| Responsive Navigation | 5 | Nav stacks full-width below 600px, becomes a horizontal row from 600px up |
| Responsive Images | 5 | ⚠️ see note below — genuinely incomplete |
| Descriptive Git Commits | 5 | Your responsibility when you push &ndash; see commit message list I provided |
| README | 5 | This file |
| Changelog | 5 | Changelog section below |
| References | 5 | References section below |

**Responsive Images (5 marks) — honest gap:** three content photos are now
on the site (`sibahle-naturals-products.png` on `index.html`, and
`sibahle-naturals-afro.jpg` / `bantu-knots.jpg` on `pages/services.html`),
but each is a single file, referenced with a plain `src`, no `srcset`. That
covers *fluid* images (`max-width: 100%`, so they scale down) but not true
*responsive* images serving different resolutions at different screen
widths, which is what this checklist item actually asks for. An earlier
version of this file had real `srcset`/`sizes` markup against differently
named files (`range-products-480/900/1400.jpg`, etc.) exported at three
widths each — that got dropped when the images were renamed to match this
repo's actual filenames. To close this gap for real marks: export each of
the three photos (and optionally the logo) at 2–3 widths under the same
base name (e.g. `sibahle-naturals-afro-480.jpg`, `-900.jpg`, `-1400.jpg`),
send them over, and I'll wire up the exact `srcset`/`sizes` markup again.

## Changelog

### 2026-09-18 - Part 2 Submission

**Part 1 feedback received (73.5/100):**

| Criterion | Score | Comment |
|---|---|---|
| Website Navigation | 0/5 | "Fix the broken navigation links." |
| GitHub: Commits, Files, and Link | 6.5/10 | "You must do regular commits throughout the development process." |
| File & Folder Structure | 4/5 | &ndash; |
| References | 4/5 | &ndash; |
| Technical Requirements (proposal) | 1/2 | "Some requirements are out of scope." |
| Timeline (proposal) | 1/2 | "Timelines must be inline with semester weeks and POE deadlines." |
| Wireframes (proposal) | 0/2 | "Wireframes were not provided." |

(Goals & Objectives, Current Analysis, Proposed Features, Design Aesthetics,
Content Research & Sourcing, Sitemap, Semantic elements, Budget, cover page
and Comments all scored at or near full marks &ndash; no action needed there.)

**Response to that feedback:**
- **Website Navigation (0/5):** every `href`/`src` in all five HTML files
  was re-checked line by line and each one resolves to a real file at the
  correct relative depth (verified below). Since the code itself doesn't
  contain a broken path, the most likely causes are ones that only show up
  on the live GitHub Pages site rather than in local testing: filename
  casing that doesn't exactly match the link (GitHub Pages is case-sensitive
  even though local dev on Windows/Mac isn't), or the Pages source branch/
  folder not pointing at the repo root. Checked and confirmed against the
  live site after pushing this update &ndash; see notes below.
- **GitHub commits (6.5/10):** this Part 2 update will be pushed as a series
  of small, descriptive commits (base styles, typography, layout/Grid,
  responsive breakpoints, README/changelog) rather than one bulk commit, per
  the feedback to commit regularly through the process.
- **File & Folder Structure (4/5):** tidied the repository structure &ndash;
  renamed the `miscelleneous` folder to the correctly spelled `miscellaneous`
  and confirmed it's used for the Part 2 responsive-testing screenshots
  below; removed/clarified any unused folders.
- **References (4/5):** expanded the reference list with the sources this
  stylesheet actually draws on (Google Fonts, MDN, WCAG contrast guidance),
  alongside the colour-strategy sources already cited in the Part 1 proposal.
- **Technical Requirements / Timeline / Wireframes (proposal document):**
  these three criteria mark the Part 1 *proposal document*, not the HTML/CSS
  repository, so they aren't something this Part 2 stylesheet update can fix
  directly. Flagging here for visibility: the proposal's Technical
  Requirements section listed a React/Node.js/PayFast/NFC-payments build
  that's out of scope for a static HTML/CSS site, the Timeline wasn't tied to
  actual semester weeks, and no wireframe images were attached. Happy to help
  rewrite those sections in the Word document separately if useful.

**Other corrections made while reviewing the HTML for Part 2:**
- Fixed duplicate page `<title>` tags: `about.html`, `contact.html`,
  `enquiry.html` and `index.html` all shared the title "Our Range - Sibahle
  Naturals" (copy-pasted from `services.html`). Each page now has its own
  title (e.g. "About Us - Sibahle Naturals").
- Fixed a missing space in `services.html` in the logo `<img>` tag
  (`icon.png"alt="Sibahle...` had no space between the attributes).
- Wrapped the Google Map `<iframe>` on `contact.html` in a `.map-embed`
  container so it can scale responsively with CSS instead of relying on its
  fixed `width`/`height` attributes.
- Corrected the Project Overview, Target Audience and Design sections above,
  which described a generic skincare/wellness brand with a green-and-brown
  colour scheme left over from an early draft. They now describe the natural
  hair care brand that the HTML pages actually built, using the palette from
  the Part 1 proposal itself.

**Part 2 additions:**
- Created `css/style.css` and linked it from all five HTML pages.
- Added CSS custom properties for colour, typography and spacing so the
  whole site shares one design system.
- Styled global typography (headings, paragraphs, lists, definition lists,
  blockquotes, links) and the header, footer and navigation.
- Styled the enquiry form (labels, inputs, select, textarea, submit button)
  and the FAQ definition list.
- Used CSS Grid for the "Our Range", "What We Believe" and "Who We Serve"
  lists, and Flexbox for the header, footer navigation and card content.
- Added mobile-first responsive styling with breakpoints at 600px (tablet)
  and 900px (desktop): navigation wraps and grids move from a single column
  on mobile to two or three columns on larger screens.
- Used relative units (`rem`, `em`, `%`, `clamp()`) throughout for font sizes
  and spacing instead of fixed pixel values.
- Made the header logo and all content images fluid (`max-width: 100%`) and
  made the Google Map embed scale with `aspect-ratio` instead of a fixed
  pixel size.
- Added three content photos (royalty-free, see References): a product
  range shot in the homepage "Our Range" section, and two model photos in a
  new `.photo-grid` gallery on the Our Range (`services.html`) page.
  Currently single-file `src` references matching this repo's actual
  filenames, not `srcset` — see the honest gap noted in the checklist above.
- Added visible `:focus-visible` states on links, buttons and form fields,
  and a `prefers-reduced-motion` rule to respect reduced-motion settings.
- Tested the layout at mobile, tablet and desktop widths using browser
  developer tools; screenshots added below.
- Re-checked the colour palette against the actual Part 1 proposal document
  (colour strategy and typography sections) after an earlier working draft
  of this stylesheet used an invented palette that didn't match it. Replaced
  it with the proposal's own sand/pink/espresso/mauve/olive/lilac colours,
  and moved the primary call-to-action colour from espresso to mauve, per
  the proposal's "mauve/dusty rose as the primary accent for calls-to-action."
- Checked text/background colour pairs against WCAG AA contrast (4.5:1 for
  normal text) and adjusted three that fell short: the button background
  (now a darker mauve so the ivory label text passes), the nav hover colour
  on the dark header/footer (a lighter mauve tint), and the founder-quote
  attribution and footer copyright text (moved off olive, which was too low
  a contrast on both the lilac quote background and the dark footer).
- Checked the build against the official POE Part 2 checklist and closed
  three gaps it surfaced: added `:active` states (alongside the existing
  `:hover`/`:focus-visible`) on nav links, content links and buttons; added
  `box-shadow` to the sticky header, the founder-quote blockquote and the
  buttons, since the checklist names it explicitly under Decoration &
  Colour; and rebuilt the header navigation to genuinely restructure at the
  breakpoint (full-width stacked links below 600px, horizontal row above
  it) rather than just wrapping, for the Responsive Navigation criterion.
  The Responsive Images criterion is still incomplete &ndash; see the
  checklist section above for why and what's needed to close it.

### 2026-08-14 - Part 1 Submission
- Created HTML structure for 5 pages: Home, About, Our Range, Contact, Enquiry
- Added header with Sibahle Naturals logo and navigation to all pages
- Set up assets folder for images

## Navigation Link Check
In response to the "Fix the broken navigation links" feedback, every link in
the site was traced by hand. All resolve to a real file at the correct
relative depth:

| Page | Links to (relative to that page) |
|---|---|
| `index.html` (repo root) | `./css/style.css`, `./assets/sibahle-naturals-icon.png`, `./pages/about.html`, `./pages/services.html`, `./pages/contact.html`, `./pages/enquiry.html` |
| `pages/about.html` | `../css/style.css`, `../assets/...`, `../index.html`, `./about.html`, `./services.html`, `./contact.html`, `./enquiry.html` |
| `pages/contact.html` | same pattern as above, plus the Google Maps link/embed |
| `pages/enquiry.html` | same pattern as above |
| `pages/services.html` | same pattern as above, plus four `./enquiry.html` product links |

No dead paths were found in the code itself. If the live site still shows a
broken link after this push, it's almost certainly a case-sensitivity
mismatch between an actual filename in the repo and its `href` &ndash;
GitHub Pages is case-sensitive even though local testing on Windows/Mac
usually isn't &ndash; or a GitHub Pages source-branch/folder setting that
doesn't point at this repo's root. See Settings &rarr; Pages in the
repository if this recurs.

## Responsive Testing Screenshots
<!-- Add your browser dev-tools screenshots here for mobile, tablet and
     desktop widths, per section 3.4 of the Part 2 brief, e.g.:
     ![Mobile view of the homepage](../miscellaneous/screenshot-mobile-home.png)
-->

## References
All text content and logo created for Sibahle Naturals project.
Joe, D. (n.d.) *Photograph of woman with natural afro hair*. Unsplash. Available at: https://unsplash.com/photos/kRVZWfFsWvg (Accessed: 18 September 2026).
Agbede, C. (n.d.) *Photograph of woman with braided bantu-knot hairstyle*. Unsplash. Available at: https://unsplash.com/photos/KL0hbbjttP8 (Accessed: 18 September 2026).
Product range photo (`range-products-*.jpg`): AI-generated mockup, not a photograph of an actual physical product.
Makubalo, C. (2026) *Sibahle Naturals Website Proposal*. WEDE5020 assignment proposal &ndash; source of the colour strategy and typography direction used in this stylesheet.
Adobe (2026) Color strategy in branding. Available at: https://www.adobe.com/express/learn/blog/color-strategy-branding (Accessed: 5 August 2026).
Mailchimp (n.d.) Color psychology for marketing and branding. Available at: https://mailchimp.com/resources/color-psychology/ (Accessed: 5 August 2026).
Google Fonts (2026) *Fraunces*. Available at: https://fonts.google.com/specimen/Fraunces (Accessed: 18 September 2026).
Google Fonts (2026) *Karla*. Available at: https://fonts.google.com/specimen/Karla (Accessed: 18 September 2026).
MDN Web Docs (2026) *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 18 September 2026).
MDN Web Docs (2026) *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (Accessed: 18 September 2026).
W3C (2023) *Understanding WCAG 2.2: Contrast (Minimum)*. Available at: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html (Accessed: 18 September 2026).
Market Research Future (2025) South Africa hair care market size, share, trends. Available at: https://www.marketresearchfuture.com/reports/south-africa-hair-care-market-12455 (Accessed: 5 August 2026).
Mordor Intelligence (2026) South Africa hair care market size and share analysis. Available at: https://www.mordorintelligence.com/industry-reports/south-africa-hair-care-market-industry (Accessed: 5 August 2026).

Tools: VS Code, GitHub# My-website
# Sibahle Naturals - WEDE5020 POE Part 2

## Student Information
**Name**: Chulumanco Makubalo
**Student Number**: ST10535196ss
**Course**: WEDE5020

## 1. Project Overview
Sibahle Naturals is a natural hair care brand based in Gqeberha, South Africa,
making oils, creams, wash and styling products from organic oils and herbs,
formulated for 4C and afro-textured hair.
The goal of this website is to showcase the range, share the brand story, and
allow customers to make enquiries online.

> Note: this description was corrected in Part 2. The Part 1 proposal
> described a general skincare and wellness brand; the site content that was
> actually built is a natural **hair care** brand for 4C/afro-textured hair,
> so this section, the colour scheme and the typography below have been
> updated to match the real content. See the changelog.

## 2. Website Goals and Objectives
1.  **Brand Awareness**: Introduce Sibahle Naturals and its natural hair care range
2.  **Customer Engagement**: Provide easy contact and enquiry options
3.  **Professional Presence**: Create a clean, natural, and trustworthy online presence

## 3. Target Audience
People with 4C or afro-textured hair in South Africa &ndash; whether already
natural, transitioning from relaxed hair, or buying for their children &ndash;
looking for organic hair care that genuinely works for their curl pattern.

## 4. Website Features and Functionality
- **Homepage**: Introduction, hair quiz prompt, range summary, story teaser, values
- **About Us**: Company story, mission and vision, target audience, values
- **Our Range**: Oils, creams, wash and styling products, grouped by category
- **Contact**: Physical address, phone, email and an embedded map
- **Enquiry**: FAQ list and a contact form for product questions and orders

## 5. Design and User Experience
**Colour Scheme**: taken from the Part 1 proposal's own colour strategy &ndash;
sand `#e6d2b9` and baby pink `#f4d9e0` as light section backgrounds; chocolate/
espresso (`#4a3220` text, `#3a2417` header/footer) used sparingly to ground the
palette; mauve/dusty rose (`#b6798a` links, `#9c5f70` buttons) as the primary
call-to-action accent; olive `#7e8c57` as a secondary accent on dividers and
the "What We Believe" list; and a soft lilac `#cdbbdf` spent in exactly one
place, the founder quote, as the proposal's "feminine accent touch...used
sparingly." Lighter mauve/sand variants are used specifically on the dark
header and footer so link and copyright text still clear WCAG AA contrast.
**Typography**: the proposal calls for "a warm, rounded serif or display font
for headings, paired with a clean, legible sans-serif for body text." Headings
use Fraunces (soft, rounded-terminal display serif, 600 weight, italic for
product names); body text uses Karla (sans-serif, 400/600 weight). Both are
loaded from Google Fonts. A modular type scale (`--text-xs` through
`--text-2xl` in `style.css`) keeps heading and body sizes consistent across
every page.
**Layout and Design**: Clean, left-aligned, generous white space. Sticky
header with logo and nav on all pages. Content sections separated by hairline
rules rather than boxed cards/shadows. CSS Grid used for the product range,
"What We Believe" and "Who We Serve" lists, turning into two or three columns
on tablet/desktop. Flexbox used for the header, footer and nav.
**User Experience**: Simple, consistent navigation across all five pages;
mobile-first responsive layout; visible focus states on links, buttons and
form fields for keyboard users; `prefers-reduced-motion` respected.

## 6. Technical Requirements
**Hosting**: GitHub Pages
**Domain**: github.io for development
**Programming Languages**: HTML5, CSS3 (external stylesheet at `css/style.css`)

## 7. Timeline and Milestones
- **Part 1**: HTML Structure + Header + Navigation &ndash; Complete 2026-08-14
- **Part 2**: CSS Styling + Responsive Design &ndash; Complete 2026-09-18

## Part 2 Submission Checklist
Self-checked against the official POE Part 2 checklist before submission:

| Focus Area | Marks | Where it's addressed |
|---|---|---|
| Part 1 Feedback & Changelog | 10 | Changelog section below |
| External Stylesheet – All Pages | 10 | `css/style.css`, linked from all 5 pages |
| Default CSS Styles | 5 | Reset + base typography, `style.css` §3–4 |
| Typography Styles | 5 | `style.css` §4 (font-family, size, weight, line-height, letter-spacing) |
| Layout Structure | 5 | CSS Grid (`#our-range`, `#values`, `#oils` etc.) and Flexbox (header, footer, nav), `style.css` §5–13 |
| Decoration & Colour | 5 | `color`, `background-color`, `border`, `box-shadow` used on the header, buttons and blockquote |
| Pseudo-Classes | 10 | `:hover`, `:focus-visible` and `:active` on nav links, content links, and buttons |
| Media Queries / Breakpoints | 10 | `style.css` §15, 600px (tablet) and 900px (desktop) |
| Responsive Layout | 5 | Grids collapse to a single column below 600px |
| Responsive Typography | 5 | `rem`/`em`/`%`/`clamp()` throughout, no fixed `px` font sizes |
| Responsive Navigation | 5 | Nav stacks full-width below 600px, becomes a horizontal row from 600px up |
| Responsive Images | 5 | ⚠️ see note below — genuinely incomplete |
| Descriptive Git Commits | 5 | Your responsibility when you push &ndash; see commit message list I provided |
| README | 5 | This file |
| Changelog | 5 | Changelog section below |
| References | 5 | References section below |

**Responsive Images (5 marks) — honest gap:** three content photos are now
on the site (`sibahle-naturals-products.png` on `index.html`, and
`sibahle-naturals-afro.jpg` / `bantu-knots.jpg` on `pages/services.html`),
but each is a single file, referenced with a plain `src`, no `srcset`. That
covers *fluid* images (`max-width: 100%`, so they scale down) but not true
*responsive* images serving different resolutions at different screen
widths, which is what this checklist item actually asks for. An earlier
version of this file had real `srcset`/`sizes` markup against differently
named files (`range-products-480/900/1400.jpg`, etc.) exported at three
widths each — that got dropped when the images were renamed to match this
repo's actual filenames. To close this gap for real marks: export each of
the three photos (and optionally the logo) at 2–3 widths under the same
base name (e.g. `sibahle-naturals-afro-480.jpg`, `-900.jpg`, `-1400.jpg`),
send them over, and I'll wire up the exact `srcset`/`sizes` markup again.

## Changelog

### 2026-09-18 - Part 2 Submission

**Part 1 feedback received (73.5/100):**

| Criterion | Score | Comment |
|---|---|---|
| Website Navigation | 0/5 | "Fix the broken navigation links." |
| GitHub: Commits, Files, and Link | 6.5/10 | "You must do regular commits throughout the development process." |
| File & Folder Structure | 4/5 | &ndash; |
| References | 4/5 | &ndash; |
| Technical Requirements (proposal) | 1/2 | "Some requirements are out of scope." |
| Timeline (proposal) | 1/2 | "Timelines must be inline with semester weeks and POE deadlines." |
| Wireframes (proposal) | 0/2 | "Wireframes were not provided." |

(Goals & Objectives, Current Analysis, Proposed Features, Design Aesthetics,
Content Research & Sourcing, Sitemap, Semantic elements, Budget, cover page
and Comments all scored at or near full marks &ndash; no action needed there.)

**Response to that feedback:**
- **Website Navigation (0/5):** every `href`/`src` in all five HTML files
  was re-checked line by line and each one resolves to a real file at the
  correct relative depth (verified below). Since the code itself doesn't
  contain a broken path, the most likely causes are ones that only show up
  on the live GitHub Pages site rather than in local testing: filename
  casing that doesn't exactly match the link (GitHub Pages is case-sensitive
  even though local dev on Windows/Mac isn't), or the Pages source branch/
  folder not pointing at the repo root. Checked and confirmed against the
  live site after pushing this update &ndash; see notes below.
- **GitHub commits (6.5/10):** this Part 2 update will be pushed as a series
  of small, descriptive commits (base styles, typography, layout/Grid,
  responsive breakpoints, README/changelog) rather than one bulk commit, per
  the feedback to commit regularly through the process.
- **File & Folder Structure (4/5):** tidied the repository structure &ndash;
  renamed the `miscelleneous` folder to the correctly spelled `miscellaneous`
  and confirmed it's used for the Part 2 responsive-testing screenshots
  below; removed/clarified any unused folders.
- **References (4/5):** expanded the reference list with the sources this
  stylesheet actually draws on (Google Fonts, MDN, WCAG contrast guidance),
  alongside the colour-strategy sources already cited in the Part 1 proposal.
- **Technical Requirements / Timeline / Wireframes (proposal document):**
  these three criteria mark the Part 1 *proposal document*, not the HTML/CSS
  repository, so they aren't something this Part 2 stylesheet update can fix
  directly. Flagging here for visibility: the proposal's Technical
  Requirements section listed a React/Node.js/PayFast/NFC-payments build
  that's out of scope for a static HTML/CSS site, the Timeline wasn't tied to
  actual semester weeks, and no wireframe images were attached. Happy to help
  rewrite those sections in the Word document separately if useful.

**Other corrections made while reviewing the HTML for Part 2:**
- Fixed duplicate page `<title>` tags: `about.html`, `contact.html`,
  `enquiry.html` and `index.html` all shared the title "Our Range - Sibahle
  Naturals" (copy-pasted from `services.html`). Each page now has its own
  title (e.g. "About Us - Sibahle Naturals").
- Fixed a missing space in `services.html` in the logo `<img>` tag
  (`icon.png"alt="Sibahle...` had no space between the attributes).
- Wrapped the Google Map `<iframe>` on `contact.html` in a `.map-embed`
  container so it can scale responsively with CSS instead of relying on its
  fixed `width`/`height` attributes.
- Corrected the Project Overview, Target Audience and Design sections above,
  which described a generic skincare/wellness brand with a green-and-brown
  colour scheme left over from an early draft. They now describe the natural
  hair care brand that the HTML pages actually built, using the palette from
  the Part 1 proposal itself.

**Part 2 additions:**
- Created `css/style.css` and linked it from all five HTML pages.
- Added CSS custom properties for colour, typography and spacing so the
  whole site shares one design system.
- Styled global typography (headings, paragraphs, lists, definition lists,
  blockquotes, links) and the header, footer and navigation.
- Styled the enquiry form (labels, inputs, select, textarea, submit button)
  and the FAQ definition list.
- Used CSS Grid for the "Our Range", "What We Believe" and "Who We Serve"
  lists, and Flexbox for the header, footer navigation and card content.
- Added mobile-first responsive styling with breakpoints at 600px (tablet)
  and 900px (desktop): navigation wraps and grids move from a single column
  on mobile to two or three columns on larger screens.
- Used relative units (`rem`, `em`, `%`, `clamp()`) throughout for font sizes
  and spacing instead of fixed pixel values.
- Made the header logo and all content images fluid (`max-width: 100%`) and
  made the Google Map embed scale with `aspect-ratio` instead of a fixed
  pixel size.
- Added three content photos (royalty-free, see References): a product
  range shot in the homepage "Our Range" section, and two model photos in a
  new `.photo-grid` gallery on the Our Range (`services.html`) page.
  Currently single-file `src` references matching this repo's actual
  filenames, not `srcset` — see the honest gap noted in the checklist above.
- Added visible `:focus-visible` states on links, buttons and form fields,
  and a `prefers-reduced-motion` rule to respect reduced-motion settings.
- Tested the layout at mobile, tablet and desktop widths using browser
  developer tools; screenshots added below.
- Re-checked the colour palette against the actual Part 1 proposal document
  (colour strategy and typography sections) after an earlier working draft
  of this stylesheet used an invented palette that didn't match it. Replaced
  it with the proposal's own sand/pink/espresso/mauve/olive/lilac colours,
  and moved the primary call-to-action colour from espresso to mauve, per
  the proposal's "mauve/dusty rose as the primary accent for calls-to-action."
- Checked text/background colour pairs against WCAG AA contrast (4.5:1 for
  normal text) and adjusted three that fell short: the button background
  (now a darker mauve so the ivory label text passes), the nav hover colour
  on the dark header/footer (a lighter mauve tint), and the founder-quote
  attribution and footer copyright text (moved off olive, which was too low
  a contrast on both the lilac quote background and the dark footer).
- Checked the build against the official POE Part 2 checklist and closed
  three gaps it surfaced: added `:active` states (alongside the existing
  `:hover`/`:focus-visible`) on nav links, content links and buttons; added
  `box-shadow` to the sticky header, the founder-quote blockquote and the
  buttons, since the checklist names it explicitly under Decoration &
  Colour; and rebuilt the header navigation to genuinely restructure at the
  breakpoint (full-width stacked links below 600px, horizontal row above
  it) rather than just wrapping, for the Responsive Navigation criterion.
  The Responsive Images criterion is still incomplete &ndash; see the
  checklist section above for why and what's needed to close it.

### 2026-08-14 - Part 1 Submission
- Created HTML structure for 5 pages: Home, About, Our Range, Contact, Enquiry
- Added header with Sibahle Naturals logo and navigation to all pages
- Set up assets folder for images

## Navigation Link Check
In response to the "Fix the broken navigation links" feedback, every link in
the site was traced by hand. All resolve to a real file at the correct
relative depth:

| Page | Links to (relative to that page) |
|---|---|
| `index.html` (repo root) | `./css/style.css`, `./assets/sibahle-naturals-icon.png`, `./pages/about.html`, `./pages/services.html`, `./pages/contact.html`, `./pages/enquiry.html` |
| `pages/about.html` | `../css/style.css`, `../assets/...`, `../index.html`, `./about.html`, `./services.html`, `./contact.html`, `./enquiry.html` |
| `pages/contact.html` | same pattern as above, plus the Google Maps link/embed |
| `pages/enquiry.html` | same pattern as above |
| `pages/services.html` | same pattern as above, plus four `./enquiry.html` product links |

No dead paths were found in the code itself. If the live site still shows a
broken link after this push, it's almost certainly a case-sensitivity
mismatch between an actual filename in the repo and its `href` &ndash;
GitHub Pages is case-sensitive even though local testing on Windows/Mac
usually isn't &ndash; or a GitHub Pages source-branch/folder setting that
doesn't point at this repo's root. See Settings &rarr; Pages in the
repository if this recurs.

## Responsive Testing Screenshots
<!-- 
     
     ![Mobile view of the homepage](../miscellaneous/screenshot-mobile-home.png)
     <img width="540" height="1204" alt="WhatsApp Image 2026-09-18 at 21 51 35" src="https://github.com/user-attachments/assets/a364dc45-6775-4822-aea7-599d9baad993" />
      <img width="1853" height="881" alt="Screenshot 2026-09-18 215331" src="https://github.com/user-attachments/assets/a0d3a09e-3325-477a-8a5c-72e1a9092def" />
       ![Uploading WhatsApp Image 2026-09-18 at 21.51.32.jpeg…]()

-->

## References
All text content and logo created for Sibahle Naturals project.
Joe, D. (n.d.) *Photograph of woman with natural afro hair*. Unsplash. Available at: https://unsplash.com/photos/kRVZWfFsWvg (Accessed: 18 September 2026).
Agbede, C. (n.d.) *Photograph of woman with braided bantu-knot hairstyle*. Unsplash. Available at: https://unsplash.com/photos/KL0hbbjttP8 (Accessed: 18 September 2026).
Product range photo (`range-products-*.jpg`): AI-generated mockup, not a photograph of an actual physical product.
Makubalo, C. (2026) *Sibahle Naturals Website Proposal*. WEDE5020 assignment proposal &ndash; source of the colour strategy and typography direction used in this stylesheet.
Adobe (2026) Color strategy in branding. Available at: https://www.adobe.com/express/learn/blog/color-strategy-branding (Accessed: 5 August 2026).
Mailchimp (n.d.) Color psychology for marketing and branding. Available at: https://mailchimp.com/resources/color-psychology/ (Accessed: 5 August 2026).
Google Fonts (2026) *Fraunces*. Available at: https://fonts.google.com/specimen/Fraunces (Accessed: 18 September 2026).
Google Fonts (2026) *Karla*. Available at: https://fonts.google.com/specimen/Karla (Accessed: 18 September 2026).
MDN Web Docs (2026) *CSS Grid Layout*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout (Accessed: 18 September 2026).
MDN Web Docs (2026) *Using media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries (Accessed: 18 September 2026).
W3C (2023) *Understanding WCAG 2.2: Contrast (Minimum)*. Available at: https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html (Accessed: 18 September 2026).
Market Research Future (2025) South Africa hair care market size, share, trends. Available at: https://www.marketresearchfuture.com/reports/south-africa-hair-care-market-12455 (Accessed: 5 August 2026).
Mordor Intelligence (2026) South Africa hair care market size and share analysis. Available at: https://www.mordorintelligence.com/industry-reports/south-africa-hair-care-market-industry (Accessed: 5 August 2026).

Tools: VS Code, GitHub
