import readlineSync from 'readline-sync';

export function random(min, max) {
  let rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.floor(rand);
} // это функция, которую я пробую использовать в even.js для генерации случайных чисел

//export const random = (min, max) => {
  //return Math.floor(Math.random() * (max - min + 1)) + min;
//}; здесь я пробовала представить константой

function brainlogic(gameDescription, question, correctanswer) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameDescription);

  for (let i = 1; i <= 3; i += 1) {

    const questionNumber = question();
    const answer = readlineSync.question(`Question: ${questionNumber.expression} \nYour answer: `);
    const cAnswer = correctanswer(questionNumber);

    if (answer != cAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${cAnswer}'.
Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

export default brainlogic;
