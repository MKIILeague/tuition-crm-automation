# My website: what changed and how to edit it

## What this version is

Bright Path Tuition is a fictional tuition centre for my portfolio. This version is a complete, responsive one-page website built with HTML, CSS, and basic JavaScript. No package installation or build step is needed.

The site has a homepage introduction, an approach section, three course cards, an enquiry guide, FAQs, the existing Google Form, and a footer. The centre and its teaching descriptions are sample content. The form is connected to the working practice automation.

I confirmed the website-to-HubSpot journey worked before this redesign. The redesigned page keeps the same form URL and all three course-prefill links.

## The files and their jobs

| File | What I edit here |
| --- | --- |
| `index.html` | Words, headings, course topics, FAQ answers, navigation links, and the form embed |
| `styles.css` | Colours, fonts, spacing, cards, columns, and small-screen layout |
| `script.js` | Mobile menu behaviour and the footer year |
| `assets/learning-desk.svg` | The original illustrated notebook in the homepage introduction |
| `assets/favicon.svg` | The small brand icon shown in the browser tab |

The illustration is an SVG: a text file describing shapes and colours. It stays sharp on different screen sizes and needs no external image service. The page uses built-in fonts, so it has no font download dependency.

## How to preview it

1. Open this folder in File Explorer and double-click `index.html`.
2. If the website is already open, press **Ctrl+R**. Try **Ctrl+F5** if an old stylesheet is cached.
3. Scroll through the page. Navigation links move to their matching sections.
4. Make the browser narrower than about 800 pixels. The navigation should become a **Menu** button and the columns should stack.
5. Click **Menu**, choose a link, and check that the menu closes. Open it again and press **Escape** to close it with the keyboard.
6. Click an FAQ question to open its answer.
7. Check the embedded form and a course-specific enquiry link. Use test details for this demo.

The form needs an internet connection. The page's local illustration, styles, menu, and FAQ content do not.

## How HTML gives the page structure

`index.html` has comments marking the major sections. For example:

```html
<section id="about" aria-labelledby="about-heading">
```

`id="about"` is a destination. A link with `href="#about"` takes the visitor there. `aria-labelledby` connects a section to the heading that names it for assistive tools.

The FAQ uses `<details>` and `<summary>`. The browser already knows how to open and close these, so we do not need JavaScript for the answers.

## How CSS changes the appearance

The numbered comments in `styles.css` group the theme, header, homepage introduction, courses, FAQs, form, and smaller-screen rules.

At the top, `--ink` is the dark green and `--paper` is the warm background. Changing a variable changes all the places that use it.

`display: grid` creates the page's columns. The `@media` rules change those layouts at narrower widths. For example, three course cards become one column on a small screen.

## My first JavaScript feature

In `script.js`:

- `querySelector` finds the menu button or navigation in the HTML.
- `addEventListener` runs code when someone clicks or presses a key.
- `aria-expanded` records whether the menu is open.
- The `is-open` CSS class makes the navigation visible on small screens.
- The menu closes after choosing a link, clicking outside it, pressing Escape, or returning to a wide layout.

The script also updates the footer year. It does not submit enquiries or change Google Forms, Sheets, Make, or HubSpot.

Without JavaScript, navigation links stay visible. This gives visitors a usable fallback if the script does not load.

## My first safe practice edit

1. Find the `<!-- ABOUT:` comment in `index.html`.
2. Change one sentence in the paragraph underneath its heading.
3. Save with **Ctrl+S** and refresh the browser.
4. Check that the words changed and the layout still looks right.
5. Review and save the change:

```powershell
git diff
git add index.html
git commit -m "Personalise the Bright Path introduction"
```

Keep the existing form URLs and `entry.184110074` parameter while practising page copy. They connect to the form that is already working.

## What this website does not do yet

It does not reserve classes, collect payments, provide a real timetable, or manage staff follow-up tasks. The longer-term operations plan is in [PROJECT_PURPOSE_AND_PLAN.md](PROJECT_PURPOSE_AND_PLAN.md), and the data workflow is in [PROJECT_WORKFLOW.md](PROJECT_WORKFLOW.md).

Publishing a live website remains a separate step. A Git commit saves a checkpoint locally; `git push` uploads code to GitHub.
