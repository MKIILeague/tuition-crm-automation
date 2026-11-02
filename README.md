# tuition-crm-automation
A tuition centre website with enquiry automation using Google Forms, Google Sheets, Make, and HubSpot.

Start with [My project workflow](PROJECT_WORKFLOW.md) for a beginner-friendly explanation, a workflow diagram, a learning roadmap, and a step-by-step testing checklist.

## Current progress

- Tested integration: Google Forms -> Google Sheets -> Make -> HubSpot.
- Make uses email to create or update a contact; submitting the same email updates the existing contact.
- Lesson 1: a local homepage with navigation, an introduction, three course cards, and an Enquire Now link.
- Lesson 2: the existing Google Form is embedded in the enquiry section, with a link to open it in a new tab.
- The responder page was checked with an HTTP request. Visual checks and a complete test submission from the website are still needed.

Bright Path Tuition is a placeholder name. Course descriptions are sample copy for this learning project.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The homepage content and structure. |
| `styles.css` | Colours, spacing, fonts, and layouts. |
| `PROJECT_WORKFLOW.md` | Explains the whole project, its workflow, and the learning steps. |
| `apps-script/create-enquiry-form,gs` | Existing Google Apps Script for creating the enquiry form and response sheet. |

The homepage does not need JavaScript yet. Its links use HTML section IDs to move around the page.

## Preview the homepage

1. Open this folder in File Explorer.
2. Double-click `index.html` to open it in your browser. No installation or build command is needed.
3. Edit a file in your code editor and save it with **Ctrl+S**.
4. Return to the browser and refresh with **Ctrl+R** to see the change.

Optional: if you use VS Code with the Live Server extension already installed, right-click `index.html` and choose **Open with Live Server** for automatic refresh.

Check that **Courses** jumps to the cards and **Enquire Now** jumps to the embedded form. The form needs an internet connection to load. Make the browser window narrow to see the cards stack vertically. Use **Tab** to move between links and **Enter** to follow one.

## Lesson 1: understand and practise

- **HTML supplies the content.** `<header>` contains the navigation, `<main>` contains the main content, and each `<section>` groups related content. Each `<article>` is a course card.
- **CSS supplies the appearance.** The `<link>` in the HTML loads `styles.css`. A class such as `course-card` connects an HTML element to its CSS rules.
- **Links can jump within a page.** `href="#enquiry"` points to the section with `id="enquiry"`. The Enquire Now link looks like a button because of its `button` class.
- **The layout adapts to screen size.** The grid uses three columns on larger screens. The media query switches to one column at 720 pixels or narrower.

Try one small edit first:

1. Find `<h1 id="intro-heading">` in `index.html` and replace its text with your own introduction heading.
2. Save, refresh, and check the result.
3. When you are ready, edit one course description or change `--accent` in `styles.css` to try a different enquiry-section colour.

Keep the class names, IDs, and angle brackets while you practise changing text.

## Save progress with Git

Run these commands in a terminal opened in this repository. `git diff` lets you review changes before saving a commit.

```powershell
git status
git diff
git add index.html styles.css README.md
git commit -m "Add beginner tuition homepage"
```

For your next practice edit, use a message describing that change, for example:

```powershell
git diff
git add index.html
git commit -m "Personalise the homepage introduction"
```

A commit saves a local checkpoint. `git push` uploads your commits to GitHub; it does not publish a live website.

## Lesson 2: the embedded enquiry form

The `<iframe>` in `index.html` displays the existing Google Form inside the website. Its `src` is the form's embed address, and its `title` describes it for assistive tools. The `enquiry-form` CSS class makes it fit the available width. The fallback link opens the same form in a new tab.

CSS styles the iframe's outer box. Change the form's own questions or theme in Google Forms.

The form still submits through the existing Google Sheets -> Make -> HubSpot automation. See [the workflow guide](PROJECT_WORKFLOW.md#7-test-the-full-enquiry-workflow-after-embedding) for the full test steps.

## Next lesson

Preview the embedded form and test one enquiry all the way to HubSpot, then repeat with the same email to check the update behaviour. After that, add a small JavaScript feature as a separate lesson.
