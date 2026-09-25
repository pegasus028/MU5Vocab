# How to generate the storybook illustrations in NotebookLM
### *Mint's Perfect Present* — 7 images, click by click

Everything you need is in this folder. Upload one file, paste one prompt, press
one button.

| What | Which file |
|---|---|
| **The source you upload** | `SOURCE-Mint-Storybook-Art-Brief.md` |
| **The prompt you paste** | Section 3 of this document |
| **Where the finished images go** | the `art/` folder, under the seven names in Section 6 |

Upload **only** that one source file. Do not also add the story file, the README
or the app code. NotebookLM writes from everything it can see, and extra sources
are the fastest way to reintroduce stray text and invented detail.

---

## 1. What changed in the character

Mint (previously Mikii, renamed throughout the app) now has:

- **Long straight black hair, worn completely loose and untied,** falling to the
  middle of her back, centre-parted, with a soft fringe. Never tied, never a
  ponytail, never a bow or clip.
- **Round glasses with thin gold-toned metal frames,** worn in every image.

Her three identifying marks are now **the loose long hair, the glasses, and the
small mole below the left corner of her mouth**. All three must be visible in
every image, and they are what you check when deciding whether to keep a picture.

The classmate, Nok, is deliberately built as the opposite silhouette: same
uniform and same age, but **taller, hair tied up in a high ponytail, and no
glasses**. The two can never be mistaken for each other.

---

## 2. Click by click

1. Go to **notebooklm.google.com** and sign in.
2. Click **Create new** to start a new notebook. Use a fresh notebook, not one
   with other material in it.
3. In the **Sources** panel on the left, click **Add** (or the **+**).
4. Choose **Upload file** and select **`SOURCE-Mint-Storybook-Art-Brief.md`**.
   - If your NotebookLM refuses a `.md` file, open the file, copy everything,
     paste it into a new Google Doc, and add that Doc as the source instead.
     Do not retype or summarise it.
5. Wait for the source to finish processing. The tick beside its name means it
   is ready. Confirm the checkbox next to it is **ticked**, so it is included.
6. Open the **Studio** panel on the right and click **Slide Deck**.
7. In the customisation panel that opens:
   - **Format:** choose **Presenter Slides**. (Not *Detailed Deck*, which fills
     slides with body text you would only have to crop off.)
   - **Output language:** English.
   - **Length:** **Short**. You want seven slides, not a full presentation.
8. Click into the field labelled **"Describe the slide deck that you want to
   create"** and paste the whole prompt from Section 3 below. Paste it exactly,
   including the last paragraph.
9. Click **Generate**.
10. Wait. It runs in the background and usually takes a few minutes. You can
    keep working in the notebook while it does.
11. When the deck appears, check all seven slides against the list in Section 5
    **before** doing anything else.
12. If something is wrong, click **Revise** at the top of the deck, say what to
    change (Section 7 has wordings that work), and click **Generate revised
    deck**. Revise the existing deck rather than starting again, so the other
    six images do not change underneath you.
13. When you are happy, click the **three-dot menu** next to the deck and choose
    **Download PowerPoint (.pptx)**.

---

## 3. The exact prompt

Paste this, unaltered, into **"Describe the slide deck that you want to create"**.

```
Create exactly 7 slides, one for each of the seven numbered scenes in the
source document, in the order they appear: slide 1 is Scene 1, slide 2 is
Scene 2, and so on to slide 7 for Scene 7. Do not add a title slide, a
contents slide, a summary slide, a thank-you slide or any other extra slide.
Seven slides in total, no more and no fewer.

Each slide must be one single large illustration that fills the whole slide,
drawn exactly as its scene describes. Do not put bullet points, body text,
captions, labels or annotations on any slide. If a heading cannot be avoided,
use only the scene number as a single numeral in one corner.

The art style, the character Mint, the supporting characters and the rule
about writing are all defined in sections 1 to 4 of the source document.
Apply them to all seven images without variation. Mint must look identical on
every slide: the same 13-year-old Thai schoolgirl face, the same long
straight black hair worn completely loose and untied to the middle of her
back, the same round glasses with thin gold-toned metal frames, the same
small dark mole below the left corner of her mouth, and the same white
short-sleeved blouse and navy pleated skirt. Never draw her as an adult,
never as a teenager older than thirteen, never with her hair tied back, never
without her glasses and never in ordinary clothes. Every image is a warm
coloured pencil and watercolour children's storybook illustration, never a
photograph, never a 3D render and never anime.

Most important of all: the illustrations must contain no readable writing of
any kind. No words, letters or numbers anywhere in any picture. No shop
signs, shop names, brand names or logos. No labels, captions, arrows or
speech bubbles. No figures or words on banknotes or coins. No text on any
screen, poster, sign board or receipt. Every surface that would normally
carry writing must be blank or covered with abstract shapes that are clearly
not letters. Any image containing a readable character is wrong and must be
redrawn.
```

---

## 4. Getting the seven pictures out of the deck

The download is a PowerPoint file, so the illustrations need lifting out of it.
The second method is better because it gives you the full-resolution originals.

**Quick way, one image at a time.** Open the `.pptx` in PowerPoint, Keynote or
Google Slides. Right-click an illustration and choose **Save as Picture**
(PowerPoint) or **Download image** (Google Slides). Repeat for all seven.

**Better way, all seven at once.** Make a copy of the `.pptx` and change its
extension from `.pptx` to `.zip`. Double-click to unzip it. Open the folder
`ppt` and then `media` inside it. Every image in the deck is sitting there at
full resolution. Take the seven illustrations and ignore the small
interface graphics.

Then rename them to the seven names in Section 6 and drop them into the `art/`
folder, replacing what is there. The app needs no code change: `data/story.js`
already points at those names.

---

## 5. Acceptance checklist

Check every image against all eleven lines. An image that fails any line is
revised, not kept.

| # | Check | Why |
|---|---|---|
| 1 | Long black hair, loose and untied, to the middle of her back. | Anchor 1. Any ponytail, bun, bow or clip is a fail. |
| 2 | Round thin gold-rimmed glasses, on her face. | Anchor 2. Glasses vanish more often than anything else. |
| 3 | The small mole below the left corner of her mouth. | Anchor 3. If it is gone, the face has been re-invented. |
| 4 | She looks thirteen, not seventeen and not adult. | Two of the first set aged her up completely. |
| 5 | White short-sleeved blouse and navy pleated skirt, every image. | One outfit across seven images removes a whole class of drift. |
| 6 | Nothing written or badged on her blouse. | Where invented text most often lands. |
| 7 | Not one readable letter or number anywhere in the frame. | Read the whole picture twice, background included. |
| 8 | No labels, arrows or annotation captions. | Those belong to the slide decks, never the storybook. |
| 9 | Right number of people: one in images 1 to 4, two in 5 to 7. | Image 5 last time contained no schoolgirl at all. |
| 10 | Same medium as the other six, no photo-real or anime frame. | One odd frame in seven wrecks the set. |
| 11 | Face not touching the frame edge. | The app shows the whole picture, so nothing is cropped for you. |

---

## 6. The seven filenames

| Slide | Save as | Scene |
|---|---|---|
| 1 | `art/ch1p1-piggybank.jpg` | Mint decides to save |
| 2 | `art/ch1p2-atm.jpg` | The cash machine and the hidden charge |
| 3 | `art/ch2p1-phonecase.jpg` | The phone case that costs too much |
| 4 | `art/ch2p2-sale.jpg` | The paint set in the sale |
| 5 | `art/ch3p1-cardmachine.jpg` | The broken card machine |
| 6 | `art/ch3p2-receipt.jpg` | The bag, the receipt and the change |
| 7 | `art/ch4p1-cake.jpg` | Nok chips in for the cake |

Save as JPEG, about 1,100 pixels on the long edge, quality 85, so the whole set
stays under a megabyte and loads quickly on school wifi. Any shape works: the
app shows the picture whole, without cropping, and fills the space around it
with a blurred copy of the same image.

If you change what happens in a picture, update that page's `alt` field in
`data/story.js` so the description still matches for screen readers.

---

## 7. Revision wordings that work

Click **Revise**, paste the relevant line, click **Generate revised deck**.

- **Hair tied back:** "On slide 4, Mint's hair must be completely loose and
  untied, falling to the middle of her back. Remove the ponytail and any hair
  band or clip."
- **Glasses missing:** "On slide 2, Mint must be wearing her round glasses with
  thin gold-toned metal frames. Add them."
- **She looks too old:** "On slide 6, Mint is thirteen years old and must look
  like a thirteen-year-old schoolgirl, not a young woman. Make her face rounder
  and younger and keep her in her school uniform."
- **An adult replaced her:** "On slide 5, the customer at the counter must be
  Mint, the thirteen-year-old schoolgirl in the white blouse and navy pleated
  skirt with loose long hair and round glasses. Replace the adult woman with
  her."
- **Text appeared:** "On slide 3, remove all writing from the image. The sign
  board must be a plain coloured shape with no words, letters or numbers, and
  the shop behind her must have no signs or brand names."
- **Text keeps coming back:** change the camera instead, because a surface that
  is not in the picture cannot acquire writing. "On slide 4, show the scene from
  a lower angle so the sign board is above the top edge of the frame."
- **Two Mints in one picture:** "On slide 7, only one girl with loose long hair
  and glasses appears in the entire image. Remove any mirror, window or glass
  reflection showing a second version of her."
- **Style drifted:** "Slide 2 must be a warm coloured pencil and watercolour
  children's storybook illustration like the other six, not a photograph and not
  anime."

---

## 8. Two things to expect

**NotebookLM is a deck builder, not an illustration tool.** It will probably put
a small heading on each slide even though the prompt asks it not to. That is
harmless: crop it off, or take the image out of `ppt/media` where the artwork
sits on its own without slide furniture.

**Generate all seven in one deck, in one pass.** NotebookLM has no way to attach
a reference portrait, so the only thing holding the character together is that
all seven images are produced in a single run from a single source. Generating
them one at a time in separate notebooks is what produced the drifting girl last
time. If one image is wrong, use **Revise** on that slide rather than starting a
new deck.

**If you want more control,** a dedicated image tool such as Gemini, Whisk or
ImageFX will take a reference portrait and hold the face far more tightly across
a set. To use one, generate a plain portrait of Mint first from section 1 of the
brief, keep it, and attach it to each of the seven generations. For those tools,
paste sections 3 and 4 of the brief followed by the single scene you want, and
work one image at a time. The brief is written so that each scene already
repeats the full character description and the rule about writing, so a scene
can be lifted out and used on its own.

---

Sources for the interface steps: [Generate a Slide Deck in NotebookLM](https://support.google.com/notebooklm/answer/16757456?hl=en) and [NotebookLM Slide Decks: Create, Customize & Fix Slides](https://notebooklm-guide.com/notebooklm-slide-decks/).
