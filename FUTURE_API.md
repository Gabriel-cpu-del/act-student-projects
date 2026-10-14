# Future API

**Status: proposed contract for discussion with the ACT portal/backend developer. No API endpoints below are implemented by this frontend.**

## Purpose

Replace the sample arrays with approved public data produced by the college's portal. Preserve the current browsing logic, stable IDs, categories and project-contributor relationships. Reuse existing portal authentication and permissions rather than introducing a separate login in this public section.

## Proposed public endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/api/categories` | Return the three supported disciplines |
| GET | `/api/projects?page=1&limit=12` | Return published projects across all disciplines |
| GET | `/api/projects?category=computer-science&page=1&limit=12` | Return projects attached to this category |
| GET | `/api/projects/:projectId` | Return one published project's complete details |
| GET | `/api/students/:studentId` | Return approved public profile fields |
| GET | `/api/students/:studentId/projects?page=1&limit=12` | Return published projects involving this student |

Category slugs: `computer-science`, `digital-art`, `engineering-and-manufacturing`. Display names: Computer Science, Digital Art, Engineering and Manufacturing. **All** is a UI filter, not a stored category. The current frontend uses display names; the future adapter must map API slugs to those names.

List responses:

```json
{
  "items": [],
  "page": 1,
  "limit": 12,
  "total": 0
}
```

Choose a stable default ordering, such as newest creation date first with an ID tie-breaker. Confirm actual pagination limits and URL structure with the existing backend. Match projects that contain the selected category; never duplicate a project per category or author.

## Student contract

```json
{
  "id": "ani",
  "name": "Ani Harutyunyan",
  "initials": "AH",
  "faculty": "Digital Art",
  "course": "Year 2",
  "biography": "Sample biography.",
  "links": []
}
```

The example is fictional. A future optional avatar needs a media URL and alt text. Expose only institution-approved public profile information; omit private account data and contact details. The frontend displays `Year 2` as Second Year and `Year 3` as Third Year.

## Project contract

```json
{
  "id": "act-creative-platform",
  "title": "ACT Creative Platform",
  "categories": ["Computer Science", "Digital Art"],
  "authors": [
    {
      "studentId": "aram-khachatryan",
      "role": "Frontend developer",
      "description": "Implemented the browsing interface.",
      "technologies": ["HTML", "CSS", "JavaScript"]
    },
    {
      "studentId": "ani",
      "role": "UI/UX designer",
      "description": "Created the visual concept.",
      "technologies": ["Figma"]
    }
  ],
  "year": "2026",
  "summary": "A short description for the project card.",
  "description": "Full project description in plain text.",
  "cover": {
    "src": "https://media.example.com/project-cover.jpg",
    "alt": "Overview of the project"
  },
  "images": [
    {
      "src": "https://media.example.com/project-detail.jpg",
      "alt": "Detailed project view"
    }
  ],
  "links": []
}
```

Media URLs above are examples, not working uploads. `cover` is the single card image and the first Details gallery image. `images` contains additional ordered images; avoid duplicating the cover. Empty `images` and `links` are valid.

`year` represents the creation year shown on cards. The backend may retain a full `createdAt` timestamp and derive the public year. Do not equate creation year with publication year without agreement.

Project ↔ Student and Project ↔ Category are many-to-many relations. Role, contribution description and tools belong to the project-author relation. Require at least one author and one allowed category; reject duplicate relations and unknown IDs. General project technologies can be included in description. The older fixture field `project.technologies` is optional legacy content and is not required by the current renderer.

The renderer joins author `studentId` to public Student records. A future API adapter must fetch/cache every referenced public student, or normalize expanded author records. Loading only one paginated student list is insufficient.

## Public behavior and validation

- Return only published/approved projects; unknown, deleted or non-public IDs return 404.
- Empty lists return 200 with empty items. Proposed error shape: `{"error":{"code":"NOT_FOUND","message":"Project not found"}}`.
- Validate field types/lengths, category values, unique/stable IDs, media references and author references. Set concrete length and media limits with the portal developer.
- Treat descriptions as plain text, or define a sanitized rich-text format explicitly. The current renderer escapes text.
- Allow HTTP/HTTPS external links; choose stricter link policies with ACT. Serve production media over HTTPS.
- Add API loading, empty, network-error/retry and pagination states when replacing static data. None of those network calls run in this prototype.
- Confirm API base URL, hosting/CORS, cache behavior and routing with the existing ACT website.

## Future portal submission workflow

The public frontend does not include Add Project, uploads, authentication or moderation. For the existing portal, discuss:

1. Which students can submit, edit or remove projects?
2. How are coauthors selected and their participation confirmed?
3. Who approves a project and its public student fields?
4. What image formats, sizes and maximum gallery count are allowed?
5. Which external links are permitted?
6. Do edits require renewed approval, and how are deleted/unpublished projects handled?

Possible portal endpoints, subject to agreement:

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/portal/projects` | Create a draft |
| PATCH | `/api/portal/projects/:id` | Edit a permitted draft/project |
| POST | `/api/portal/projects/:id/media` | Upload and validate media |
| POST | `/api/portal/projects/:id/submit` | Submit for approval |
| POST | `/api/moderation/projects/:id/approve` | Publish an approved submission |
| POST | `/api/moderation/projects/:id/reject` | Return it for correction |

Authorization, moderation and media storage belong on the existing backend. Endpoint names and workflow states remain proposals.

## Migration checklist

Keep fixtures for development; switch the production data source to the API after approval rules are defined. Normalize categories/course labels, resolve referenced students, retain one project identity, replace sample media and links, implement network states, and verify all current routes and responsive layouts with real content. Supply the portal developer with this document and the matching JSON fixtures under `data/`.
