const quotes = [
  {
    quote: 'Pure mathematics is, in its way, the poetry of logical ideas.',
    author: '— Albert Einstein, German theoretical physicist',
  }, {
    quote: 'Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers.',
    author: '— Shakuntala Devi, Indian writer and mental calculator',
  }, {
    quote: 'Mathematics is the most beautiful and most powerful creation of the human spirit.',
    author: '— Stefan Banach, Polish mathematician',
  }, {
    quote: 'We will always have STEM with us. Some things will drop out of the public eye and go away, but there will always be science, engineering, and technology. And there will always, always be mathematics.',
    author: '— Katherine Johnson, African-American mathematician',
  }, {
    quote: 'Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality.',
    author: '— Richard Courant, German-American mathematician',
  }, {
    quote: 'As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality.',
    author: '— Albert Einstein',
  }, {
    quote: 'What is mathematics? It is only a systematic effort of solving puzzles posed by nature.',
    author: '— Shakuntala Devi',
  }, {
    quote: 'Mathematics is the music of reason.',
    author: '— James Joseph Sylvester, English mathematician',
  }, {
    quote: 'Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.',
    author: '— David Hilbert, German mathematician',
  }, {
    quote: 'There should be no such thing as boring mathematics.',
    author: '— Edsger W. Dijkstra, Dutch systems scientist',
  }, {
    quote: '‘Obvious’ is the most dangerous word in mathematics.',
    author: '— Eric Temple Bell, Scottish mathematician',
  }, {
    quote: 'Mathematics are the result of mysterious powers which no one understands, and which the unconscious recognition of beauty must play an important part. Out of an infinity of designs a mathematician chooses one pattern for beauty’s sake and pulls it down to earth.',
    author: '— Marston Morse, American mathematician',
  }, {
    quote: 'Mathematics allows for no hypocrisy and no vagueness.',
    author: '— Stendhal (pen name of Marie-Henri Beyle), French writer',
  }, {
    quote: 'I’ve always enjoyed mathematics. It is the most precise and concise way of expressing an idea.',
    author: '— N.R. Narayana Murthy, Indian IT industrialist',
  }, {
    quote: 'It is impossible to be a mathematician without being a poet in soul.',
    author: '— Sofia Kovalevskaya, Russian mathematician',
  }, {
    quote: 'A mathematician who is not also something of a poet will never be a complete mathematician.',
    author: '— Karl Weierstrass, German mathematician',
  }, {
    quote: 'Mathematics compares the most diverse phenomena and discovers the secret analogies that unite them.',
    author: '— Joseph Fourier, French mathematician and physicist',
  }, {
    quote: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
    author: '— William Paul Thurston, American mathematician',
  }, {
    quote: 'Somehow it’s okay for people to chuckle about not being good at math. Yet, if I said “I never learned to read,” they’d say I was an illiterate dolt.',
    author: '— Neil deGrasse Tyson, American astrophysicist and author',
  }, {
    quote: 'In mathematics the art of proposing a question must be held of higher value than solving it.',
    author: '— Georg Cantor, German mathematician',
  }, {
    quote: 'It is clear that the chief end of mathematical study must be to make the students think.',
    author: '— John Wesley Young, American mathematician',
  }, {
    quote: 'Go down deep enough into anything and you will find mathematics.',
    author: '— Dean Schlicter',
  }, {
    quote: 'Nature is written in mathematical language.',
    author: '— Galileo Galilei, Italian astronomer, physicist and engineer',
  }, {
    quote: 'Mathematics is a language.',
    author: '— Josiah Willard Gibbs, American scientist',
  }, {
    quote: 'Mathematics has beauty and romance. It’s not a boring place to be, the mathematical world. It’s an extraordinary place; it’s worth spending time there.',
    author: '— Marcus du Sautoy, British mathematician',
  }, {
    quote: 'To me, mathematics, computer science, and the arts are insanely related. They’re all creative expressions.',
    author: '— Sebastian Thrun, German innovator, computer scientist and entrepreneur educator',
  }, {
    quote: 'The essence of mathematics lies in its freedom.',
    author: '— Georg Cantor',
  }, {
    quote: 'Why do children dread mathematics? Because of the wrong approach. Because it is looked at as a subject.',
    author: '— Shakuntala Devi',
  }, {
    quote: 'Many who have had an opportunity of knowing any more about mathematics confuse it with arithmetic, and consider it an arid science. In reality, however, it is a science which requires a great amount of imagination.',
    author: '— Sofia Kovalevskaya',
  }, {
    quote: 'The study of mathematics, like the Nile, begins in minuteness but ends in magnificence.',
    author: '— Charles Caleb Colton, English cleric, writer and collector',
  }, {
    quote: 'Wherever there is number, there is beauty.',
    author: '— Proclus, Greek philosopher',
  }, {
    quote: 'Life is a math equation. In order to gain the most, you have to know how to convert negatives into positives.',
    author: '— Anonymous',
  }, {
    quote: 'Mathematics may not teach us to add love or subtract hate, but it gives us hope that every problem has a solution.',
    author: '— Anonymous',
  }, {
    quote: 'One of the endlessly alluring aspects of mathematics is that its thorniest paradoxes have a way of blooming into beautiful theories.',
    author: '— Philip J. Davis, American academic applied mathematician',
  }, {
    quote: 'Mathematics is not a careful march down a well-cleared highway, but a journey into a strange wilderness, where the explorers often get lost. Rigor should be a signal to the historians that the maps have been made, and the real explorers have gone elsewhere.',
    author: '— W.S. Anglin, Mathematics author',
  }, {
    quote: 'The pure mathematician, like the musician, is a free creator of his world of ordered beauty.',
    author: '— Bertrand Russell, British philosopher',
  }, {
    quote: 'Just because we can’t find a solution, it doesn’t mean there isn’t one.',
    author: '— Andrew Wiles, English mathematician',
  }, {
    quote: 'Mathematics is a place where you can do things which you can’t do in the real world.',
    author: '— Marcus du Sautoy',
  }, {
    quote: 'Millions saw the apple fall, but Newton asked why.',
    author: '— Bernard Baruch, American financier, philanthropist and statesman',
  }, {
    quote: 'The definition of a good mathematical problem is the mathematics it generates rather than the problem itself.',
    author: '— Andrew Wiles',
  }, {
    quote: 'If I were again beginning my studies, I would follow the advice of Plato and start with mathematics.',
    author: '— Galileo Galilei',
  }, {
    quote: 'Pure mathematicians just love to try unsolved problems — they love a challenge.',
    author: '— Andrew Wiles',
  }, {
    quote: 'I’ve always been interested in using mathematics to make the world work better.',
    author: '— Alvin E. Roth, American academic',
  }, {
    quote: 'I hope that seeing the excitement of solving this problem will make mathematicians realize that there are lots and lots of other problems in mathematics which are going to be just as challenging in the future.',
    author: '— Andrew Wiles',
  }, {
    quote: 'The only way to learn mathematics is to do mathematics.',
    author: '— Paul R. Halmos, Hungarian-American mathematician',
  }, {
    quote: 'It’s fine to work on any problem, so long as it generates interesting mathematics along the way — even if you don’t solve it at the end of the day.',
    author: '— Andrew Wiles',
  }, {
    quote: 'You don’t have to be a mathematician to have a feel for numbers.',
    author: '— John Forbes Nash, Jr., American mathematician',
  }, {
    quote: 'Sometimes the questions are complicated and the answers are simple.',
    author: '— Dr. Seuss, American children’s author',
  }, {
    quote: 'The essence of math is not to make simple things complicated, but to make complicated things simple.',
    author: '— Stan Gudder, American mathematician',
  }, {
    quote: 'If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.',
    author: '— John von Neumann, American-hungarian mathematician',
  }, {
    quote: 'Mathematics is a game played according to certain simple rules with meaningless marks on paper.',
    author: '— David Hilbert',
  }, {
    quote: 'Dear Math, please grow up and solve your own problems. I’m tired of solving them for you.',
    author: '— Anonymous',
  }, {
    quote: 'I am still waiting for the day I’ll use mathematics integration in real life.',
    author: '— Derrick Obedgiu',
  }, {
    quote: 'Arithmetic is numbers you squeeze from your head to your hand to your pencil to your paper till you get the answer.',
    author: '— Carl Sandburg, American poet',
  }, {
    quote: 'That awkward moment when you finish a math problem and your answer isn’t even one of the choices.',
    author: '— Ritu Ghatourey, Indian feminist, writer and publisher',
  }, {
    quote: 'Mathematics is like love; a simple idea, but it can get complicated.',
    author: '— Anonymous',
  }, {
    quote: 'If there is a 50-50 chance that something can go wrong, then nine times out of 10 it will.',
    author: '— Paul Harvey, American radio broadcaster',
  }, {
    quote: 'Math is fun. It teaches you life and death information like when you’re cold, you should go to a corner since it’s 90 degrees there.',
    author: '— Anonymous',
  }, {
    quote: 'Pure mathematics is the world’s best game. It is more absorbing than chess, more of a gamble than poker, and lasts longer than Monopoly. It’s free. It can be played anywhere — Archimedes did it in a bathtub.',
    author: '— Richard J. Trudeau, mathematician',
  }, {
    quote: 'Mathematics consists of proving the most obvious thing in the least obvious way.',
    author: '— George Pólya, Hungarian mathematician',
  }, {
    quote: 'In mathematics, you don’t understand things. You just get used to them.',
    author: '— John von Neumann',
  }, {
    quote: 'There are two ways to do great mathematics. The first is to be smarter than everybody else. The second way is to be stupider than everybody else — but persistent.',
    author: '— Raoul Bott, Hungarian-American mathematician',
  }, {
    quote: 'Five out of four people have trouble with fractions.',
    author: '— Steven Wright, American stand-up comedian',
  }, {
    quote: 'Mathematics is a hard thing to love. It has the unfortunate habit, like a rude dog, of turning its most unfavorable side towards you when you first make contact with it.',
    author: '— David Whiteland, English author',
  },
];
export default quotes;
