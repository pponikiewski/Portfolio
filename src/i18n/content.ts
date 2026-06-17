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
        { k: 'projekty', v: '3+' },
      ],
    },
    projectsIntro: {
      kicker: 'Wybrane projekty',
      title: 'Nie tylko interfejsy. Kompletne systemy z realnym zakresem.',
      text: 'Każdy projekt prezentuję przez problem, decyzje techniczne i aktualny status.',
    },
    projects: [
      {
        name: 'Tracker',
        status: 'Released',
        kind: 'Desktop / SaaS',
        description:
          'Cross-platform time-tracker dla zespołów zbudowany na Tauri 2 + Rust. Architektura offline-first z lokalnym SQLite jako źródłem prawdy i asynchroniczną synchronizacją z Supabase przez kolejkę outbox.',
        stack: ['Tauri 2', 'React 19', 'TypeScript', 'SQLite', 'Supabase', 'Rust'],
        highlights: [
          'Outbox pattern z LWW merge, zapis lokalny gwarantuje pracę bez połączenia, konflikty rozwiązywane deterministycznie po powrocie do sieci',
          'Multi-tenant RBAC: izolacja workspace\'ów na poziomie Row-Level Security w Postgres, zaproszenia tokenem jednorazowym',
          'Kod natywny w Rust (side-car) obsługuje podpisany auto-updater i dystrybucję przez GitHub Releases',
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
          'PWA do zarządzania grupami modlitewnymi zbudowana na React 19 + Supabase. Kluczowy problem domenowy, deterministyczna rotacja pozycji w grupie, rozwiązany jako czysta funkcja ze snapshotu stanu, testowalny bez UI.',
        stack: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PWA', 'Playwright'],
        highlights: [
          'Algorytm rotacji tajemnic jako izolowana pure function, niezależna od warstwy danych, pokryta testami jednostkowymi',
          'Autoryzacja oparta o Row-Level Security: polityki Supabase jako jedyne enforcement boundary, bez dodatkowego middleware',
          'Architektura feature-based z Playwright e2e na krytycznych ścieżkach (logowanie, rotacja, zaproszenia)',
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
          'Lokalny menedżer budżetu domowego na Tauri 2 z gwarancją privacy-by-design: żadne dane nie opuszczają dysku użytkownika. Persistence przez SQLite z type-safe schematem Drizzle ORM i automatycznymi migracjami przy starcie.',
        stack: ['Tauri 2', 'React 19', 'TypeScript', 'SQLite', 'Drizzle ORM', 'Tailwind CSS v4'],
        highlights: [
          'Drizzle ORM jako single source of truth dla schematu, migracje generowane z TypeScript, zero ręcznego SQL',
          'Discriminated union dla typów wpisów: osobne zestawy kategorii dla przychodów i wydatków wymuszane na poziomie typów',
          'Zero network dependencies w runtime, Tauri IPC jako jedyna granica między UI a warstwą danych',
        ],
        links: [
          { label: 'GitHub', href: 'https://github.com/pponikiewski/budget' },
        ],
      },
    ],
    moreProjects: [] as { name: string; status: string; kind: string; description: string; stack: string[]; highlights: string[]; links: { label: string; href: string }[] }[],
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
          tier: 'primary',
          items: ['React', 'Next.js', 'Tailwind'],
        },
        {
          title: 'Backend / API',
          tier: 'familiar',
          items: ['Node.js', 'REST API'],
        },
        {
          title: 'Bazy / Dane',
          tier: 'primary',
          items: ['PostgreSQL', 'SQLite', 'SQL'],
        },
        {
          title: 'Desktop',
          tier: 'familiar',
          items: ['Tauri', 'Rust'],
        },
        {
          title: 'Tools',
          tier: 'familiar',
          items: ['Git', 'Docker', 'Excel', 'Word', 'AutoCAD'],
        },
        {
          title: 'AI',
          tier: 'familiar',
          items: ['Claude Code', 'Cursor', 'Codex', 'OpenRouter'],
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
        ['Doświadczenie', 'Code Town · Praktykant C#'],
        ['Języki', 'Polski natywnie · Angielski C1 · Niemiecki A2'],
        ['Dostępność', 'Bielsko-Biała · otwarty na pracę hybrydową/zdalną'],
      ],
      looking: 'Szukam pierwszej pełnej roli jako Full-stack Developer.',
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Napisz, jeśli szukasz kogoś do <em>zespołu</em> albo masz projekt.',
      text:
        'Odezwę się jak najszybciej.',
      email: 'piotr@pponikiewski.dev',
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
        { k: 'projects', v: '3+' },
      ],
    },
    projectsIntro: {
      kicker: 'Selected projects',
      title: 'Not only interfaces. Complete systems with real scope.',
      text: 'Each project is presented through the problem it solves, the technical decisions made, and current status.',
    },
    projects: [
      {
        name: 'Tracker',
        status: 'Released',
        kind: 'Desktop / SaaS',
        description:
          'Cross-platform time-tracker for teams built on Tauri 2 + Rust. Offline-first architecture with local SQLite as the source of truth and async sync to Supabase via an outbox queue.',
        stack: ['Tauri 2', 'React 19', 'TypeScript', 'SQLite', 'Supabase', 'Rust'],
        highlights: [
          'Outbox pattern with LWW merge, local writes guarantee operation without connectivity; conflicts resolved deterministically on reconnect',
          'Multi-tenant RBAC: workspace isolation enforced via Postgres Row-Level Security policies; invitations via single-use tokens',
          'Rust side-car handles code-signed auto-updates and GitHub Releases delivery',
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
          'PWA for managing prayer groups built on React 19 + Supabase. The core domain problem, deterministic member position rotation, is modelled as a pure function over a state snapshot, testable without UI.',
        stack: ['React 19', 'TypeScript', 'Vite', 'Supabase', 'PWA', 'Playwright'],
        highlights: [
          'Rotation algorithm as an isolated pure function, decoupled from the data layer and covered by unit tests',
          'Authorization via Row-Level Security: Supabase policies are the sole enforcement boundary, no additional middleware',
          'Feature-based architecture with Playwright e2e coverage on critical paths (auth, rotation, invitations)',
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
          'Privacy-by-design personal budget manager on Tauri 2: no data ever leaves the user\'s disk. Persistence through SQLite with a type-safe Drizzle ORM schema and automatic migrations on startup.',
        stack: ['Tauri 2', 'React 19', 'TypeScript', 'SQLite', 'Drizzle ORM', 'Tailwind CSS v4'],
        highlights: [
          'Drizzle ORM as single source of truth for schema, migrations generated from TypeScript, zero hand-written SQL',
          'Discriminated union for entry types: separate category sets for income vs. expense enforced at the type level',
          'Zero network dependencies at runtime, Tauri IPC is the only boundary between UI and the data layer',
        ],
        links: [
          { label: 'GitHub', href: 'https://github.com/pponikiewski/budget' },
        ],
      },
    ],
    moreProjects: [] as { name: string; status: string; kind: string; description: string; stack: string[]; highlights: string[]; links: { label: string; href: string }[] }[],
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
          tier: 'primary',
          items: ['React', 'Next.js', 'Tailwind'],
        },
        {
          title: 'Backend / API',
          tier: 'familiar',
          items: ['Node.js', 'REST API'],
        },
        {
          title: 'Databases',
          tier: 'primary',
          items: ['PostgreSQL', 'SQLite', 'SQL'],
        },
        {
          title: 'Desktop',
          tier: 'familiar',
          items: ['Tauri', 'Rust'],
        },
        {
          title: 'Tools',
          tier: 'familiar',
          items: ['Git', 'Docker', 'Excel', 'Word', 'AutoCAD'],
        },
        {
          title: 'AI',
          tier: 'familiar',
          items: ['Claude Code', 'Cursor', 'Codex', 'OpenRouter'],
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
        ['Experience', 'Code Town · C# Intern'],
        ['Languages', 'Polish native · English C1 · German A2'],
        ['Availability', 'Bielsko-Biała · open to hybrid/remote work'],
      ],
      looking: 'Looking for my first full role as a Full-stack Developer.',
    },
    contact: {
      kicker: 'Contact',
      title: 'Reach out if you have a <em>role</em> or a project in mind.',
      text:
        "I'll get back to you as soon as possible.",
      email: 'piotr@pponikiewski.dev',
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
