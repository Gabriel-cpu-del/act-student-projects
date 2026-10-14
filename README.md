# ACT Student Projects

A working frontend prototype made with HTML, CSS and JavaScript.

## Files

- `index.html` — page structure and file connections.
- `style.css` — appearance and responsive layouts.
- `script.js` — students, projects and website behavior.
- `assets/` — images and the local font.

## Run

Open the project folder in VS Code, open a terminal and run:

```bash
python3 -m http.server 8082 --bind 127.0.0.1
```

Open http://127.0.0.1:8082. Save changes and refresh the browser.

## Data

The beginning of `script.js` contains `const students` and `const projects`.
The records are examples, not real student information.

Each project has categories and authors. Each author's `studentId` matches a student's `id`.
One project can belong to several categories and appear in several student profiles without being copied.
An author's role, contribution and tools are stored inside that project's `authors` array.

`cover` is the card image. `images` contains additional pictures for the project gallery.
`year` is the creation year shown on the card. `links` contains public project or profile URLs.

## Features

Category filtering, Project Details, Project Team, Student Profiles, Back navigation,
an image gallery and layouts for computers, tablets and phones.

## Backend later

Backend, database, login and project submission are not included.
The backend developer can replace the sample arrays with approved API data while keeping the same fields and ID relationships.
API loading must finish before rendering pages. Endpoint names and portal rules will be agreed separately.

Rubik's font license is included in `assets/fonts/OFL.txt`.
