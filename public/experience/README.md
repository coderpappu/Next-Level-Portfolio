# Experience photos

Each folder here (public/experience/) feeds the photo row under one role in the home page's
Experience section. Drop `.jpg`, `.jpeg`, `.png` or `.webp` files in and they
show up automatically, sorted by file name (prefix with `01-`, `02-`, … to
set the order). A folder with no photos shows no row.

| Folder           | Role                                |
| ---------------- | ----------------------------------- |
| `xceed/`         | Software Engineer, Xceed Bangladesh |
| `codex-devware/` | Founder & CEO, Codex Devware        |
| `research-lab/`  | Web Application Developer, Research Lab Chattogram |

Photos are never cropped: they share one height and keep their own width.
Keep each file around 800px tall or less so the page stays fast.

The folder for a role is set by `photoFolder` on that entry in
`src/white/data.js`. The list is read at build time, so rebuild after adding photos.
