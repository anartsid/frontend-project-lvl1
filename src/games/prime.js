import play from '../index.js';
import random from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n1) => {
  if (n1 <= 1) {
    return false;
  } if (n1 === 2) {
    return true;
  }
  for (let step = 2; step < n1; step += 1) {
    if (n1 % step === 0) {
      return false;
    }
  }
  return true;
};

const getRound = () => {
  const n1 = random(1, 100);
  const expression = `${n1}`;
  const correctAnswer = isPrime(n1) ? 'yes' : 'no';

  return {
    expression, correctAnswer,
  };
};

const playPrime = () => { play(description, getRound); };

export default playPrime;
