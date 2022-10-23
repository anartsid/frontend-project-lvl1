import play from '../index.js';
import random from '../utils.js';

const giveDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getRound = () => {
  const n1 = random(1, 100);

  const expression = `${n1}`;

  const correctAnswer = isEven(n1) ? 'yes' : 'no';

  return {
    expression, correctAnswer,
  };
};

const playEven = () => { play(giveDescription, getRound); };

export default playEven;
