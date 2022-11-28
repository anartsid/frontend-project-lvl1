export default function random(min, max) {
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return rand;
}
