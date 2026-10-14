# ACT Student Projects

A responsive frontend prototype for the Student Projects section of ACT College. Built with HTML, CSS and vanilla JavaScript, without a build step or external runtime dependencies.

**Live preview:** https://gabriel-cpu-del.github.io/act-student-projects/

The prototype demonstrates the public browsing experience. Student identities, biographies, projects and project illustrations are sample content. The college banner uses the image supplied for this project. Backend, database, authentication, student submission and moderation are not implemented.

## Run locally

Open this project folder in VS Code, select **Terminal → New Terminal**, then run:

```bash
python3 -m http.server 8082 --bind 127.0.0.1
```

Open http://127.0.0.1:8082. If the port is already in use, select another port in both the command and URL. Save edits and refresh the browser; stop the server with Ctrl+C. No npm installation is required.

## Files

| File | Purpose |
|---|---|
| `index.html` | Section header, main container, footer and script/style loading |
| `style.css` | Responsive layouts, faculty colors, cards, transitions and gallery styling |
| `script.js` | Filters, pages, profiles, gallery and navigation |
| `data.js` | Runtime sample `students` and `projects` |
| `data/students.json`, `data/projects.json` | Matching data snapshots for developer handoff |
| `assets/act-college.jpg` | Supplied college banner image |
| `assets/*.svg` | Temporary project illustrations |
| `assets/fonts/` | Local Latin Rubik font and its SIL OFL license |
| `FUTURE_API.md` | Proposed data contract and backend requirements |
| `HANDOFF.md` | Scope, checks and integration checklist |

The running frontend reads **data.js**, not the JSON snapshots. Keep snapshots synchronized when changing fixtures for handoff.

## Pages and behavior

- Home: `#/projects/All`.
- Categories: All, Computer Science, Digital Art, Engineering and Manufacturing.
- Project: `#/project/act-creative-platform`.
- Student: `#/student/ani`.
- One project may have multiple categories and contributors. It is stored once and appears in every matching category and participant profile.
- All contributor names appear on a card, one per line. Faculty labels are stacked on cards to accommodate long names without shrinking text.
- Project Details includes About the project, Project Team, contributor roles/contributions/tools, optional public links and an image gallery.
- Student Profile includes biography, Faculty, Course, public links and participating projects.
- Back and browser Back/Forward restore the previous route, including the category filter. A direct entry without section history falls back to the full project list.
- On cards, the image fills its container edge to edge with `object-fit: cover`; cropping is intentional. The Details gallery uses `contain` to show the complete image.
- Gallery buttons and ArrowLeft/ArrowRight/Home/End keys browse images. Standard horizontal scrolling supports touch and trackpads. There is no autoplay. A single image hides unnecessary controls.

## Edit content

In `data.js`, each author has a `studentId` that matches a student `id`. Store contribution details on that project-author relationship, since a student may have different roles in different projects. Use stable IDs and the three allowed category names.

The card displays `Created` followed by `project.year`. It is a project creation year supplied by the data, not automatically the current year. Each project has one `cover` and an optional `images` array for additional gallery images:

```js
cover: { src: 'assets/project-cover.jpg', alt: 'Project overview' },
images: [
  { src: 'assets/project-detail.jpg', alt: 'Detailed view of the project' }
],
links: [
  { label: 'GitHub', url: 'https://github.com/your-account/your-project' }
]
```

Use real, approved links when available. Empty links show an empty state. Only HTTP/HTTPS links are rendered. The ACT Creative Platform fixture has three temporary illustrations to demonstrate the gallery.

The older `project.technologies` field remains in fixtures for compatibility but is not displayed as a separate project section. Contributor `authors[].technologies` is displayed in Project Team. General information can be included in the plain-text project description.

## Integration with ACT

The visual direction follows https://www.actcollege.am/hy: Rubik typography, neutral text, light card shadows and blue/yellow/lime faculty accents. The standalone header identifies the section; it does not add Home/About/account navigation.

When embedding, reuse the college's existing header/footer, isolate global CSS within the section and reconcile hash routing with the host site's router. The Latin font subset is suitable for the current English interface; Armenian content needs an appropriate font fallback or additional font coverage.

Replace fixture loading with an API data adapter that supplies the same relations. Add loading, error/retry, pagination and missing-data handling during that integration. Display only approved public projects and student fields. Keep this fixture version available for development until the API is connected.

GitHub Pages hosts the static prototype only. The future API belongs to the college's backend/portal infrastructure; see [Future API](FUTURE_API.md).

## Verification

Check All and each category, shared projects in both participant profiles, View Details → View Profile → Back, direct links and refresh, gallery navigation and unknown IDs. Test desktop/tablet/mobile and keyboard access. Recent browser checks cover 320 px and 768 px layouts and the main desktop flow; real-device touch testing remains part of acceptance.

See [Handoff](HANDOFF.md) for the delivery checklist. Rubik is distributed under the license in `assets/fonts/OFL.txt`.
