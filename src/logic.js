import readlineSync from 'readline-sync';

const brainlogic = (gametranscription, question, correctanswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gametranscription());

  for (let i = 1; i <= 3; i += 1) {
    const obj = question();

    const cAnswer = correctanswer(obj);

    if (obj.answer != cAnswer) {
      console.log(`${obj.answer} is wrong answer ;(. Correct answer was '${cAnswer}'.
Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default brainlogic;
