import brainlogic from '../index.js';
import random from '../utils.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const ask = () => {
  const n1 = random(1, 100);
  const expression = `${n1}`;

  let correctanswer = '';
  if (n1 <= 3) {
    correctanswer = 'yes';
  }
  for (let step = 2; step < n1; step += 1) {
    if (n1 % step === 0) {
      correctanswer = 'no';
    }
  }

  return {
    expression, correctanswer,
  };
};

export const brainPrime = () => { brainlogic(gameDescription, ask); };
