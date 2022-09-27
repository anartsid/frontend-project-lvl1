import brainlogic from '../index.js';
import random from '../utils.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const ask = () => {
  const n1 = random(1, 100);

  const expression = `${n1}`;

  const correctanswer = (n1 % 2 === 0) ? 'yes' : 'no';

  return {
    expression, correctanswer,
  };
};

export const brainEven = () => { brainlogic(gameDescription, ask); };
