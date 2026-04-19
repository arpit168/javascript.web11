let Score = prompt("Enter your Score (0 -100)");
let grade;

if (Score >= 90 && Score <= 100) {
  grade = "A";
} else if (Score >= 70 && Score <= 89) {
  grade = "B";
} else if (Score >= 60 && Score <= 69) {
  grade = "C";
} else if (Score >= 50 && Score <= 59) {
  grade = "D";
} else if (Score >= 0 && Score <= 49) {
  grade = "E";
}

console.log("according to your Scores , your grade was:", grade);
