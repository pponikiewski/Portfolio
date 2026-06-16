export const languages = ['pl', 'en'] as const

export type Lang = (typeof languages)[number]

export const content = {
  pl: {
    meta: {
      title: 'Piotr Ponikiewski - Full-stack Developer',
      description:
        'Portfolio full-stack developera budującego aplikacje webowe, desktopowe i narzędzia AI.',
    },
    nav: {
      projects: 'Projekty',
      process: 'Jak pracuję',
      stack: 'Stack',
      about: 'O mnie',
      contact: 'Kontakt',
      cv: 'Pobierz CV',
      language: 'EN',
      languageHref: '/en',
    },
    hero: {
      status: 'Otwarty na współpracę',
      name: 'Piotr Ponikiewski',
      handle: 'Full-stack Developer',
      lead: 'Studiuję informatykę i rozwijam się jako full-stack developer. Buduję własne projekty od zera: TypeScript, React, Supabase i trochę AI w codziennej pracy.',
      primaryCta: 'Zobacz projekty',
      secondaryCta: 'Napisz do mnie',
      location: 'Bielsko-Biała, 43-300 · Śląsk',
      interests: ['#technologia', '#kosmos', '#nauka', '#sport'],
      typingPhrases: [
        'offline-first sync z outboxem i LWW merge',
        'multi-tenant workspace, role i zaproszenia',
        'desktopowy budżet z SQLite i Drizzle ORM',
        'automatyczna rotacja tajemnic i testy e2e',
        'generator tokenów RPG z eksportem do PNG',
      ],
    },
    telemetry: {
      heading: '// system readout',
      rows: [
        { k: 'lokalizacja', v: 'Bielsko-Biała, Śląsk, PL' },
        { k: 'czas lokalny', v: '—', kind: 'clock' },
        { k: 'status', v: '● otwarty na pracę', kind: 'green' },
        { k: 'focus', v: 'full-stack · AI', kind: 'accent' },
        { k: 'stack', v: 'React · Tauri · Rust' },
        { k: 'projekty', v: '3+ wdrożone' },
      ],
    },
    projectsIntro: {
      kicker: 'Wybrane projekty',
      title: 'Nie tylko interfejsy. Kompletne systemy z realnym zakresem.',
      text:
        'Projekty pokazuje przez problem, decyzje techniczne i status. Screeny zostana podmienione po przygotowaniu finalnych materialow.',
    },
    projects: [
      {
        name: 'Tracker',
        status: 'Released',
        kind: 'Desktop / SaaS',
        description:
          'Desktopowa aplikacja do mierzenia czasu pracy w zespołach. Lokalna baza SQLite, synchronizacja z chmurą, workspace’y, role i auto-updater.',
        stack: ['Tauri 2', 'React 19', 'TypeScript', 'SQLite', 'Supabase', 'Rust'],
        highlights: [
          'Tryb offline-first z outboxem i scalaniem LWW',
          'Wiele workspace’ów, role i zaproszenia do zespołu',
          'Podpisany auto-updater i wydania przez GitHub Releases',
        ],
        links: [
          { label: 'GitHub', href: 'https://github.com/pponikiewski/tracker' },
          { label: 'Release', href: 'https://github.com/pponikiewski/tracker/releases/latest' },
        ],
      },
      {
        name: 'Róża Różańcowa',
        status: 'MVP / rozwijany',
        kind: 'Web / PWA',
        description:
          'Aplikacja webowa do zarządzania grupami Żywego Różańca: członkowie, roty tajemnic, intencje miesięczne, panel administratora i użytkownika.',
        stack: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PWA', 'Playwright'],
        highlights: [
          'Automatyczna rotacja tajemnic i logika pozycji w grupie',
          'Role, logowanie i bezpieczny dostęp przez RLS',
          'Architektura feature-based oraz testy jednostkowe i e2e',
        ],
        links: [
          { label: 'GitHub', href: 'https://github.com/pponikiewski/roza-rozancowa' },
        ],
      },
      {
        name: 'Budgie',
        status: 'In progress',
        kind: 'Desktop',
        description:
          'Desktopowa aplikacja do domowego budżetu: przychody, wydatki, kategorie i bilans na żywo. Dane trzymane lokalnie w SQLite, działa offline, bez konta.',
        stack: ['Tauri 2', 'React 19', 'TypeScript', 'SQLite', 'Drizzle ORM', 'Tailwind CSS v4'],
        highlights: [
          'Przychody i wydatki z kategoriami zależnymi od typu wpisu',
          'Bilans na żywo, filtrowanie po miesiącu i zestawienie według kategorii',
          'Lokalne dane w SQLite, działa offline, bez konta i bez serwera',
        ],
        links: [
          { label: 'GitHub', href: 'https://github.com/pponikiewski/budget' },
        ],
      },
    ],
    moreProjects: [
      {
        name: 'TokenForge',
        status: 'Released',
        kind: 'Web / Tool',
        description:
          'Przeglądarkowe narzędzie do tworzenia tokenów RPG i VTT: kształty, ramki dekoracyjne i eksport do PNG. Działa bez instalacji.',
        stack: ['React', 'TypeScript', 'Konva', 'Tailwind CSS'],
        highlights: [
          '7 stylów ramek i wiele kształtów tokenów',
          'Eksport PNG w wielu rozdzielczościach',
          'Dwujęzyczny interfejs (PL / EN)',
        ],
        links: [] as { label: string; href: string }[],
      },
    ],
    process: {
      kicker: 'Sposob pracy',
      title: 'Buduje od fundamentu, nie od przypadkowego ekranu.',
      items: [
        ['Architektura', 'Najpierw model danych, granice odpowiedzialnosci i przeplywy.'],
        ['Interfejs', 'UI traktuje jako narzedzie do pracy, nie tylko warstwe wizualna.'],
        ['Dane i sync', 'Uwzgledniam offline, konflikty, walidacje i bezpieczny dostep.'],
        ['Release', 'Interesuje mnie wdrozenie, dystrybucja, aktualizacje i utrzymanie.'],
      ],
    },
    stack: {
      kicker: 'Technologie z których korzystam',
      title: 'Stack dobrany pod produkt, nie pod liste modnych nazw.',
      groups: [
        {
          title: 'Frontend',
          items: ['React', 'TypeScript', 'Next.js', 'Astro', 'Tailwind'],
        },
        {
          title: 'Backend / API',
          items: ['Node.js', 'FastAPI', 'C# / .NET', 'REST API'],
        },
        {
          title: 'Bazy / Dane',
          items: ['PostgreSQL', 'SQLite', 'SQL', 'Supabase', 'RLS', 'Edge Functions'],
        },
        {
          title: 'Data / Analiza',
          items: ['Python', 'pandas', 'NumPy', 'Excel', 'Word'],
        },
        {
          title: 'Desktop',
          items: ['Tauri', 'Rust'],
        },
        {
          title: 'IT admin / Systemy',
          items: ['Linux', 'Bash', 'PowerShell', 'Windows'],
        },
        {
          title: 'DevOps / Testy',
          items: ['Git', 'GitHub Actions', 'Docker', 'Playwright'],
        },
        {
          title: 'AI',
          items: ['Claude Code', 'Codex', 'OpenRouter'],
        },
      ],
    },
    about: {
      kicker: 'O mnie',
      lead: 'Full-stack Developer',
      text:
        'Buduję aplikacje fullstack w TypeScript. Interesuję się AI i wdrażam ją w praktyce: automatyzacje, narzędzia wspomagające pracę, szybsze prototypowanie.',
      text2:
        'Chętnie sięgam po nowe rzeczy i staram się rozumieć to, czego używam. Poza kodem ciekawi mnie technologia, kosmos i nauka ogólnie.',
      facts: [
        ['Edukacja', 'Inżynier Informatyki, WSIiZ Bielsko-Biała (2021–2026)'],
        ['', 'Technik Informatyk, ZSEEiM Bielsko-Biała (2017–2021)'],
        ['Doświadczenie', 'Praktyka C# w Code Town · własne projekty full-stack'],
        ['Języki', 'Polski natywnie · Angielski C1 · Niemiecki A2'],
        ['Dostępność', 'Bielsko-Biała · otwarty na pracę hybrydową/zdalną'],
      ],
      looking: 'Szukam pierwszej pełnej roli: junior full-stack, frontend albo backend.',
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Masz rolę, projekt albo pomysł do sprawdzenia?',
      text:
        'Najprościej napisać maila albo złapać mnie na LinkedIn. CV jest dostępne w PDF.',
      email: 'p.ponikiewski7@gmail.com',
      github: 'GitHub',
      githubHref: 'https://github.com/pponikiewski',
      githubLabel: 'github.com/pponikiewski',
      linkedin: 'LinkedIn',
      linkedinHref: 'https://www.linkedin.com/in/piotr-ponikiewski-580679232/',
      linkedinLabel: 'in/piotr-ponikiewski',
      cv: 'Pobierz CV',
    },
  },
  en: {
    meta: {
      title: 'Piotr Ponikiewski - Full-stack Developer',
      description:
        'Portfolio of a full-stack developer building web apps, desktop products and AI tools.',
    },
    nav: {
      projects: 'Projects',
      process: 'Process',
      stack: 'Stack',
      about: 'About',
      contact: 'Contact',
      cv: 'Download CV',
      language: 'PL',
      languageHref: '/pl',
    },
    hero: {
      status: 'Open to collaboration',
      name: 'Piotr Ponikiewski',
      handle: 'Full-stack Developer',
      lead: 'I study computer science and develop as a full-stack developer. I build projects from scratch: TypeScript, React, Supabase and some AI in day-to-day work.',
      primaryCta: 'View projects',
      secondaryCta: 'Contact me',
      location: 'Bielsko-Biała, 43-300 · Silesia',
      interests: ['#technology', '#AI', '#gaming'],
      typingPhrases: [
        'offline-first sync with outbox and LWW merge',
        'multi-tenant workspaces, roles and invitations',
        'desktop budget app with SQLite and Drizzle ORM',
        'automatic mystery rotation and e2e tests',
        'RPG token generator with PNG export',
      ],
    },
    telemetry: {
      heading: '// system readout',
      rows: [
        { k: 'location', v: 'Bielsko-Biała, Silesia, PL' },
        { k: 'local time', v: '—', kind: 'clock' },
        { k: 'status', v: '● open to work', kind: 'green' },
        { k: 'focus', v: 'full-stack · AI', kind: 'accent' },
        { k: 'stack', v: 'React · Tauri · Rust' },
        { k: 'projects', v: '3+ shipped' },
      ],
    },
    projectsIntro: {
      kicker: 'Selected projects',
      title: 'Not only interfaces. Complete systems with real scope.',
      text:
        'Projects are presented through the problem, technical decisions and status. Screenshots will replace placeholders later.',
    },
    projects: [
      {
        name: 'Tracker',
        status: 'Released',
        kind: 'Desktop / SaaS',
        description:
          'A desktop time-tracking app for teams, with local SQLite storage, cloud sync, workspaces, roles and an auto-updater.',
        stack: ['Tauri 2', 'React 19', 'TypeScript', 'SQLite', 'Supabase', 'Rust'],
        highlights: [
          'Offline-first mirror with outbox and LWW merge',
          'Multi-tenant workspaces, roles and invite links',
          'Signed auto-updater and GitHub Releases delivery flow',
        ],
        links: [
          { label: 'GitHub', href: 'https://github.com/pponikiewski/tracker' },
          { label: 'Release', href: 'https://github.com/pponikiewski/tracker/releases/latest' },
        ],
      },
      {
        name: 'Roza Rozancowa',
        status: 'MVP / evolving',
        kind: 'Web / PWA',
        description:
          'A web app for managing Living Rosary groups: members, mystery rotation, monthly intentions, admin panel and user panel.',
        stack: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PWA', 'Playwright'],
        highlights: [
          'Automatic mystery rotation and group-position logic',
          'Roles, authentication and secure access through RLS',
          'Feature-based architecture with unit and e2e tests',
        ],
        links: [
          { label: 'GitHub', href: 'https://github.com/pponikiewski/roza-rozancowa' },
        ],
      },
      {
        name: 'Budgie',
        status: 'In progress',
        kind: 'Desktop',
        description:
          'A desktop personal budget app: income, expenses, categories and a live balance. Data stored locally in SQLite, works offline, no account needed.',
        stack: ['Tauri 2', 'React 19', 'TypeScript', 'SQLite', 'Drizzle ORM', 'Tailwind CSS v4'],
        highlights: [
          'Income and expense entries with type-dependent categories',
          'Live balance, month filtering and per-category breakdown',
          'Local SQLite storage, works offline, no account or server needed',
        ],
        links: [
          { label: 'GitHub', href: 'https://github.com/pponikiewski/budget' },
        ],
      },
    ],
    moreProjects: [
      {
        name: 'TokenForge',
        status: 'Released',
        kind: 'Web / Tool',
        description:
          'A browser-based tool for creating RPG and VTT tokens: shapes, decorative frames and PNG export. No installation required.',
        stack: ['React', 'TypeScript', 'Konva', 'Tailwind CSS'],
        highlights: [
          '7 frame styles and multiple token shapes',
          'PNG export at multiple resolutions',
          'Bilingual interface (PL / EN)',
        ],
        links: [] as { label: string; href: string }[],
      },
    ],
    process: {
      kicker: 'Process',
      title: 'I build from the foundation, not from a random screen.',
      items: [
        ['Architecture', 'Data model, responsibility boundaries and flows come first.'],
        ['Interface', 'UI is a working tool, not just a visual layer.'],
        ['Data and sync', 'I account for offline behavior, conflicts, validation and secure access.'],
        ['Release', 'Deployment, distribution, updates and maintenance matter.'],
      ],
    },
    stack: {
      kicker: 'Technologies I use',
      title: 'A stack selected for the product, not for a list of buzzwords.',
      groups: [
        {
          title: 'Frontend',
          items: ['React', 'TypeScript', 'Next.js', 'Astro', 'Tailwind'],
        },
        {
          title: 'Backend / API',
          items: ['Node.js', 'FastAPI', 'C# / .NET', 'REST API'],
        },
        {
          title: 'Databases / Data',
          items: ['PostgreSQL', 'SQLite', 'SQL', 'Supabase', 'RLS', 'Edge Functions'],
        },
        {
          title: 'Data / Analytics',
          items: ['Python', 'pandas', 'NumPy', 'Excel', 'Word'],
        },
        {
          title: 'Desktop',
          items: ['Tauri', 'Rust'],
        },
        {
          title: 'IT admin / Systems',
          items: ['Linux', 'Bash', 'PowerShell', 'Windows'],
        },
        {
          title: 'DevOps / Testing',
          items: ['Git', 'GitHub Actions', 'Docker', 'Playwright'],
        },
        {
          title: 'AI',
          items: ['Claude Code', 'Codex', 'OpenRouter'],
        },
      ],
    },
    about: {
      kicker: 'About',
      lead: 'Full-stack Developer',
      text:
        'I build fullstack apps in TypeScript. I use AI in practice: automation, dev tooling, faster prototyping.',
      text2:
        'I like picking up new things and try to understand what I use. Beyond code I am curious about technology, space and science in general.',
      facts: [
        ['Education', 'BEng Computer Science, WSIiZ Bielsko-Biała (2021–2026)'],
        ['', 'IT Technician, ZSEEiM Bielsko-Biała (2017–2021)'],
        ['Experience', 'C# at Code Town · own full-stack projects'],
        ['Languages', 'Polish native · English C1 · German A2'],
        ['Availability', 'Bielsko-Biała · open to hybrid/remote work'],
      ],
      looking: 'Looking for my first full role: junior full-stack, frontend or backend.',
    },
    contact: {
      kicker: 'Contact',
      title: 'Have a role, project or idea worth testing?',
      text:
        'The easiest way is to email me or reach out on LinkedIn. My CV is available as a PDF.',
      email: 'p.ponikiewski7@gmail.com',
      github: 'GitHub',
      githubHref: 'https://github.com/pponikiewski',
      githubLabel: 'github.com/pponikiewski',
      linkedin: 'LinkedIn',
      linkedinHref: 'https://www.linkedin.com/in/piotr-ponikiewski-580679232/',
      linkedinLabel: 'in/piotr-ponikiewski',
      cv: 'Download CV',
    },
  },
} as const

export type PageContent = (typeof content)[Lang]
