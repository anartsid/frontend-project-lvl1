import readlineSync from 'readline-sync';

const firstquestion = () => {
var userName = readlineSync.question('May I have your name? ');
return 'Hello, ' + userName + '!';}

export default firstquestion;