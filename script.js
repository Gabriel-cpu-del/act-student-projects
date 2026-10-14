(() => {
  'use strict';

  const { students, projects, categories } = window.ACT_DATA;
  const main = document.querySelector('#main');

  const studentsById = new Map(
    students.map(student => [student.id, student])
  );

  // Подготавливаем текст для безопасного вывода в HTML.
  function escape(value) {
    return String(value ?? '').replace(/[&<>"']/g, character => {
      const replacements = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      };

      return replacements[character];
    });
  }

  function route(type, id) {
    return `#/${type}/${encodeURIComponent(id)}`;
  }

  function categoryClass(name) {
    const classes = {
      'Computer Science': 'cs',
      'Digital Art': 'art',
      'Engineering and Manufacturing': 'eng'
    };

    return classes[name] || '';
  }

  function badges(list) {
    return `
      <div class="badges">
        ${list.map(name => `
          <span class="badge ${categoryClass(name)}">
            ${escape(name)}
          </span>
        `).join('')}
      </div>
    `;
  }

  function tools(list) {
    return `
      <div class="tools">
        ${list.map(name => `
          <span class="tool">${escape(name)}</span>
        `).join('')}
      </div>
    `;
  }

  function avatar(student, extraClass = '') {
    return `
      <span class="avatar ${extraClass}" aria-hidden="true">
        ${escape(student.initials)}
      </span>
    `;
  }

  // Показываем только корректные HTTP/HTTPS-ссылки.
  function safeUrl(raw) {
    try {
      const url = new URL(raw);

      if (['http:', 'https:'].includes(url.protocol)) {
        return url.href;
      }
    } catch {
      return null;
    }

    return null;
  }

  function links(items) {
    const validLinks = items
      .map(item => ({
        ...item,
        url: safeUrl(item.url)
      }))
      .filter(item => item.url);

    if (!validLinks.length) {
      return '<p class="meta">No public links added yet.</p>';
    }

    return `
      <div class="external-links">
        ${validLinks.map(item => `
          <a
            class="button-link"
            href="${escape(item.url)}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="${escape(item.label)} (opens in a new tab)"
          >
            ${escape(item.label)}
            <span aria-hidden="true">↗</span>
          </a>
        `).join('')}
      </div>
    `;
  }

  // Одна карточка используется на главной и в профилях.
  function projectCard(project) {
    const team = project.authors
      .map(author => studentsById.get(author.studentId))
      .filter(Boolean);

    const projectRoute = route('project', project.id);

    return `
      <article class="project-card">
        <a
          class="card-cover"
          href="${projectRoute}"
          aria-label="Open ${escape(project.title)}"
        >
          <img
            src="${escape(project.cover.src)}"
            alt="${escape(project.cover.alt)}"
            loading="lazy"
            width="800"
            height="500"
          >
        </a>

        <div class="card-body">
          ${badges(project.categories)}

          <h3>
            <a href="${projectRoute}">
              ${escape(project.title)}
            </a>
          </h3>

          <p class="summary">${escape(project.summary)}</p>

          <div class="card-authors">
            ${team.map(student => `
              <div class="card-author">
                ${avatar(student)}
                <a href="${route('student', student.id)}">${escape(student.name)}</a>
              </div>
            `).join('')}
          </div>

          <div class="card-bottom">
            <span class="created">Created ${escape(project.year)}</span>
            <a class="text-link" href="${projectRoute}">
              View Details <span aria-hidden="true">&nbsp;→</span>
            </a>
          </div>
        </div>
      </article>
    `;
  }

  const backButton = `
    <button type="button" class="back" data-back>
      <span aria-hidden="true">←</span>
      Back
    </button>
  `;

  // Главная страница и фильтрация категорий.
  function renderHome(category) {
    const selected = categories.includes(category)
      ? category
      : 'All';

    const visibleProjects = projects.filter(project =>
      selected === 'All' || project.categories.includes(selected)
    );

    document.title = 'Student Projects · ACT';

    main.innerHTML = `
      <section class="hero">
        <div class="container">
          <p class="eyebrow">Made by ACT students</p>
          <h1>Real Projects. Real Students.</h1>
          <p>
            Explore the creativity and innovation of ACT students.
          </p>
        </div>
      </section>

      <section class="container catalog" aria-label="Student projects">
        <div class="catalog-toolbar">
          <div
            class="filters"
            role="group"
            aria-label="Filter by category"
          >
            ${['All', ...categories].map(name => `
              <button
                type="button"
                class="filter"
                data-category="${escape(name)}"
                aria-pressed="${name === selected}"
              >
                ${escape(name)}
              </button>
            `).join('')}
          </div>

          <p class="count" role="status">
            ${visibleProjects.length}
            ${visibleProjects.length === 1 ? 'project' : 'projects'}
          </p>
        </div>

        ${visibleProjects.length
          ? `
            <div class="grid">
              ${visibleProjects.map(projectCard).join('')}
            </div>
          `
          : '<p class="empty">No projects in this category yet.</p>'
        }
      </section>
    `;
  }

  function teamMember(author) {
    const student = studentsById.get(author.studentId);

    if (!student) {
      return '';
    }

    return `
      <article class="team-member">
        <div class="person-row">
          ${avatar(student)}

          <div>
            <h3>${escape(student.name)}</h3>
            <span class="badge ${categoryClass(student.faculty)}">${escape(student.faculty)}</span>
            <p class="person-course">${escape(courseName(student.course))}</p>
          </div>
        </div>

        <p class="role">${escape(author.role)}</p>

        <p class="contribution">
          ${escape(author.description)}
        </p>

        <p class="tools-label">Tools used by this contributor</p>
        ${tools(author.technologies)}

        <a
          class="button-link"
          href="${route('student', student.id)}"
        >
          View Profile
          <span aria-hidden="true">→</span>
        </a>
      </article>
    `;
  }

  function courseName(value) {
    return ({ 'Year 1': 'First Year', 'Year 2': 'Second Year', 'Year 3': 'Third Year', 'Year 4': 'Fourth Year' })[value] || value;
  }

  function projectGallery(project) {
    const images = [project.cover, ...(project.images || [])];
    return `
      <section class="project-gallery" role="region" aria-roledescription="carousel" aria-label="Project images">
        <div class="gallery-track" tabindex="0" aria-label="Project images. Use left and right arrow keys to browse.">
          ${images.map((image, index) => `
            <figure class="gallery-slide" role="group" aria-roledescription="slide" aria-label="Image ${index + 1} of ${images.length}">
              <img src="${escape(image.src)}" alt="${escape(image.alt)}" width="800" height="500" loading="${index ? 'lazy' : 'eager'}">
            </figure>
          `).join('')}
        </div>
        ${images.length > 1 ? `
          <div class="gallery-controls">
            <button type="button" data-gallery-step="-1" aria-label="Previous image" disabled>←</button>
            <p class="gallery-status" role="status" aria-live="polite">Image 1 of ${images.length}</p>
            <button type="button" data-gallery-step="1" aria-label="Next image">→</button>
          </div>
        ` : ''}
      </section>
    `;
  }

  function initialiseGallery() {
    const gallery = main.querySelector('.project-gallery');
    if (!gallery) return;
    const track = gallery.querySelector('.gallery-track');
    const slides = track.querySelectorAll('.gallery-slide');
    const previous = gallery.querySelector('[data-gallery-step="-1"]');
    const next = gallery.querySelector('[data-gallery-step="1"]');
    const status = gallery.querySelector('.gallery-status');
    const update = () => {
      const index = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / (track.clientWidth || 1))));
      if (previous) previous.disabled = index === 0;
      if (next) next.disabled = index === slides.length - 1;
      if (status) status.textContent = `Image ${index + 1} of ${slides.length}`;
    };
    const move = index => {
      const bounded = Math.max(0, Math.min(slides.length - 1, index));
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      track.scrollTo({ left: bounded * track.clientWidth, behavior: reducedMotion ? 'instant' : 'smooth' });
    };
    track.addEventListener('scroll', update, { passive: true });
    gallery.addEventListener('click', event => {
      const button = event.target.closest('[data-gallery-step]');
      if (button) move(Math.round(track.scrollLeft / track.clientWidth) + Number(button.dataset.galleryStep));
    });
    track.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const current = Math.round(track.scrollLeft / track.clientWidth);
      move(event.key === 'Home' ? 0 : event.key === 'End' ? slides.length - 1 : current + (event.key === 'ArrowRight' ? 1 : -1));
    });
    update();
  }

  // Полная страница проекта.
  function renderProject(project) {
    document.title = `${project.title} · ACT Student Projects`;

    main.innerHTML = `
      <div class="container page">
        ${backButton}

        <header class="page-heading">
          <h1>${escape(project.title)}</h1>

          ${badges(project.categories)}

          <p class="meta">
            Created ${escape(project.year)}
          </p>
        </header>

        <div class="detail-layout">
          <div>
            ${projectGallery(project)}

            <section class="content-section">
              <h2>About the project</h2>
              <p class="prose">${escape(project.description)}</p>
            </section>

          </div>

          <aside aria-label="Project team and links">
            <section class="panel">
              <h2>Project Team</h2>
              ${project.authors.map(teamMember).join('')}
            </section>

            <section class="panel">
              <h2>Project Links</h2>
              ${links(project.links)}
            </section>
          </aside>
        </div>
      </div>
    `;
  }

  // Профиль показывает проекты, где студент указан участником.
  function renderStudent(student) {
    const studentProjects = projects.filter(project =>
      project.authors.some(author => author.studentId === student.id)
    );

    document.title = `${student.name} · ACT Student Projects`;

    main.innerHTML = `
      <div class="container page">
        ${backButton}

        <header class="profile-header">
          ${avatar(student, 'large')}

          <div class="profile-info">
            <h1>${escape(student.name)}</h1>

            <dl class="profile-facts">
              <div>
                <dt>Faculty</dt>
                <dd><span class="badge ${categoryClass(student.faculty)}">${escape(student.faculty)}</span></dd>
              </div>
              <div>
                <dt>Course</dt>
                <dd>${escape(courseName(student.course))}</dd>
              </div>
            </dl>

            <p class="prose">${escape(student.biography)}</p>

            ${links(student.links)}
          </div>
        </header>

        <section aria-label="Student projects">
          <h2>
            My Projects
            <span class="meta">(${studentProjects.length})</span>
          </h2>

          ${studentProjects.length
            ? `
              <div class="grid">
                ${studentProjects.map(projectCard).join('')}
              </div>
            `
            : '<p class="empty">No published projects yet.</p>'
          }
        </section>
      </div>
    `;
  }

  function renderNotFound() {
    document.title = 'Page not found · ACT';

    main.innerHTML = `
      <div class="container page">
        <h1>Page not found</h1>
        <p class="prose">
          This project or student is unavailable.
        </p>

        <a class="button-link" href="#/projects/All">
          Browse Projects →
        </a>
      </div>
    `;
  }

  // История переходов и восстановление положения страницы.
  let restorePosition = null;
  let filterToFocus = null;
  let animationFrame = 0;
  let renderedHash = null;

  function savePosition() {
    history.replaceState(
      {
        ...history.state,
        actApp: true,
        scrollY: window.scrollY
      },
      ''
    );
  }

  function navigate(hash) {
    savePosition();

    history.pushState(
      {
        actApp: true,
        actDepth: (history.state?.actDepth || 0) + 1,
        scrollY: 0
      },
      '',
      hash
    );

    render();
  }

  function render() {
    renderedHash = location.hash;
    cancelAnimationFrame(animationFrame);
    main.classList.remove('page-enter');

    let parts;

    try {
      parts = location.hash
        .replace(/^#\/?/, '')
        .split('/')
        .map(decodeURIComponent);
    } catch {
      parts = ['invalid'];
    }

    if (!parts[0] || parts[0] === 'projects') {
      renderHome(parts[1]);
    } else if (parts[0] === 'project') {
      const project = projects.find(item => item.id === parts[1]);

      if (project) {
        renderProject(project);
      } else {
        renderNotFound();
      }
    } else if (parts[0] === 'student') {
      const student = studentsById.get(parts[1]);

      if (student) {
        renderStudent(student);
      } else {
        renderNotFound();
      }
    } else {
      renderNotFound();
    }

    initialiseGallery();
    if (!filterToFocus) {
      main.classList.remove('page-enter');
      void main.offsetWidth;
      main.classList.add('page-enter');
    }
    animationFrame = requestAnimationFrame(() => {
      if (filterToFocus) {
        const filter = [...main.querySelectorAll('[data-category]')]
          .find(button => button.dataset.category === filterToFocus);

        filter?.focus({ preventScroll: true });
        filterToFocus = null;
      } else {
        main.focus({ preventScroll: true });
      }

      window.scrollTo(0, restorePosition ?? 0);
      restorePosition = null;
    });
  }

  // Кнопки и ссылки всех страниц.
  main.addEventListener('click', event => {
    const filter = event.target.closest('[data-category]');

    if (filter) {
      if (filter.getAttribute('aria-pressed') === 'true') {
        return;
      }

      filterToFocus = filter.dataset.category;

      navigate(route('projects', filter.dataset.category));
      return;
    }

    if (event.target.closest('[data-back]')) {
      if (history.state?.actDepth > 0) {
        history.back();
      } else {
        navigate('#/projects/All');
      }

      return;
    }

    const anchor = event.target.closest('a[href^="#/"]');

    if (
      anchor &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.shiftKey &&
      !event.altKey &&
      event.button === 0
    ) {
      event.preventDefault();
      navigate(anchor.getAttribute('href'));
    }
  });

  // Ссылка для клавиатурной навигации не меняет страницу.
  document.querySelector('.skip-link').addEventListener('click', event => {
    event.preventDefault();
    main.focus({ preventScroll: true });
    main.scrollIntoView();
  });

  history.scrollRestoration = 'manual';

  if (!history.state?.actApp) {
    history.replaceState(
      {
        actApp: true,
        actDepth: 0,
        scrollY: 0
      },
      ''
    );
  }

  window.addEventListener('popstate', () => {
    restorePosition = history.state?.scrollY ?? 0;
    render();
  });

  window.addEventListener('hashchange', () => {
    if (location.hash !== renderedHash) {
      render();
    }
  });

  window.addEventListener('pagehide', savePosition);

  restorePosition = history.state?.scrollY ?? 0;
  render();
})();
