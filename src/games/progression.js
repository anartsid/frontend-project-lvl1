import play from '../index.js';
import random from '../utils.js';

const description = 'What number is missing in the progression?';

const point = '..';

function generateProgression(num1, step, progressionLength) {
  const startarrow = [num1];

  for (let i = 1; startarrow.length <= progressionLength; i += 1) {
    const item = startarrow[i];
    startarrow[i] = startarrow[i - 1] + step;
    startarrow.push(item);
  }

  return startarrow;
}

const getRound = () => {
  const num1 = random(1, 100);
  const step = random(1, 100);
  const progressionLength = 7;
  const e = random(1, 6);

  const values = generateProgression(num1, step, progressionLength);

  const correct = values[e];
  values[e] = point;

  const finaAarrow = values.join(' ');

  const expression = `${finaAarrow}`;
  const correctAnswer = String(correct);

  return {
    expression, correctAnswer,
  };
};

const playProgression = () => { play(description, getRound); };

export default playProgression;
