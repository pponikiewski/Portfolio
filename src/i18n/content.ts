export const languages = ['pl', 'en'] as const

export type Lang = (typeof languages)[number]

export const content = {
  pl: {
    meta: {
      title: 'Piotr Ponikiewski - Full-stack Developer',
      description:
        'Portfolio full-stack developera budujacego aplikacje webowe, desktopowe i narzedzia AI.',
    },
    nav: {
      projects: 'Projekty',
      process: 'Jak pracuje',
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
      lead: 'Buduję produkty webowe, desktopowe i AI. Interesuje mnie pełna droga — od modelu danych, przez interfejs, aż po wdrożenie i utrzymanie.',
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
          'Desktopowa aplikacja do mierzenia czasu pracy dla zespolow, z lokalna baza SQLite, synchronizacja z chmura, workspaceami, rolami i auto-updaterem.',
        stack: ['Tauri 2', 'React 19', 'TypeScript', 'SQLite', 'Supabase', 'Rust'],
        highlights: [
          'Offline-first mirror z outboxem i LWW merge',
          'Multi-tenant workspace, role i zaproszenia',
          'Signed auto-updater oraz release flow przez GitHub Releases',
        ],
        links: [
          { label: 'GitHub', href: 'https://github.com/pponikiewski/tracker' },
          { label: 'Release', href: 'https://github.com/pponikiewski/tracker/releases/latest' },
        ],
      },
      {
        name: 'Roza Rozancowa',
        status: 'MVP / rozwijany',
        kind: 'Web / PWA',
        description:
          'Aplikacja webowa do zarzadzania grupami Zywego Rozanca: czlonkowie, roty tajemnic, intencje miesieczne, panel administratora i panel uzytkownika.',
        stack: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PWA', 'Playwright'],
        highlights: [
          'Automatyczna rotacja tajemnic i logika pozycji w grupie',
          'Role, autoryzacja i bezpieczny dostep przez RLS',
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
          'Polska platforma edukacyjna do prompt engineeringu z lekcjami MDX, interaktywnymi modulami i narzedziami AI do optymalizacji promptow.',
        stack: ['Next.js 16', 'TypeScript', 'MDX', 'Vercel AI SDK', 'OpenRouter', 'Tailwind'],
        highlights: [
          'Streaming AI dla prompt optimizera i mega-prompt wizard',
          'Content lessons oparte o MDX i statyczne parametry',
          'Produkt edukacyjny laczacy wiedze, narzedzia i praktyke AI',
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
        ['Frontend', ['React', 'TypeScript', 'Astro', 'Next.js', 'Tailwind']],
        ['Backend / Data', ['Supabase', 'PostgreSQL', 'SQLite', 'RLS', 'Edge Functions']],
        ['Desktop', ['Tauri', 'Rust', 'Auto-updater', 'Local-first']],
        ['AI / Tools', ['Vercel AI SDK', 'OpenRouter', 'MDX', 'Automation']],
      ],
    },
    about: {
      kicker: 'O mnie',
      title: 'Jestem full-stack developerem skupionym na realnych aplikacjach.',
      text:
        'Najbardziej interesuja mnie projekty, w ktorych trzeba polaczyc produktowe myslenie z techniczna odpowiedzialnoscia: dane, logika, interfejs, wdrozenie i utrzymanie. Lubie nowe technologie, szczegolnie AI, ale oceniam je przez praktyczne zastosowanie.',
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Masz role, projekt albo pomysl do sprawdzenia?',
      text:
        'Najprosciej napisac maila albo odezwac sie przez LinkedIn. CV jest dostepne jako PDF.',
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
      lead: 'I build web, desktop and AI products. I care about the full path — from data model, through interface, to deployment and maintenance.',
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
        ['Frontend', ['React', 'TypeScript', 'Astro', 'Next.js', 'Tailwind']],
        ['Backend / Data', ['Supabase', 'PostgreSQL', 'SQLite', 'RLS', 'Edge Functions']],
        ['Desktop', ['Tauri', 'Rust', 'Auto-updater', 'Local-first']],
        ['AI / Tools', ['Vercel AI SDK', 'OpenRouter', 'MDX', 'Automation']],
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
