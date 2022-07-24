import readlineSync from 'readline-sync';
import brainlogic from './index.js';

export const gametranscription = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const question = () => {
  const n1 = Math.floor(Math.random() * 100) + 1;
  const answer = readlineSync.question(`Question: ${n1} \n`);
  console.log(`Your answer: ${answer}`);
  return { n1, answer };
};

export const correctanswer = ({ n1 }) => {
  if (n1 <= 3) {
    return 'yes';
  }
  for (let step = 2; step < n1; step += 1) {
    if (n1 % step === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export const brainPrime = () => { brainlogic(gametranscription, question, correctanswer); };
