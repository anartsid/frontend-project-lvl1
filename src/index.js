import readlineSync from 'readline-sync';

function brainlogic(gameDescription, ask) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 1; i <= 3; i += 1) {
    const questionNumber = ask();
    const answer = readlineSync.question(`Question: ${questionNumber.expression} \nYour answer: `);
    const newcAnswer = String(questionNumber.correctanswer);

    if (answer !== newcAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${newcAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

export default brainlogic;
