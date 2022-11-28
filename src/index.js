import readlineSync from 'readline-sync';

function play(description, getRound) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  let roundsCount = 3; // число раундов

  for (let i = 1; i <= roundsCount; i += 1) {
    //let {expression, correctAnswer} = getRound();
    const question = getRound();
    const userAnswer = readlineSync.question(`Question: ${question.expression} \nYour answer: `);
    const checkAnswer = question.correctAnswer;

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
