import play from '../index.js';
import random from '../utils.js';

const description = 'What is the result of the expression?';

function generateExpression(n1, n2, sign) {
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
  const allSigns = ['-', '*', '+'];
  const rand = random(0, allSigns.length - 1);
  const n1 = random(1, 100);
  const n2 = random(1, 100);
  const sign = allSigns[rand];
  const expression = `${n1} ${sign} ${n2}`;

  const correctAnswer = String(generateExpression(n1, n2, sign));

  return {
    expression, correctAnswer,
  };
};

const playCalc = () => { play(description, getRound); };

export default playCalc;
