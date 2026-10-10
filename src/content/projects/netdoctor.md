---
title: NetDoctor
order: 3
tagline:
  en: Finds where the connection breaks when the internet drops.
  pl: Pokazuje, gdzie zrywa się połączenie, kiedy pada internet.
summary:
  en: A network diagnostics tool for Windows, written in Rust. It measures the router and the internet in parallel, records every outage with its context and writes a PDF report for the ISP.
  pl: Narzędzie do diagnostyki sieci w Windows, napisane w Rust. Mierzy równolegle router i internet, zapisuje każdą awarię z kontekstem i generuje raport PDF dla dostawcy.
facts:
  - value: '422'
    label:
      en: automated tests
      pl: testy automatyczne
  - value: 5 MB
    label:
      en: one executable, no installer
      pl: jeden plik, bez instalatora
stack: [Rust, egui, SQLite, Windows API]
repo: https://github.com/pponikiewski/netdoctor
releases: https://github.com/pponikiewski/netdoctor/releases
cover: ../../assets/projects/netdoctor/live.png
coverAlt: NetDoctor live view with connection status, latency, jitter, packet loss and a latency chart for the router and public resolvers
---

<!-- TODO(piotr): where the idea came from, and why Rust and egui rather than Tauri -->

## The question

From inside Windows every outage looks the same: things stop working. A Wi-Fi card put to sleep and a dead uplink need different fixes, and guessing wrong costs hours. NetDoctor is built around one question: where exactly does the connection break?

## Blame from the pattern

It pings the router and several public addresses at the same time, and reads the verdict off which of them stop answering.

| Router | Internet | Verdict |
| --- | --- | --- |
| answers | answers | working |
| answers | silent | provider |
| silent | silent | between the PC and the router |
| answers | answers, names do not resolve | DNS |

![The Diagnose tab after a scan: the verdict points at the provider, and the chain from this computer to the internet marks the provider link as the one that failed](../../assets/projects/netdoctor/scan.png)

A verdict that something is down needs readings that agree, so one filtered address or one lost DNS reply is not an outage. When no public address answers pings, the app tries TCP connections to port 443 before calling it an outage. DNS is tested against the adapter's resolvers directly, past the Windows cache, which would otherwise answer for a resolver that is gone.

## Evidence over inference

Every outage is written to SQLite together with the state of the connection at that moment (signal, channel, access point, link rate, whether the router still answered) and the three minutes that led up to it. Opening an outage also reads the Windows event logs for that time span. A log entry is the system naming the event, for example an access point dropping a card that Windows had powered down, so it ranks above anything inferred from latency. Only structured fields are read, because Windows translates the message text.

![An outage opened from the history: the probable cause, and router and internet latency before, during and after the break](../../assets/projects/netdoctor/cause.png)

A continuous per-hop trace shows where the trouble starts. A hop is blamed only when its loss carries through to the end of the path: a router that rate-limits replies to its own pings is a setting, not a fault. That finding goes into the PDF report, as the paragraph a support line cannot answer with "restart the router".

## Built to be trusted

- 422 tests cover the blame logic, the statistics, the registry layer, settings migration and ICMP status mapping. Some run against the live machine.
- Polish and English are compiled into the binary. A missing translation is a compile error, not a silent fallback.
- It ships as a single 5 MB executable that updates itself from GitHub Releases. Release builds are code-signed through SignPath.

<!-- TODO(piotr): one thing that surprised you while building it -->
