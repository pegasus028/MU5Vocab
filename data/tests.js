/* ============================================================
   MONEY MATTERS: the three tests
   triage  : 20 questions, 4 per cluster, routes the student
   finalB1 : 20 questions at B1
   finalB2 : 20 questions at B2

   Every question has 4 options and exactly one correct answer.
   The key is spread evenly: 5 answers in each position per test,
   15 in each position across all 60 questions, and never the
   same position three times in a row.

   NOTE FOR EDITORS: a few questions are kept unambiguous by one
   defensive clause that rules out a near synonym, for example
   "without asking anyone to help with the cost" (rules out chip
   in) and "there is nothing left in his account" (rules out make
   a fortune). Do not delete those clauses when rewording.
   ============================================================ */
window.TESTS = {

  triage: {
    id: "triage", title: "Placement Check",
    subtitle: "20 questions. Find out exactly which areas you need to focus on.",
    kind: "triage",
    questions: [
      {
        type: "gap", level: "B1", tests: "account", cluster: "banking",
        prompt: "He opened a savings ____ at the bank because money never lasted more than a few days in his pocket.",
        options: [
          "receipt",
          "account",
          "budget",
          "payment"
        ],
        answer: 1,
        why: "You open an account at a bank, and a savings account is the one that holds money you do not want to spend."
      },
      {
        type: "meaning", level: "B1", tests: "cash", cluster: "banking",
        prompt: "The noodle stall by the school gate has a sign saying CASH ONLY. What does the sign mean?",
        options: [
          "You must pay with a bank card",
          "You must pay with coins or notes",
          "You must pay before you sit",
          "You must pay the exact price"
        ],
        answer: 1,
        why: "Cash means coins and notes, so a cash-only stall cannot take card payments at all."
      },
      {
        type: "error", level: "B2", tests: "bankcharge", cluster: "banking",
        prompt: "Nan took cash out of another bank's ATM and an extra 20 baht came off her balance. Which sentence about that 20 baht is correct?",
        options: [
          "She had to pay a bank refund of 20 baht.",
          "She had to pay a bank price of 20 baht.",
          "She had to pay a bank charge of 20 baht.",
          "She had to pay a bank change of 20 baht."
        ],
        answer: 2,
        why: "A bank takes a charge or fee for a service, while a price belongs to a thing and a refund or change is money that comes back to you."
      },
      {
        type: "sub", level: "B2", tests: "swipe", cluster: "banking",
        prompt: "At the 7-Eleven counter she PASSED HER CARD THROUGH THE MACHINE and waited for the beep. Which word best replaces the capitals?",
        options: [
          "swiped",
          "saved",
          "spent",
          "snapped"
        ],
        answer: 0,
        why: "Swipe is the exact verb for passing a card through or across a reader so that it can take the payment."
      },
      {
        type: "coll", level: "B1", tests: "discount", cluster: "value",
        prompt: "Which noun completes this natural partnership: the shop will offer a 20% ____ on all school bags?",
        options: [
          "receipt",
          "bargain",
          "discount",
          "allowance"
        ],
        answer: 2,
        why: "Shops offer a discount, and discount is the money word that takes a percentage: a 20% discount on something."
      },
      {
        type: "context", level: "B1", tests: "bargain", cluster: "value",
        prompt: "The pencil case Ploy liked costs 450 baht at the stationery shop in the mall. She found exactly the same one online for 120 baht. What can she call the online one?",
        options: [
          "a real bargain",
          "a total rip-off",
          "a student discount",
          "a full refund"
        ],
        answer: 0,
        why: "A bargain is something you buy for much less than its usual price, so 150 baht instead of 600 is a real bargain."
      },
      {
        type: "idiom", level: "B2", tests: "armandleg", cluster: "value",
        prompt: "Tickets to the new theme park cost more than Fah earns in a whole month. Which idiom describes how expensive they are?",
        options: [
          "They threw money down the drain",
          "They cost an arm and a leg",
          "They tightened their belts",
          "They snapped up a bargain"
        ],
        answer: 1,
        why: "Cost an arm and a leg means extremely expensive, and the body parts in the idiom never change."
      },
      {
        type: "gap", level: "B2", tests: "shoparound", cluster: "value",
        prompt: "If you ____ on Shopee and Lazada first, you can find exactly the same earphones about 300 baht cheaper.",
        options: [
          "get by",
          "sell out",
          "chip in",
          "shop around"
        ],
        answer: 3,
        why: "Shop around means comparing prices in several shops or websites before you decide to buy."
      },
      {
        type: "gap", level: "B1", tests: "afford", cluster: "spending",
        prompt: "She could not ____ the new phone, so she kept her allowance in a box for three months.",
        options: [
          "afford",
          "cost",
          "owe",
          "save"
        ],
        answer: 0,
        why: "Afford means to have enough money for something, and it is nearly always used with can, cannot or could."
      },
      {
        type: "sub", level: "B1", tests: "payback", cluster: "spending",
        prompt: "Nut borrowed 100 baht and promised to RETURN THE MONEY TO HIS FRIEND on Friday. Which phrase best replaces the capitals?",
        options: [
          "owe his friend back",
          "pay for his friend",
          "chip in for his friend",
          "pay his friend back"
        ],
        answer: 3,
        why: "Pay back means to return money you borrowed, and the person goes in the middle: pay his friend back, pay him back."
      },
      {
        type: "odd", level: "B2", tests: "drain", cluster: "spending",
        prompt: "Three of these mean money that is gone with nothing to show for it. Which one does NOT belong?",
        options: [
          "set aside money each week",
          "waste your whole allowance",
          "throw money down the drain",
          "keep paying for a gym you never visit"
        ],
        answer: 0,
        why: "Wasting money, throwing it down the drain and paying for something you never use all leave you with nothing, while setting money aside keeps it safe for a purpose."
      },
      {
        type: "meaning", level: "B2", tests: "splashout", cluster: "spending",
        prompt: "After saving all term, Fah splashed out on a professional set of watercolour brushes. What does splashed out mean here?",
        options: [
          "saved up for months",
          "spent a lot on a treat",
          "shared the cost equally",
          "asked for their money back"
        ],
        answer: 1,
        why: "Splash out means to spend a lot of money on something enjoyable that you do not really need."
      },
      {
        type: "coll", level: "B1", tests: "receipt", cluster: "transaction",
        prompt: "Which noun completes this natural partnership: always keep the ____ in case you need to take the item back?",
        options: [
          "payment",
          "discount",
          "receipt",
          "budget"
        ],
        answer: 2,
        why: "You keep the receipt because it is the proof of payment that shops ask to see before they give your money back."
      },
      {
        type: "context", level: "B1", tests: "tax", cluster: "transaction",
        prompt: "The bubble tea shop menu says 55 baht, and at the bottom of the menu it says VAT included. What does that tell Nut?",
        options: [
          "The tax will be refunded later",
          "The tax will be added at the till",
          "The tax is already in the price",
          "The tax is a kind of bank charge"
        ],
        answer: 2,
        why: "Tax is money added to a price for the government, and tax included means it is already inside the number you see."
      },
      {
        type: "error", level: "B2", tests: "sellout", cluster: "transaction",
        prompt: "Every ticket for the concert was gone in eleven minutes. Which sentence is wrong?",
        options: [
          "The tickets sold out in eleven minutes.",
          "The fans sold out the tickets in eleven minutes.",
          "The tickets sold out unbelievably fast.",
          "The tickets were sold out in eleven minutes."
        ],
        answer: 1,
        why: "Sell out describes the goods, not the buyers: tickets sell out or are sold out, so the fans can never sell them out."
      },
      {
        type: "meaning", level: "B2", tests: "purchase", cluster: "transaction",
        prompt: "A sign at the counter reads: no exchanges or refunds without proof of purchase. What is proof of purchase?",
        options: [
          "something showing the price rose",
          "something showing you can pay",
          "something showing you bought it",
          "something showing the item is new"
        ],
        answer: 2,
        why: "A purchase is something you buy, so proof of purchase is evidence such as a receipt that the buying really happened."
      },
      {
        type: "gap", level: "B1", tests: "budget", cluster: "budget",
        prompt: "She set a ____ of 2,000 baht for the trip and wrote down every cost so that she would not go over it.",
        options: [
          "refund",
          "discount",
          "receipt",
          "budget"
        ],
        answer: 3,
        why: "A budget is a plan for how much you will spend, and you either stick to it or go over it."
      },
      {
        type: "coll", level: "B1", tests: "save", cluster: "budget",
        prompt: "Which verb completes this natural partnership: ____ up for a second-hand guitar?",
        options: [
          "save",
          "spend",
          "waste",
          "cost"
        ],
        answer: 0,
        why: "Save up means to keep money week by week until you have enough, so up belongs with save here."
      },
      {
        type: "idiom", level: "B2", tests: "tightenbelt", cluster: "budget",
        prompt: "Nan's father had his hours cut at work, so the whole family is spending much less this term. Which idiom fits?",
        options: [
          "They are throwing money down the drain",
          "They are splashing out",
          "They are spending a fortune",
          "They are tightening their belts"
        ],
        answer: 3,
        why: "Tighten your belt means to start spending less because there is less money coming in."
      },
      {
        type: "odd", level: "B2", tests: "getby", cluster: "budget",
        prompt: "Three of these describe managing on only just enough money. Which one does NOT belong?",
        options: [
          "get by on very little",
          "make ends meet",
          "live on a tight budget",
          "spend a fortune"
        ],
        answer: 3,
        why: "Get by, make ends meet and living on a tight budget all mean managing on only just enough, while spending a fortune is the opposite."
      }
    ]
  },

  finalB1: {
    id: "finalB1", title: "Final Check: B1",
    subtitle: "20 questions at B1 level.",
    kind: "final", level: "B1",
    questions: [
      {
        type: "gap", level: "B1", tests: "change", cluster: "banking",
        prompt: "Her bubble tea cost 45 baht, so she got 55 baht ____ from her 100-baht note.",
        options: [
          "receipt",
          "discount",
          "change",
          "budget"
        ],
        answer: 2,
        why: "Change is the money you get back when you pay more than the exact price."
      },
      {
        type: "odd", level: "B1", tests: "coin", cluster: "banking",
        prompt: "Three of these are money you can hold in your hand. Which one does NOT belong?",
        options: [
          "coin",
          "note",
          "cash",
          "account"
        ],
        answer: 3,
        why: "Coins, notes and cash are money you can touch, but an account is only an arrangement at a bank."
      },
      {
        type: "meaning", level: "B1", tests: "atm", cluster: "banking",
        prompt: "There is an ATM outside the 7-Eleven near the BTS station. What is an ATM for?",
        options: [
          "changing your coins into notes",
          "taking cash out of your bank account",
          "opening a new bank account",
          "getting your first bank card"
        ],
        answer: 1,
        why: "An ATM is a machine that lets you take cash out of your bank account with a card; the other three jobs need a person at the bank counter."
      },
      {
        type: "coll", level: "B1", tests: "takeout", cluster: "banking",
        prompt: "Which phrase fits? She stopped at the ATM to ____ before the night market closed.",
        options: [
          "chip in some cash",
          "pay back some cash",
          "take out some cash",
          "cut down on cash"
        ],
        answer: 2,
        why: "Take out is the everyday phrasal verb for getting money from a machine, and it partners with cash or an amount: take out 500 baht."
      },
      {
        type: "meaning", level: "B1", tests: "card", cluster: "banking",
        prompt: "Her father paid for the shoes with a debit card. What does a debit card do?",
        options: [
          "it spends money you already have",
          "it borrows money from the bank",
          "it keeps your money in a savings account",
          "it gives you a discount in every shop"
        ],
        answer: 0,
        why: "A debit card takes your own money straight away, while a credit card borrows the bank's money that you must pay back."
      },
      {
        type: "context", level: "B1", tests: "allowance", cluster: "budget",
        prompt: "Every Sunday Ploy's mother gives her 300 baht for the week, and Ploy spends it on snacks and the BTS. What do we call the 300 baht?",
        options: [
          "her refund",
          "her wages",
          "her savings",
          "her allowance"
        ],
        answer: 3,
        why: "An allowance is money you are given regularly, usually by a parent, while wages are money you earn by working."
      },
      {
        type: "gap", level: "B1", tests: "afford", cluster: "spending",
        prompt: "A taxi to the concert is too expensive. We cannot ____ it, so let's take the BTS instead.",
        options: [
          "save",
          "waste",
          "afford",
          "owe"
        ],
        answer: 2,
        why: "Cannot afford something means you do not have enough money for it."
      },
      {
        type: "gap", level: "B1", tests: "spendon", cluster: "spending",
        prompt: "He ____ most of his allowance on manga and bubble tea every single month.",
        options: [
          "pays",
          "spends",
          "costs",
          "buys"
        ],
        answer: 1,
        why: "You spend money ON the thing you buy, so spend is the verb that fits with on manga."
      },
      {
        type: "sub", level: "B1", tests: "waste", cluster: "spending",
        prompt: "Do not THROW AWAY your money on those stickers; your sister has a whole box she does not want. Which word best replaces the capitals?",
        options: [
          "refund",
          "save",
          "waste",
          "budget"
        ],
        answer: 2,
        why: "Waste money on something means to spend it on something useless, exactly like throwing your money away."
      },
      {
        type: "error", level: "B1", tests: "payback", cluster: "spending",
        prompt: "Mai borrowed 200 baht from Ploy on Monday. Which sentence is correct?",
        options: [
          "I will pay back you on Friday.",
          "I will pay you back on Friday.",
          "I will pay back to you on Friday.",
          "I will back pay you on Friday."
        ],
        answer: 1,
        why: "With pay back the person goes in the middle: pay me back, pay you back, never pay back me."
      },
      {
        type: "idiom", level: "B1", tests: "fortune", cluster: "spending",
        prompt: "Nut's brother buys the newest phone every single year and never waits for the price to drop. Which sentence fits?",
        options: [
          "He saves a fortune on phones",
          "He makes a fortune on phones",
          "He spends a fortune on phones",
          "He costs a fortune on phones"
        ],
        answer: 2,
        why: "You SPEND a fortune when you pay a lot, you MAKE a fortune when you get rich, and a thing COSTS a fortune."
      },
      {
        type: "idiom", level: "B1", tests: "armandleg", cluster: "value",
        prompt: "Nan wanted the headphones at the mall, but they were 9,000 baht and she could never save that much. Which phrase says this best?",
        options: [
          "they were good value",
          "they were a real bargain",
          "they were half price",
          "they cost an arm and a leg"
        ],
        answer: 3,
        why: "Cost an arm and a leg means extremely expensive, while a bargain, half price and good value all say that something is cheap."
      },
      {
        type: "error", level: "B1", tests: "cometo", cluster: "value",
        prompt: "You are at the 7-Eleven counter and you want to know the total. Which question is correct?",
        options: [
          "How much does it come to?",
          "How much does it come up?",
          "How much does it pay back?",
          "How much does it run out?"
        ],
        answer: 0,
        why: "Come to means to add up to a total, so the standard shop question is How much does it come to?"
      },
      {
        type: "meaning", level: "B1", tests: "refund", cluster: "transaction",
        prompt: "The rice cooker stopped working three days after she bought it, so she took it back to the shop and asked for a refund. What did she want?",
        options: [
          "her money back",
          "a new receipt",
          "a small discount",
          "a free repair"
        ],
        answer: 0,
        why: "A refund is money given back to you when you return something, and the RE in refund means back."
      },
      {
        type: "context", level: "B1", tests: "payment", cluster: "transaction",
        prompt: "Nut's family gives the music teacher 2,000 baht on the first day of every month. What do we call each of these amounts?",
        options: [
          "a monthly receipt",
          "a monthly refund",
          "a monthly discount",
          "a monthly payment"
        ],
        answer: 3,
        why: "A payment is an amount of money that is paid, and in English you make a payment rather than do one."
      },
      {
        type: "gap", level: "B1", tests: "runout", cluster: "transaction",
        prompt: "He ____ of cash halfway round the night market and had to walk past the last few stalls.",
        options: [
          "sold out",
          "ran out",
          "set aside",
          "paid back"
        ],
        answer: 1,
        why: "A person runs out OF money or cash when none is left, while goods in a shop simply sell out."
      },
      {
        type: "odd", level: "B1", tests: "sellout", cluster: "transaction",
        prompt: "Three of these mean there is nothing left for you to buy. Which one does NOT belong?",
        options: [
          "on sale",
          "all gone",
          "sold out",
          "none left"
        ],
        answer: 0,
        why: "Sold out, all gone and none left all mean nothing is available, while on sale means the price has been reduced."
      },
      {
        type: "sub", level: "B1", tests: "save", cluster: "budget",
        prompt: "He PUT AWAY 200 baht every week until he had enough for the school trip to Chiang Mai. Which word best replaces the capitals?",
        options: [
          "saved",
          "spent",
          "wasted",
          "paid"
        ],
        answer: 0,
        why: "Save means to keep money instead of spending it so that you can use it later."
      },
      {
        type: "coll", level: "B1", tests: "budget", cluster: "budget",
        prompt: "Which word fits? She went over ____ and had nothing left in the last week of term.",
        options: [
          "receipt",
          "budget",
          "change",
          "payment"
        ],
        answer: 1,
        why: "You stick to a budget when your plan works and go over budget when you spend more than you planned."
      },
      {
        type: "gap", level: "B1", tests: "cutdown", cluster: "budget",
        prompt: "If we ____ on midnight snacks, the canteen money will last us the whole week.",
        options: [
          "pay back",
          "run out",
          "set aside",
          "cut down"
        ],
        answer: 3,
        why: "Cut down on something means to use or buy less of it, usually so that you spend less."
      }
    ]
  },

  finalB2: {
    id: "finalB2", title: "Final Check: B2",
    subtitle: "20 questions at B2 level.",
    kind: "final", level: "B2",
    questions: [
      {
        type: "gap", level: "B2", tests: "swipe", cluster: "banking",
        prompt: "The till at 7-Eleven would not read the chip on her card, and tapping did not work either, so the cashier asked her to ____ it through the slot on the side.",
        options: [
          "swipe",
          "tap",
          "wave",
          "snap"
        ],
        answer: 0,
        why: "Swipe means to pass a card through or across a reader, which is a different action from tapping or waving a card at a contactless pad."
      },
      {
        type: "error", level: "B2", tests: "cash", cluster: "banking",
        prompt: "The stalls at the night market do not take cards at all. Which sentence is correct?",
        options: [
          "The stalls take a cash only, so bring a cash.",
          "The stalls take cash only, so bring some cash.",
          "The stalls take cashes only, so bring cashes.",
          "The stalls take the cashes only, so bring cashes."
        ],
        answer: 1,
        why: "Cash is uncountable, so it never takes a or a plural s: some cash, a lot of cash, not enough cash."
      },
      {
        type: "error", level: "B2", tests: "account", cluster: "banking",
        prompt: "Nan's part-time pay goes straight to the bank every month. Which sentence is correct?",
        options: [
          "The money is paid into her account.",
          "The money is paid in her account.",
          "The money is paid on her account.",
          "The money is paid over her account."
        ],
        answer: 0,
        why: "Money goes INTO an account and comes OUT OF it, so the fixed pattern is pay money into an account."
      },
      {
        type: "odd", level: "B2", tests: "bankcharge", cluster: "banking",
        prompt: "Three of these are money a bank takes from you for a service. Which one does NOT belong?",
        options: [
          "a full refund",
          "a withdrawal fee",
          "a transaction fee",
          "a transfer fee"
        ],
        answer: 0,
        why: "A bank charge or fee is money you pay the bank for a service, while a refund is money coming back to you."
      },
      {
        type: "idiom", level: "B2", tests: "snapup", cluster: "value",
        prompt: "The limited-edition cups at 7-Eleven were half price on the last day of the promotion, and the whole display was empty within ten minutes. Which sentence describes what the shoppers did?",
        options: [
          "Shoppers tightened their belts.",
          "Shoppers shopped around first.",
          "Shoppers snapped up a bargain.",
          "Shoppers paid an arm and a leg."
        ],
        answer: 2,
        why: "Snap up a bargain needs both halves: the price was low and the buyers were fast enough to get it before anyone else."
      },
      {
        type: "error", level: "B2", tests: "ripoff", cluster: "value",
        prompt: "The taxi driver charged them 500 baht for a two-kilometre trip that should have cost 60 baht. Which sentence is correct?",
        options: [
          "The driver ripped off them.",
          "The driver ripped them off.",
          "The driver rip-offed them.",
          "The driver was ripped off them."
        ],
        answer: 1,
        why: "Rip off is separable, so a pronoun object sits in the middle: they ripped them off, never ripped off them."
      },
      {
        type: "coll", level: "B2", tests: "shoparound", cluster: "value",
        prompt: "Before you buy anything expensive online, it is always worth ____. Which phrase completes the natural partnership?",
        options: [
          "running out",
          "selling out",
          "chipping in",
          "shopping around"
        ],
        answer: 3,
        why: "Worth is followed by an -ing form, and shop around is the natural partner of comparing prices before you buy."
      },
      {
        type: "meaning", level: "B2", tests: "value", cluster: "value",
        prompt: "A 250-baht umbrella that survives three rainy seasons is excellent value for money. What does that mean?",
        options: [
          "you are allowed to pay later",
          "the price is the lowest possible",
          "the price already includes tax",
          "you get a lot for the price"
        ],
        answer: 3,
        why: "Value for money compares worth with price, so a more expensive thing can still be excellent value if it lasts."
      },
      {
        type: "idiom", level: "B2", tests: "armandleg", cluster: "value",
        prompt: "The brand-name trainers in the shop at Siam are 8,000 baht. Which sentence uses the idiom about very high prices correctly?",
        options: [
          "Those trainers paid an arm and a leg.",
          "Those trainers spend an arm and a leg.",
          "Those trainers cost an arm and a leg.",
          "Those trainers took an arm and a leg."
        ],
        answer: 2,
        why: "The idiom is fixed with cost: a thing costs an arm and a leg, and only a person can spend or pay money."
      },
      {
        type: "gap", level: "B2", tests: "splashout", cluster: "spending",
        prompt: "She saves carefully all year, but for her birthday she ____ on a 4,500-baht front-row ticket without asking anyone to help with the cost.",
        options: [
          "cuts down",
          "gets by",
          "chips in",
          "splashes out"
        ],
        answer: 3,
        why: "Splash out on something means to spend a lot of your own money on an enjoyable treat you do not really need."
      },
      {
        type: "coll", level: "B2", tests: "fortune", cluster: "spending",
        prompt: "There is nothing left in his account, because he ____ a fortune on concert tickets and resale fees. Which verb completes the collocation?",
        options: [
          "takes",
          "costs",
          "makes",
          "spends"
        ],
        answer: 3,
        why: "You spend a fortune on something, a thing costs a fortune, and you make a fortune only when you get rich from it."
      },
      {
        type: "sub", level: "B2", tests: "chipin", cluster: "spending",
        prompt: "The six of us SHARED THE COST BETWEEN US so that we could hire the room for the party. Which phrase best replaces the capitals?",
        options: [
          "chipped in",
          "splashed out",
          "paid back",
          "set aside"
        ],
        answer: 0,
        why: "Chip in means each person gives a small amount so that together you can pay for something bigger."
      },
      {
        type: "odd", level: "B2", tests: "drain", cluster: "spending",
        prompt: "Three of these describe money that brings nothing back at all. Which one does NOT belong?",
        options: [
          "throwing money down the drain",
          "setting money aside for later",
          "spending money on something useless",
          "wasting money completely"
        ],
        answer: 1,
        why: "Money thrown down the drain is gone for good, while money you set aside is still yours, waiting for a purpose."
      },
      {
        type: "sub", level: "B2", tests: "purchase", cluster: "transaction",
        prompt: "The Lazada returns page says: we can only accept a return if you still have the receipt for the ITEM YOU BOUGHT. Which word best replaces the capitals?",
        options: [
          "refund",
          "discount",
          "purchase",
          "bargain"
        ],
        answer: 2,
        why: "Purchase is the formal noun for a thing you buy, which is why websites and shop signs prefer it to everyday wording."
      },
      {
        type: "context", level: "B2", tests: "receipt", cluster: "transaction",
        prompt: "Nan's new earphones from Lazada stopped working after a week. The shop will only replace them if she can prove that she paid. What does Nan need to find?",
        options: [
          "the discount",
          "the receipt",
          "the allowance",
          "the budget"
        ],
        answer: 1,
        why: "A receipt is the proof of payment shops ask for, which is why the rule almost everywhere is no receipt, no refund."
      },
      {
        type: "context", level: "B2", tests: "tax", cluster: "transaction",
        prompt: "The bill after a family meal says: Total 800 baht before tax. Nut has exactly 850 baht in his wallet and starts to worry. What should he expect at the till?",
        options: [
          "the tax will be taken off the 800 baht",
          "the final amount will be exactly 800 baht",
          "the final amount will be over 800 baht",
          "the tax will be refunded after he pays"
        ],
        answer: 2,
        why: "Before tax means the tax has not been added yet, so the amount you finally hand over is higher than the figure shown."
      },
      {
        type: "gap", level: "B2", tests: "setaside", cluster: "budget",
        prompt: "Instead of spending her whole allowance the day it arrives, she ____ 100 baht every week so that she can buy her sister a proper present in December.",
        options: [
          "comes to",
          "runs out",
          "sets aside",
          "pays back"
        ],
        answer: 2,
        why: "Set aside means to keep money separately for one particular purpose, so money is always set aside for something."
      },
      {
        type: "meaning", level: "B2", tests: "getby", cluster: "budget",
        prompt: "She spent almost everything on the trip, then got by on canteen rice and tap water until the end of the month. What does got by mean here?",
        options: [
          "asked her parents for extra help",
          "spent more than she planned",
          "borrowed money from her friends",
          "managed with only just enough"
        ],
        answer: 3,
        why: "Get by means to manage with only just enough money, and it takes on before the amount you live on."
      },
      {
        type: "meaning", level: "B2", tests: "spendinghabits", cluster: "budget",
        prompt: "After his little sister was born, the whole family's spending habits changed completely. What are spending habits?",
        options: [
          "the total you spend on one day",
          "the usual pattern of your spending",
          "the plan you make before shopping",
          "the money your parents give you"
        ],
        answer: 1,
        why: "Spending habits are the pattern of how you usually spend over time, which is why the word is almost always plural."
      },
      {
        type: "idiom", level: "B2", tests: "tightenbelt", cluster: "budget",
        prompt: "After buying the new fridge, the family had to spend much less on everything for months. Which sentence says this with an idiom?",
        options: [
          "They had to tighten their belts.",
          "They had to splash out for a while.",
          "They had to snap up a bargain.",
          "They had to spend a fortune."
        ],
        answer: 0,
        why: "Tighten your belt means to start spending less because there is less money available than before."
      }
    ]
  }
};
