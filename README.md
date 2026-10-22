# ACT College · Student Projects

A static multi-page frontend made with HTML, CSS and JavaScript. No build step or backend.

## Public links

- Home: https://gabriel-cpu-del.github.io/act-student-projects/
- Student projects: https://gabriel-cpu-del.github.io/act-student-projects/projects.html

## Files

- `index.html` — Home.
- `projects.html` — project catalogue and category filtering.
- `project.html?id=campus-companion` — project details and gallery.
- `student.html?id=aram` — student profile.
- `admission.html`, `academia.html`, `partners.html`, `about.html`, `contact.html`,
  `portal.html`, `careers.html`, `store.html` — college information pages.
- `404.html` — missing-page message for GitHub Pages.
- `style.css` — shared, unchanged visual styles.
- `script.js` — sample students/projects, translations, gallery and shared menu behavior.
- `assets/` — images and the local font, including its license.

All HTML files use identical header and footer markup. Menu and external links open
in the same tab. The active menu item follows the current HTML page. Armenian and
English share the same page URLs; the selected language is stored in the browser.
Old `#/projects/...`, `#/project/...` and `#/student/...` links redirect to the new pages.

## Run locally

Open this folder in VS Code, then run in its terminal:

```bash
python3 -m http.server 8082 --bind 127.0.0.1
```

Open the address printed in the terminal. Public sharing uses the GitHub Pages links above.

## Content and data

The college pages contain short summaries based on https://www.actcollege.am/en
and its About, Admission, Academia, Partners, Contact and Store sections.
Each page links to the official source or existing service for full information.
Portal sign-in, job applications and orders remain on ACT's existing services.
No local login, payment, submission form, database or API is implemented.

At the beginning of `script.js`, `const students` and `const projects` contain demo
records. Match each project's `authors[].studentId` to a student's `id`.
Categories support multiple values; projects support multiple authors and images.
Replace the records with approved data later. Translation strings are in the same file.
