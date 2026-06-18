# portfolio — Session Notes
- 2026-06-18 | feat(hero): mountain sunset SVG background, responsive, light+dark | Dodano SVG tło z sylwetkami gór i blaskiem akcentu w hero; spójne z design systemem, wtopione w --bg; zmieniono stack readout z Rust na TypeScript
- 2026-06-18 | feat(design): subtle accent glow at page bottom | Delikatny radialny glow akcentu na body::after domyka stronę wizualnie symetrycznie do hero
<!-- One line per commit, appended via /sync: date | commit subject | what/why -->
- 2026-06-16 | chore(fonts): swap Inter→Geist Variable, JetBrains Mono→Commit Mono | Zmieniono czcionki na self-hosted via Fontsource; usunięto Google Fonts (zero external requests)
- 2026-06-16 | fix(css): apply wide-screen width tokens in light theme | Poprawiono tokeny szerokości dla jasnego motywu na szerokich ekranach
- 2026-06-16 | feat(ui): scroll-reveal animations and hover polish | Dodano animacje scroll-reveal i dopracowano efekty hover
- 2026-06-16 | feat(content): capability-line stack, human copy, scroll fix | Przepisano copy na bardziej ludzkie; dodano linię capability w stacku; fix scrollowania
- 2026-06-16 | feat(content): replace Deep Prompt with Budgie, add more-projects toggle | Zastąpiono projekt Deep Prompt projektem Budgie (Tauri 2 desktop budget app); dodano sekcję "więcej projektów" z przyciskiem toggle i TokenForge jako przykład
- 2026-06-16 | fix(content): remove em dashes, strip stack blurbs, rename stack heading | Usunięto myślniki em, opisy przy stacku, zmieniono nagłówek sekcji
- 2026-06-16 | feat(about): update hero lead, about texts, education, remove photo caption | Zaktualizowano hero lead, teksty about (PL+EN), dane edukacji; usunięto figcaption z about
- 2026-06-16 | fix(hero): shorten lead, fix telemetry focus/projects/clock color | Skrócono hero lead; poprawiono kolory w sekcjach telemetry/focus/projects/clock
- 2026-06-16 | fix(hero): update typing phrases to match current projects | Zaktualizowano animowane frazy w hero żeby odzwierciedlały aktualne projekty
- 2026-06-16 | fix(stack): more breathing room, bigger tags, ink color default | Więcej odstępów w stacku, większe tagi, domyślny kolor ink
- 2026-06-16 | feat(about): photo 1.jpg, Full-stack Developer heading, two-paragraph bio | Dodano zdjęcie profilowe, nagłówek "Full-stack Developer", dwuakapitowe bio
- 2026-06-16 | fix(hero): stack system readout below content on small screens | Na ≤900px telem przechodzi z position:absolute do flex-child order:1 zamiast display:none
- 2026-06-17 | feat(audit): portfolio content & UI audit — stack, about, hero, nav | Przepisano stack na 6 grup single-column; usunięto TokenForge; Budgie highlights unikalne; Code Town w tabeli faktów; system readout z animowanymi kropkami (typewriter); usunięto bp-coord spany, numery w navie i przycisk CV; linie tła przyciemnione do 35%
- 2026-06-17 | feat(projects): techniczne opisy, stack badges, em-dashes, footer align | Przepisano description i highlights na techniczne (architektura, wzorce, decyzje); stack jako tagi z obramowaniem; usunięto em-dashe z opisów; wyrównano linki z tagami (align-items: center)
- 2026-06-17 | feat(ux): hero fullscreen, unified scroll arrow section-by-section | Hero min-height 100vh; strzałka fixed (centered) zastępuje scroll-down + back-top; IntersectionObserver na footer odwraca strzałkę; klik przechodzi przez sekcje w kolejności
