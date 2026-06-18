if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const sel = '.sec-head, .proj-row, .stack-cell, .about-wrap, .contact-big, .contact-text, .contact-row'
  const targets = Array.from(document.querySelectorAll<HTMLElement>(sel))

  if (!('IntersectionObserver' in window) || !targets.length) {
    targets.forEach((el) => el.classList.add('in'))
  } else {
    ;['.proj-row', '.stack-cell', '.contact-row'].forEach((s) => {
      document.querySelectorAll<HTMLElement>(s).forEach((el, i) => {
        el.style.transitionDelay = Math.min(i * 0.06, 0.4) + 's'
      })
    })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
    )
    targets.forEach((el) => io.observe(el))
  }
}
