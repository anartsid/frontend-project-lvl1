import readlineSync from 'readline-sync';

function play(description, getRound) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  const roundsCount = 3; // число раундов

  for (let i = 1; i <= roundsCount; i += 1) {
    const round = getRound();
    const userAnswer = readlineSync.question(`Question: ${round.expression} \nYour answer: `);

    if (userAnswer !== round.correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${round.correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

export default play;
