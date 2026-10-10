import { z } from 'astro/zod'

const LOGIN = 'pponikiewski'

const level = z.enum(['NONE', 'FIRST_QUARTILE', 'SECOND_QUARTILE', 'THIRD_QUARTILE', 'FOURTH_QUARTILE'])

const response = z.object({
  data: z.object({
    user: z.object({
      contributionsCollection: z.object({
        contributionCalendar: z.object({
          totalContributions: z.number(),
          weeks: z.array(
            z.object({
              contributionDays: z.array(
                z.object({ date: z.string(), contributionCount: z.number(), contributionLevel: level }),
              ),
            }),
          ),
        }),
      }),
    }),
  }),
})

export type ContributionDay = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }
export type Contributions = { total: number; weeks: ContributionDay[][] }

const levels = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 } as const

const query = `query($login: String!) {
  user(login: $login) {
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks { contributionDays { date contributionCount contributionLevel } }
      }
    }
  }
}`

async function fetchContributions(): Promise<Contributions | null> {
  const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN
  if (!token) {
    console.warn('[github] GITHUB_TOKEN not set, skipping the activity heatmap')
    return null
  }
  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { Authorization: `bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables: { login: LOGIN } }),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const calendar = response.parse(await res.json()).data.user.contributionsCollection.contributionCalendar
    return {
      total: calendar.totalContributions,
      weeks: calendar.weeks.map((week) =>
        week.contributionDays.map((day) => ({
          date: day.date,
          count: day.contributionCount,
          level: levels[day.contributionLevel],
        })),
      ),
    }
  } catch (error) {
    // A failed fetch must never break the build; the section is simply left out.
    console.warn('[github] could not load contributions, skipping the heatmap:', error)
    return null
  }
}

// ponytail: data is as fresh as the last build; add a daily Vercel deploy hook if it needs to stay current.
let cached: Promise<Contributions | null> | undefined
export const getContributions = (): Promise<Contributions | null> => (cached ??= fetchContributions())
