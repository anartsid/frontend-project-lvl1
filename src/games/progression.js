import brainlogic from '../index.js';
import random from '../utils.js';

export const gameDescription = 'What number is missing in the progression?';

export const ask = () => {
  const num1 = random(1, 100);
  const step = random(1, 100);

  const startarrow = [num1];

  for (let i = 1; startarrow.length <= 7; i += 1) {
    const item = startarrow[i];
    startarrow[i] = startarrow[i - 1] + step;
    startarrow.push(item);
  }

  const point = '..';
  const e = Math.floor(Math.random() * 6) + 1;
  const correctanswer = startarrow[e];
  startarrow[e] = point;

  const arrow = startarrow.join(' ');

  const expression = `${arrow}`;

  return {
    expression, correctanswer,
  };
};

export const brainProgression = () => { brainlogic(gameDescription, ask); };
