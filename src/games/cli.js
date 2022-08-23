import readlineSync from 'readline-sync';

const firstquestion = () => {
  const userName = readlineSync.question('May I have your name? ');
  return `Hello, ${userName}!`;
};

export default firstquestion;
