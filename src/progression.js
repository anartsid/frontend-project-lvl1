import readlineSync from 'readline-sync';
import brainlogic from './index.js';

export const gametranscription = () => 'What number is missing in the progression?';

export const question = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const step = Math.floor(Math.random() * 100) + 1;

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

  const answer = readlineSync.question(`Question: ${arrow}\n`);
  console.log(`Your answer: ${answer}`);
  return {
    answer, arrow, correctPoint,
  };
};

export const correctanswer = ({ correctPoint }) => correctPoint;

export const brainProgression = () => { brainlogic(gametranscription, question, correctanswer); };
