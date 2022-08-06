import readlineSync from 'readline-sync';
import brainlogic from './index.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

export const question = () => {
  const n1 = Math.floor(Math.random() * 100) + 1;
  const n2 = Math.floor(Math.random() * 100) + 1;
  const expression = `${n1}  ${n2}`;
  return { n1, n2, expression };
};

export const correctanswer = ({ n1, n2 }) => {
  const min = (n1 < n2) ? n1 : n2;
  const max = (n1 > n2) ? n1 : n2;
  let cAns = '';

  for (let i = min; cAns = i; i -= 1) {
    if (min % i === 0) {
      if (max % i === 0) {
        cAns = i;
        break;
      }
    }
  }
  return cAns;
};

export const brainGcd = () => { brainlogic(gameDescription, question, correctanswer); };
