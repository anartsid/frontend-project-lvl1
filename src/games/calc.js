import brainlogic from '../index.js';
import random from '../utils.js';

export const gameDescription = 'What is the result of the expression?';

const allSign = ['+', '-', '*'];
const rand = () => Math.floor(Math.random() * allSign.length);
const signrand = () => allSign[rand()];

export const ask = () => {
  const n1 = random(1, 100);
  const n2 = random(1, 100);
  const sign = signrand();
  const expression = `${n1} ${sign} ${n2}`;

  let correctanswer = 0;
  switch (sign) {
    case '+':
      correctanswer = n1 + n2;
      break;

    case '-':
      correctanswer = n1 - n2;
      break;

    default:
      correctanswer = n1 * n2;
      break;
  }

  return {
    expression, correctanswer,
  };
};

export const brainCalc = () => { brainlogic(gameDescription, ask); };
