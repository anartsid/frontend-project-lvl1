import play from '../index.js';
import random from '../utils.js';

const description = 'What number is missing in the progression?';

function generateExpression(num1, step, progressionLength) {
  const startarrow = [num1];

  for (let i = 1; startarrow.length <= progressionLength; i += 1) {
    const item = startarrow[i];
    startarrow[i] = startarrow[i - 1] + step;
    startarrow.push(item);
  }

  const point = '..';
  const e = Math.floor(Math.random() * 6) + 1;
  const correct = startarrow[e];
  startarrow[e] = point;

  const arrow = startarrow.join(' ');

  return [arrow, correct];
}

const getRound = () => {
  const num1 = random(1, 100);
  const step = random(1, 100);
  const progressionLength = 7;

  const values = generateExpression(num1, step, progressionLength);
  const expression = `${values[0]}`;
  const correctAnswer = String(values[1]);

  return {
    expression, correctAnswer,
  };
};

const playProgression = () => { play(description, getRound); };

export default playProgression;
