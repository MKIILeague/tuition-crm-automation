# My tuition website and CRM project

## 1. What am I building?

I am building a portfolio website for a fictional tuition centre. Visitors can read about English, Maths, and Science and send a practice enquiry using my existing Google Form.

The enquiry then travels through the automation I have already tested, so I do not have to copy each person's details into HubSpot by hand.

**CRM** means customer relationship management. In this project, HubSpot is the place where I keep contact details for people who enquire.

Bright Path Tuition is a sample name. The course descriptions are practice content that I can edit later.

For the real-world purpose and proposed staff follow-up process, read [Why I am building this project](PROJECT_PURPOSE_AND_PLAN.md). The current website captures enquiries; ownership, status tracking, and reminders are future work.

## 2. The complete workflow

```text
Visitor opens my website
          |
          v
Reads the introduction and course cards
          |
          v
Clicks Enquire Now
          |
          v
Fills in the existing Google Form inside my website
          |
          v
Google Sheets records the response
          |
          v
Make uses the response in my existing automation
          |
          v
HubSpot creates or updates a contact using the email address
```

I have confirmed that the website -> Google Forms -> Google Sheets -> Make -> HubSpot journey is working. The redesigned website keeps the same form and course-prefill URLs. I should still check its new layout on different screen sizes.

### What each tool does

| Tool | Its job in my project |
| --- | --- |
| HTML | Holds the website's headings, paragraphs, cards, and links. |
| CSS | Controls colours, spacing, fonts, and layout on different screen sizes. |
| JavaScript | Controls the mobile menu and updates the footer year. Section links and FAQs work through HTML. |
| Google Forms | Collects and submits the enquiry answers. |
| Google Sheets | Stores form responses as rows. |
| Make | Connects the form response data to HubSpot using my existing scenario. A scenario is Make's name for an automation workflow. |
| HubSpot | Stores the contact and the details mapped by my Make scenario. |
| Git | Saves checkpoints of my code on this computer. |
| GitHub | Stores the code I upload with Git. Website hosting is a separate step. |

### What the form collects

| Field | Required? | Why it is collected |
| --- | --- | --- |
| First name | Yes | Identifies the person enquiring. |
| Last name | Yes | Completes their name. |
| Email | Yes | Matches the enquiry to a HubSpot contact. |
| Phone number | No | Gives an optional way to contact them. |
| Course interest | Yes | Records English, Maths, or Science. |

The form fields exist, but the live Make mapping is managed in Make. The repository does not contain a copy of that configuration. When testing, check that each value reaches the HubSpot property configured in Make, especially course interest.

### Why email matters

I already confirmed that submitting the same email updates the existing HubSpot contact.

Example: someone first enquires about English, then submits again with the same email and a different course interest. My automation should use that email to update the contact. I can check the mapped course property to confirm the change reached HubSpot.

A second form submission can still add another response row to Sheets. The create-or-update behaviour applies to the HubSpot contact; it does not mean there will be only one spreadsheet row per person.

## 3. Where the project lives

```text
tuition-crm-automation/
|-- index.html                       Homepage content
|-- styles.css                       Homepage appearance
|-- script.js                        Mobile menu and footer year
|-- assets/                          SVG illustration and favicon
|-- README.md                        Quick start and preview instructions
|-- WEBSITE_GUIDE.md                 Guide to the redesigned website
|-- PROJECT_WORKFLOW.md              This guide and learning roadmap
|-- PROJECT_PURPOSE_AND_PLAN.md      The problem, users, and next improvements
|-- apps-script/
|   |-- create-enquiry-form,gs        Existing form setup script
|-- .git/                            Git's checkpoint history
```

The form, response sheet, Make scenario, and HubSpot contacts live in their own online services. They are not stored inside `index.html`.

The Apps Script file is setup code. We are reusing the form that already works; creating another form is not part of the website lesson.

## 4. My learning roadmap

Each lesson should add one small feature, explain it, and end with a preview and a Git checkpoint.

| Step | Small task | Status | How I know it is finished |
| --- | --- | --- | --- |
| 1 | Test Forms -> Sheets -> Make -> HubSpot | Done, confirmed by me | Submitting the same email updates the existing contact. |
| 2 | Build the homepage | Code saved | Navigation, introduction, three course cards, and Enquire Now are present. |
| 3 | Change the homepage heading | Done | The saved heading says "Build confidence, one lesson at a time." |
| 4 | Embed my existing Google Form | Done, confirmed working by me | The actual form loads in the enquiry section, with a separate link as a fallback. |
| 5 | Test the enquiry from the website | Done, confirmed working by me | A test submission reaches Sheets, Make, and the intended HubSpot contact. |
| 6 | Add basic JavaScript | Code added | A mobile navigation toggle supports clicks, Escape, and returning to a wide layout. |
| 7 | Build the full portfolio website | Code added; layout review next | The fictional brand has courses, approach, FAQs, a responsive layout, and the existing form. |
| 8 | Upload code and publish the website | Later | The code is on GitHub and a hosted website URL works. |

The previous website-to-HubSpot journey is confirmed working by me. The redesigned page preserves that integration. Layout verification is separate from the automation test; use [WEBSITE_GUIDE.md](WEBSITE_GUIDE.md) to review the new page.

The course cards also have enquiry links that prefill the matching subject in a new tab. This uses normal HTML links. Test each selected course in the browser as described in the purpose-and-plan guide.

## 5. The working form connection

An **iframe** displays another webpage inside my page. Here it will display the Google Form, while Google continues to handle submissions.

### Get the correct link

An address ending in `/edit#responses` opens the editor. It is not the visitor embed address.

In my existing Google Form, open the three-dot **More** menu, choose **Embed HTML**, and copy the code. Another option is **Preview -> Copy responder link**. These steps follow [Google's form sharing and embedding instructions](https://support.google.com/docs/answer/2839588?hl=en).

### What changed in the code

1. The placeholder inside `id="enquiry"` in `index.html` was replaced with the actual iframe.
2. The iframe has a descriptive `title` so assistive tools can identify it.
3. CSS makes it fit the available page width, with more height on smaller screens.
4. A normal link opens the same responder form separately if needed.
5. The full journey was confirmed working before the website redesign.

The website displays the existing form. It does not need a second HTML submission form or direct calls to Make or HubSpot. An internet connection is required for the embedded Google Form to load.

The CSS styles the box around the iframe. To change the questions, required fields, or form theme, edit the existing form in Google Forms.

## 6. My everyday coding workflow

```text
Choose one small change
          |
          v
Edit the relevant file
          |
          v
Save with Ctrl+S
          |
          v
Refresh the browser with Ctrl+R
          |
          v
Check what changed and fix anything unexpected
          |
          v
Review the diff and save a Git commit
```

### Preview my website

1. Open this project folder in File Explorer.
2. Double-click `index.html` to open it in a browser.
3. After saving a code change, return to that browser tab and refresh it.
4. Make the window narrower to check the layout on a smaller screen.

I can also right-click a Markdown file in VS Code and choose **Open Preview** to read this guide with its formatting.

### Save a checkpoint

Run these commands from this project folder after a small change:

```powershell
git status
git diff
```

`git status` lists changed files. `git diff` shows the exact edits. After reviewing them, stage only the files I changed and create a commit. For example, after changing a course description:

```powershell
git add index.html
git commit -m "Update English course description"
git status
```

`git add` chooses what goes into the checkpoint. `git commit` saves it. A clean status means no uncommitted changes remain.

When I am ready to upload my commits to the configured GitHub remote:

```powershell
git push
```

Pushing code and publishing the website are separate actions. A local commit alone does not make a live website.

## 7. Test the full enquiry workflow after embedding

Use test details, as requested by the existing practice form. Keep real enquiries separate from this exercise.

1. Open the website and click **Enquire Now**.
2. Check that the form loads with first name, last name, email, optional phone, and course interest.
3. Submit a test enquiry with a new test email.
4. Check that a new response row appears in the existing Google Sheet.
5. Check that the existing Make scenario processes the response. The timing depends on its configured trigger and schedule.
6. Find the contact in HubSpot by email and inspect the mapped fields.
7. Submit again with the same email and a changed course interest.
8. Confirm that the same HubSpot contact is updated and that an extra contact for that email was not created.
9. Try leaving the optional phone field empty. Check how the current Make mapping handles that blank value rather than assuming it will preserve or clear a previous number.

Seeing the Google Form's confirmation message shows that Google received the response. Checking Sheets, Make, and HubSpot verifies the rest of the journey.

### If something does not work

| What I see | Where to start checking |
| --- | --- |
| My edited words do not appear | Save the file, refresh, and check that I opened this project's `index.html`. |
| The page has no styling | Check the `styles.css` filename and the stylesheet link in the HTML. |
| The form does not load | Try its responder link separately; check the form's publishing and responder access settings. |
| The form works but no Sheet row appears | Check the form's response destination. |
| A Sheet row exists but HubSpot has not changed | Check Make's run history, schedule, connections, and field mapping. |
| The same email creates another contact | Inspect the email value and the create-or-update logic in Make. |

## 8. My next practice task

Follow the small paragraph-edit exercise in [WEBSITE_GUIDE.md](WEBSITE_GUIDE.md). Save, refresh, check the result, and commit that one edit. This lets me practise without changing how submissions work.
