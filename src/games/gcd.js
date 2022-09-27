import brainlogic from '../index.js';
import random from '../utils.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

export const ask = () => {
  const n1 = random(1, 100);
  const n2 = random(1, 100);
  const expression = `${n1} ${n2}`;

  const min = (n1 < n2) ? n1 : n2;
  const max = (n1 > n2) ? n1 : n2;
  let correctanswer = max;

  for (let i = min; correctanswer >= i; i -= 1) {
    if (min % i === 0) {
      if (max % i === 0) {
        correctanswer = i;
        break;
      }
    }
  }
  return {
    expression, correctanswer,
  };
};

export const brainGcd = () => { brainlogic(gameDescription, ask); };
