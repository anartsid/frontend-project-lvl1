import brainlogic from './index.js';
import random from '../utils.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const question = () => {
  const n1 = random(1, 100);
  const expression = `${n1}`;
  return { n1, expression };
};

export const correctanswer = ({ n1 }) => {
  if (n1 <= 3) {
    return 'yes';
  }
  for (let step = 2; step < n1; step += 1) {
    if (n1 % step === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export const brainPrime = () => { brainlogic(gameDescription, question, correctanswer); };
