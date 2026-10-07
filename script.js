// All content is demo data. Student IDs connect projects to their creators.
const students = [
  {
    id: 'aram', name: 'Aram Petrosyan', initials: 'AP',
    faculty: 'Computer Science', course: 'Year 2',
    biography: 'Interested in web development, audio experiments and making everyday campus life easier.',
    links: [{ label: 'GitHub', icon: 'GH', url: 'https://example.com/aram-petrosyan/github' }]
  },
  {
    id: 'ani', name: 'Ani Harutyunyan', initials: 'AH',
    faculty: 'Digital Art', course: '2nd year',
    biography: 'Exploring typography, visual storytelling and thoughtful interfaces for creative communities.',
    links: [
      { label: 'Portfolio', icon: '↗', url: 'https://example.com/ani-harutyunyan/portfolio' },
      { label: 'Instagram', icon: 'IG', url: 'https://example.com/ani-harutyunyan/instagram' }
    ]
  },
  {
    id: 'davit', name: 'Davit Sargsyan', initials: 'DS',
    faculty: 'Engineering', course: 'Year 3',
    biography: 'Enjoys building modular prototypes and exploring practical uses for sensors and electronics.',
    links: []
  },
  {
    id: 'aram-khachatryan', name: 'Aram Khachatryan', initials: 'AK',
    faculty: 'Computer Science', course: '2nd year',
    biography: 'Interested in frontend development, web technologies and building useful digital products.',
    links: [
      { label: 'GitHub', icon: 'GH', url: 'https://example.com/aram-khachatryan/github' },
      { label: 'LinkedIn', icon: 'in', url: 'https://example.com/aram-khachatryan/linkedin' }
    ]
  }
];

const projects = [
  {
    id: 'campus-companion',
    title: 'Campus Companion',
    categories: ['Computer Science'],
    authors: [{ studentId: 'aram', role: 'Frontend development',
    description: 'Designed the class planner interface and developed its navigation and JavaScript interactions.',
    technologies: ['HTML', 'CSS', 'JavaScript'] }],
    year: '2026',
    visual: 'code',
    summary: 'A simpler way to plan your day on campus.',
    description: 'Campus Companion is a student-built interface for organizing classes, deadlines and study sessions. The project explores how a clear layout and small, thoughtful interactions can make a busy college day easier to navigate.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    reference: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    referenceLabel: 'JavaScript documentation'
  },
  {
    id: 'type-in-motion',
    title: 'Type in Motion',
    categories: ['Digital Art'],
    authors: [{ studentId: 'ani', role: 'Typography and visual design',
    description: 'Created the poster compositions, letterform studies and visual rhythm of the series.',
    technologies: ['Figma', 'Adobe Illustrator', 'Typography'] }],
    year: '2026',
    visual: 'art',
    summary: 'An exploration of letters, rhythm and visual expression.',
    description: 'Type in Motion explores Armenian-inspired typographic rhythms through an experimental poster series. Each composition studies the relationship between solid and outlined letterforms, negative space and movement.',
    technologies: ['Figma', 'Adobe Illustrator', 'Typography'],
    reference: 'https://help.figma.com/',
    referenceLabel: 'Figma documentation'
  },
  {
    id: 'modular-systems',
    title: 'Modular Systems',
    categories: ['Engineering'],
    authors: [{ studentId: 'davit', role: 'Engineering and prototyping',
    description: 'Designed the component connections and developed the prototype assembly plan.',
    technologies: ['CAD', 'Arduino', 'Prototyping'] }],
    year: '2026',
    visual: 'engineering',
    summary: 'Small modules. A smarter approach to building.',
    description: 'Modular Systems investigates how reusable components can simplify the design of classroom engineering kits. The student developed connection diagrams and a prototype assembly plan, comparing different arrangements for clarity and ease of use.',
    technologies: ['CAD', 'Arduino', 'Prototyping'],
    reference: 'https://docs.arduino.cc/',
    referenceLabel: 'Arduino documentation'
  },
  {
    id: 'sound-to-signal',
    title: 'Sound to Signal',
    categories: ['Computer Science'],
    authors: [{ studentId: 'aram', role: 'Audio visualization development',
    description: 'Developed the audio frequency mapping and responsive visualization experiments.',
    technologies: ['JavaScript', 'Web Audio', 'Canvas'] }],
    year: '2026',
    visual: 'network',
    summary: 'Turning everyday audio into visible patterns.',
    description: 'Sound to Signal is an experiment in audio visualization. It maps changes in audio frequency to a responsive bar display, helping students understand how digital signals can be represented through simple visual patterns.',
    technologies: ['JavaScript', 'Web Audio', 'Canvas'],
    reference: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
    referenceLabel: 'Web Audio documentation'
  },
  {
    id: 'shift-perspective',
    title: 'Shift Perspective',
    categories: ['Digital Art'],
    authors: [{ studentId: 'ani', role: 'Visual identity design',
    description: 'Created the layered typography, exhibition identity and interface assets.',
    technologies: ['Adobe Illustrator', 'Figma', 'Brand Design'] }],
    year: '2026',
    visual: 'motion',
    summary: 'A visual identity that sees things a little differently.',
    description: 'Shift Perspective is a fictional visual identity for a student creative exhibition. It uses layered typography and a warm, limited palette to explore depth, repetition and the energy of collaborative work.',
    technologies: ['Adobe Illustrator', 'Figma', 'Brand Design'],
    reference: 'https://helpx.adobe.com/illustrator/user-guide.html',
    referenceLabel: 'Illustrator documentation'
  },
  {
    id: 'energy-grid',
    title: 'Energy Grid',
    categories: ['Engineering'],
    authors: [{ studentId: 'davit', role: 'Circuit design and analysis',
    description: 'Developed the module layouts, sensor prototype and energy reading diagrams.',
    technologies: ['Arduino', 'Sensors', 'Circuit Design'] }],
    year: '2026',
    visual: 'energy',
    summary: 'Exploring more efficient ways to share energy.',
    description: 'Energy Grid is a classroom study of small-scale energy distribution. The project compares module layouts and presents readings as a simple grid, making energy flow easier to explain and discuss.',
    technologies: ['Arduino', 'Sensors', 'Circuit Design'],
    reference: 'https://docs.arduino.cc/',
    referenceLabel: 'Arduino documentation'
  },
  {
    id: 'act-creative-platform',
    title: 'ACT Creative Platform',
    categories: ['Computer Science', 'Digital Art'],
    authors: [
      {
        studentId: 'aram-khachatryan',
        role: 'Frontend developer',
        description: 'Developed the frontend functionality, page navigation, category filtering and JavaScript interactions.',
        technologies: ['HTML', 'CSS', 'JavaScript']
      },
      {
        studentId: 'ani',
        role: 'UI/UX and visual designer',
        description: 'Created the UI/UX concept, visual hierarchy, project card design and interface assets.',
        technologies: ['Figma', 'Illustrator', 'Photoshop']
      }
    ],
    year: '2026',
    visual: 'code',
    summary: 'A shared space for student creativity, built across disciplines.',
    description: 'ACT Creative Platform is a collaborative concept for showcasing student work. Aram translated the interface into responsive pages and interactive project browsing, while Ani shaped the visual experience. Together they explored how computer science and digital art can make creative work easier to discover.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Figma', 'Illustrator', 'Photoshop'],
    reference: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    referenceLabel: 'JavaScript documentation'
  }
];

const categories = ['All', 'Computer Science', 'Digital Art', 'Engineering'];
const main = document.querySelector('#main');
let previousRoute = null;

// Do not let the accessibility shortcut change the current page route.
document.querySelector('.skip-link').addEventListener('click', event => {
  event.preventDefault();
  main.focus();
  main.scrollIntoView();
});

function categoryClass(category) {
  return category.toLowerCase().replaceAll(' ', '-');
}

// These abstract placeholders use local HTML/CSS, so no image downloads are needed.
function projectVisual(project) {
  const designs = {
    code: '<div class="code-window"><div class="window-dots">● ● ●</div><div><b>const</b> idea = {<br>&nbsp; purpose: <b>"create"</b>,<br>&nbsp; potential: <b>Infinity</b><br>};<br><b>build</b>(idea);</div></div>',
    art: '<div class="art-type">TYPE<span>FORM</span></div>',
    engineering: '<div class="diagram"><span>01</span><span>02</span><span>03</span><span>04</span><span>05</span><span>06</span></div>',
    network: '<div class="wave">' + [24,42,65,48,90,110,70,44,85,112,76,52,30,56,35].map(height => `<i style="--height:${height}px"></i>`).join('') + '</div>',
    motion: '<div class="motion-type">SHIFT.</div>',
    energy: '<div class="energy-grid">' + Array.from({ length: 24 }, (_, index) => `<i style="--opacity:${0.25 + (index % 6) * 0.14}"></i>`).join('') + '</div>'
  };
  return `<div class="project-visual visual-${project.visual}" role="img" aria-label="${project.title}: abstract project placeholder"><span class="visual-index">ACT / STUDENT WORK</span><div aria-hidden="true">${designs[project.visual]}</div><span class="visual-caption">${project.categories.join(' / ').toUpperCase()} / ${project.year}</span></div>`;
}

function projectCategories(project) {
  return `<div class="project-categories">${project.categories.map(category =>
    `<span class="category ${categoryClass(category)}">${category}</span>`
  ).join('')}</div>`;
}

function projectCard(project) {
  const authorRows = project.authors.map(author => {
    const student = students.find(student => student.id === author.studentId);
    return `<div class="card-author"><span class="avatar" aria-hidden="true">${student.initials}</span>${student.name}<span>· ${student.course}</span></div>`;
  }).join('');

  return `<article class="project-card" data-project-id="${project.id}">
    ${projectVisual(project)}
    <div class="card-body">
      ${projectCategories(project)}
      <h3>${project.title}</h3><p>${project.summary}</p>
      <div class="card-authors">${authorRows}</div>
      <div class="card-bottom"><span>PROJECT / ${project.year}</span><a class="details-link" href="#project/${project.id}" aria-label="View Details: ${project.title}">View Details</a></div>
    </div>
  </article>`;
}

function breadcrumb(current) {
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="https://www.actcollege.am/hy">ACT College</a><span aria-hidden="true">/</span>${current ? `<a href="#projects">Student Projects</a><span aria-hidden="true">/</span><span>${current}</span>` : '<span>Student Projects</span>'}</nav>`;
}

function renderHome(selectedCategory) {
  const visibleProjects = projects.filter(project => selectedCategory === 'All' || project.categories.includes(selectedCategory));
  main.innerHTML = `${breadcrumb('')}
    <section class="hero" aria-labelledby="home-title">
      <div><div class="eyebrow">Made at ACT College</div><h1 id="home-title">Big ideas.<br><span class="highlight">Student made.</span></h1><p>Discover what happens when curiosity meets craft. Explore projects by the next generation of creators,<br class="desktop-break"> thinkers and builders at ACT.</p></div>
      <div class="hero-art" aria-hidden="true"><div class="orbit"></div><div class="orbit two"></div><div class="orbit three"></div><div class="art-core">{ ✳ }</div><span class="art-tag code">01 / CODE</span><span class="art-tag design">02 / DESIGN</span><span class="art-tag build">03 / BUILD</span><span class="art-caption">DIFFERENT DISCIPLINES. SHARED CURIOSITY.</span></div>
    </section>
    <section class="projects-section" aria-labelledby="projects-title">
      <div class="section-heading"><h2 id="projects-title">Explore projects</h2></div>
      <div class="filters" role="group" aria-label="Filter projects by category">${categories.map(category => `<button class="filter" data-category="${category}" aria-pressed="${category === selectedCategory}">${category}</button>`).join('')}</div>
      <div class="project-grid">${visibleProjects.map(projectCard).join('')}</div>
    </section>`;
  document.title = 'Student Projects | ACT College';
}

function backLinks() {
  return '<div class="back-row"><a href="#projects">Back to Projects</a><button type="button" data-back>Go Back</button></div>';
}

function teamMemberCard(author) {
  const student = students.find(student => student.id === author.studentId);
  return `<article class="creator" data-student-id="${student.id}">
    <div class="avatar" aria-hidden="true">${student.initials}</div>
    <h3>${student.name}</h3>
    <dl><dt>Faculty</dt><dd>${student.faculty}</dd><dt>Course</dt><dd>${student.course}</dd></dl>
    <a class="button" href="#student/${student.id}" aria-label="View Profile: ${student.name}">View Profile</a>
  </article>`;
}

function contributionCard(author) {
  const student = students.find(student => student.id === author.studentId);
  return `<article class="contribution">
    <h3>${student.name}</h3><p class="contribution-faculty">${student.faculty}</p>
    <h4>${author.role}</h4><p>${author.description}</p>
    <h4>Tools / Technologies</h4>
    <div class="technologies">${author.technologies.map(technology => `<span class="technology">${technology}</span>`).join('')}</div>
  </article>`;
}

function renderProject(project) {
  const teamBrief = project.authors.map(author => {
    const student = students.find(student => student.id === author.studentId);
    return `${student.name}, ${student.faculty}, ${student.course}\nRole: ${author.role}\nContribution: ${author.description}\nTools: ${author.technologies.join(', ')}`;
  }).join('\n\n');
  // The brief uses the same authors and contributions as the page.
  const brief = `${project.title}\n${project.categories.join(', ')}\n\n${project.description}\n\nTechnologies: ${project.technologies.join(', ')}\n\nProject Team\n${teamBrief}\n\nMock project for the ACT Student Projects frontend prototype.`;
  main.innerHTML = `${breadcrumb(project.title)}${backLinks()}
    <section class="detail-heading">${projectCategories(project)}<h1>${project.title}</h1><p>${project.summary}</p></section>
    <div class="detail-layout"><div><div class="detail-image">${projectVisual(project)}</div>
      <section class="detail-copy">
        <h2>About the project</h2><p>${project.description}</p>
        <h2>Contributions</h2><div class="contributions">${project.authors.map(contributionCard).join('')}</div>
        <h2>Technologies</h2><div class="technologies">${project.technologies.map(technology => `<span class="technology">${technology}</span>`).join('')}</div>
        <h2>Project links</h2><div class="link-group"><a class="button" href="data:text/plain;charset=utf-8,${encodeURIComponent(brief)}" download="${project.id}-brief.txt">Download project brief</a><a class="button secondary" href="${project.reference}">${project.referenceLabel}</a></div>
        <p class="link-note">Demo project. Live demos and source repositories will be added with real student work.</p>
      </section>
    </div><aside class="project-team" aria-labelledby="team-title"><h2 id="team-title">Project Team</h2><div class="team-members">${project.authors.map(teamMemberCard).join('')}</div></aside></div>`;
  document.title = `${project.title} | ACT College`;
}

function profileLinks(student) {
  if (!student.links.length) return '';
  return `<nav class="profile-links" aria-label="${student.name} external profile links">${student.links.map(link =>
    `<a class="profile-link" href="${link.url}" aria-label="${link.label} for ${student.name} (placeholder)"><span class="profile-link-icon" aria-hidden="true">${link.icon}</span>${link.label}</a>`
  ).join('')}</nav><p class="mock-note">Example profile links — placeholders for real student accounts.</p>`;
}

function renderStudent(student) {
  // Look up shared project objects by membership; never copy a project per student.
  const studentProjects = projects.filter(project =>
    project.authors.some(author => author.studentId === student.id)
  );
  main.innerHTML = `${breadcrumb('Student Profile')}${backLinks()}
    <section class="profile-header"><div class="avatar" aria-hidden="true">${student.initials}</div><div>
      <div class="eyebrow">Student Profile</div><h1>${student.name}</h1>
      <dl class="profile-facts"><div><dt>Faculty</dt><dd>${student.faculty}</dd></div><div><dt>Course</dt><dd>${student.course}</dd></div></dl>
      <p class="profile-biography">${student.biography}</p>${profileLinks(student)}
      <p class="mock-note">Sample student profile</p>
    </div></section>
    <section class="projects-section" aria-labelledby="student-projects-title"><div class="section-heading"><h2 id="student-projects-title">Projects involving ${student.name.split(' ')[0]}</h2></div><div class="project-grid">${studentProjects.map(projectCard).join('')}</div></section>`;
  document.title = `${student.name} | ACT College`;
}

function renderNotFound() {
  main.innerHTML = `${breadcrumb('Page not found')}<section class="empty-state"><h1>Page not found.</h1><p>This project or student is not in the demo collection.</p><a class="button" href="#projects">Back to Projects</a></section>`;
  document.title = 'Page not found | ACT College';
}

// Hash routes work even when index.html is opened directly, without a server.
// Filters are part of the URL, so browser Back restores the selected category.
function renderRoute() {
  const route = location.hash.slice(1) || 'projects';
  const [path, query = ''] = route.split('?');
  const [page, id] = path.split('/');
  const parameters = new URLSearchParams(query);
  const requestedCategory = parameters.get('category') || 'All';
  const selectedCategory = categories.includes(requestedCategory) ? requestedCategory : 'All';
  const previousPage = previousRoute?.split('?')[0];

  if (page === 'projects' && !id) renderHome(selectedCategory);
  else if (page === 'project') {
    const project = projects.find(project => project.id === id);
    project ? renderProject(project) : renderNotFound();
  } else if (page === 'student') {
    const student = students.find(student => student.id === id);
    student ? renderStudent(student) : renderNotFound();
  } else renderNotFound();

  if (previousRoute !== null) {
    if (previousPage === 'projects' && path === 'projects') {
      // Keep keyboard focus on the selected filter after the grid updates.
      main.querySelector(`[data-category="${selectedCategory}"]`).focus({ preventScroll: true });
    } else {
      window.scrollTo(0, 0);
      main.focus({ preventScroll: true });
    }
  }
  previousRoute = route;
}

// One listener handles controls in all three views, including re-rendered content.
main.addEventListener('click', event => {
  const filter = event.target.closest('[data-category]');
  if (filter) {
    const category = filter.dataset.category;
    location.hash = category === 'All' ? 'projects' : `projects?category=${encodeURIComponent(category)}`;
  }
  if (event.target.closest('[data-back]')) {
    // Direct links have no previous section page; use a predictable fallback.
    if (history.state?.actNavigationIndex > 0) history.back();
    else location.hash = 'projects';
  }
});

// Track section history without depending on history from unrelated websites.
let navigationIndex = history.state?.actNavigationIndex || 0;
history.replaceState({ ...history.state, actNavigationIndex: navigationIndex }, '');
window.addEventListener('popstate', () => {
  if (history.state?.actNavigationIndex !== undefined) navigationIndex = history.state.actNavigationIndex;
});
window.addEventListener('hashchange', () => {
  if (history.state?.actNavigationIndex === undefined) {
    navigationIndex += 1;
    history.replaceState({ actNavigationIndex: navigationIndex }, '');
  }
  renderRoute();
});
renderRoute();
