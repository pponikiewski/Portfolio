export type Lang = 'en' | 'pl'

export const ui = {
  en: {
    meta: {
      title: 'Piotr Ponikiewski, full-stack developer in Bielsko-Biała',
      description:
        'Full-stack developer in Bielsko-Biała, Poland, working in TypeScript, React and PostgreSQL. Case studies of web and desktop apps built end to end.',
    },
    nav: { work: 'Work', about: 'About', contact: 'Contact' },
    hero: {
      title: 'Full-stack developer working in TypeScript, React and PostgreSQL.',
      lead: 'I build web and desktop apps end to end, from database policies to the release pipeline.',
      cv: 'Download CV',
    },
    work: { heading: 'Selected work', more: 'Read the case study', all: 'All projects', inProgress: 'In progress' },
    activity: { heading: 'Activity' },
    about: {
      heading: 'About',
      photoAlt: 'Portrait of Piotr Ponikiewski',
      body: [
        'I am a junior developer looking for my first job in a team, as a full-stack or frontend developer. In 2026 I finished an engineering degree in computer science, specialising in web development, at WSIZ in Bielsko-Biała. My thesis is the group management system above, and it runs in production.',
        'Most of my work is in TypeScript, React and PostgreSQL on Supabase. Outside the web I write Rust. I work with AI tools such as Claude Code. I speak Polish natively and English at C1.',
      ],
    },
    contact: {
      heading: 'Contact',
      lead: 'Open to full-stack and frontend roles. The fastest way to reach me is email.',
      phone: 'Phone',
    },
    footer: 'This page ships no JavaScript.',
  },
  pl: {
    meta: {
      title: 'Piotr Ponikiewski, full-stack developer, Bielsko-Biała',
      description:
        'Full-stack developer z Bielska-Białej. TypeScript, React i PostgreSQL. Case studies aplikacji webowych i desktopowych zrobionych od początku do końca.',
    },
    nav: { work: 'Projekty', about: 'O mnie', contact: 'Kontakt' },
    hero: {
      title: 'Full-stack developer pracujący w TypeScript, React i PostgreSQL.',
      lead: 'Buduję aplikacje webowe i desktopowe od początku do końca, od polityk w bazie danych po pipeline wydań.',
      cv: 'Pobierz CV',
    },
    work: {
      heading: 'Wybrane projekty',
      more: 'Case study (EN)',
      all: 'Wszystkie projekty (EN)',
      inProgress: 'W trakcie',
    },
    activity: { heading: 'Aktywność' },
    about: {
      heading: 'O mnie',
      photoAlt: 'Zdjęcie Piotra Ponikiewskiego',
      body: [
        'Jestem junior developerem i szukam pierwszej pracy w zespole, jako full-stack lub frontend developer. W 2026 roku skończyłem studia inżynierskie z informatyki, specjalizacja web development, na WSIZ w Bielsku-Białej. Moja praca inżynierska to system zarządzania grupami opisany wyżej i działa produkcyjnie.',
        'Najczęściej pracuję w TypeScript, React i PostgreSQL na Supabase. Poza webem piszę w Rust. Pracuję z narzędziami AI, takimi jak Claude Code. Angielski na poziomie C1.',
      ],
    },
    contact: {
      heading: 'Kontakt',
      lead: 'Szukam pracy jako full-stack lub frontend developer. Najszybciej odpowiem na maila.',
      phone: 'Telefon',
    },
    footer: 'Ta strona nie zawiera JavaScriptu.',
  },
} as const

export const contact = {
  email: 'ponikiewski.piotr@gmail.com',
  phone: '+48 608 346 682',
  github: 'https://github.com/pponikiewski',
} as const

export const cvHref = (lang: Lang): string => `/cv/Piotr_Ponikiewski_cv_${lang}.pdf`
export const homeHref = (lang: Lang): string => (lang === 'en' ? '/' : '/pl/')
