/* ============================================================
   MONEY MATTERS: assessment module
   3 tests x 20 multiple-choice questions = 60 questions

   triage   diagnoses the five clusters (4 questions each):
            banking, value, spending, transaction, budget
   finalB1  20 questions pitched at B1
   finalB2  20 questions pitched at B2 (idioms, harder phrasals,
            collocation and grammar-pattern traps)

   Question shape:
     type     gap | meaning | idiom | coll | odd | sub | error | context
     prompt   the question text (gap questions contain ____)
     options  exactly 4, same part of speech, similar length
     answer   index 0-3 of the correct option
     tests    an id from words.js
     cluster  that word's cluster, copied exactly
     level    B1 | B2
     why      one sentence of teaching, shown after answering
   ============================================================ */
window.TESTS = {

  /* ================= TRIAGE: PLACEMENT CHECK ================= */
  triage: {
    id: "triage",
    title: "Placement Check",
    subtitle: "20 questions. Find out exactly which areas you need to study.",
    kind: "triage",
    questions: [

      /* ---------- banking (4): 2 x B1, 2 x B2 ---------- */
      {
        type: "gap",
        prompt: "Chris opened a savings ____ at the bank so his New Year money would not disappear in a week.",
        options: ["account", "receipt", "budget", "payment"],
        answer: 0,
        tests: "account",
        cluster: "banking",
        level: "B1",
        why: "You open an account at a bank, and a savings account is the one that holds money you do not want to spend."
      },
      {
        type: "meaning",
        prompt: "The noodle stall by the school gate has a sign saying CASH ONLY. What does the sign mean?",
        options: ["You must pay with coins or notes", "You must pay with a bank card", "You must pay before you sit", "You must pay the exact price"],
        answer: 0,
        tests: "cash",
        cluster: "banking",
        level: "B1",
        why: "Cash means coins and notes, so a cash-only stall cannot take card payments at all."
      },
      {
        type: "error",
        prompt: "Nan used another bank's ATM and 20 baht extra came off her balance. Which sentence about that 20 baht is correct?",
        options: ["She had to pay a bank charge of 20 baht.", "She had to pay a bank price of 20 baht.", "She had to pay a bank refund of 20 baht.", "She had to pay a bank coin of 20 baht."],
        answer: 0,
        tests: "bankcharge",
        cluster: "banking",
        level: "B2",
        why: "Money paid for a service is a charge or fee, while a price belongs to a thing and a refund comes back to you."
      },
      {
        type: "sub",
        prompt: "At the 7-Eleven counter she PASSED HER CARD THROUGH THE MACHINE and waited for the beep. Which word best replaces the capitals?",
        options: ["swiped", "saved", "spent", "snapped"],
        answer: 0,
        tests: "swipe",
        cluster: "banking",
        level: "B2",
        why: "Swipe is the exact verb for passing a card through or across a reader so that it can take the payment."
      },

      /* ---------- value (4): 2 x B1, 2 x B2 ---------- */
      {
        type: "coll",
        prompt: "Which noun completes this natural partnership: the shop will offer a 20% ____ on all school bags?",
        options: ["discount", "bargain", "receipt", "allowance"],
        answer: 0,
        tests: "discount",
        cluster: "value",
        level: "B1",
        why: "Shops offer a discount, and discount is the money word that takes a percentage: a 20% discount on something."
      },
      {
        type: "context",
        prompt: "The school bag Ploy wanted costs 600 baht in the mall. At the night market she found exactly the same bag for 150 baht. What can she call it?",
        options: ["a real bargain", "a full price", "a bank charge", "a late payment"],
        answer: 0,
        tests: "bargain",
        cluster: "value",
        level: "B1",
        why: "A bargain is something you buy for much less than its usual price, so 150 baht instead of 600 is a real bargain."
      },
      {
        type: "idiom",
        prompt: "Tickets for the concert were 6,000 baht each once the resellers had bought them all. Which idiom describes the price?",
        options: ["They cost an arm and a leg", "They threw money down the drain", "They tightened their belts", "They snapped up a bargain"],
        answer: 0,
        tests: "armandleg",
        cluster: "value",
        level: "B2",
        why: "Cost an arm and a leg means extremely expensive, and the body parts in the idiom never change."
      },
      {
        type: "gap",
        prompt: "If you ____ on Shopee and Lazada first, you can find exactly the same earphones about 300 baht cheaper.",
        options: ["shop around", "sell out", "chip in", "get by"],
        answer: 0,
        tests: "shoparound",
        cluster: "value",
        level: "B2",
        why: "Shop around means comparing prices in several shops or websites before you decide to buy."
      },

      /* ---------- spending (4): 2 x B1, 2 x B2 ---------- */
      {
        type: "gap",
        prompt: "She could not ____ the new phone, so she kept her allowance in a box for three months.",
        options: ["afford", "cost", "owe", "save"],
        answer: 0,
        tests: "afford",
        cluster: "spending",
        level: "B1",
        why: "Afford means to have enough money for something, and it is nearly always used with can, cannot or could."
      },
      {
        type: "sub",
        prompt: "Nut borrowed 100 baht and promised to RETURN THE MONEY TO HIS FRIEND on Friday. Which phrase best replaces the capitals?",
        options: ["pay his friend back", "pay his friend off", "chip in with his friend", "get by with his friend"],
        answer: 0,
        tests: "payback",
        cluster: "spending",
        level: "B1",
        why: "Pay back means to return money you borrowed, and the person always goes in the middle: pay him back."
      },
      {
        type: "odd",
        prompt: "Three of these describe money that brings you nothing back. Which one does NOT belong?",
        options: ["throw money down the drain", "waste your whole allowance", "spend a fortune on nothing", "set aside money each week"],
        answer: 3,
        tests: "drain",
        cluster: "spending",
        level: "B2",
        why: "Throwing money down the drain and wasting it both mean nothing comes back, while setting money aside keeps it safe for a purpose."
      },
      {
        type: "meaning",
        prompt: "They splashed out on front-row seats for the concert. What does splashed out mean here?",
        options: ["spent a lot on a treat", "saved up for months", "shared the cost equally", "asked for their money back"],
        answer: 0,
        tests: "splashout",
        cluster: "spending",
        level: "B2",
        why: "Splash out means to spend a lot of money on something enjoyable that you do not really need."
      },

      /* ---------- transaction (4): 2 x B1, 2 x B2 ---------- */
      {
        type: "coll",
        prompt: "Which noun completes this natural partnership: always keep the ____ in case you need to take the item back?",
        options: ["receipt", "discount", "payment", "budget"],
        answer: 0,
        tests: "receipt",
        cluster: "transaction",
        level: "B1",
        why: "You keep the receipt because it is the proof of payment that shops ask to see before they give your money back."
      },
      {
        type: "context",
        prompt: "The canteen menu says 55 baht. At the till Nut pays 55 baht exactly. A small sign says VAT included. What does that tell him?",
        options: ["The tax is already in the price", "The tax will be added at the till", "The tax will be refunded later", "The tax is a kind of bank charge"],
        answer: 0,
        tests: "tax",
        cluster: "transaction",
        level: "B1",
        why: "Tax is money added to a price for the government, and tax included means it is already inside the number you see."
      },
      {
        type: "error",
        prompt: "Every ticket for the concert was gone in eleven minutes. Which sentence is wrong?",
        options: ["The tickets sold out in eleven minutes.", "The tickets were sold out in eleven minutes.", "The tickets sold out unbelievably fast.", "The tickets were selling out the fans fast."],
        answer: 3,
        tests: "sellout",
        cluster: "transaction",
        level: "B2",
        why: "Sell out takes no object: tickets sell out or are sold out, and the buyers can never be the object of the verb."
      },
      {
        type: "meaning",
        prompt: "The online shop writes: Please keep proof of purchase for every item over 500 baht. What is proof of purchase?",
        options: ["something showing you bought it", "something showing you can pay", "something showing the price rose", "something showing the item is new"],
        answer: 0,
        tests: "purchase",
        cluster: "transaction",
        level: "B2",
        why: "A purchase is something you buy, so proof of purchase is evidence such as a receipt that the buying really happened."
      },

      /* ---------- budget (4): 2 x B1, 2 x B2 ---------- */
      {
        type: "gap",
        prompt: "She set a ____ of 2,000 baht for the trip and wrote down every cost so that she would not go over it.",
        options: ["budget", "allowance", "receipt", "refund"],
        answer: 0,
        tests: "budget",
        cluster: "budget",
        level: "B1",
        why: "A budget is a plan for how much you will spend, and you either stick to it or go over it."
      },
      {
        type: "coll",
        prompt: "Which verb goes with this money partner: ____ up for a second-hand guitar?",
        options: ["save", "spend", "waste", "cost"],
        answer: 0,
        tests: "save",
        cluster: "budget",
        level: "B1",
        why: "Save up means to keep money week by week until you have enough, so up belongs with save here."
      },
      {
        type: "idiom",
        prompt: "Nan's father lost some of his work, so the whole family is spending much less money this term. Which idiom fits?",
        options: ["They are tightening their belts", "They are splashing out", "They are snapping up bargains", "They are running out of time"],
        answer: 0,
        tests: "tightenbelt",
        cluster: "budget",
        level: "B2",
        why: "Tighten your belt means to start spending less because there is less money coming in."
      },
      {
        type: "odd",
        prompt: "Three of these describe managing on only just enough money. Which one does NOT belong?",
        options: ["get by on very little", "make ends meet", "live on instant noodles", "spend a fortune"],
        answer: 3,
        tests: "getby",
        cluster: "budget",
        level: "B2",
        why: "Get by and make ends meet both mean surviving on only just enough, while spending a fortune is the opposite."
      }

    ]
  },

  /* ================= FINAL CHECK: B1 ================= */
  finalB1: {
    id: "finalB1",
    title: "Final Check: B1",
    subtitle: "20 questions at B1 level.",
    kind: "final",
    level: "B1",
    questions: [

      {
        type: "gap",
        prompt: "The bubble tea cost 45 baht, so she got 55 baht ____ back from her hundred.",
        options: ["change", "discount", "receipt", "budget"],
        answer: 0,
        tests: "change",
        cluster: "banking",
        level: "B1",
        why: "Change is the money you get back when you pay more than the exact price."
      },
      {
        type: "odd",
        prompt: "Three of these are money you can hold in your hand. Which one does NOT belong?",
        options: ["coin", "note", "cash", "account"],
        answer: 3,
        tests: "coin",
        cluster: "banking",
        level: "B1",
        why: "Coins, notes and cash are money you can touch, but an account is only an arrangement at a bank."
      },
      {
        type: "meaning",
        prompt: "There is an ATM outside the 7-Eleven near the BTS station. What can you do there?",
        options: ["take cash out with a card", "buy a brand new card", "pay your school fees", "change a torn note"],
        answer: 0,
        tests: "atm",
        cluster: "banking",
        level: "B1",
        why: "An ATM is a machine that lets you take cash out of your bank account using a card."
      },
      {
        type: "coll",
        prompt: "Which phrase is the natural partner of ATM: she used the ATM to ____ before the market closed?",
        options: ["take out cash", "pay back cash", "come to cash", "set aside cash"],
        answer: 0,
        tests: "takeout",
        cluster: "banking",
        level: "B1",
        why: "Take out is the everyday phrasal verb for getting money from a machine, and its partner is cash or an amount."
      },
      {
        type: "meaning",
        prompt: "Her father paid for the shoes with a debit card. What does a debit card do?",
        options: ["it spends money you already have", "it borrows money from the bank", "it gives you a small discount", "it saves your money for later"],
        answer: 0,
        tests: "card",
        cluster: "banking",
        level: "B1",
        why: "A debit card takes your own money straight away, while a credit card borrows the bank's money that you must pay back."
      },
      {
        type: "context",
        prompt: "Every Sunday Ploy's mother gives her 300 baht for the week. Ploy uses it for snacks and the BTS. What is the 300 baht?",
        options: ["her allowance", "her wages", "her refund", "her budget"],
        answer: 0,
        tests: "allowance",
        cluster: "budget",
        level: "B1",
        why: "An allowance is money you are given regularly, usually by a parent, while wages are money you earn by working."
      },
      {
        type: "gap",
        prompt: "A taxi to the concert is too expensive. We cannot ____ it, so let us take the BTS instead.",
        options: ["afford", "waste", "save", "owe"],
        answer: 0,
        tests: "afford",
        cluster: "spending",
        level: "B1",
        why: "Cannot afford means you do not have enough money for something."
      },
      {
        type: "gap",
        prompt: "He ____ most of his allowance on manga and bubble tea every single month.",
        options: ["spends", "pays", "costs", "buys"],
        answer: 0,
        tests: "spendon",
        cluster: "spending",
        level: "B1",
        why: "You spend money ON the thing you buy, so spend is the verb that fits with on manga."
      },
      {
        type: "sub",
        prompt: "Do not THROW YOUR MONEY AWAY on that game; exactly the same one is free on the app store. Which word best replaces the capitals?",
        options: ["waste", "save", "budget", "refund"],
        answer: 0,
        tests: "waste",
        cluster: "spending",
        level: "B1",
        why: "Waste money on something means to spend it on something useless, just like throwing the money away."
      },
      {
        type: "error",
        prompt: "Mai borrowed 200 baht from Ploy on Monday. Which sentence is correct?",
        options: ["I will pay you back on Friday.", "I will pay back you on Friday.", "I will pay back to you on Friday.", "I will back pay you on Friday."],
        answer: 0,
        tests: "payback",
        cluster: "spending",
        level: "B1",
        why: "With pay back the person goes in the middle: pay me back, pay you back, never pay back me."
      },
      {
        type: "idiom",
        prompt: "Nut's brother buys new football boots every season and they are never cheap. Which sentence fits?",
        options: ["He spends a fortune on boots", "He makes a fortune on boots", "He saves a fortune on boots", "He costs a fortune on boots"],
        answer: 0,
        tests: "fortune",
        cluster: "spending",
        level: "B1",
        why: "You SPEND a fortune when you pay a lot, you MAKE a fortune when you get rich, and a thing COSTS a fortune."
      },
      {
        type: "idiom",
        prompt: "The headphones Nan wanted were 9,000 baht at the mall. Which phrase says this best?",
        options: ["they cost an arm and a leg", "they are a real bargain", "they are in the sale", "they come to nothing"],
        answer: 0,
        tests: "armandleg",
        cluster: "value",
        level: "B1",
        why: "Cost an arm and a leg means something is extremely expensive, far more than you want to pay."
      },
      {
        type: "error",
        prompt: "You are at the 7-Eleven counter and you want to know the total. Which question is correct?",
        options: ["How much does it come to?", "How much does it come up?", "How much does it pay back?", "How much does it run out?"],
        answer: 0,
        tests: "cometo",
        cluster: "value",
        level: "B1",
        why: "Come to means to add up to a total, so the standard shop question is How much does it come to?"
      },
      {
        type: "meaning",
        prompt: "The zip on the bag broke after two days, so she went back and asked for a refund. What did she want?",
        options: ["her money back", "a new receipt", "a small discount", "a free repair"],
        answer: 0,
        tests: "refund",
        cluster: "transaction",
        level: "B1",
        why: "A refund is money given back to you when you return something, and the RE in refund means back."
      },
      {
        type: "context",
        prompt: "Nut's family pays the music teacher on the first day of every month. She writes each amount in her book. What is each of these amounts called?",
        options: ["a monthly payment", "a monthly refund", "a monthly discount", "a monthly receipt"],
        answer: 0,
        tests: "payment",
        cluster: "transaction",
        level: "B1",
        why: "A payment is an amount of money that is paid, and in English you make a payment rather than do one."
      },
      {
        type: "gap",
        prompt: "She ____ of money two days before the school trip and had to borrow from her sister.",
        options: ["ran out", "sold out", "set aside", "paid back"],
        answer: 0,
        tests: "runout",
        cluster: "transaction",
        level: "B1",
        why: "A person runs out OF money when none is left, while things in a shop simply sell out."
      },
      {
        type: "odd",
        prompt: "Three of these mean there is nothing left for you to buy. Which one does NOT belong?",
        options: ["sold out", "all gone", "on sale", "none left"],
        answer: 2,
        tests: "sellout",
        cluster: "transaction",
        level: "B1",
        why: "Sold out, all gone and none left all mean nothing is available, while on sale means the price has been reduced."
      },
      {
        type: "sub",
        prompt: "He PUT MONEY AWAY every week for four months before he bought the second-hand guitar. Which word best replaces the capitals?",
        options: ["saved", "spent", "wasted", "paid"],
        answer: 0,
        tests: "save",
        cluster: "budget",
        level: "B1",
        why: "Save means to keep money instead of spending it so that you can use it later."
      },
      {
        type: "coll",
        prompt: "Which noun completes this partnership: she went over ____ and had no money at all in the last week of term?",
        options: ["budget", "allowance", "change", "payment"],
        answer: 0,
        tests: "budget",
        cluster: "budget",
        level: "B1",
        why: "You stick to a budget when your plan works and go over budget when you spend more than you planned."
      },
      {
        type: "gap",
        prompt: "If we ____ on bubble tea, we can save about 400 baht in a month.",
        options: ["cut down", "run out", "set aside", "chip in"],
        answer: 0,
        tests: "cutdown",
        cluster: "budget",
        level: "B1",
        why: "Cut down on something means to use or buy less of it, usually so that you spend less."
      }

    ]
  },

  /* ================= FINAL CHECK: B2 ================= */
  finalB2: {
    id: "finalB2",
    title: "Final Check: B2",
    subtitle: "20 questions at B2 level.",
    kind: "final",
    level: "B2",
    questions: [

      {
        type: "gap",
        prompt: "The reader at the till would not pick up the chip, so the cashier asked her to ____ her card instead of tapping it on the machine.",
        options: ["swipe", "spend", "save", "snap"],
        answer: 0,
        tests: "swipe",
        cluster: "banking",
        level: "B2",
        why: "Swipe means to pass a card through or across a reader, which is a different action from tapping it on the surface."
      },
      {
        type: "error",
        prompt: "The stalls at the night market do not take cards at all. Which sentence is correct?",
        options: ["The stalls take cash only, so bring some cash.", "The stalls take a cash only, so bring a cash.", "The stalls take cashes only, so bring cashes.", "The stalls take the cashes only, so bring cashes."],
        answer: 0,
        tests: "cash",
        cluster: "banking",
        level: "B2",
        why: "Cash is uncountable, so it never takes a or a plural s: some cash, a lot of cash, not enough cash."
      },
      {
        type: "error",
        prompt: "Nan's part-time pay goes straight to the bank every month. Which sentence is correct?",
        options: ["The money is paid into her account.", "The money is paid in her account.", "The money is paid on her account.", "The money is paid over her account."],
        answer: 0,
        tests: "account",
        cluster: "banking",
        level: "B2",
        why: "Money goes INTO an account and comes OUT OF it, so the fixed pattern is pay money into an account."
      },
      {
        type: "odd",
        prompt: "Three of these are money a bank takes from you for a service. Which one does NOT belong?",
        options: ["a transfer fee", "a monthly fee", "a transaction fee", "a full refund"],
        answer: 3,
        tests: "bankcharge",
        cluster: "banking",
        level: "B2",
        why: "A fee or bank charge is money you pay for a service, while a refund is money coming back to you."
      },
      {
        type: "idiom",
        prompt: "The limited-edition 7-Eleven cups disappeared within minutes because shoppers bought them the moment they appeared on the shelf. Which idiom fits best?",
        options: ["Shoppers snapped up a bargain", "Shoppers threw money down the drain", "Shoppers tightened their belts", "Shoppers shopped around first"],
        answer: 0,
        tests: "snapup",
        cluster: "value",
        level: "B2",
        why: "Snap up a bargain is about speed as well as price: buying something cheap before anyone else can get it."
      },
      {
        type: "error",
        prompt: "The taxi driver charged them 500 baht for a two-kilometre trip they should have paid 60 baht for. Which sentence is correct?",
        options: ["The driver ripped them off.", "The driver ripped off them.", "The driver rip-offed them.", "The driver was ripped off them."],
        answer: 0,
        tests: "ripoff",
        cluster: "value",
        level: "B2",
        why: "With rip off a pronoun object must sit in the middle: ripped them off, and the cheated person is never the subject here."
      },
      {
        type: "coll",
        prompt: "Which phrase is the natural partner here: online it is always worth ____ before you buy anything expensive?",
        options: ["shopping around", "selling out", "chipping in", "running out"],
        answer: 0,
        tests: "shoparound",
        cluster: "value",
        level: "B2",
        why: "Worth is followed by an -ing form, and shop around is the natural partner of comparing prices before buying."
      },
      {
        type: "meaning",
        prompt: "The 99-baht lunch set fills you up completely, so everyone says it is excellent value for money. What does that mean?",
        options: ["you get a lot for the price", "the price is the lowest possible", "the price already includes tax", "you are allowed to pay later"],
        answer: 0,
        tests: "value",
        cluster: "value",
        level: "B2",
        why: "Value for money compares worth with price, so something cheap can still be poor value if it is useless."
      },
      {
        type: "idiom",
        prompt: "Which sentence uses the expensive-price idiom correctly?",
        options: ["Those brand-name trainers cost an arm and a leg.", "Those brand-name trainers spend an arm and a leg.", "Those brand-name trainers paid an arm and a leg.", "Those brand-name trainers took an arm and a leg."],
        answer: 0,
        tests: "armandleg",
        cluster: "value",
        level: "B2",
        why: "The idiom is fixed with cost: a thing costs an arm and a leg, and only a person can spend or pay anything."
      },
      {
        type: "gap",
        prompt: "She saves carefully all year, but for her birthday she ____ on a front-row seat at the concert.",
        options: ["splashes out", "gets by", "chips in", "cuts down"],
        answer: 0,
        tests: "splashout",
        cluster: "spending",
        level: "B2",
        why: "Splash out on something means to spend a lot on an enjoyable treat that you do not really need."
      },
      {
        type: "coll",
        prompt: "Which noun completes this partnership: he got into serious ____ buying a phone he could not afford?",
        options: ["debt", "budget", "change", "value"],
        answer: 0,
        tests: "debt",
        cluster: "spending",
        level: "B2",
        why: "The fixed pattern is get into debt, and debt is the word that collocates with serious, deep and credit card."
      },
      {
        type: "sub",
        prompt: "Twenty of us EACH GAVE A SMALL AMOUNT so that we could buy the teacher a present. Which phrase best replaces the capitals?",
        options: ["chipped in", "splashed out", "paid back", "set aside"],
        answer: 0,
        tests: "chipin",
        cluster: "spending",
        level: "B2",
        why: "Chip in means each person gives a small amount so that together you can pay for something bigger."
      },
      {
        type: "odd",
        prompt: "Three of these mean the money brought absolutely nothing back. Which one does NOT belong?",
        options: ["thrown down the drain", "completely wasted", "spent on nothing", "set aside safely"],
        answer: 3,
        tests: "drain",
        cluster: "spending",
        level: "B2",
        why: "Throwing money down the drain means it is gone for good, while setting money aside keeps it for a purpose."
      },
      {
        type: "sub",
        prompt: "The Lazada page says: Please keep the receipt for every ITEM YOU BUY over 500 baht. Which word best replaces the capitals?",
        options: ["purchase", "payment", "refund", "bargain"],
        answer: 0,
        tests: "purchase",
        cluster: "transaction",
        level: "B2",
        why: "Purchase is the formal noun for a thing you buy, which is why websites and signs prefer it to buy."
      },
      {
        type: "context",
        prompt: "Nan bought earphones on Lazada and they stopped working after a week. The seller replies that it can only help customers who are able to prove that they paid. What does she need to find?",
        options: ["the receipt", "the discount", "the allowance", "the budget"],
        answer: 0,
        tests: "receipt",
        cluster: "transaction",
        level: "B2",
        why: "A receipt is the proof of payment shops ask for, which is why the rule everywhere is no receipt, no refund."
      },
      {
        type: "context",
        prompt: "The bill after a family meal says: Total 800 baht before tax. Nut has exactly 850 baht in his wallet and starts to worry. What should he expect at the till?",
        options: ["the final amount will be over 800 baht", "the final amount will be exactly 800 baht", "the tax will be taken off the 800 baht", "the tax will be refunded after he pays"],
        answer: 0,
        tests: "tax",
        cluster: "transaction",
        level: "B2",
        why: "Before tax means the tax has not been added yet, so the amount you finally hand over is higher than the figure shown."
      },
      {
        type: "gap",
        prompt: "Instead of spending everything the day it arrives, she ____ 100 baht every week for her sister's birthday present.",
        options: ["sets aside", "runs out", "comes to", "pays back"],
        answer: 0,
        tests: "setaside",
        cluster: "budget",
        level: "B2",
        why: "Set aside means to keep money separately for one particular purpose, so money is always set aside FOR something."
      },
      {
        type: "meaning",
        prompt: "After buying the concert ticket, she got by on instant noodles for a whole week. What does got by mean here?",
        options: ["managed with only just enough", "spent more than she planned", "borrowed money from her friends", "asked her parents for extra help"],
        answer: 0,
        tests: "getby",
        cluster: "budget",
        level: "B2",
        why: "Get by means to manage with only just enough money, and it takes on before the amount you live on."
      },
      {
        type: "meaning",
        prompt: "Her spending habits changed completely the day she started writing every baht down in her notes app. What are spending habits?",
        options: ["the usual pattern of your spending", "the total you spend on one day", "the plan you make before shopping", "the money your parents give you"],
        answer: 0,
        tests: "spendinghabits",
        cluster: "budget",
        level: "B2",
        why: "Spending habits are the pattern of how you usually spend over time, which is why the word is almost always plural."
      },
      {
        type: "idiom",
        prompt: "The family had to spend much less on everything for months after buying the new fridge. Which sentence says this with an idiom?",
        options: ["They had to tighten their belts.", "They had to splash out for a while.", "They had to snap up a bargain.", "They had to spend a fortune."],
        answer: 0,
        tests: "tightenbelt",
        cluster: "budget",
        level: "B2",
        why: "Tighten your belt means to start spending less because there is less money available than before."
      }

    ]
  }

};
