import play from '../index.js';
import random from '../utils.js';

const description = 'What is the result of the expression?';

function calculate(n1, n2, sign) {
  switch (sign) {
    case '+':
      return n1 + n2;

    case '-':
      return n1 - n2;

    default:
      return n1 * n2;
  }
}

const getRound = () => {
  const signs = ['-', '*', '+'];
  const signIndex = random(0, signs.length - 1);
  const n1 = random(1, 100);
  const n2 = random(1, 100);
  const sign = signs[signIndex];
  const expression = `${n1} ${sign} ${n2}`;

  const correctAnswer = String(calculate(n1, n2, sign));

  return {
    expression, correctAnswer,
  };
};

const playCalc = () => { play(description, getRound); };

export default playCalc;
