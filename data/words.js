/* ============================================================
   MONEY MATTERS — core keyword data
   43 target items: 27 money words, 5 idioms, 11 phrasal verbs
   Schema per entry:
     id       unique key (used by story markup and tests)
     word     display form
     pos      part of speech
     cefr     A2 | B1 | B2 | C1
     group    core | idiom | phrasal
     cluster  triage focus area
     ch       story chapter (1-4)
     def      short student-facing definition
     ex       two example sentences
     syn      { B1, B2, C1 }  — all clickable, all defined in lexicon.js
     ant      { B1, B2, C1 }  — all clickable, all defined in lexicon.js
     colls    common collocations
     tip      optional insight / warning (may be omitted)
   ============================================================ */
window.WORDS = [

/* ---------- CLUSTER 1: banking — getting hold of money ---------- */
{
  id: "account", word: "account", pos: "noun", cefr: "B1", group: "core", cluster: "banking", ch: 1,
  def: "An arrangement with a bank that keeps your money safe and lets you pay money in and take money out.",
  ex: [
    "Chris opened a savings account so his New Year money would not disappear in a week.",
    "The school fees were paid straight from his mother's account."
  ],
  syn: { B1: "bank account", B2: "deposit account", C1: "ledger" },
  ant: { B1: "cash in hand", B2: "debt", C1: "overdraft" },
  colls: ["open an account", "close an account", "a savings account", "pay into an account", "check your account"],
  tip: "Money IN an account is safe but slow to reach; money in your pocket is fast but easy to lose."
},
{
  id: "atm", word: "ATM / cashpoint", pos: "noun", cefr: "B1", group: "core", cluster: "banking", ch: 1,
  def: "A machine, usually in a wall, that lets you take cash out of your bank account using a card.",
  ex: [
    "There is an ATM outside the 7-Eleven if you need cash for the bus.",
    "The cashpoint at Siam station swallowed her card and she nearly cried."
  ],
  syn: { B1: "cash machine", B2: "cash dispenser", C1: "automated teller" },
  ant: { B1: "bank counter", B2: "teller", C1: "branch" },
  colls: ["use an ATM", "withdraw money from an ATM", "an ATM receipt", "the nearest cashpoint", "an ATM card"],
  tip: "ATM is the international word; cashpoint is British. Thai students will hear both."
},
{
  id: "bankcharge", word: "bank charge / fee", pos: "noun", cefr: "B2", group: "core", cluster: "banking", ch: 1,
  def: "Money that a bank takes from you for a service, such as sending money or using another bank's machine.",
  ex: [
    "A 20-baht bank charge appeared on her statement because she used a different bank's ATM.",
    "Transfer fees look tiny, but they add up over a year."
  ],
  syn: { B1: "charge", B2: "commission", C1: "levy" },
  ant: { B1: "free service", B2: "refund", C1: "rebate" },
  colls: ["pay a bank charge", "a monthly fee", "a transaction fee", "avoid bank charges", "a hidden fee"],
  tip: "A fee is money you pay for a SERVICE. A price is money you pay for a THING."
},
{
  id: "cash", word: "cash", pos: "noun (uncountable)", cefr: "B1", group: "core", cluster: "banking", ch: 1,
  def: "Money in the form of coins and notes, rather than a card or a bank transfer.",
  ex: [
    "The noodle stall only takes cash, so bring coins.",
    "He pays in cash because he does not trust himself with a card."
  ],
  syn: { B1: "money", B2: "notes and coins", C1: "currency" },
  ant: { B1: "card", B2: "bank transfer", C1: "credit" },
  colls: ["pay in cash", "cash only", "short of cash", "withdraw cash", "a cash machine"],
  tip: "Never say 'a cash' or 'cashes'. Cash is uncountable: some cash, a lot of cash."
},
{
  id: "coin", word: "coin", pos: "noun", cefr: "A2", group: "core", cluster: "banking", ch: 1,
  def: "A small, round, flat piece of metal used as money.",
  ex: [
    "She counted out ten 10-baht coins for the ice cream.",
    "His pocket was heavy with coins after the sale."
  ],
  syn: { B1: "small change", B2: "loose change", C1: "coinage" },
  ant: { B1: "note", B2: "banknote", C1: "bill" },
  colls: ["a 10-baht coin", "drop a coin", "coins and notes", "a handful of coins", "toss a coin"],
  tip: "Coins are countable (three coins). Change is uncountable (some change)."
},
{
  id: "change", word: "change", pos: "noun (uncountable)", cefr: "B1", group: "core", cluster: "banking", ch: 1,
  def: "The money you get back when you pay more than the exact price; also the coins you carry around.",
  ex: [
    "The pie cost 45 baht, so she got 55 baht change from a hundred.",
    "Do you have change for a 500-baht note?"
  ],
  syn: { B1: "coins", B2: "small change", C1: "balance" },
  ant: { B1: "exact money", B2: "banknote", C1: "the full amount" },
  colls: ["get change", "keep the change", "small change", "change for a hundred", "exact change"],
  tip: "'Keep the change' is a polite way of leaving a tip."
},
{
  id: "card", word: "credit / debit card", pos: "noun", cefr: "B1", group: "core", cluster: "banking", ch: 1,
  def: "A card that lets you pay without cash. A debit card spends money you already have; a credit card borrows money you must pay back.",
  ex: [
    "Her father paid for the shoes with a credit card and regretted it for three months.",
    "A debit card is safer for teenagers because you cannot spend money you do not have."
  ],
  syn: { B1: "bank card", B2: "plastic", C1: "payment card" },
  ant: { B1: "cash", B2: "banknote", C1: "legal tender" },
  colls: ["pay by card", "swipe a card", "a card payment", "card details", "tap your card"],
  tip: "DEBIT = your own money leaves now. CREDIT = the bank's money leaves now and you owe it."
},
{
  id: "note", word: "(bank)note", pos: "noun", cefr: "B1", group: "core", cluster: "banking", ch: 1,
  def: "A piece of paper money, such as a 100-baht note.",
  ex: [
    "He folded the 1,000-baht note and hid it inside his phone case.",
    "The machine would not accept a torn banknote."
  ],
  syn: { B1: "paper money", B2: "bill", C1: "legal tender" },
  ant: { B1: "coin", B2: "small change", C1: "coinage" },
  colls: ["a 100-baht note", "a crisp new note", "change a note", "a torn note", "notes and coins"],
  tip: "British English says note; American English says bill. Same object."
},
{
  id: "swipe", word: "swipe", pos: "verb", cefr: "B2", group: "core", cluster: "banking", ch: 1,
  def: "To pass a card through or across a machine so that the machine reads it and takes the payment.",
  ex: [
    "She swiped her card and the machine beeped twice.",
    "He swiped, tapped, and finally paid in cash when nothing worked."
  ],
  syn: { B1: "use your card", B2: "tap", C1: "process" },
  ant: { B1: "pay cash", B2: "hand over cash", C1: "settle in cash" },
  colls: ["swipe a card", "swipe to pay", "swipe at the till", "swipe your student card", "a card swipe"],
  tip: "Swipe also means 'to steal' in informal English — someone swiped my pen."
},
{
  id: "takeout", word: "take out (money)", pos: "phrasal verb", cefr: "B1", group: "phrasal", cluster: "banking", ch: 1,
  def: "To get cash out of your bank account, usually from a machine.",
  ex: [
    "She took out 500 baht before the market closed.",
    "Do not take out more money than you planned to spend."
  ],
  syn: { B1: "get money out", B2: "withdraw", C1: "make a withdrawal" },
  ant: { B1: "put in", B2: "deposit", C1: "pay into" },
  colls: ["take out cash", "take out 500 baht", "take money out of an ATM", "take out too much"],
  tip: "Separable: take out 500 baht OR take 500 baht out. But never 'take out it' — say 'take it out'."
},
{
  id: "allowance", word: "allowance", pos: "noun", cefr: "B1", group: "core", cluster: "budget", ch: 1,
  def: "An amount of money you are given regularly, usually by a parent, to spend as you choose.",
  ex: [
    "His weekly allowance is 300 baht and it has to cover snacks and the bus.",
    "Her parents raised her allowance when she started M3."
  ],
  syn: { B1: "pocket money", B2: "spending money", C1: "stipend" },
  ant: { B1: "wages", B2: "earnings", C1: "remuneration" },
  colls: ["a weekly allowance", "a monthly allowance", "spend your allowance", "live on an allowance", "raise an allowance"],
  tip: "An allowance is GIVEN to you. Wages are EARNED by you. That is the whole difference."
},

/* ---------- CLUSTER 2: value — price, bargains and being cheated ---------- */
{
  id: "bargain", word: "bargain", pos: "noun", cefr: "B1", group: "core", cluster: "value", ch: 2,
  def: "Something you buy for much less than its usual price.",
  ex: [
    "At 150 baht, the school bag was a real bargain.",
    "She hunts for bargains at the night market every Sunday."
  ],
  syn: { B1: "good deal", B2: "snip", C1: "steal" },
  ant: { B1: "rip-off", B2: "waste of money", C1: "extortionate price" },
  colls: ["a real bargain", "a bargain price", "pick up a bargain", "bargain hunting", "the bargain bin"],
  tip: "As a verb, bargain means to argue about the price — very useful at Thai markets."
},
{
  id: "discount", word: "discount", pos: "noun", cefr: "B1", group: "core", cluster: "value", ch: 2,
  def: "An amount taken off the normal price.",
  ex: [
    "Students get a 10% discount if they show a school card.",
    "The shop offered a 200-baht discount if she bought two."
  ],
  syn: { B1: "money off", B2: "reduction", C1: "markdown" },
  ant: { B1: "full price", B2: "surcharge", C1: "premium" },
  colls: ["get a discount", "offer a discount", "a 20% discount", "a student discount", "at a discount"],
  tip: "A discount is taken OFF a price. Say 'a discount ON these shoes', not 'a discount of these shoes'."
},
{
  id: "sale", word: "sale", pos: "noun", cefr: "B1", group: "core", cluster: "value", ch: 2,
  def: "A period when a shop sells things at lower prices than usual; also the act of selling something.",
  ex: [
    "The whole shop was in the sale, so nothing cost full price.",
    "She waited for the end-of-season sale before buying the jacket."
  ],
  syn: { B1: "special offer", B2: "clearance", C1: "promotion" },
  ant: { B1: "full price", B2: "peak price", C1: "premium pricing" },
  colls: ["in the sale", "on sale", "a clearance sale", "the sale starts", "half-price sale"],
  tip: "ON sale = reduced. FOR sale = available to buy. One little word, two different meanings."
},
{
  id: "value", word: "value / value for money", pos: "noun & adjective phrase", cefr: "B2", group: "core", cluster: "value", ch: 2,
  def: "How much something is worth compared with what you pay. If something is 'value for money', you get a lot for the price.",
  ex: [
    "The 99-baht lunch set is excellent value for money.",
    "A cheap phone is not good value if it breaks within a month."
  ],
  syn: { B1: "worth the money", B2: "good deal", C1: "cost-effective" },
  ant: { B1: "not worth it", B2: "overpriced", C1: "poor return" },
  colls: ["good value for money", "excellent value", "poor value", "offer value", "value for money"],
  tip: "Cheap = low price. Good value = high worth for the price. A cheap thing can be terrible value."
},
{
  id: "armandleg", word: "cost an arm and a leg", pos: "idiom", cefr: "B2", group: "idiom", cluster: "value", ch: 2,
  def: "To be extremely expensive.",
  ex: [
    "Those headphones cost an arm and a leg, so she bought a cheaper copy instead.",
    "Concert tickets cost an arm and a leg once the resellers get hold of them."
  ],
  syn: { B1: "be very expensive", B2: "cost a fortune", C1: "be exorbitant" },
  ant: { B1: "be cheap", B2: "be a bargain", C1: "be dirt cheap" },
  colls: ["it cost an arm and a leg", "costs an arm and a leg", "will cost you an arm and a leg"],
  tip: "The joke: the price is so high that you pay with body parts. Never change the parts — not 'a hand and a foot'."
},
{
  id: "snapup", word: "snap up a bargain", pos: "idiom", cefr: "B2", group: "idiom", cluster: "value", ch: 2,
  def: "To buy something cheap very quickly, before anyone else can get it.",
  ex: [
    "She snapped up a bargain: two shirts for the price of one.",
    "Get there early if you want to snap up a bargain."
  ],
  syn: { B1: "grab a deal", B2: "seize an opportunity", C1: "pounce on a bargain" },
  ant: { B1: "miss out", B2: "hesitate", C1: "dither" },
  colls: ["snap up a bargain", "snap them up", "snapped up within minutes", "snap up the last one"],
  tip: "'Snap' is the sound of a fast bite. The word is all about SPEED, not just price."
},
{
  id: "ripoff", word: "rip off", pos: "phrasal verb", cefr: "B2", group: "phrasal", cluster: "value", ch: 2,
  def: "To charge somebody far too much money, or to cheat them.",
  ex: [
    "The taxi driver ripped them off by taking the long way round.",
    "That stall rips off tourists who do not know the normal price."
  ],
  syn: { B1: "cheat", B2: "overcharge", C1: "fleece" },
  ant: { B1: "give a fair price", B2: "charge fairly", C1: "deal honestly" },
  colls: ["rip someone off", "get ripped off", "a total rip-off", "rip off tourists"],
  tip: "Verb: they ripped me off. Noun, with a hyphen: it was a rip-off."
},
{
  id: "shoparound", word: "shop around", pos: "phrasal verb", cefr: "B2", group: "phrasal", cluster: "value", ch: 2,
  def: "To compare prices in several shops or websites before you decide to buy.",
  ex: [
    "If you shop around, you can find the same shoes 300 baht cheaper.",
    "He never shops around, which is why he always overpays."
  ],
  syn: { B1: "compare prices", B2: "look around", C1: "canvass the market" },
  ant: { B1: "buy the first one", B2: "buy on impulse", C1: "purchase unthinkingly" },
  colls: ["shop around for", "shop around online", "worth shopping around", "shop around first"],
  tip: "Shop around is the cure for getting ripped off. The two words are natural partners."
},
{
  id: "cometo", word: "come to", pos: "phrasal verb", cefr: "B1", group: "phrasal", cluster: "value", ch: 2,
  def: "To add up to a total amount.",
  ex: [
    "That comes to 340 baht altogether.",
    "With tax, the bill came to almost a thousand."
  ],
  syn: { B1: "add up to", B2: "total", C1: "amount to" },
  ant: { B1: "take off", B2: "deduct", C1: "subtract" },
  colls: ["come to 500 baht", "how much does it come to", "come to a total of", "that comes to"],
  tip: "The classic shop question: 'How much does it come to?' Learn it as one whole chunk."
},
{
  id: "purchase", word: "purchase", pos: "noun & verb", cefr: "B2", group: "core", cluster: "transaction", ch: 2,
  def: "Something you buy, or the act of buying it — a more formal word than 'buy'.",
  ex: [
    "Keep the receipt for every purchase over 500 baht.",
    "She purchased the tickets online at midnight."
  ],
  syn: { B1: "buy", B2: "acquire", C1: "procure" },
  ant: { B1: "sell", B2: "return", C1: "dispose of" },
  colls: ["make a purchase", "a recent purchase", "purchase online", "proof of purchase", "an impulse purchase"],
  tip: "Purchase is formal. Use it in writing and on signs; say 'buy' when you are talking."
},
{
  id: "payment", word: "payment", pos: "noun", cefr: "B1", group: "core", cluster: "transaction", ch: 2,
  def: "An amount of money that is paid, or the act of paying it.",
  ex: [
    "The first payment is due at the end of the month.",
    "Card payments are accepted at every counter."
  ],
  syn: { B1: "money paid", B2: "settlement", C1: "remittance" },
  ant: { B1: "refund", B2: "debt", C1: "arrears" },
  colls: ["make a payment", "a monthly payment", "a card payment", "payment in full", "a late payment"],
  tip: "You MAKE a payment. You never 'do' a payment."
},

/* ---------- CLUSTER 3: spending — using it, wasting it, owing it ---------- */
{
  id: "afford", word: "afford", pos: "verb", cefr: "B1", group: "core", cluster: "spending", ch: 3,
  def: "To have enough money to buy or do something.",
  ex: [
    "She saved for three months before she could afford the trainers.",
    "We cannot afford a taxi, so let us take the BTS."
  ],
  syn: { B1: "have enough for", B2: "manage", C1: "stretch to" },
  ant: { B1: "be broke", B2: "be short of cash", C1: "be beyond your means" },
  colls: ["can afford", "cannot afford", "afford to buy", "barely afford", "afford the time"],
  tip: "Afford almost always travels with CAN, CANNOT or COULD. And it takes TO + verb: afford to buy."
},
{
  id: "spendon", word: "spend on", pos: "verb", cefr: "B1", group: "core", cluster: "spending", ch: 3,
  def: "To use money to buy something, naming the thing you buy after 'on'.",
  ex: [
    "He spends most of his allowance on manga.",
    "How much do you spend on lunch each week?"
  ],
  syn: { B1: "pay for", B2: "lay out on", C1: "expend on" },
  ant: { B1: "save", B2: "set aside", C1: "hoard" },
  colls: ["spend money on", "spend a lot on", "spend too much on", "spend it all on"],
  tip: "Spend money ON a THING, but spend money DOING something: she spent 200 baht ON snacks; she spent an hour QUEUING."
},
{
  id: "waste", word: "waste (money)", pos: "verb", cefr: "B1", group: "core", cluster: "spending", ch: 3,
  def: "To spend money on something useless, so the money brings you nothing at all.",
  ex: [
    "Do not waste your money on that game; it is free on the app store.",
    "He wasted 800 baht on a jacket he never wore."
  ],
  syn: { B1: "throw away", B2: "squander", C1: "fritter away" },
  ant: { B1: "use well", B2: "invest", C1: "economise" },
  colls: ["waste money on", "a waste of money", "waste 500 baht", "waste your allowance"],
  tip: "Verb: he wasted money. Noun: it was a waste of money. Watch the change of form."
},
{
  id: "splashout", word: "splash out", pos: "phrasal verb", cefr: "B2", group: "phrasal", cluster: "spending", ch: 3,
  def: "To spend a lot of money on something enjoyable that you do not really need.",
  ex: [
    "They splashed out on front-row seats for the concert.",
    "Once a year she splashes out and buys real brand-name shoes."
  ],
  syn: { B1: "spend a lot", B2: "treat yourself", C1: "lavish money on" },
  ant: { B1: "save up", B2: "economise", C1: "stint" },
  colls: ["splash out on", "splash out 3,000 baht", "really splash out", "splash out for a birthday"],
  tip: "Splashing is what water does when thrown around freely. English imagines money as a liquid."
},
{
  id: "fortune", word: "spend a fortune (on)", pos: "idiom", cefr: "B2", group: "idiom", cluster: "spending", ch: 3,
  def: "To spend a very large amount of money on something.",
  ex: [
    "Her brother spends a fortune on football boots every season.",
    "They spent a fortune on the wedding and are still paying it off."
  ],
  syn: { B1: "spend a lot", B2: "splash out", C1: "lavish money on" },
  ant: { B1: "spend almost nothing", B2: "get by on little", C1: "economise" },
  colls: ["spend a fortune on", "cost a fortune", "make a fortune", "a small fortune"],
  tip: "Three fortunes to learn: SPEND a fortune (you pay), COST a fortune (the thing is dear), MAKE a fortune (you get rich)."
},
{
  id: "drain", word: "throw money down the drain", pos: "idiom", cefr: "B2", group: "idiom", cluster: "spending", ch: 3,
  def: "To waste money completely, so that nothing useful comes back from it.",
  ex: [
    "Paying 500 baht a month for an app you never open is throwing money down the drain.",
    "Buying a fake charger is just throwing money down the drain."
  ],
  syn: { B1: "waste money", B2: "squander", C1: "fritter away" },
  ant: { B1: "spend wisely", B2: "invest", C1: "allocate sensibly" },
  colls: ["throw money down the drain", "money down the drain", "it all went down the drain"],
  tip: "Water down a drain is gone forever. That is the exact feeling: the money cannot come back."
},
{
  id: "debt", word: "get into debt", pos: "verb phrase", cefr: "B2", group: "core", cluster: "spending", ch: 3,
  def: "To reach a situation where you owe money to somebody.",
  ex: [
    "He got into debt buying a phone he could not afford.",
    "Students get into debt surprisingly quickly with online shopping."
  ],
  syn: { B1: "owe money", B2: "run up debts", C1: "become indebted" },
  ant: { B1: "pay off", B2: "clear your debts", C1: "be solvent" },
  colls: ["get into debt", "get into serious debt", "get out of debt", "be in debt", "credit card debt"],
  tip: "The 'b' in debt is silent: /det/. English keeps the b only because Latin did."
},
{
  id: "chipin", word: "chip in", pos: "phrasal verb", cefr: "B2", group: "phrasal", cluster: "spending", ch: 3,
  def: "To each give a small amount of money so that together you can pay for something.",
  ex: [
    "Twenty of us chipped in 50 baht each for the teacher's present.",
    "If everyone chips in, we can afford the big cake."
  ],
  syn: { B1: "share the cost", B2: "contribute", C1: "club together" },
  ant: { B1: "pay alone", B2: "foot the bill", C1: "bear the whole cost" },
  colls: ["chip in 50 baht", "chip in for a present", "everyone chipped in", "chip in together"],
  tip: "A 'chip' is a tiny broken piece. Everyone gives a tiny piece and the whole thing gets paid."
},
{
  id: "payback", word: "pay back", pos: "phrasal verb", cefr: "B1", group: "phrasal", cluster: "spending", ch: 3,
  def: "To return money that you borrowed from someone.",
  ex: [
    "I will pay you back on Friday when I get my allowance.",
    "She paid back every baht she had borrowed from her sister."
  ],
  syn: { B1: "give back", B2: "repay", C1: "reimburse" },
  ant: { B1: "keep", B2: "default", C1: "renege" },
  colls: ["pay someone back", "pay back a loan", "pay it back in full", "pay back slowly"],
  tip: "The person goes in the middle: pay ME back, pay HER back. Not 'pay back me'."
},

/* ---------- CLUSTER 4: transaction — at the till ---------- */
{
  id: "receipt", word: "receipt", pos: "noun", cefr: "B1", group: "core", cluster: "transaction", ch: 3,
  def: "A piece of paper or a message that proves you have paid for something.",
  ex: [
    "No receipt, no refund — that is the rule in almost every shop.",
    "She keeps every receipt in an envelope at the bottom of her bag."
  ],
  syn: { B1: "proof of payment", B2: "sales slip", C1: "proof of purchase" },
  ant: { B1: "no proof", B2: "an unpaid bill", C1: "an invoice" },
  colls: ["keep the receipt", "ask for a receipt", "a till receipt", "lose your receipt", "show your receipt"],
  tip: "Say /rɪ-SEET/. The 'p' is completely silent — receipt, not 'recei-p-t'."
},
{
  id: "refund", word: "refund", pos: "noun & verb", cefr: "B1", group: "core", cluster: "transaction", ch: 3,
  def: "Money given back to you because you returned something or were charged wrongly.",
  ex: [
    "She asked for a refund when the zip broke after two days.",
    "The shop gave a full refund without arguing."
  ],
  syn: { B1: "money back", B2: "reimbursement", C1: "rebate" },
  ant: { B1: "payment", B2: "charge", C1: "non-refundable fee" },
  colls: ["ask for a refund", "get a refund", "a full refund", "refund the money", "a partial refund"],
  tip: "RE- means back. Re-fund = fund it back. The same RE- gives you repay and reimburse."
},
{
  id: "tax", word: "tax", pos: "noun", cefr: "B1", group: "core", cluster: "transaction", ch: 3,
  def: "Money you must pay to the government, often added to the price of the things you buy.",
  ex: [
    "In Thailand, VAT is a 7% tax added to most purchases.",
    "The price printed on the menu already includes tax."
  ],
  syn: { B1: "government charge", B2: "duty", C1: "levy" },
  ant: { B1: "tax-free price", B2: "exemption", C1: "subsidy" },
  colls: ["pay tax", "income tax", "tax included", "before tax", "a tax on sugar"],
  tip: "Tax is the only money word here that you cannot refuse to pay."
},
{
  id: "sellout", word: "sell out", pos: "phrasal verb", cefr: "B1", group: "phrasal", cluster: "transaction", ch: 4,
  def: "To be sold completely, so that there is none left for anyone else to buy.",
  ex: [
    "The concert sold out in eleven minutes.",
    "The limited-edition cups had sold out before she even arrived."
  ],
  syn: { B1: "be all gone", B2: "be snapped up", C1: "be exhausted" },
  ant: { B1: "be still available", B2: "remain in stock", C1: "be plentiful" },
  colls: ["sell out fast", "sold out", "be sold out of something", "a sell-out show"],
  tip: "Usually passive-looking: it SOLD OUT or it IS SOLD OUT. The shop is not the subject."
},
{
  id: "runout", word: "run out (of)", pos: "phrasal verb", cefr: "B1", group: "phrasal", cluster: "transaction", ch: 4,
  def: "To use all of something, so that none of it is left.",
  ex: [
    "She ran out of money two days before the trip.",
    "The shop ran out of the blue ones by lunchtime."
  ],
  syn: { B1: "have none left", B2: "be short of", C1: "be depleted" },
  ant: { B1: "have plenty", B2: "stock up", C1: "replenish" },
  colls: ["run out of money", "run out of cash", "run out of time", "nearly run out"],
  tip: "A PERSON runs out OF money. A SUPPLY just runs out: the milk ran out."
},

/* ---------- CLUSTER 5: budget — planning and controlling ---------- */
{
  id: "budget", word: "budget", pos: "noun & verb", cefr: "B1", group: "core", cluster: "budget", ch: 4,
  def: "A plan showing how much money you have and how you will spend it.",
  ex: [
    "Their trip budget was 2,000 baht each, including food.",
    "She keeps a budget in her notes app and checks it every Sunday."
  ],
  syn: { B1: "spending plan", B2: "financial plan", C1: "allocation" },
  ant: { B1: "guesswork", B2: "overspending", C1: "extravagance" },
  colls: ["set a budget", "stick to a budget", "go over budget", "a tight budget", "a monthly budget"],
  tip: "You STICK TO a budget when you succeed and GO OVER it when you fail. Learn both."
},
{
  id: "save", word: "save", pos: "verb", cefr: "B1", group: "core", cluster: "budget", ch: 4,
  def: "To keep money instead of spending it, so that you can use it later.",
  ex: [
    "He saved for four months to buy the second-hand guitar.",
    "If you save 50 baht a day, you will have 1,500 by the end of the month."
  ],
  syn: { B1: "put away", B2: "set aside", C1: "accumulate" },
  ant: { B1: "spend", B2: "squander", C1: "fritter away" },
  colls: ["save up", "save for something", "save money", "a savings account", "save 100 baht a week"],
  tip: "Save has two other lives: save a life, and save a file. Same word, three worlds."
},
{
  id: "setaside", word: "set aside", pos: "phrasal verb", cefr: "B2", group: "phrasal", cluster: "budget", ch: 4,
  def: "To keep an amount of money separately for one particular purpose.",
  ex: [
    "She sets aside 100 baht every week for her sister's birthday present.",
    "We set aside part of the class fund for the end-of-term party."
  ],
  syn: { B1: "put away", B2: "reserve", C1: "earmark" },
  ant: { B1: "use up", B2: "dip into", C1: "deplete" },
  colls: ["set aside money", "set aside 100 baht a week", "set aside savings", "set aside for emergencies"],
  tip: "Set aside is save with a PURPOSE attached. You always set money aside FOR something."
},
{
  id: "spendinghabits", word: "spending habits", pos: "noun (plural)", cefr: "B2", group: "core", cluster: "budget", ch: 4,
  def: "The usual way a person spends money, seen as a pattern over time.",
  ex: [
    "Her spending habits changed the day she started writing everything down.",
    "Teenagers' spending habits are shaped by what their friends buy."
  ],
  syn: { B1: "shopping habits", B2: "spending patterns", C1: "consumption patterns" },
  ant: { B1: "saving habits", B2: "thrift", C1: "frugality" },
  colls: ["bad spending habits", "change your spending habits", "track your spending habits", "poor spending habits"],
  tip: "Almost always plural: spending habitS. One habit is a choice; habits are a personality."
},
{
  id: "cutdown", word: "cut down (on)", pos: "phrasal verb", cefr: "B1", group: "phrasal", cluster: "budget", ch: 4,
  def: "To do, use or buy less of something, especially in order to spend less.",
  ex: [
    "He cut down on bubble tea and saved 400 baht in a month.",
    "We need to cut down on taxis if we want to afford the concert."
  ],
  syn: { B1: "use less", B2: "reduce", C1: "curtail" },
  ant: { B1: "increase", B2: "step up", C1: "escalate" },
  colls: ["cut down on spending", "cut down on snacks", "cut down your costs", "cut right down"],
  tip: "Cut down = do LESS of it. Cut out = stop it COMPLETELY. The difference matters."
},
{
  id: "getby", word: "get by", pos: "phrasal verb", cefr: "B2", group: "phrasal", cluster: "budget", ch: 4,
  def: "To manage to live or continue with only just enough money.",
  ex: [
    "After the concert tickets, she got by on instant noodles for a week.",
    "They get by on one salary, but there is nothing left over."
  ],
  syn: { B1: "manage", B2: "make ends meet", C1: "subsist" },
  ant: { B1: "live well", B2: "thrive", C1: "prosper" },
  colls: ["get by on very little", "just get by", "get by somehow", "get by without"],
  tip: "Get by ON an amount: she got by ON 100 baht. Get by WITHOUT a thing."
},
{
  id: "tightenbelt", word: "tighten your belt", pos: "idiom", cefr: "B2", group: "idiom", cluster: "budget", ch: 4,
  def: "To start spending less money than before, because you have less of it.",
  ex: [
    "After buying the phone, the whole family had to tighten their belts.",
    "We are tightening our belts until the end of term."
  ],
  syn: { B1: "spend less", B2: "cut back", C1: "retrench" },
  ant: { B1: "spend freely", B2: "splash out", C1: "live extravagantly" },
  colls: ["have to tighten your belt", "tighten your belt for a month", "time to tighten our belts"],
  tip: "The picture: less money means less food, so your waist shrinks and the belt must be tightened."
}

];
