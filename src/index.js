import readlineSync from 'readline-sync';

function play(giveDescription, getRound) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(giveDescription);

  for (let i = 1; i <= 3; i += 1) {
    const question = getRound();
    const userAnswer = readlineSync.question(`Question: ${question.expression} \nYour answer: `);
    const checkAnswer = String(question.correctAnswer);

    if (userAnswer !== checkAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${checkAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

export default play;
