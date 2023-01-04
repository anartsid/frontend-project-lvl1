import play from '../index.js';
import random from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n1) => {
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

const getRound = () => {
  const n1 = random(1, 100);
  const expression = `${n1}`;
  const checkisPrime = isPrime(n1) === 'yes' ? 'yes' : 'no';

  const correctAnswer = String(checkisPrime);

  return {
    expression, correctAnswer,
  };
};

const playPrime = () => { play(description, getRound); };

export default playPrime;
