let vowels = ["a", "e", "i", "o", "u"];
let string = "Lavanya";
let vowelsCount = 0;
const findVowels = (str) => {
  for (i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelsCount++;
    }
  }
  return vowelsCount;
};
console.log(findVowels(string));
