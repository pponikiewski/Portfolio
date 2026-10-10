---
title: Group Manager
order: 2
tagline:
  en: My engineering thesis. A PWA in production, used by real groups.
  pl: Moja praca inżynierska. Aplikacja PWA działająca produkcyjnie, z realnymi użytkownikami.
summary:
  en: Coordinates groups of 20 people whose tasks rotate every month. Members see their current task; admins manage members, groups and the rotation.
  pl: Koordynuje 20-osobowe grupy, w których zadania co miesiąc przechodzą na kolejną osobę. Członkowie widzą swoje bieżące zadanie, administratorzy zarządzają członkami, grupami i rotacją.
facts:
  - value: '20'
    label:
      en: members per group
      pl: osób w grupie
  - value: '3'
    label:
      en: test layers
      pl: warstwy testów
stack: [React 19, TypeScript, Supabase (PostgreSQL), TanStack Query, Tailwind, Vitest, Playwright]
repo: https://github.com/pponikiewski/roza-rozancowa
cover: ../../assets/projects/group-manager/groups.png
coverAlt: Admin panel with three groups, their member counts and how many members confirmed this month's task
---

<!-- TODO(piotr): how the project started, who asked for it, how many groups and users use it today -->

## The problem

A community is organised into groups of 20 people. Each member has one task, and on the first Sunday of every month all tasks move one position along. Before the app, the member lists and the rotation were managed by hand.

## Rotation as a function, not a job

The current task is not stored and rewritten every month. A SQL function computes it from the member's position in the group and the date, modulo 20. Nothing has to run on the first Sunday for the rotation to happen, so a missed scheduled job cannot leave a group out of date. Admins can still move a group by one position by hand, or rotate several groups in one batch call.

## Security in the database

Access rules live in PostgreSQL Row Level Security, not in the frontend. Members read their own data and the public fields of people in their group; admins have full access. Operations that need the service role key, such as creating and deleting users or resetting passwords, run in Supabase Edge Functions, so that key never reaches the browser.

## Notifications

The app is an installable PWA and sends Web Push notifications that arrive while it is closed. An Edge Function started by `pg_cron` once a day handles monthly events, and a separate job every minute sends reminders at the time each user picked. Every notification is recorded under a key in a log table, so a retried job never sends the same message twice. Users choose which notifications they get, and a missing preferences row means all of them are on. On iPhone, push only works after the app is added to the home screen, and the dashboard says so.

## Testing and deployment

Unit and integration tests run on Vitest with React Testing Library. Playwright covers end-to-end flows such as signing in. The frontend is hosted on Vercel, the database and functions on Supabase.

<!-- TODO(piotr): what users asked for after launch and what you changed because of it -->
