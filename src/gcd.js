import readlineSync from 'readline-sync';
import brainlogic from './index.js';

export const gametranscription = () => 'Find the greatest common divisor of given numbers.';

export const question = () => {
  const n1 = Math.floor(Math.random() * 100) + 1;
  const n2 = Math.floor(Math.random() * 100) + 1;
  const answer = readlineSync.question(`Question: ${n1}  ${n2} \n`);
  console.log(`Your answer: ${answer}`);
  return { n1, n2, answer };
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

export const brainGcd = () => { brainlogic(gametranscription, question, correctanswer); };
