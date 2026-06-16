const el = document.getElementById('tele-clock')
if (el) {
  function tick() {
    const d = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Warsaw' }))
    el!.textContent = d.toTimeString().slice(0, 8)
  }
  tick()
  setInterval(tick, 1000)
}
