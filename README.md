# ACT Student Projects

[Open the website](https://gabriel-cpu-del.github.io/act-student-projects/)

A frontend prototype built with HTML, CSS and JavaScript.
The college menu opens official ACT pages in the same tab.

- `index.html` — page structure.
- `style.css` — design and mobile layouts.
- `script.js` — demo students, projects, translations and interactions.
- `assets/` — images and font files.

To run locally, open this folder in VS Code and use its terminal:

```bash
python3 -m http.server 8082 --bind 127.0.0.1
```

Demo data is at the beginning of `script.js`: `const students` and `const projects`.
No backend, database or login is included.
