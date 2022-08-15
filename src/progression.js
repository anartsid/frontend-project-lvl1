import brainlogic, { random } from './index.js';

export const gameDescription = 'What number is missing in the progression?';

export const question = () => {
  const num1 = random();
  const step = random();

  const startarrow = [num1];

  for (let i = 1; startarrow.length <= 7; i += 1) {
    const item = startarrow[i];
    startarrow[i] = startarrow[i - 1] + step;
    startarrow.push(item);
  }

  const point = '..';
  const e = Math.floor(Math.random() * 6) + 1;
  const correctPoint = startarrow[e];
  startarrow[e] = point;

  const arrow = startarrow.join(' ');

  const expression = `${arrow}`;
  return {
    expression, arrow, correctPoint,
  };
};

export const correctanswer = ({ correctPoint }) => correctPoint;

export const brainProgression = () => { brainlogic(gameDescription, question, correctanswer); };
