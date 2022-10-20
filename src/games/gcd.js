import play from '../index.js';
import random from '../utils.js';

const giveDescription = 'Find the greatest common divisor of given numbers.';

function generateExpression(n1, n2) {
  const min = (n1 < n2) ? n1 : n2;
  const max = (n1 > n2) ? n1 : n2;
  let correctAnswer = max;

  for (let i = min; correctAnswer >= i; i -= 1) {
    if (min % i === 0) {
      if (max % i === 0) {
        correctAnswer = i;
        break;
      }
    }
  }
}

const getRound = () => {
  const n1 = random(1, 100);
  const n2 = random(1, 100);
  const expression = `${n1} ${n2}`;

  const correctAnswer = generateExpression(n1, n2);

  return {
    expression, correctAnswer,
  };
};

export const playGcd = () => { play(giveDescription, getRound); };
