import readlineSync from 'readline-sync';

const braineven = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    const answer = readlineSync.question(`Question: ${number}`);
    console.log(`Your answer: ${answer}`);

    const checkeven = (number % 2 === 0) && (answer === 'no');
    const checkuneven = (number % 2 !== 0) && (answer === 'yes');

    if (checkeven === true || checkuneven === true) {
      const opposit = (answer === 'yes' ? 'no' : 'yes');
      return `${answer} is wrong answer ;(. Correct answer was '${opposit}'.
Let's try again, ${userName}`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${userName}!`;
};

export default braineven;
