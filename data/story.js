/* ============================================================
   MONEY MATTERS — the story
   4 chapters, 7 illustrated page-turn pages, all 43 items tagged.
   Markup: {{id|surface form}}  ->  tappable study word
   img  : illustration for the page (in the art/ folder).
          Leave it empty and the coloured emoji panel is used instead.
   alt  : description of the illustration for screen readers.
   tint : warm | cool | bright — the emoji panel colour, and the
          fallback if the image fails to load.
   ============================================================ */
window.STORY = {
  title: "Mint’s Perfect Present",
  blurb: "One weekend, one weekly allowance, and one birthday present to buy. Tap any gold word to study it.",
  chapters: [
    {
      n: 1,
      title: "A Change of Habits",
      subtitle: "The start of the month",
      pages: [
        {
          art: "🐷", tint: "warm",
          img: "art/ch1p1-piggybank.jpg",
          alt: "Mint at her desk pushing a coin into a pink piggy bank, with a bubble tea and a games controller pushed aside and a thought bubble showing books and a university.",
          text: "Mint knew she had to change her {{spendinghabits|spending habits}} because she used to {{waste|waste}} all her money playing online games and bubble tea. This month, she decided to {{save|save}} her weekly {{allowance|allowance}} and {{setaside|set aside}} money for her best friend’s birthday present. She made a strict {{budget|budget}} so she wouldn’t {{debt|get into debt}} by having to borrow from her parents. To do this, she really had to {{tightenbelt|tighten her belt}} and {{cutdown|cut down on}} buying refills on her online game and snacks."
        },
        {
          art: "🏧", tint: "cool",
          img: "art/ch1p2-atm.jpg",
          alt: "Mint in school uniform at a mall cash machine, holding banknotes and frowning at a screen that reads: fee notice, 20 baht withdrawal charge applies.",
          text: "First, she needed {{cash|cash}}, so she stopped at the mall’s {{atm|ATM/cashpoint}} to {{takeout|take out}} 800 baht. She checked her {{account|bank account}} balance and sighed when she saw a 20-baht {{bankcharge|bank charge/fee}} just for using a different bank’s machine."
        }
      ]
    },
    {
      n: 2,
      title: "Shopping Around",
      subtitle: "Saturday at the mall",
      pages: [
        {
          art: "📱", tint: "bright",
          img: "art/ch2p1-phonecase.jpg",
          alt: "Mint looking shocked at a premium display of sparkling designer phone cases in a mall.",
          text: "Mint wanted to buy her friend a designer phone case, but it would {{armandleg|cost an arm and a leg}}, and she didn’t want to {{fortune|spend a fortune}} on a single item. She simply couldn’t {{afford|afford}} it. Instead, she decided to {{shoparound|shop around}} to find a great {{bargain|bargain}}. She knew that if she wasn’t careful, a bad store might {{ripoff|rip off}} young teenagers with fake products, which would mean she’d just {{drain|throw money down the drain}}."
        },
        {
          art: "🎨", tint: "warm",
          img: "art/ch2p2-sale.jpg",
          alt: "Mint beaming in a stationery shop, holding up a pastel watercolour paint set beside a sign reading Massive Sale, 15% student discount.",
          text: "Finally, she found a popular stationery store having a massive back-to-school {{sale|sale}}. She spotted a beautiful imported watercolor paint set that was amazing {{value|value for money}}. The store also offered a 15% student {{discount|discount}}. She knew they might {{sellout|sell out}} of the pretty pastel colors quickly, so she decided to {{snapup|snap up a bargain}} right away."
        }
      ]
    },
    {
      n: 3,
      title: "At the Counter",
      subtitle: "Twenty minutes later",
      pages: [
        {
          art: "💳", tint: "cool",
          img: "art/ch3p1-cardmachine.jpg",
          alt: "Mint handing a banknote to a smiling cashier past a card reader with a Broken sign taped to the till.",
          text: "At the counter, she wanted to make a {{payment|payment}} with her {{card|credit/debit card}} and just {{swipe|swipe}} it, but the store’s card machine was broken. So, she handed the cashier a 500-baht {{note|banknote}}."
        },
        {
          art: "🧾", tint: "warm",
          img: "art/ch3p2-receipt.jpg",
          alt: "The cashier passing Mint a paper bag and a long printed receipt, with coins counted out on the counter.",
          text: "Because there was no additional {{tax|tax}} added, the total didn’t {{cometo|come to}} very much. The cashier handed her the {{purchase|purchase}}, a printed {{receipt|receipt}}, and her {{change|change}}, which included a shiny 10-baht {{coin|coin}}.\n\n“Keep the receipt in case your friend already has this set and needs a {{refund|refund}},” the cashier smiled."
        }
      ]
    },
    {
      n: 4,
      title: "The Cake Problem",
      subtitle: "Almost home",
      pages: [
        {
          art: "🎂", tint: "bright",
          img: "art/ch4p1-cake.jpg",
          alt: "Two friends at a bakery counter in front of a strawberry cake, one clasping her hands in relief while the other holds out banknotes to share the cost.",
          text: "Later, Mint wanted to buy a birthday cake for the birthday party, but she realized she was about to {{runout|run out of}} money. She only had 50 baht left, which was barely enough to {{getby|get by}} and pay for her BTS skytrain ticket home. Luckily, another classmate offered to {{chipin|chip in}} and pay for the cake.\n\n“Thanks so much, I will {{payback|pay back}} my half of the cake money on Monday!” Mint promised.\n\nEven though she didn’t {{splashout|splash out}} on anything for herself this weekend, she felt incredibly proud of what she chose to {{spendon|spend on}}."
        }
      ]
    }
  ]
};
