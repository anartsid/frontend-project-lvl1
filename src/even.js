import brainlogic, { random } from './index.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const question = () => {
  const n1 = random();

  const expression = `${n1}`;
  return {
    n1, expression,
  };
};

export const correctanswer = ({ n1 }) => {
  if (n1 % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const brainEven = () => { brainlogic(gameDescription, question, correctanswer); };
