import brainlogic, { random } from './index.js';

export const gameDescription = 'What is the result of the expression?';

const allSign = ['+', '-', '*'];
const rand = () => Math.floor(Math.random() * allSign.length);
const signrand = () => allSign[rand()];

export const question = () => {
  const n1 = random();
  const n2 = random();
  const sign = signrand();
  const expression = `${n1} ${sign} ${n2}`;
  return {
    expression, n1, n2, sign,
  };
};

export const correctanswer = ({ n1, n2, sign }) => {
  switch (sign) {
    case '+':
      return n1 + n2;

    case '-':
      return n1 - n2;

    default:
      return n1 * n2;
  }
};

export const brainCalc = () => { brainlogic(gameDescription, question, correctanswer); };
