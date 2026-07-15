let score = 0;

let q1 = "";
while (q1 !== "A" && q1 !== "B") {
  q1 = prompt(
    "This pop quiz contains 6 questions; are you ready to answer them all?\n" +
      "A) Yes\n" +
      "B) Absolutely",
  ).toUpperCase();
}

let q2 = "";
while (q2 !== "A" && q2 !== "B" && q2 !== "C" && q2 !== "D") {
  q2 = prompt(
    "Question 1: Which country won the first World Cup in history?\n" +
      "A) Brazil\n" +
      "B) Uruguay\n" +
      "C) Argentina\n" +
      "D) France",
  ).toUpperCase();
}

if (q2 === "B") {
  score++;
}

let q3 = "";
while (q3 !== "A" && q3 !== "B" && q3 !== "C") {
  q3 = prompt(
    "Question 2: Which national team has won the most World Cups?\n" +
      "A) Brazil\n" +
      "B) Argentina\n" +
      "C) France",
  ).toLocaleUpperCase();
}

if (q3 === "A") {
  score++;
}

let q4 = "";
while (q4 !== "A" && q4 !== "B") {
  q4 = prompt(
    "Question 3: Which player has scored the most goals in World Cup history?\n" +
      "A)Mbappe\n" +
      "B)Messi\n" +
      "C)Klose",
  ).toUpperCase();
}

if ((q4 = "B")) {
  score++;
}

let q5 = "";
while (q5 !== "A" && q5 !== "B") {
  q5 = prompt(
    "Question 4: Who was the last World Cup champion?\n" +
      "A)France\n" +
      "B)Argentina",
  ).toUpperCase();
}

if (q5 === "B") {
  score++;
}

let q6 = "";
while (q6 !== "A" && q6 !== "B" && q6 !== "C" && q6 !== "D") {
  q6 = prompt(
    "Question 5: Which countries are hosting the World Cup?\n" +
      "A)United States\n" +
      "B)Canada\n" +
      "C)Mexico\n" +
      "D)All of the above",
  ).toUpperCase();
}

if (q6 !== "A" && q6 !== "B" && q6 !== "C" && q6 !== "D") {
  score++;
}

let q7 = "";
while (q7 !== "A" && q7 !== "B" && q7 !== "C") {
  q7 = prompt(
    "Question 6: Who is the only footballer in history to have won the World Cup as a player three times?\n" +
      "A)Messi\n" +
      "B)Mbappe\n" +
      "C)Pele",
  ).toUpperCase();
}

if (q7 === "C") {
  score++;
}

let finalMessage = "";

if (score === 1) {
  finalMessage = "Score: 1/7. At least you saved face with one correct answer.";
} else if (score === 2) {
  finalMessage =
    "Score: 2/6. A low result. You need to watch more weekend matches.";
} else if (score === 3) {
  finalMessage =
    "Score: 3/6. Good game! You successfully completed half of the test.";
} else if (score === 4) {
  finalMessage =
    "Score: 4/6. Great level! It’s clear that you love and understand football.";
} else if (score === 5) {
  finalMessage =
    "Score: 5/6 .Excellent! You almost had a perfect game. You were so close!";
} else if (score === 6) {
  finalMessage =
    "Score: 6/6. WORLD CHAMPION! You answered everything perfectly. You're a walking football encyclopedia.";
} else {
  // Escenario donde respondió 'algunas' bien (1 o 2 correctas)
  finalMessage = `¡Buen intento! Respondiste algunas preguntas correctamente. Tu puntuación final es ${score}/3.`;
}

console.log(finalMessage);
alert(finalMessage);
