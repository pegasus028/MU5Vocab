# Money Matters

A single-page self-study app for the 43 money words, idioms and phrasal verbs in
*Money words.docx*. Built on the same pattern as **The Island Odyssey**: a
storybook with tappable keywords, a word list, study-card pop-ups, tests and a
cumulative roleplay boss.

---

## Deploying to GitHub Pages

Copy the whole folder into a repo (or a subfolder of `pegasus028.github.io`) and
push. No build step, no dependencies, nothing to compile.

```
MoneyMatters/
├── index.html        the whole app: layout, styles and engine
├── media.js          ← THE ONLY FILE YOU EDIT TO ADD PODCAST / VIDEO
├── README.md
├── art/              the seven story illustrations
└── data/
    ├── words.js      the 43 target items, fully defined
    ├── lexicon.js    231 clickable synonym / antonym entries
    ├── story.js      the 4-chapter story, 12 pages
    ├── patterns.js   13 pattern cards
    └── tests.js      triage + final B1 + final B2 (60 questions)
```

It will then be live at `https://pegasus028.github.io/MoneyMatters/`.

Everything runs in the browser. There is no Apps Script back end and no API key,
so nothing to deploy twice and no `/exec` endpoint to re-version.

---

## What is in it

**📖 Storybook** — *Mikii’s Perfect Present*. Mikii changes her spending
habits, budgets her allowance, shops around for her best friend’s birthday
present and only just makes it home with the bus fare. Four chapters, seven
page-turn pages, each with its own illustration. All 43 target items appear in
it, highlighted in gold and tappable.

**📇 Word List** — all 43 items, grouped into the five areas the triage test
diagnoses, filterable by type (word / idiom / phrasal verb), CEFR level and
area, and searchable across meanings, synonyms and collocations.

**Study cards** — tap any keyword anywhere in the app. Each card gives:
CEFR level · part of speech · short definition · two example sentences ·
three synonyms at B1, B2 and C1 · three antonyms at B1, B2 and C1 ·
common collocations · a usage warning.

Every synonym and every antonym is a button. Tapping one opens a full entry of
its own — its own level, part of speech, real definition, two examples,
collocations and a note. None of them says "synonym of …". Each satellite entry
also shows *Where this appears*, so the student can jump back to the target
words it is related to. Cards stack, and a back bar appears at the top, so a
student can go three or four words deep and still find the way home.

**🧠 Patterns** — thirteen cards showing the systems underneath the list:
the liquid metaphor that explains why money *splashes*, *drains* and *runs out*;
the body metaphor behind *an arm and a leg* and *tighten your belt*; the hunting
metaphor in *snap up*, *rip off* and *sell out*; the direction pairs; the
intensity scale from *get by* to *get into debt*; why *cheap* and *good value*
are different axes; the RE- family; the prepositions that are always tested;
countable versus uncountable; the three register shelves; the traps
(*on sale* / *for sale*, silent letters in *receipt* and *debt*); and where
Thai and English cut the meanings differently.

**🎯 Tests** — three, all multiple choice, four options each.

| Test | Purpose |
|---|---|
| Placement Check (20 Q) | Four questions on each of the five areas. Scores per area, names the weak ones, and sends the student to a filtered word list. It is a router, not a grade. |
| Final Check: B1 (20 Q) | Everyday contexts, high-frequency items, transparent distractors. |
| Final Check: B2 (20 Q) | All five idioms, the harder phrasal verbs, and six items where every option is plausible in meaning and only the grammar decides. |

Question types used throughout: gap-fill, meaning, idiom-for-a-situation,
collocation, odd-one-out, substitution, error correction and situation.
Every question explains itself after the student answers and offers a one-tap
link to the study card for the word it tested.

**🎧 Media** — podcast, video and extras nodes, already wired. See below.

**🎭 Roleplay Arcade** — *The Allowance Summit*. The student argues for a rise
from 300 to 400 baht a week against a fair but unimpressed mother, across eight
turns. The app detects target items in what they type (including inflections:
*splashed out*, *ripped them off*, *tightening their belts*), marks them on a
word wall of all 43, and scores the attempt. Target is 12 distinct items.

Progress, points, test results and the roleplay are saved in the browser and
survive a reload. The ↺ button in the header clears everything; the ◐ button
switches light / dark / follow-the-device.

---

## Adding the podcast and the video

Open **`media.js`**. Full instructions are written at the top of that file.
In short, paste an object into the right list:

```js
// a podcast episode
{ id:"ep1", title:"Chapter 1: the ten-baht lesson", url:"audio/ep1.mp3",
  duration:"6:20", chapter:1, words:["bankcharge","atm"], transcript:"" }

// a video
{ id:"v1", title:"Cheap is not the same as good value", youtube:"VIDEOID",
  duration:"2:10", pattern:"valuescale" }
```

The nodes are already in the app, so nothing else changes. While a list is
empty the Media tab shows a tidy "node ready" placeholder instead.

The optional fields do useful work:

- `chapter: 2` puts a chip on that chapter in the Storybook
- `words: ["splashout","drain"]` puts a chip on those study cards
- `pattern: "liquid"` puts a chip on that pattern card
- `transcript: "…"` adds a collapsible transcript under the player
- `external: true` on a podcast turns it into a Listen button (Spotify, Apple)
- `iframe: "…"` on a video embeds a non-YouTube player

There is a third shelf, `extras`, for Blooket games, Quizlet sets, NotebookLM
decks or worksheet PDFs.

---

## Editing the content

All content lives in `data/`. The app reads it; it never hard-codes a word.

**To change a definition or example** — edit the entry in `data/words.js`.

**To add a word** — add an entry to `data/words.js` using the same fields, give
it one of the five `cluster` values, and make sure each of its six synonyms and
antonyms either already exists in `data/lexicon.js` or is added there. A
synonym with no lexicon entry is still displayed, just not clickable, so nothing
breaks.

**To change or replace an illustration** — every page in `data/story.js` has an
`img` field pointing into `art/`, and an `alt` field describing the picture for
screen readers. Drop a new file into `art/`, point `img` at it and update `alt`.
Any shape works: the panel shows the whole image without cropping and fills the
space around it with a blurred copy of the same picture. Clear the `img` field
and the page falls back to a coloured panel with the emoji in `art`; `tint`
takes `warm`, `cool` or `bright`.

**To change a test question** — edit `data/tests.js`. `answer` is the index
(0–3) of the correct option, `tests` must be a word id from `words.js`, and
`cluster` must match that word's cluster or the placement diagnosis will
mis-route the student.

---

*Built for the English Programme, Satriwithaya School.
43 target items · 231 linked synonyms and antonyms · 60 test questions.*
