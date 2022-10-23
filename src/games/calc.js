import play from '../index.js';
import random from '../utils.js';

const giveDescription = 'What is the result of the expression?';

function generateExpression(n1, n2, sign) {
  let correctAnswer = 0;
  switch (sign) {
    case '+':
      correctAnswer = n1 + n2;
      break;

    case '-':
      correctAnswer = n1 - n2;
      break;

    default:
      correctAnswer = n1 * n2;
      break;
  }

  return correctAnswer;
}

const getRound = () => {
  const allSign = [ , '-', '*', '+'];
  const rand = () => random(1, allSign.length);
  const signrand = () => allSign[rand()];
  const n1 = random(1, 100);
  const n2 = random(1, 100);
  const sign = signrand();
  const expression = `${n1} ${sign} ${n2}`;

  const correctAnswer = generateExpression(n1, n2, sign);

  return {
    expression, correctAnswer,
  };
};

const playCalc = () => { play(giveDescription, getRound); };

export default playCalc;
