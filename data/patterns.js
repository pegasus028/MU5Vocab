/* ============================================================
   MONEY MATTERS: patterns module
   The systems behind the 43 items: metaphors, scales, families,
   grammar frames, traps and one Thai contrast.
   Schema per card:
     id        unique key
     icon      one mnemonic emoji
     title     the claim, in plain words
     kind      metaphor | family | grammar | contrast | scale | culture
     insight   the explanation (the payload)
     items     ids from words.js
     examples  worked lines a student can read aloud
     drill     one thing to do in under a minute
   ============================================================ */
window.PATTERNS = [

{
  id: "liquid",
  icon: "💧",
  title: "Money is a liquid",
  kind: "metaphor",
  insight: "English does not merely compare money to water, it treats money AS water, and that is why the prepositions are what they are. Water is thrown about (SPLASH out), it disappears DOWN a drain, a supply RUNS OUT, and money FLOWS in and out. This is also why bankers call cash a *liquid* asset: cash can be poured instantly into anything, while a house cannot.",
  items: ["splashout", "drain", "runout", "cash"],
  examples: [
    "Money is SPLASHED out, it goes DOWN the drain, it RUNS OUT, it FLOWS in and out, and the liquid form of wealth is CASH.",
    "Predict the preposition from the picture: liquid goes DOWN a drain, OUT OF a tap, INTO a container. That is exactly why we say run OUT OF money and throw money DOWN the drain.",
    "The metaphor also explains the feeling: water down a drain cannot be collected again, so THROW MONEY DOWN THE DRAIN means the loss is total and permanent."
  ],
  drill: "Take any water verb you know (pour, leak, dry up, trickle, flood) and say it with money. The ones that sound natural are the metaphor working for you: my savings are drying up, money just leaks away."
},

{
  id: "body",
  icon: "🦵",
  title: "Money pain is felt in the body",
  kind: "metaphor",
  insight: "Both idioms turn a financial loss into a physical sensation, and between them they name the TWO kinds of money pain. COST AN ARM AND A LEG is amputation: one enormous loss, felt once. TIGHTEN YOUR BELT is constriction: a small daily discomfort that goes on and on. Neither can be varied, because an idiom is stored in the brain as one long word, not built word by word like a sentence.",
  items: ["armandleg", "tightenbelt"],
  examples: [
    "Fixed: *cost an arm and a leg*. Broken English: 'cost a hand and a foot', 'cost an arm and two legs', 'cost arms and legs'.",
    "Only the grammar around the idiom moves: it COST / COSTS / WILL COST you an arm and a leg; we HAD TO tighten OUR belts; they ARE tightening THEIR belts.",
    "The belt picture is logical: less money means less food, so the waist shrinks and the belt must be pulled in a notch."
  ],
  drill: "Say each idiom out loud, then deliberately change one word. Listen to how wrong it sounds. That feeling of wrongness is what you want available to you in an exam."
},

{
  id: "hunt",
  icon: "🦈",
  title: "Shopping is hunting: who eats whom",
  kind: "metaphor",
  insight: "English describes buying and selling as a hunt, and each word tells you which side is the predator. SNAP UP is the buyer biting fast, because snap is the sound of jaws closing. RIP OFF is the seller tearing money out of you. SELL OUT is the prey all being taken. SHOP AROUND is circling the ground before you strike. Even SWIPE means both to pay by card and to steal, which is no accident.",
  items: ["snapup", "ripoff", "sellout", "shoparound", "swipe"],
  examples: [
    "The fast buyer SNAPS, the dishonest seller RIPS, the goods get TAKEN, and the careful hunter SHOPS AROUND first.",
    "Speed, not price, is the core of snap up: 'the tickets were snapped up within minutes' is a statement about TIME.",
    "SHOP AROUND is the cure for being RIPPED OFF. The predator only wins if you strike at the first thing you see."
  ],
  drill: "For every new money verb, ask one question: who is eating whom? If the buyer wins it will feel positive (snap up, bargain hunting). If the seller wins it will feel negative (rip off, overcharge)."
},

{
  id: "directions",
  icon: "↔️",
  title: "Every money word has a direction",
  kind: "contrast",
  insight: "Hardly any money word means just an amount, each one carries a DIRECTION of travel, and English marks that direction with a particle or a prefix rather than a whole new root. Draw two columns, MONEY IN and MONEY OUT, and half of this vocabulary sorts itself. The pairs then teach each other: once you know pay BACK, you already know that refund and repay must also mean back.",
  items: ["allowance", "takeout", "payback", "refund", "payment", "spendon", "save", "debt", "chipin", "setaside"],
  examples: [
    "MONEY IN: an allowance arrives, people chip in, a refund comes back, a loan is paid back, savings are set aside.",
    "MONEY OUT: you take out cash, you make a payment, you spend on things, you get into debt.",
    "The mirror pairs: take out / pay in, payment / refund, spend / save, get into debt / pay off, chip in (many people pay a little) / foot the bill (one person pays everything).",
    "Same event, two directions: for the shop it is a PAYMENT, for you it is money OUT; when the zip breaks it is a REFUND for you and money OUT for the shop."
  ],
  drill: "Head two columns MONEY IN and MONEY OUT and post all 43 items into one of them within a minute. Any word you cannot place is a word you do not yet really know."
},

{
  id: "spendscale",
  icon: "🌡️",
  title: "One line from careful to reckless",
  kind: "scale",
  insight: "These items are not synonyms, they are points on a single line, and what moves you along it is the RATIO between what you spend and what you have. GET BY is spending less than you have and feeling it. BUDGET is spending exactly what you planned. SPLASH OUT is spending more than you needed to, on purpose and for pleasure. GET INTO DEBT is spending money that is not yours at all, which is why it sits off the end of the scale.",
  items: ["getby", "cutdown", "tightenbelt", "budget", "setaside", "save", "spendon", "afford", "splashout", "fortune", "waste", "drain", "debt", "spendinghabits"],
  examples: [
    "Careful end: get by, tighten your belt, cut down on, budget, set aside, save. Middle: afford, spend on. Reckless end: splash out, spend a fortune, waste, throw money down the drain, get into debt.",
    "SPLASH OUT is not an insult but WASTE is, and the difference is not the amount. Splashing out is chosen pleasure; waste is money that bought you nothing at all.",
    "AFFORD is the hinge of the whole line: everything to the left of it is inside what you can afford, everything to the right of it is outside.",
    "Your SPENDING HABITS are simply where you sit on this line most weeks."
  ],
  drill: "Write the line in your notebook and mark an X where your own spending sat last week. Then say one sentence naming the single word that would move you one step to the left."
},

{
  id: "valuescale",
  icon: "⚖️",
  title: "Cheap and good value are different axes",
  kind: "scale",
  insight: "Price and value are two separate measurements, and most learners collapse them into one. CHEAP only reports that the number is low. GOOD VALUE FOR MONEY reports that the worth is high compared with the number. That is why an expensive thing can be excellent value (boots that last five years) and a cheap thing can be a rip-off (a fake charger that dies in a week).",
  items: ["bargain", "discount", "sale", "value", "ripoff", "armandleg", "snapup"],
  examples: [
    "Low price to high price: dirt cheap, a steal, a bargain, in the sale, with a discount, full price, overpriced, a rip-off, costs an arm and a leg.",
    "A RIP-OFF is not simply a high price, it is a high price for low worth, which is why a 1,000-baht bag can be a bargain and a 50-baht one can be a rip-off.",
    "A BARGAIN and a STEAL both mean low price AND good worth: the two axes pointing the same way. That is why you snap them up.",
    "A DISCOUNT and a SALE describe a MOVEMENT downwards from the normal price, not a level. Twenty per cent off an overpriced thing is still overpriced."
  ],
  drill: "Name one thing you own that was expensive AND good value, and one that was cheap AND a waste of money. If you can do both in ten seconds, you own the distinction for life."
},

{
  id: "families",
  icon: "🌳",
  title: "Learn the family, not the word",
  kind: "family",
  insight: "English rarely invents a new word where it can reshape an old one, so the efficient unit of study is the family. Phrasal verbs turn into nouns by joining up, often with a hyphen (rip off becomes a rip-off). Verbs become nouns inside a fixed frame (waste money becomes a waste OF money). And the Latin prefix RE- meaning back gives refund, repay and reimburse one single direction.",
  items: ["waste", "purchase", "refund", "ripoff", "sellout", "value", "payment", "payback"],
  examples: [
    "Verb then noun: they RIPPED me OFF / it was a total RIP-OFF. The tickets SOLD OUT / it was a SELL-OUT. Hyphen in the noun, two words in the verb.",
    "RE- means back: REfund the money, REpay the loan, REimburse the expenses. PAY BACK is the everyday English version of all three.",
    "PURCHASE never changes shape: make a purchase (noun), purchase the tickets (verb). PAY gives payment, repay, payback.",
    "WASTE shifts frame, not spelling: he WASTED 800 baht (verb) becomes it was a WASTE OF 800 baht (noun plus OF).",
    "VALUE gives value (noun), valuable (adjective) and value for money (adjective phrase): good value for money, but never 'a valuable price'."
  ],
  drill: "For any new money word, answer three questions in writing: what is the noun, what is the verb, and does the noun take a hyphen? Three seconds each, and the exam question is already answered."
},

{
  id: "grammar",
  icon: "🔧",
  title: "The small word after the big word",
  kind: "grammar",
  insight: "Exams do not test whether you know these words, they test the tiny word that follows, so store the whole frame and not the meaning alone. Three rules cover nearly everything here: SPEND money ON a thing but SPEND time DOING something; AFFORD travels with can, cannot or could and then TO plus verb; and a phrasal verb is separable only if the object can sit in the middle, which a pronoun is FORCED to do.",
  items: ["spendon", "afford", "runout", "getby", "chipin", "cutdown", "cometo", "payback", "takeout", "shoparound", "setaside", "splashout"],
  examples: [
    "Fixed frames: run out OF money, get by ON 100 baht, chip in FOR a present, cut down ON snacks, spend 300 baht ON shoes, set aside money FOR emergencies, splash out ON seats, come TO a total.",
    "AFFORD: I cannot afford TO buy it, could you afford TO go. Not 'I afford it' and not 'afford buying it'.",
    "Separable, so a pronoun MUST go in the middle: pay ME back, take IT out, snap THEM up. Never 'pay back me' or 'take out it'.",
    "Inseparable, so nothing can split them: get by, come to, shop around. You shop around FOR shoes, never 'shop shoes around'.",
    "Spend splits by what follows: she spent 200 baht ON snacks (a thing) but she spent an hour QUEUING (an activity)."
  ],
  drill: "Cover the definitions and write only the preposition after each of these twelve items. Every blank you cannot fill within five seconds is tonight's revision list."
},

{
  id: "countable",
  icon: "🧮",
  title: "Substance words and object words",
  kind: "grammar",
  insight: "English forces a division here that nobody explains: MONEY, CASH and CHANGE are uncountable, so they take some, much and a lot of and never a plural, while COINS, NOTES, PAYMENTS and PURCHASES are countable and must be counted. The reason is consistent: the uncountable words name the SUBSTANCE and the countable ones name the OBJECTS made of it, exactly like water and bottles.",
  items: ["cash", "change", "coin", "note", "payment", "purchase", "spendinghabits"],
  examples: [
    "Right: some cash, a lot of money, have you got any change, three coins, two 100-baht notes, four monthly payments, a recent purchase.",
    "Wrong: 'a cash', 'cashes', 'a money', 'changes' when you mean coins, 'much coins'.",
    "CHANGE is the awkward one, because it names both the loose coins in your pocket and the money handed back at the till, and BOTH senses are uncountable: some change, not 'a change'.",
    "SPENDING HABITS runs the other way and is almost always plural. One habit is a choice; habits are a personality."
  ],
  drill: "Say five true sentences about what is in your bag right now, using some, a lot of, any, three and two. If the word accepts a number it is countable. Check every one against the list."
},

{
  id: "register",
  icon: "🎚️",
  title: "Three shelves: spoken, neutral, written",
  kind: "culture",
  insight: "Every idea in this topic exists at three levels, and it is the LEVEL, not the meaning, that makes writing sound wrong. The idioms and phrasal verbs sit at the spoken end, the plain everyday words in the middle, and the Latin words at the written end. Knowing which shelf a word lives on earns more marks than knowing one more synonym, because an examiner hears register instantly, before they judge anything else.",
  items: ["purchase", "payment", "refund", "bankcharge", "ripoff", "splashout", "fortune", "drain", "armandleg", "getby"],
  examples: [
    "Spoken / neutral / written: buy / buy / PURCHASE or procure. Money back / REFUND / reimbursement. SPLASH OUT / spend a lot / lavish money on.",
    "RIP OFF / overcharge / fleece. GET BY / manage / subsist. COST AN ARM AND A LEG / be very expensive / be exorbitant. MONEY DOWN THE DRAIN / wasted money / squandered funds.",
    "A BANK CHARGE is neutral, a fee is neutral to formal, a levy is legal language. The same coins, three different documents.",
    "The same event, two registers: 'the taxi ripped us off' in speech becomes 'we were overcharged for the journey' in a letter of complaint. PAYMENT and PURCHASE belong on signs and forms."
  ],
  drill: "Take one sentence you would actually say to a friend about money and rewrite it for a school report. Then check one thing only: that not a single phrasal verb or idiom survived."
},

{
  id: "traps",
  icon: "⚠️",
  title: "Pairs one letter or one preposition apart",
  kind: "contrast",
  insight: "Most errors in this topic are not gaps in vocabulary, they are confusions between two forms that sit a single letter or particle apart. ON sale means reduced, FOR sale means available to buy. ECONOMIC is about the economy, ECONOMICAL saves you money. CUT DOWN is less, CUT OUT is none. And two spellings carry silent letters that survive only because Latin had them, so the letter is written but never sounded.",
  items: ["sale", "value", "bankcharge", "receipt", "debt", "cutdown", "payback", "swipe", "tax"],
  examples: [
    "The shoes are FOR sale (you may buy them) and they are ON sale (the price has been reduced). Only one of those is good news.",
    "A FEE is for a service, a PRICE is for a thing, a FINE is a punishment, a TAX goes to the government. Four different reasons for handing over the same coins.",
    "BORROW is taking and LEND is giving: I borrowed 100 baht FROM her, she lent 100 baht TO me, and then I PAID her BACK. Only the borrower pays back.",
    "Silent letters: receipt is /ri-SEET/ with no p, debt is /det/ with no b. Write the letter, never say it.",
    "CHEAP is a low price, GOOD VALUE is high worth for the price, and they are not the same claim.",
    "SWIPE has two lives: swipe your card at the till, but also someone swiped my pen, meaning stole it."
  ],
  drill: "Put the six trap pairs on one card as questions, answers on the back, and test yourself once a day for a week. Sixty seconds a day fixes more marks than an hour of new words."
},

{
  id: "thai",
  icon: "🐘",
  title: "Where Thai and English cut differently",
  kind: "culture",
  insight: "Thai and English divide this field along different lines, and the predictable errors come straight from the difference. Thai เก็บ (kep) covers both keep and save, so Thai speakers reach for keep where English needs save or set aside. Thai also builds lend out of borrow, ยืม (yuem) becoming ให้ยืม (hai yuem, literally give-borrow), which is exactly why 'Can you borrow me 100 baht?' is such a common slip.",
  items: ["save", "setaside", "change", "coin", "cash", "payback", "account"],
  examples: [
    "One Thai verb, three English choices: SAVE money for later, SET ASIDE money for one purpose, KEEP the change as a tip.",
    "Borrow and lend are two separate verbs in English: I BORROW money FROM you, you LEND money TO me, then I PAY you BACK.",
    "Thai counts with classifiers and has no articles, so nothing in your first language warns you that 'a cash' is impossible. English makes you choose: some cash, three coins, money in an account.",
    "Going the other way, English is the vaguer language: CHANGE covers both the coins in your pocket and the money handed back at the till, where Thai has a separate word for the money handed back."
  ],
  drill: "Translate three Thai money sentences you would genuinely say into English, then check two things only: did you choose save, set aside or keep correctly, and is every uncountable word free of a and free of s?"
},

{
  id: "cashjourney",
  icon: "🏧",
  title: "Ten words, one sequence",
  kind: "family",
  insight: "Ten of these items are not a list to memorise, they are ONE sequence, and knowing the order tells you which word belongs at which moment. Money rests in an ACCOUNT, a CARD gives you access to it, an ATM or a SWIPE at the till releases it, you TAKE OUT notes, you receive CHANGE in coins, and a RECEIPT proves the step happened. The BANK CHARGE is the step nobody plans for.",
  items: ["account", "atm", "card", "swipe", "takeout", "bankcharge", "note", "cash", "change", "receipt", "tax"],
  examples: [
    "The chain in order: account, card, ATM or till, swipe or take out, notes and coins, change, receipt.",
    "Direction check at every step: you PAY INTO an account and TAKE money OUT OF it, so the machine always sits at the OUT end.",
    "DEBIT and CREDIT split the chain in two: a debit card takes your own money out now, a credit card takes the bank's money now and leaves you owing it.",
    "The invisible steps are the expensive ones: a bank charge for using another bank's machine, and tax added at the till, both leave your money without any decision from you."
  ],
  drill: "Narrate your last real trip to a cash machine in six sentences, one per step, using a different word from the chain in each sentence. Any step you cannot name is your gap."
}

];
