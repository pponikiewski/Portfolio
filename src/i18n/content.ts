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
      lead: 'Buduję aplikacje webowe, desktopowe i narzędzia AI. Lubię prowadzić projekt w całości: dane, logika, interfejs i wdrożenie.',
      primaryCta: 'Zobacz projekty',
      secondaryCta: 'Napisz do mnie',
      location: 'Bielsko-Biała, 43-300 · Śląsk',
      interests: ['#technologia', '#AI', '#gaming'],
      typingPhrases: [
        'offline-first sync z outboxem i LWW merge',
        'multi-tenant workspace, role i zaproszenia',
        'streaming AI dla prompt optimizera',
        'signed auto-updater przez GitHub Releases',
        'architektura feature-based z testami e2e',
      ],
    },
    telemetry: {
      heading: '// system readout',
      rows: [
        { k: 'lokalizacja', v: 'Bielsko-Biała, Śląsk, PL' },
        { k: 'czas lokalny', v: '—', kind: 'clock' },
        { k: 'status', v: '● otwarty na pracę', kind: 'green' },
        { k: 'focus', v: 'full-stack · AI · Big data', kind: 'accent' },
        { k: 'stack', v: 'React · Tauri · Rust' },
        { k: 'projekty', v: '3 wdrożone' },
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
        name: 'Deep Prompt',
        status: 'In progress',
        kind: 'AI / Education',
        description:
          'Polska platforma edukacyjna o prompt engineeringu. Lekcje w MDX, interaktywne moduły i narzędzia AI do optymalizacji promptów.',
        stack: ['Next.js 16', 'TypeScript', 'MDX', 'Vercel AI SDK', 'OpenRouter', 'Tailwind'],
        highlights: [
          'Streaming AI w optymalizatorze promptów i kreatorze mega-promptów',
          'Lekcje oparte na MDX i statycznym generowaniu',
          'Łączy wiedzę, narzędzia i praktykę pracy z AI',
        ],
        links: [],
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
      kicker: 'Technologie',
      title: 'Stack dobrany pod produkt, nie pod liste modnych nazw.',
      groups: [
        {
          title: 'Frontend',
          blurb: 'Buduję dopracowane, dostępne interfejsy. SPA oraz strony renderowane statycznie.',
          items: ['React', 'TypeScript', 'Next.js', 'Astro', 'Tailwind'],
        },
        {
          title: 'Backend / API',
          blurb: 'Projektuję logikę serwerową i API, od modelu danych po endpoint.',
          items: ['Node.js', 'FastAPI', 'C# / .NET', 'REST API'],
        },
        {
          title: 'Bazy / Dane',
          blurb: 'Modeluję dane, piszę zapytania SQL i pilnuję bezpiecznego dostępu.',
          items: ['PostgreSQL', 'SQLite', 'SQL', 'Supabase', 'RLS', 'Edge Functions'],
        },
        {
          title: 'Data / Analiza',
          blurb: 'Przetwarzam i analizuję dane, od czyszczenia po wnioski i raport.',
          items: ['Python', 'pandas', 'NumPy', 'Excel', 'Word'],
        },
        {
          title: 'Desktop',
          blurb: 'Tworzę natywne aplikacje desktopowe na web-stacku, z auto-aktualizacją.',
          items: ['Tauri', 'Rust'],
        },
        {
          title: 'IT admin / Systemy',
          blurb: 'Ogarniam systemy, skrypty i automatyzację po obu stronach: Linux i Windows.',
          items: ['Linux', 'Bash', 'PowerShell', 'Windows'],
        },
        {
          title: 'DevOps / Testy',
          blurb: 'Automatyzuję build, wdrożenie i testy, od commitu po release.',
          items: ['Git', 'GitHub Actions', 'Docker', 'Playwright'],
        },
        {
          title: 'AI',
          blurb: 'Wplatam asystentów AI w codzienny development i własne narzędzia.',
          items: ['Claude Code', 'Codex', 'OpenRouter'],
        },
      ],
    },
    about: {
      kicker: 'O mnie',
      title: 'Jestem full-stack developerem skupionym na realnych aplikacjach.',
      text:
        'Najbardziej kręcą mnie projekty, w których trzeba połączyć myślenie produktowe z techniczną robotą: dane, logika, interfejs i wdrożenie. Lubię nowe technologie, zwłaszcza AI, ale patrzę na nie przez praktyczne zastosowanie.',
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
      lead: 'I build web apps, desktop tools and AI features. I like owning a project end to end: data, logic, interface and shipping.',
      primaryCta: 'View projects',
      secondaryCta: 'Contact me',
      location: 'Bielsko-Biała, 43-300 · Silesia',
      interests: ['#technology', '#AI', '#gaming'],
      typingPhrases: [
        'offline-first sync with outbox and LWW merge',
        'multi-tenant workspaces, roles and invitations',
        'streaming AI for prompt optimizer',
        'signed auto-updater via GitHub Releases',
        'feature-based architecture with e2e tests',
      ],
    },
    telemetry: {
      heading: '// system readout',
      rows: [
        { k: 'location', v: 'Bielsko-Biała, Silesia, PL' },
        { k: 'local time', v: '—', kind: 'clock' },
        { k: 'status', v: '● open to work', kind: 'green' },
        { k: 'focus', v: 'full-stack · AI · Big data', kind: 'accent' },
        { k: 'stack', v: 'React · Tauri · Rust' },
        { k: 'projects', v: '3 shipped' },
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
        name: 'Deep Prompt',
        status: 'In progress',
        kind: 'AI / Education',
        description:
          'A Polish prompt engineering education platform with MDX lessons, interactive modules and AI tools for prompt optimization.',
        stack: ['Next.js 16', 'TypeScript', 'MDX', 'Vercel AI SDK', 'OpenRouter', 'Tailwind'],
        highlights: [
          'Streaming AI for prompt optimizer and mega-prompt wizard',
          'MDX-based content lessons with static generation',
          'Educational product combining knowledge, tools and AI practice',
        ],
        links: [],
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
      kicker: 'Technologies',
      title: 'A stack selected for the product, not for a list of buzzwords.',
      groups: [
        {
          title: 'Frontend',
          blurb: 'I build polished, accessible interfaces. SPAs and statically rendered sites.',
          items: ['React', 'TypeScript', 'Next.js', 'Astro', 'Tailwind'],
        },
        {
          title: 'Backend / API',
          blurb: 'I design server logic and APIs, from data model to endpoint.',
          items: ['Node.js', 'FastAPI', 'C# / .NET', 'REST API'],
        },
        {
          title: 'Databases / Data',
          blurb: 'I model data, write SQL queries and enforce secure access.',
          items: ['PostgreSQL', 'SQLite', 'SQL', 'Supabase', 'RLS', 'Edge Functions'],
        },
        {
          title: 'Data / Analytics',
          blurb: 'I wrangle and analyze data, from cleaning to insight and report.',
          items: ['Python', 'pandas', 'NumPy', 'Excel', 'Word'],
        },
        {
          title: 'Desktop',
          blurb: 'I ship native desktop apps on a web stack, with auto-updates.',
          items: ['Tauri', 'Rust'],
        },
        {
          title: 'IT admin / Systems',
          blurb: 'I handle systems, scripting and automation on both Linux and Windows.',
          items: ['Linux', 'Bash', 'PowerShell', 'Windows'],
        },
        {
          title: 'DevOps / Testing',
          blurb: 'I automate build, deployment and testing, from commit to release.',
          items: ['Git', 'GitHub Actions', 'Docker', 'Playwright'],
        },
        {
          title: 'AI',
          blurb: 'I weave AI assistants into daily development and my own tooling.',
          items: ['Claude Code', 'Codex', 'OpenRouter'],
        },
      ],
    },
    about: {
      kicker: 'About',
      title: 'I am a full-stack developer focused on real applications.',
      text:
        'I am most interested in projects where product thinking meets technical responsibility: data, logic, interface, deployment and maintenance. I like new technologies, especially AI, but I evaluate them through practical use.',
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
