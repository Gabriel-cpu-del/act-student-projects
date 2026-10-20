// Sample students. Replace these records with real approved data later.
const students = [
  {
    id: "aram",
    name: "Aram Petrosyan",
    initials: "AP",
    faculty: "Computer Science",
    course: "Year 2",
    biography: "Interested in web development, audio experiments and making everyday campus life easier.",
    links: []
  },
  {
    id: "ani",
    name: "Ani Harutyunyan",
    initials: "AH",
    faculty: "Digital Art",
    course: "Year 2",
    biography: "Exploring typography, visual storytelling and thoughtful interfaces for creative communities.",
    links: []
  },
  {
    id: "davit",
    name: "Davit Sargsyan",
    initials: "DS",
    faculty: "Engineering and Manufacturing",
    course: "Year 3",
    biography: "Enjoys building modular prototypes and exploring practical uses for sensors and electronics.",
    links: []
  },
  {
    id: "aram-khachatryan",
    name: "Aram Khachatryan",
    initials: "AK",
    faculty: "Computer Science",
    course: "Year 2",
    biography: "Interested in frontend development, web technologies and building useful digital products.",
    links: []
  }
];

// Each author.studentId refers to a student.id above.
const projects = [
  {
    id: "campus-companion",
    title: "Campus Companion",
    categories: [
      "Computer Science"
    ],
    authors: [
      {
        studentId: "aram",
        role: "Frontend development",
        description: "Designed the class planner interface and developed its navigation and JavaScript interactions.",
        technologies: [
          "HTML",
          "CSS",
          "JavaScript"
        ]
      }
    ],
    year: "2026",
    summary: "A simpler way to plan your day on campus.",
    description: "Campus Companion is a student-built interface for organizing classes, deadlines and study sessions. The project explores how a clear layout and small, thoughtful interactions can make a busy college day easier to navigate.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    cover: {
      src: "assets/smart-campus.svg",
      alt: "Illustration of a campus planner interface"
    },
    images: [],
    links: []
  },
  {
    id: "type-in-motion",
    title: "Type in Motion",
    categories: [
      "Digital Art"
    ],
    authors: [
      {
        studentId: "ani",
        role: "Typography and visual design",
        description: "Created the poster compositions, letterform studies and visual rhythm of the series.",
        technologies: [
          "Figma",
          "Adobe Illustrator",
          "Typography"
        ]
      }
    ],
    year: "2026",
    summary: "An exploration of letters, rhythm and visual expression.",
    description: "Type in Motion explores Armenian-inspired typographic rhythms through an experimental poster series. Each composition studies the relationship between solid and outlined letterforms, negative space and movement.",
    technologies: [
      "Figma",
      "Adobe Illustrator",
      "Typography"
    ],
    cover: {
      src: "assets/colorful-minds.svg",
      alt: "Abstract shapes illustrating a visual design project"
    },
    images: [],
    links: []
  },
  {
    id: "modular-systems",
    title: "Modular Systems",
    categories: [
      "Engineering and Manufacturing"
    ],
    authors: [
      {
        studentId: "davit",
        role: "Engineering and prototyping",
        description: "Designed the component connections and developed the prototype assembly plan.",
        technologies: [
          "CAD",
          "Arduino",
          "Prototyping"
        ]
      }
    ],
    year: "2026",
    summary: "Small modules. A smarter approach to building.",
    description: "Modular Systems investigates how reusable components can simplify the design of classroom engineering kits. The student developed connection diagrams and a prototype assembly plan, comparing different arrangements for clarity and ease of use.",
    technologies: [
      "CAD",
      "Arduino",
      "Prototyping"
    ],
    cover: {
      src: "assets/autonomous-robot.svg",
      alt: "Illustration used as a placeholder for an engineering project"
    },
    images: [],
    links: []
  },
  {
    id: "sound-to-signal",
    title: "Sound to Signal",
    categories: [
      "Computer Science"
    ],
    authors: [
      {
        studentId: "aram",
        role: "Audio visualization development",
        description: "Developed the audio frequency mapping and responsive visualization experiments.",
        technologies: [
          "JavaScript",
          "Web Audio",
          "Canvas"
        ]
      }
    ],
    year: "2026",
    summary: "Turning everyday audio into visible patterns.",
    description: "Sound to Signal is an experiment in audio visualization. It maps changes in audio frequency to a responsive bar display, helping students understand how digital signals can be represented through simple visual patterns.",
    technologies: [
      "JavaScript",
      "Web Audio",
      "Canvas"
    ],
    cover: {
      src: "assets/colorful-minds.svg",
      alt: "Abstract visual placeholder for an audio visualization project"
    },
    images: [],
    links: []
  },
  {
    id: "shift-perspective",
    title: "Shift Perspective",
    categories: [
      "Digital Art"
    ],
    authors: [
      {
        studentId: "ani",
        role: "Visual identity design",
        description: "Created the layered typography, exhibition identity and interface assets.",
        technologies: [
          "Adobe Illustrator",
          "Figma",
          "Brand Design"
        ]
      }
    ],
    year: "2026",
    summary: "A visual identity that sees things a little differently.",
    description: "Shift Perspective is a fictional visual identity for a student creative exhibition. It uses layered typography and a warm, limited palette to explore depth, repetition and the energy of collaborative work.",
    technologies: [
      "Adobe Illustrator",
      "Figma",
      "Brand Design"
    ],
    cover: {
      src: "assets/colorful-minds.svg",
      alt: "Colorful abstract placeholder for a visual identity project"
    },
    images: [],
    links: []
  },
  {
    id: "energy-grid",
    title: "Energy Grid",
    categories: [
      "Engineering and Manufacturing"
    ],
    authors: [
      {
        studentId: "davit",
        role: "Circuit design and analysis",
        description: "Developed the module layouts, sensor prototype and energy reading diagrams.",
        technologies: [
          "Arduino",
          "Sensors",
          "Circuit Design"
        ]
      }
    ],
    year: "2026",
    summary: "Exploring more efficient ways to share energy.",
    description: "Energy Grid is a classroom study of small-scale energy distribution. The project compares module layouts and presents readings as a simple grid, making energy flow easier to explain and discuss.",
    technologies: [
      "Arduino",
      "Sensors",
      "Circuit Design"
    ],
    cover: {
      src: "assets/autonomous-robot.svg",
      alt: "Engineering illustration used as a placeholder for Energy Grid"
    },
    images: [],
    links: []
  },
  {
    id: "act-creative-platform",
    title: "ACT Creative Platform",
    categories: [
      "Computer Science",
      "Digital Art"
    ],
    authors: [
      {
        studentId: "aram-khachatryan",
        role: "Frontend developer",
        description: "Developed the frontend functionality, page navigation, category filtering and JavaScript interactions.",
        technologies: [
          "HTML",
          "CSS",
          "JavaScript"
        ]
      },
      {
        studentId: "ani",
        role: "UI/UX and visual designer",
        description: "Created the UI/UX concept, visual hierarchy, project card design and interface assets.",
        technologies: [
          "Figma",
          "Illustrator",
          "Photoshop"
        ]
      }
    ],
    year: "2026",
    summary: "A shared space for student creativity, built across disciplines.",
    description: "ACT Creative Platform is a collaborative concept for showcasing student work. Aram translated the interface into responsive pages and interactive project browsing, while Ani shaped the visual experience. Together they explored how computer science and digital art can make creative work easier to discover.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
      "Illustrator",
      "Photoshop"
    ],
    cover: {
      src: "assets/smart-campus.svg",
      alt: "Illustration of a collaborative student platform"
    },
    images: [
      {
        src: "assets/colorful-minds.svg",
        alt: "Abstract design illustration for the collaborative platform"
      },
      {
        src: "assets/task-manager.svg",
        alt: "Task checklist illustration for the collaborative platform"
      }
    ],
    links: []
  }
];

const categories = [
  "Computer Science",
  "Digital Art",
  "Engineering and Manufacturing"
];

// Page rendering, filtering and navigation.
// Interface and sample content translations. Data IDs and routes stay unchanged.
const armenianText = {
  'Home': 'Գլխավոր',
  'Admission': 'Ընդունելություն',
  'Portal': 'Պորտալ',
  'Academia': 'Ակադեմիա',
  'International Partners': 'Գործընկերներ',
  'About Us': 'Մեր Մասին',
  'Careers': 'Աշխատանք',
  'Contact Us': 'Կապ մեզ հետ',
  'Store': 'Խանութ',
  'Apply': 'Գրանցվել',
  'Menu': 'Մենյու',
  'College navigation': 'Քոլեջի նավարկում',
  'ACT College · Student Projects': 'ACT Քոլեջ · Ուսանողների նախագծեր',
  'Student Projects': 'Ուսանողների նախագծեր',
  'ACT · Student Projects': 'ACT · Ուսանողների նախագծեր',
  'Student work. Shared ideas.': 'Ուսանողների աշխատանքներ։ Համատեղ գաղափարներ։',
  'Skip to content': 'Անցնել բովանդակությանը',
  'Made by ACT students': 'Ստեղծված է ACT-ի ուսանողների կողմից',
  'Real Projects. Real Students.': 'Իրական նախագծեր։ Իրական ուսանողներ։',
  'Explore the creativity and innovation of ACT students.': 'Բացահայտեք ACT-ի ուսանողների ստեղծարարությունն ու նորարարությունը։',
  'All': 'Բոլորը',
  'Computer Science': 'Համակարգչային գիտություն',
  'Digital Art': 'Թվային արվեստ',
  'Engineering and Manufacturing': 'Ինժեներիա և արտադրություն',
  'View Details': 'Մանրամասներ',
  'View Profile': 'Դիտել պրոֆիլը',
  'Back': 'Հետ',
  'About the project': 'Նախագծի մասին',
  'Project Team': 'Նախագծի թիմը',
  'Project Links': 'Նախագծի հղումները',
  'Tools used by this contributor': 'Մասնակցի օգտագործած գործիքները',
  'Faculty': 'Ֆակուլտետ',
  'Course': 'Կուրս',
  'First Year': 'Առաջին կուրս',
  'Second Year': 'Երկրորդ կուրս',
  'Third Year': 'Երրորդ կուրս',
  'Fourth Year': 'Չորրորդ կուրս',
  'My Projects': 'Իմ նախագծերը',
  'No public links added yet.': 'Հրապարակային հղումներ դեռ չկան։',
  'No published projects yet.': 'Հրապարակված նախագծեր դեռ չկան։',
  'No projects in this category yet.': 'Այս կատեգորիայում նախագծեր դեռ չկան։',
  'Page not found': 'Էջը չի գտնվել',
  'This project or student is unavailable.': 'Այս նախագիծը կամ ուսանողի պրոֆիլը հասանելի չէ։',
  'Browse Projects →': 'Դիտել նախագծերը →',
  'Student projects': 'Ուսանողների նախագծեր',
  'Student project': 'Ուսանողական նախագիծ',
  'Filter by category': 'Զտել ըստ կատեգորիայի',
  'Project team and links': 'Նախագծի թիմը և հղումները',
  'Project images': 'Նախագծի պատկերներ',
  'Project images. Use left and right arrow keys to browse.': 'Նախագծի պատկերներ։ Թերթելու համար օգտագործեք ձախ և աջ սլաքները։',
  'Previous image': 'Նախորդ պատկերը',
  'Next image': 'Հաջորդ պատկերը',
  'carousel': 'պատկերների պատկերասրահ',
  'slide': 'պատկեր',
  'Aram Petrosyan': 'Արամ Պետրոսյան',
  'Ani Harutyunyan': 'Անի Հարությունյան',
  'Davit Sargsyan': 'Դավիթ Սարգսյան',
  'Aram Khachatryan': 'Արամ Խաչատրյան',
  'AP': 'ԱՊ', 'AH': 'ԱՀ', 'DS': 'ԴՍ', 'AK': 'ԱԽ',
  'Campus Companion': 'Քոլեջի ուղեկից',
  'Type in Motion': 'Տառերը շարժման մեջ',
  'Modular Systems': 'Մոդուլային համակարգեր',
  'Sound to Signal': 'Ձայնից ազդանշան',
  'Shift Perspective': 'Տեսանկյան փոփոխություն',
  'Energy Grid': 'Էներգետիկ ցանց',
  'ACT Creative Platform': 'ACT ստեղծարար հարթակ',
  'Interested in web development, audio experiments and making everyday campus life easier.': 'Հետաքրքրված եմ վեբ մշակմամբ, ձայնային փորձարկումներով և քոլեջի առօրյան ավելի հարմար դարձնելով։',
  'Exploring typography, visual storytelling and thoughtful interfaces for creative communities.': 'Ուսումնասիրում եմ տպագրական ձևավորումը, տեսողական պատմությունները և ստեղծարար համայնքների համար հարմար միջերեսները։',
  'Enjoys building modular prototypes and exploring practical uses for sensors and electronics.': 'Սիրում եմ կառուցել մոդուլային նախատիպեր և ուսումնասիրել սենսորների ու էլեկտրոնիկայի գործնական կիրառությունները։',
  'Interested in frontend development, web technologies and building useful digital products.': 'Հետաքրքրված եմ frontend մշակմամբ, վեբ տեխնոլոգիաներով և օգտակար թվային արտադրանքների ստեղծմամբ։',
  'A simpler way to plan your day on campus.': 'Քոլեջում ձեր օրը պլանավորելու ավելի պարզ միջոց։',
  'An exploration of letters, rhythm and visual expression.': 'Տառերի, ռիթմի և տեսողական արտահայտչության ուսումնասիրություն։',
  'Small modules. A smarter approach to building.': 'Փոքր մոդուլներ։ Կառուցման ավելի արդյունավետ մոտեցում։',
  'Turning everyday audio into visible patterns.': 'Առօրյա ձայների վերածումը տեսանելի պատկերների։',
  'A visual identity that sees things a little differently.': 'Տեսողական ինքնություն՝ իրերին այլ տեսանկյունից նայելու համար։',
  'Exploring more efficient ways to share energy.': 'Էներգիայի բաշխման ավելի արդյունավետ եղանակների ուսումնասիրություն։',
  'A shared space for student creativity, built across disciplines.': 'Ուսանողների ստեղծարարության ընդհանուր հարթակ՝ տարբեր մասնագիտությունների համագործակցությամբ։',
  'Campus Companion is a student-built interface for organizing classes, deadlines and study sessions. The project explores how a clear layout and small, thoughtful interactions can make a busy college day easier to navigate.': 'Քոլեջի ուղեկիցը ուսանողի ստեղծած միջերես է՝ դասերը, վերջնաժամկետները և ուսումնական աշխատանքը կազմակերպելու համար։ Նախագիծն ուսումնասիրում է, թե ինչպես կարող են պարզ կառուցվածքն ու հարմար փոխազդեցությունները հեշտացնել քոլեջի հագեցած առօրյան։',
  'Type in Motion explores Armenian-inspired typographic rhythms through an experimental poster series. Each composition studies the relationship between solid and outlined letterforms, negative space and movement.': 'Տառերը շարժման մեջ նախագիծը փորձարարական պաստառների շարքի միջոցով ուսումնասիրում է հայկական տառատեսակներից ներշնչված ռիթմերը։ Յուրաքանչյուր կոմպոզիցիա բացահայտում է հոծ և ուրվագծային տառերի, ազատ տարածության ու շարժման կապը։',
  'Modular Systems investigates how reusable components can simplify the design of classroom engineering kits. The student developed connection diagrams and a prototype assembly plan, comparing different arrangements for clarity and ease of use.': 'Մոդուլային համակարգեր նախագիծն ուսումնասիրում է, թե ինչպես կարող են բազմակի օգտագործման բաղադրիչները պարզեցնել ուսումնական ինժեներական հավաքածուների նախագծումը։ Ուսանողը մշակել է միացումների սխեմաներ և նախատիպի հավաքման պլան՝ համեմատելով տարբեր կառուցվածքների հստակությունն ու օգտագործման հարմարավետությունը։',
  'Sound to Signal is an experiment in audio visualization. It maps changes in audio frequency to a responsive bar display, helping students understand how digital signals can be represented through simple visual patterns.': 'Ձայնից ազդանշան նախագիծը ձայնի տեսողական ներկայացման փորձարկում է։ Այն ձայնային հաճախականության փոփոխությունները ներկայացնում է փոփոխվող սյունակներով՝ օգնելով ուսանողներին հասկանալ թվային ազդանշանների ներկայացումը պարզ տեսողական պատկերներով։',
  'Shift Perspective is a fictional visual identity for a student creative exhibition. It uses layered typography and a warm, limited palette to explore depth, repetition and the energy of collaborative work.': 'Տեսանկյան փոփոխությունը ուսանողական ստեղծարար ցուցահանդեսի համար նախատեսված օրինակային տեսողական ինքնություն է։ Այն օգտագործում է շերտավորված տառային ձևավորում և սահմանափակ տաք գունապնակ՝ ուսումնասիրելու խորությունը, կրկնությունն ու համատեղ աշխատանքի էներգիան։',
  'Energy Grid is a classroom study of small-scale energy distribution. The project compares module layouts and presents readings as a simple grid, making energy flow easier to explain and discuss.': 'Էներգետիկ ցանցը փոքր մասշտաբի էներգաբաշխման ուսումնական ուսումնասիրություն է։ Նախագիծը համեմատում է մոդուլների դասավորությունները և չափումները ներկայացնում պարզ ցանցով՝ հեշտացնելով էներգիայի հոսքի բացատրությունն ու քննարկումը։',
  'ACT Creative Platform is a collaborative concept for showcasing student work. Aram translated the interface into responsive pages and interactive project browsing, while Ani shaped the visual experience. Together they explored how computer science and digital art can make creative work easier to discover.': 'ACT ստեղծարար հարթակը ուսանողների աշխատանքները ներկայացնելու համատեղ գաղափար է։ Արամը մշակել է հարմարվող էջերն ու նախագծերի դիտման գործառույթները, իսկ Անին ձևավորել է տեսողական լուծումները։ Նրանք միասին ուսումնասիրել են, թե ինչպես կարող են համակարգչային գիտությունն ու թվային արվեստը հեշտացնել ստեղծարար աշխատանքների բացահայտումը։',
  'Frontend development': 'Frontend մշակում',
  'Typography and visual design': 'Տառային և տեսողական ձևավորում',
  'Engineering and prototyping': 'Ինժեներիա և նախատիպերի ստեղծում',
  'Audio visualization development': 'Ձայնի տեսողական ներկայացման մշակում',
  'Visual identity design': 'Տեսողական ինքնության ձևավորում',
  'Circuit design and analysis': 'Էլեկտրական սխեմաների նախագծում և վերլուծություն',
  'Frontend developer': 'Frontend մշակող',
  'UI/UX and visual designer': 'UI/UX և տեսողական դիզայներ',
  'Designed the class planner interface and developed its navigation and JavaScript interactions.': 'Նախագծել է դասերի պլանավորման միջերեսը, մշակել նավարկումը և JavaScript փոխազդեցությունները։',
  'Created the poster compositions, letterform studies and visual rhythm of the series.': 'Ստեղծել է պաստառների կոմպոզիցիաները, տառային ուսումնասիրությունները և շարքի տեսողական ռիթմը։',
  'Designed the component connections and developed the prototype assembly plan.': 'Նախագծել է բաղադրիչների միացումները և մշակել նախատիպի հավաքման պլանը։',
  'Developed the audio frequency mapping and responsive visualization experiments.': 'Մշակել է ձայնային հաճախականությունների ներկայացումը և փոփոխվող տեսողական փորձարկումները։',
  'Created the layered typography, exhibition identity and interface assets.': 'Ստեղծել է շերտավորված տառային ձևավորումը, ցուցահանդեսի ինքնությունը և միջերեսի նյութերը։',
  'Developed the module layouts, sensor prototype and energy reading diagrams.': 'Մշակել է մոդուլների դասավորությունները, սենսորի նախատիպը և էներգիայի չափումների գծապատկերները։',
  'Developed the frontend functionality, page navigation, category filtering and JavaScript interactions.': 'Մշակել է frontend գործառույթները, էջերի նավարկումը, կատեգորիաների զտումը և JavaScript փոխազդեցությունները։',
  'Created the UI/UX concept, visual hierarchy, project card design and interface assets.': 'Ստեղծել է UI/UX գաղափարը, տեսողական հիերարխիան, նախագծերի քարտերի դիզայնը և միջերեսի նյութերը։',
  'Typography': 'Տառային ձևավորում', 'Prototyping': 'Նախատիպերի ստեղծում',
  'Sensors': 'Սենսորներ', 'Brand Design': 'Բրենդի դիզայն', 'Circuit Design': 'Էլեկտրական սխեմաների նախագծում',
  'Illustration of a campus planner interface': 'Քոլեջի պլանավորման միջերեսի նկարազարդում',
  'Abstract shapes illustrating a visual design project': 'Տեսողական դիզայնի նախագիծ ներկայացնող վերացական պատկերներ',
  'Illustration used as a placeholder for an engineering project': 'Ինժեներական նախագծի օրինակային նկարազարդում',
  'Abstract visual placeholder for an audio visualization project': 'Ձայնի տեսողական ներկայացման նախագծի օրինակային պատկեր',
  'Colorful abstract placeholder for a visual identity project': 'Տեսողական ինքնության նախագծի գունավոր օրինակային պատկեր',
  'Engineering illustration used as a placeholder for Energy Grid': 'Էներգետիկ ցանցի օրինակային ինժեներական նկարազարդում',
  'Illustration of a collaborative student platform': 'Ուսանողական համատեղ հարթակի նկարազարդում',
  'Abstract design illustration for the collaborative platform': 'Համատեղ հարթակի դիզայնի վերացական նկարազարդում',
  'Task checklist illustration for the collaborative platform': 'Համատեղ հարթակի առաջադրանքների ցանկի նկարազարդում'
};

let language = 'hy';
try {
  const saved = localStorage.getItem('actLanguage');
  if (saved === 'en' || saved === 'hy') language = saved;
} catch { /* The switch also works when browser storage is unavailable. */ }

function translated(value) {
  if (language === 'en') return value;
  const original = value.trim();
  const text = original.replace(/\s+/g, ' ');
  let result = armenianText[text];
  if (result === undefined) {
    if (/^Created \d{4}$/.test(text)) result = text.replace('Created', 'Ստեղծվել է');
    else if (/^\d+ projects?$/.test(text)) result = text.replace(/projects?$/, 'նախագիծ');
    else if (/^Image \d+ of \d+$/.test(text)) result = text.replace(/^Image (\d+) of (\d+)$/, 'Պատկեր $1՝ $2-ից');
    else if (text.startsWith('Open ')) result = 'Բացել ' + (armenianText[text.slice(5)] || text.slice(5));
    else if (text.endsWith(' · ACT Student Projects')) result = (armenianText[text.slice(0, -' · ACT Student Projects'.length)] || text.slice(0, -' · ACT Student Projects'.length)) + ' · ACT Ուսանողների նախագծեր';
    else if (text === 'Page not found · ACT') result = 'Էջը չի գտնվել · ACT';
    else if (text.endsWith(' (opens in a new tab)')) result = text.replace(' (opens in a new tab)', ' (բացվում է նոր ներդիրում)');
    else if (text === 'Student Projects · ACT') result = 'Ուսանողների նախագծեր · ACT';
    else result = text;
  }
  return result === text ? value : value.replace(original, result);
}

// Round flags and a small menu for the other language.
function languageFlag(code) {
  if (code === 'hy') {
    return '<svg viewBox="0 0 60 60" aria-hidden="true"><path fill="#d90012" d="M0 0h60v20H0z"/><path fill="#0033a0" d="M0 20h60v20H0z"/><path fill="#f2a800" d="M0 40h60v20H0z"/></svg>';
  }
  const stripes = Array.from({length: 13}, (_, index) =>
    `<rect x="0" y="${index * 60 / 13}" width="60" height="${60 / 13 + .1}" fill="${index % 2 ? '#fff' : '#b22234'}"/>`
  ).join('');
  let stars = '';
  for (let row = 0; row < 9; row++) {
    const count = row % 2 ? 5 : 6;
    for (let column = 0; column < count; column++) {
      const x = 2.8 + column * 4.9 + (row % 2 ? 2.45 : 0);
      const y = 2.3 + row * 3.4;
      const points = Array.from({length: 10}, (_, point) => {
        const angle = -Math.PI / 2 + point * Math.PI / 5;
        const radius = point % 2 ? .65 : 1.6;
        return `${x + Math.cos(angle) * radius},${y + Math.sin(angle) * radius}`;
      }).join(' ');
      stars += `<polygon points="${points}" fill="#fff"/>`;
    }
  }
  return `<svg viewBox="0 0 60 60" aria-hidden="true">${stripes}<path fill="#3c3b6e" d="M0 0h32v32.31H0z"/>${stars}</svg>`;
}

function updateLanguageButton() {
  const other = language === 'hy' ? 'en' : 'hy';
  const toggle = document.querySelector('#language-toggle');
  const option = document.querySelector('#language-option');
  toggle.innerHTML = `<span class="flag-circle">${languageFlag(language)}</span>`;
  toggle.setAttribute('aria-label', language === 'hy' ? 'Հայերեն․ փոխել լեզուն' : 'English: change language');
  toggle.title = language === 'hy' ? 'Հայերեն' : 'English';
  option.innerHTML = `<span class="flag-circle">${languageFlag(other)}</span>`;
  option.dataset.language = other;
  option.setAttribute('aria-label', other === 'hy' ? 'Հայերեն' : 'English');
  option.title = other === 'hy' ? 'Հայերեն' : 'English';
}

function closeLanguageMenu(returnFocus = false) {
  document.querySelector('#language-menu').hidden = true;
  document.querySelector('#language-toggle').setAttribute('aria-expanded', 'false');
  if (returnFocus) document.querySelector('#language-toggle').focus({preventScroll:true});
}

function openLanguageMenu(focusOption = false) {
  document.querySelector('#language-menu').hidden = false;
  document.querySelector('#language-toggle').setAttribute('aria-expanded', 'true');
  if (focusOption) document.querySelector('#language-option').focus();
}

function applyLanguage() {
  document.documentElement.lang = language;
  updateLanguageButton();
  document.querySelectorAll('[data-translation]').forEach(element => {
    element.textContent = translated(element.dataset.translation);
  });
  document.querySelectorAll('[data-translation-label]').forEach(element => {
    element.setAttribute('aria-label', translated(element.dataset.translationLabel));
  });
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeValue.trim()) node.nodeValue = translated(node.nodeValue);
  }
  main.querySelectorAll('[aria-label], [alt], [aria-roledescription]').forEach(element => {
    for (const attribute of ['aria-label', 'alt', 'aria-roledescription']) {
      if (element.hasAttribute(attribute)) element.setAttribute(attribute, translated(element.getAttribute(attribute)));
    }
  });
  document.title = translated(document.title);
  document.querySelector('meta[name="description"]').content = language === 'hy'
    ? 'Բացահայտեք ACT-ի ուսանողների նախագծերը համակարգչային գիտության, թվային արվեստի և ինժեներիայի ոլորտներում։'
    : 'Explore creative and technical projects by ACT students.';
}

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
    if (status) status.textContent = translated(`Image ${index + 1} of ${slides.length}`);
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

  applyLanguage();
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

function changeLanguage(nextLanguage) {
  language = nextLanguage === 'en' ? 'en' : 'hy';
  closeLanguageMenu();
  try { localStorage.setItem('actLanguage', language); } catch {}
  restorePosition = window.scrollY;
  const oldTrack = main.querySelector('.gallery-track');
  const imageIndex = oldTrack ? Math.round(oldTrack.scrollLeft / oldTrack.clientWidth) : 0;
  render();
  requestAnimationFrame(() => {
    const track = main.querySelector('.gallery-track');
    if (track) track.scrollTo({left: imageIndex * track.clientWidth, behavior: 'instant'});
    document.querySelector('#language-toggle').focus({preventScroll:true});
  });
}

document.querySelector('#language-toggle').addEventListener('click', () => {
  const isOpen = !document.querySelector('#language-menu').hidden;
  if (isOpen) closeLanguageMenu();
  else openLanguageMenu();
});

document.querySelector('#language-option').addEventListener('click', event => {
  changeLanguage(event.currentTarget.dataset.language);
});

document.querySelector('.language-picker').addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    event.preventDefault();
    closeLanguageMenu(true);
  } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    openLanguageMenu(true);
  }
});

document.addEventListener('click', event => {
  if (!event.target.closest('.language-picker')) closeLanguageMenu();
});

document.querySelector('.language-picker').addEventListener('focusout', event => {
  if (!event.currentTarget.contains(event.relatedTarget)) closeLanguageMenu();
});

// College menu is a visual preview; project navigation remains in the catalogue.
const collegeMenuToggle = document.querySelector('#college-menu-toggle');
const collegeNavigation = document.querySelector('#college-navigation');

function closeCollegeMenu(returnFocus = false) {
  collegeMenuToggle.setAttribute('aria-expanded', 'false');
  collegeNavigation.classList.remove('is-open');
  if (returnFocus) collegeMenuToggle.focus();
}

collegeMenuToggle.addEventListener('click', () => {
  const open = collegeMenuToggle.getAttribute('aria-expanded') !== 'true';
  collegeMenuToggle.setAttribute('aria-expanded', String(open));
  collegeNavigation.classList.toggle('is-open', open);
});
document.querySelector('.college-header').addEventListener('keydown', event => {
  if (event.key === 'Escape' && collegeMenuToggle.getAttribute('aria-expanded') === 'true') {
    closeCollegeMenu(true);
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.college-header')) closeCollegeMenu();
});
document.querySelector('.college-logo').addEventListener('click', () => closeCollegeMenu());
window.matchMedia('(min-width: 1341px)').addEventListener('change', () => closeCollegeMenu());

restorePosition = history.state?.scrollY ?? 0;
render();
