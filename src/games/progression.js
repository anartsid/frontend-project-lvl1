import play from '../index.js';
import random from '../utils.js';

const giveDescription = 'What number is missing in the progression?';

function generateExpression(num1, step) {
  const startarrow = [num1];

  for (let i = 1; startarrow.length <= 7; i += 1) {
    const item = startarrow[i];
    startarrow[i] = startarrow[i - 1] + step;
    startarrow.push(item);
  }

  const point = '..';
  const e = Math.floor(Math.random() * 6) + 1;
  const correctAnswer = startarrow[e];
  startarrow[e] = point;

  const arrow = startarrow.join(' ');
}

const getRound = () => {
  const num1 = random(1, 100);
  const step = random(1, 100);

  const expression = `${generateExpression.arrow}`;
  const correctAnswer = generateExpression(num1, step);


  return {
    expression, correctAnswer,
  };
};

export const playProgression = () => { play(giveDescription, getRound); };
