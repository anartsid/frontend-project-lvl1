import readlineSync from 'readline-sync';
import brainlogic from './index.js';

export const gametranscription = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export const question = () => {
  const n1 = Math.floor(Math.random() * 100) + 1;
  const answer = readlineSync.question(`Question: ${n1} \n`);
  console.log(`Your answer: ${answer}`);
  return { n1, answer };
};

export const correctanswer = (mySuperObj) => {
  const { n1, answer } = mySuperObj;
  const checkeven = (n1 % 2 === 0) && (answer === 'no');
  const checkuneven = (n1 % 2 !== 0) && (answer === 'yes');

  if (checkeven === true || checkuneven === true) {
    const opposit = (answer === 'yes' ? 'no' : 'yes');
    return opposit;
  }
  return answer;
};

export const brainEven = () => { brainlogic(gametranscription, question, correctanswer); };
