var readlineSync = require('readline-sync');

console.log("WELCOME TO THE QUIZ ON FOOTBALL");
console.log("---------------------------")

var userInput = readlineSync.question("What is Your name? ");

console.log(`Hey  ${userInput} !! Let's test your knowldege on Football.`);

console.log("------------------------")

var score = 0;

function play(question, answer){
  var userAns = readlineSync.question(question);
  if(userAns === answer){
    console.log("You are right!!!")
    score++;
  }else{
    console.log("You are wrong!!")
  }
  console.log(`Your score is ${score}`);
  console.log("-----------------")
}


var allQuestions = [
  {
    question:"1. Which player scored the fastest hat-trick in the Premier League?\na.Sadio Mane\nb.Cristiano Ronaldo\nc.Alan Shearer\n\n",
    answer:"a"
  },
  {
    question:"2. who is the Premier League's all-time top scorer?\na.Alan Shearer\nb.Wayne Rooney\nc.Thiery Henry\n\n",
    answer:"a"
  },
  {question:"3.In which World Cup did Diego Maradona score his infamous 'Hand of God' goal?\na.1992\nb.1996\nc.1986\n\n",
    answer:"c"
  },
  {question:"4.Ronaldo is synonymous with the No.7, but what other number did he wear at Real Madrid?\na.22\nb.9\nc.28\n\n",
    answer:"b"
  },
  {question:"5.Ronaldo helped Portugal win the European Championship in which year?\na.2014\nb.2020\nc.2016\n\n",
    answer:"c"
  },
  {question:"6.Which club has won the most Champions League titles?\na.Real Madrid\nb.AC Milan\nc.FC Bayern\n\n",
    answer:"a"
  },
  {question:"7.Which club in England has only won the Famous Treble?\na.Manchester United\nb.Liverpool\nc.Arsenal\n\n",
    answer:"a"
  },
  {question:"8.Who is the current England manager?\na.Gary Neville\nb.Graham Potter\nc.Gareth Southgate\n\n",
    answer:"c"
  },
  {question:"9.Which of the following is not a football team in London?\na.Chelsea FC\nb.Everton FC\nc.Arsenal FC\n\n",
    answer:"b"
  },
  {question:"10.Who won the UEFA Europe Championship in 2020?\na.France\nb.Italy\nc.Germany\n\n",
    answer:"b"
  }
  
]


var highScore = [
  {
    "name":"Abhisek", 
    "topScore": "10"
  },
  {
    "name":"Anikait", 
    "topScore": "8"
  },{
    "name":"Amisha", 
    "topScore": "7"
  }
  
]

for(var i=0; i < allQuestions.length; i++){
  var currentQuestion = allQuestions[i];
  play(currentQuestion.question, currentQuestion.answer);
}


console.log("Your total score is " + score);

console.log("Check Out the Score Board");
printHighScore(highScore);

var scoreBeat = false;
var valueOfScore = 0;
for(var i=0; i <highScore.length; i++){
  if(score >= highScore[i].topScore){
    scoreBeat = true;
    valueOfScore= i;
    highScore.splice(valueOfScore,0, {name: `${userInput}`, topScore: `${score}`});
    break;
  }
}

console.log("----------------------");

if(scoreBeat){
  console.log("Congratulation " + userInput + " You have beaten the Score;")
  printHighScore(highScore);
  console.log("Send me a screenshot of high score. So that I can update your name.")
} else{
  console.log("Sorry " + userInput + " You came very close to high score.")
}

function printHighScore(highScore){
  for( let i=0; i < highScore.length; i++){
    console.log(highScore[i].name + " " + highScore[i].topScore);
  }
}

