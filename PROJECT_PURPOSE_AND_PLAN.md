# Why I am building this project

## The purpose in one sentence

Help a tuition centre collect clear course enquiries, keep the person's details organised, and give staff a reliable way to follow up.

My working assumption is a small tuition centre whose visitors include parents, guardians, and students. This is still a practice project. I will validate these assumptions with a real centre before adding features for its daily work.

The first useful result is already partly built: a visitor can find a course and submit the existing form, and my tested automation can create or update the HubSpot contact. The next business result to build is making sure that enquiry gets an owner and a next action.

## The real problems this could solve

These are problems to investigate with a centre, rather than claims about a centre I have already interviewed.

| Possible problem | What my project can do | Current state |
| --- | --- | --- |
| Staff copy enquiry details between tools | Send form responses through Sheets and Make to HubSpot | Existing automation tested by me |
| A visitor likes a subject but has to choose it again | Open the existing form with that course selected | Added to the three course cards |
| The same person ends up with duplicate contact records | Match the contact by email when creating or updating | Same-email update tested by me |
| An enquiry is captured but nobody follows up | Give it an owner, a status, and a next follow-up date | Proposed; not configured |
| A retry silently fails or creates work twice | Record processing results and recognise the same submission on retry | Proposed; not configured |
| The manager cannot tell which courses attract enquiries | Count individual submissions by course over an agreed period | Proposed; no reporting built |

The value is less manual copying, clearer enquiries, and fewer forgotten follow-ups. I have not measured time saved or increased enrolments yet.

## Who needs what?

| Person | Their main question | Useful behaviour |
| --- | --- | --- |
| Parent, guardian, or student | "Is this course relevant, and how do I ask about it?" | Clear subjects, accurate course information, and a short enquiry path |
| Centre administrator | "Who needs a reply, and what do they want?" | Course interest, contact details, owner, status, and next action together |
| Centre manager | "Are we responding, and what happens after enquiries?" | A view of unanswered enquiries, response time, and recorded outcomes |

A more professional website needs accurate real content as well as good styling. Before real use, get the centre's actual teaching levels, location or online format, fees, timetable, and contact details. Add these in small steps once confirmed. Do not invent schedules, testimonials, results, or response promises.

## What professional means for this project

1. **Clear:** visitors understand the subjects and the purpose of the enquiry.
2. **Useful:** staff can see what to do next after a submission.
3. **Reliable:** the team can spot and recover a failed automation run.
4. **Accurate:** the site only makes promises the centre can keep.
5. **Maintainable:** I can explain the code and change one feature at a time.

## The first improvement: course-specific enquiries

The course headings now say English, Maths, and Science directly. Each card has an enquiry link that opens the same Google Form with its subject prefilled. The general embedded form remains available below.

This reduces the work between choosing a course and sending an enquiry. Opening a separate tab also leaves any answers already typed in the embedded form intact.

This feature uses HTML links, not JavaScript. The query parameter `entry.184110074` identifies the existing Course interest question. If I replace that question or the form, I need to regenerate and retest the links. Google's [form sharing guide](https://support.google.com/docs/answer/2839588?hl=en) explains how to generate prefilled links through **More -> Pre-fill form**.

### Check this improvement

1. Open `index.html` and refresh the browser.
2. Click **Enquire about English** and check that English is selected.
3. Repeat for Maths and Science.
4. Check that the selection can still be changed before submission.
5. Check that the embedded form and general Enquire Now link still work.
6. Use the existing end-to-end checklist in [PROJECT_WORKFLOW.md](PROJECT_WORKFLOW.md#7-test-the-full-enquiry-workflow-after-embedding) before calling the website integration fully tested.

The three prefilled URLs have been checked against Google's returned form data. Visual browser checks and submission tests remain separate checks.

## How the enquiry process could grow

The capture stage exists. The follow-up stages below are a proposed staff process, not features already implemented.

```text
Visitor chooses a course
          |
          v
Existing form -> Sheets -> Make -> HubSpot contact
          |
          v
New enquiry gets an owner and a follow-up date [proposed]
          |
          v
Staff contacts the person and records the outcome [proposed]
          |
          v
Interested / Trial arranged / Enrolled / Closed [proposed]
```

Start with staff recording the next action manually. Once the process is useful, automate a small, well-defined part. HubSpot [tasks can be associated with contacts, assigned to a user, and given a due date](https://knowledge.hubspot.com/tasks/create-tasks). Account access and the existing Make connection still need checking before implementing task creation.

### Contact and enquiry are different things

A **contact** is a person. An **enquiry** is one request from that person.

One parent could ask about English today and Science next month, or ask on behalf of two children. Updating their contact's course interest may overwrite the previous value. Email matching helps avoid duplicate people, but it does not preserve every enquiry on the contact by itself.

For now, keep each response row in Sheets as the submission history. Before adding multi-course or multiple-student workflows, design a separate enquiry record linked to the contact. Confirm how the centre actually works before adding student fields.

### The minimum staff information to consider next

These are proposed fields to agree with the centre. They are not new fields in the current Google Form or HubSpot account.

| Information | Purpose |
| --- | --- |
| Submission identifier | Recognise this exact enquiry if Make retries processing it |
| Received time | Know how long it has been waiting |
| Contact reference | Link it to the right person |
| Course interest for this submission | Preserve what was asked about at that time |
| Enquiry status | See whether it is new, being followed up, or finished |
| Assigned staff member | Make responsibility clear |
| Next action and due time | Know what should happen next and when |
| Processing result | Find submissions that failed to reach HubSpot |

A repeat submission from the same email is a new enquiry. A retry of the same submission is the same enquiry being processed again. Those cases need different handling. A future retry check should use a stable submission identifier, rather than email alone.

## A realistic order for the next lessons

| Priority | One small step | Why it matters | Completion check |
| --- | --- | --- | --- |
| Now | Test the website-to-HubSpot journey | Confirms the whole system works together | A new test email creates a contact; the same email updates it; the course value arrives correctly |
| Next | Agree one follow-up process with a centre | Turns captured details into useful work | One example enquiry has an owner, status, and next action |
| Next | Record one follow-up task manually in HubSpot | Proves staff can use the process before automation | The task is linked to the correct contact with an agreed due time |
| Then | Add verified course details to the website | Helps visitors decide before enquiring | Real levels, format, and contact details have been checked with the centre |
| Then | Add one basic JavaScript feature, if needed | Practises interaction without changing submission handling | For example, a mobile menu works with keyboard and mouse |
| Later | Add a processing log and safe retry behaviour in Make | Makes failures visible and recoverable | Reprocessing one submission does not create duplicate work |
| Later | Separate enquiries from contacts | Supports repeat enquiries without losing history | Two requests from one email remain independently traceable |
| Later | Add a small operations report | Helps the centre improve its process | Totals reconcile with individual submissions and recorded outcomes |

I will keep using the current tools until a real limitation justifies another tool. Payments, attendance, and a parent portal are separate projects to consider only when the enquiry process is useful.

## How to know it is helping

Measure a starting point first; do not invent improvement percentages.

| Measure | What to count or compare |
| --- | --- |
| Successful processing | Submissions linked to a confirmed HubSpot result divided by valid submissions in the same period |
| Waiting enquiries | Enquiries that still need an initial staff response |
| Time to first response | Time from receipt to the first recorded human response |
| Enquiries by course | Individual submissions per course, using the submitted value rather than only the latest contact value |
| Enquiry outcomes | Recorded outcomes such as trial arranged or enrolled, using agreed definitions |

Contact creation alone does not prove a person was contacted or enrolled. These measures need the proposed follow-up records before they can be calculated reliably.

## Before using it with real enquiries

Replace sample content, complete the full journey test, and agree who will check new enquiries. Explain to visitors how their enquiry details will be used. Agree access and retention for the form responses and CRM records. Enquiring about a class should not silently sign someone up for unrelated marketing.

Keep enquiry details in the connected services rather than committing them to the code repository. These are preparation tasks; this prototype is not being presented as ready for a live centre yet.
