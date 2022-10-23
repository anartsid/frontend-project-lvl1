import play from '../index.js';
import random from '../utils.js';

const giveDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function generateExpression(n1) {
  let correctAnswer = 'yes';
  if (n1 <= 3) {
    correctAnswer = 'yes';
  }
  for (let step = 2; step < n1; step += 1) {
    if (n1 % step === 0) {
      correctAnswer = 'no';
    }
  }

  return correctAnswer;
}

const getRound = () => {
  const n1 = random(1, 100);
  const expression = `${n1}`;

  const correctAnswer = generateExpression(n1);

  return {
    expression, correctAnswer,
  };
};

const playPrime = () => { play(giveDescription, getRound); };

export default playPrime;
