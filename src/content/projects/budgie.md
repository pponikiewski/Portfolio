---
title: Budgie
order: 4
featured: false
status: in-progress
tagline:
  en: A small desktop budget app that keeps the data on your machine.
  pl: Mała desktopowa aplikacja budżetowa, która trzyma dane na Twoim komputerze.
summary:
  en: Income and expenses, categories and a monthly balance. A Tauri app on SQLite, Drizzle and Zod, with no account and no server.
  pl: Przychody i wydatki, kategorie i miesięczny bilans. Aplikacja w Tauri na SQLite, Drizzle i Zod, bez konta i bez serwera.
facts:
  - value: '23'
    label:
      en: unit tests
      pl: testy jednostkowe
stack: [Tauri 2, React 19, TypeScript, SQLite, Drizzle, Zod, Tailwind v4, Vitest]
repo: https://github.com/pponikiewski/budget
---

<!-- TODO(piotr): why you built it and what you wanted to try out with it -->

## Small on purpose

Budgie does one job: it records income and expenses, groups them by category and shows the balance for a month. There is no account, no sync and no server. All data is one SQLite file on the user's machine, so the app works the same with or without a connection.

## Money as integers

Amounts are stored as integer grosze, hundredths of a złoty, never as floating point numbers, so sums and the balance are always exact. The form accepts a value like `12.50`, Zod coerces and validates it, and it is converted to grosze only when it is written to the database.

## Drizzle on the Tauri SQL plugin

The database is opened by Tauri's SQL plugin in the Rust core, and the frontend reaches it through Drizzle's `sqlite-proxy` driver. The plugin returns rows as objects while Drizzle expects arrays of values, so a short adapter maps every row to its values in column order. One schema file is the source of truth for both the queries and the TypeScript types.

## Logic outside the interface

The balance, the per-category breakdown and the month filters are pure functions with no dependency on Tauri, which makes them easy to test: 23 Vitest tests cover them and the form validation. Categories are one constant list typed as a tuple, so the form, the validation schema and the stored data share a single definition.

<!-- TODO(piotr): what you would add next, or what you learned from keeping it this small -->
