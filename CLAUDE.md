# TITAN STRENGTH — Fitness App

## Project Overview

A mobile-first, single-page fitness tracker app. No build step, no framework, no dependencies — pure HTML + Vanilla JS + Tailwind CSS via CDN.

**Dev server:** `npx serve -l 3000 .` → http://localhost:3000

---

## File Structure

```
index.html          — All 4 screens (HTML only, no logic)
app.js              — All application logic (state, rendering, navigation)
workouts.js         — Workout + exercise data (WORKOUTS array)
.claude/launch.json — Preview server config (fitness-app on port 3000)
stitch_personal_fitness_planner/
  active_workout/   — Reference design for active workout screen
  plan_overview/    — Reference design for plan overview screen
  home_select_plan/ — Reference design for home screen
```

---

## The 4 Screens

| Screen ID        | Element ID          | Description                          |
|-----------------|---------------------|--------------------------------------|
| `home`          | `#screen-home`      | Workout grid with filter chips       |
| `overview`      | `#screen-overview`  | Plan details, muscle map, exercise list |
| `workout`       | `#screen-workout`   | Active workout — set input + rest timer |
| `finish`        | `#screen-finish`    | Workout complete summary             |

Navigation: `navigate('home' | 'overview' | 'workout' | 'finish')`

There is also one overlay:
- **Exercise modal** (`#exercise-modal`) — bottom sheet opened via `openExerciseModal(index)`, closed via `closeExerciseModal()`

---

## App State (`state` object in app.js)

```js
state = {
  lang: 'en',                    // 'en' | 'he'
  currentScreen: 'home',
  activeFilter: 'All',           // workout category filter
  currentWorkout: null,          // WORKOUTS[n] object
  currentExerciseIndex: 0,
  currentSetIndex: 0,
  completedSets: [],             // { exerciseIndex, setNum, weight, reps }
  sessionStartTime: null,        // Date.now() at workout start
  sessionTimerInterval: null,
  restTimerInterval: null,
  restTimeRemaining: 0,
  restTimerActive: false
}
```

---

## Workout Data Structure (`workouts.js`)

There are 10 workouts in `WORKOUTS`. Each has:

```js
{
  id: Number,
  name: String, nameHe: String,
  subtitle: String, subtitleHe: String,
  description: String, descriptionHe: String,
  category: 'Strength' | 'Hypertrophy' | 'Cardio' | 'Core',
  categoryHe: String,
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced',
  difficultyHe: String,
  durationMin: Number,
  icon: String,                  // Material Symbol icon name
  bodyAreas: String[],
  bodyAreasHe: String[],
  exercises: [
    {
      name: String,
      muscleGroup: String,       // used for muscle map highlight + image lookup
      muscleGroupHe: String,
      equipment: String,         // 'Barbell' | 'Dumbbells' | 'Cable' | 'Machine' | 'Bodyweight' | ...
      sets: Number,
      reps: String,              // e.g. "6-8", "5", "12-15"
      restSeconds: Number,
      suggestedWeightKg: Number,
      isBodyweight: Boolean
    }
  ]
}
```

To add a new workout: append an object to `WORKOUTS` in `workouts.js`. The home grid and everything else is dynamic.

---

## i18n — Bilingual (English / Hebrew)

The app supports English (LTR) and Hebrew (RTL). Toggle: `toggleLang()` (flag button in header).

- `t('key')` — returns current-language string from `UI` object in app.js
- `tW(workout, 'field')` — returns `workout.fieldHe` or `workout.field` based on lang
- `tEx(exercise, 'field')` — same for exercise fields
- RTL layout is driven by `dir="rtl"` on `<html>`, styled via `[dir="rtl"]` CSS in `index.html`
- Hebrew font: **Heebo** (overrides Montserrat/Inter for RTL elements)
- Data/timer font: **JetBrains Mono** (kept in both languages)

To add a new UI string: add it to both `UI.en` and `UI.he` in app.js.

---

## Exercise Images

Images are Unsplash photos loaded via URL, not local files.

```js
// In app.js:
EXERCISE_IMG  // per-exercise Unsplash photo ID
GROUP_IMG     // fallback per muscleGroup

function exImgUrl(name, muscleGroup, w, h)
// → https://images.unsplash.com/{id}?w=...&h=...&fit=crop&q=80
```

- Modal hero image: `h-64`, full-width
- Exercise list thumbnail: `w-20 h-20` (80×80px)
- Default fallback ID: `photo-1534438327276-14e5300c3a48`

To add a photo for a new exercise: add an entry to `EXERCISE_IMG` in app.js.

---

## Muscle Body Map

Two SVG body diagrams (front + back) appear on the Plan Overview screen and inside the Exercise Modal.

- Muscle groups are `<ellipse>` / `<path>` elements with `class="muscle-group"` and `data-muscle="..."` + `data-map="ov|mo"`
- `data-map="ov"` → overview body map; `data-map="mo"` → modal body map
- Activated muscles get class `muscle-active` (lime glow via CSS animation)
- `highlightBodyMap(muscleGroups[], prefix)` — drives activation from `MUSCLE_MAP` dictionary

`MUSCLE_MAP` in app.js maps `muscleGroup` strings to arrays of `data-muscle` IDs.

---

## Design System (Tailwind config in index.html)

**Dark mode only.** Key color tokens:

| Token                    | Value      | Usage                          |
|--------------------------|------------|--------------------------------|
| `primary-fixed`          | `#c3f400`  | Lime green — primary accent    |
| `background` / `surface` | `#131313`  | App background                 |
| `surface-container`      | `#201f1f`  | Cards                          |
| `surface-container-highest` | `#353534` | Borders, inputs              |
| `secondary-container`    | `#4b8eff`  | Blue accent (rest timer, skip) |
| `error`                  | `#ffb4ab`  | Destructive actions            |

**Typography:**

| Class            | Font          | Size  | Use                    |
|-----------------|---------------|-------|------------------------|
| `font-h1`       | Montserrat    | 40px  | Exercise / screen titles |
| `font-h2`       | Montserrat    | 32px  | App header             |
| `font-h3`       | Montserrat    | 24px  | Section headings, buttons |
| `font-label-caps` | Inter       | 12px  | Labels, badges, chips  |
| `font-data-display` | JetBrains Mono | 28px | Timers, weights    |
| `font-body-md`  | Inter         | 16px  | Body text              |

**Reusable CSS classes** (defined in `index.html <style>`):
- `.gradient-card` — home workout cards
- `.glass-card` — overview content cards
- `.machined-card` — active workout panels
- `.active-glow` — lime green box-shadow glow
- `.hero-gradient` — fade-to-black overlay on images

---

## Key Functions

| Function                    | File   | What it does                                      |
|-----------------------------|--------|---------------------------------------------------|
| `navigate(screen)`          | app.js | Shows/hides screens, scrolls to top               |
| `renderHomeScreen()`        | app.js | Rebuilds workout grid with current filter         |
| `setFilter(filter)`         | app.js | Updates active filter chip + re-renders home      |
| `openWorkout(id)`           | app.js | Loads workout into state, renders overview        |
| `renderPlanOverview()`      | app.js | Populates overview screen (stats, muscle map, list) |
| `openExerciseModal(index)`  | app.js | Opens exercise info bottom sheet with photo       |
| `startWorkout()`            | app.js | Initializes workout session, navigates to workout |
| `renderActiveWorkout()`     | app.js | Updates active workout screen for current exercise |
| `completeSet()`             | app.js | Records set, increments, triggers rest timer      |
| `nextExercise()`            | app.js | Advances to next exercise or finishes workout     |
| `highlightBodyMap([], prefix)` | app.js | Activates muscle groups on SVG body maps      |
| `toggleLang()`              | app.js | Switches EN↔HE, re-renders current screen         |
| `exImgUrl(name, group, w, h)` | app.js | Returns Unsplash image URL for an exercise     |

---

## Conventions

- **No build step** — edit files directly, refresh browser
- **No state persistence** — everything resets on page reload (no localStorage)
- **Screen rendering is declarative** — each `render*` function rebuilds innerHTML from state; no partial updates
- **Translations** — every user-visible string must exist in both `UI.en` and `UI.he`
- **New exercises** — must have an entry in `EXERCISE_TIPS` (how-to + tips) and ideally in `EXERCISE_IMG`
- **Images** — always use Unsplash via `exImgUrl()`, never local assets
- **RTL** — Hebrew layout is handled automatically via `dir="rtl"` on `<html>`; avoid hardcoded `left`/`right` in inline styles
