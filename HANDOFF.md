# Frontend handoff

## Delivered

Public Projects Home, category filtering, Project Details, Project Team, Student Profile, shared projects across multiple contributors/categories, Back navigation, responsive layouts and a manual image gallery.

Faculty colors: blue Computer Science, yellow Digital Art, lime Engineering and Manufacturing. Neutral text, local Rubik, compact cards and light transitions follow the visual direction of https://www.actcollege.am/hy. Separate pages with Back are intentionally retained; the college's certificate modal was not copied into profile navigation.

Latest fixes: card images fill their containers edge to edge; category badges stack independently on cards; the supplied ACT building image replaces the illustrated hero background. Full gallery images remain contained to avoid losing their content.

## Sample content

The four students and seven projects are fixtures from the earlier prototype, not production records. ACT Creative Platform illustrates two authors and two categories and contains a three-image demonstration gallery. Keep fixtures available for UI testing; replace their production source when the portal/API is integrated. The existing public renderer can be reused; deleting all frontend logic is not required.

## Verification

Check the current delivery in a browser: image loading and edge-to-edge card covers, stacked category badges, all contributor names, Created year, Faculty/Course, filters, Project → Profile → Back, direct URL refresh, gallery buttons/keyboard and unknown routes. Check desktop, tablet and 320 px mobile for horizontal overflow. Real-device touch behavior and integration with the college shell remain acceptance checks.

## Before production

Agree public fields, author confirmation, moderation and edit/delete permissions; replace demo records/media/links; connect the API; implement network states; integrate the ACT header/footer and isolate CSS/router behavior. The current release intentionally excludes backend, database, authentication and portal submission UI.

## Documents

- README.md: setup, files and existing behavior.
- FUTURE_API.md: proposed endpoints, data contract and integration requirements.
- data/students.json and data/projects.json: sample structures matching runtime data.js.

The current frontend stage can be reviewed independently while backend decisions are being finalized.
