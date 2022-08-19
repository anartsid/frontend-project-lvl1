export default function random(min, max) {
  let rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return Math.floor(rand);}
