var readlineSync = require('readline-sync');
var userName=readlineSync.question("what's your name ? ");
var score=0;
console.log("welcome "+userName+" to DO YOU KNOW Naman");
function play(question,answer)
{
  var userAnswer=readlineSync.question(question); 
  if(userAnswer==answer)
  {
    console.log("yes you are right!");
    score++;
  }
  else
  {
    console.log("no you are wrong!");
  }
    console.log("current score = "+ score);
}
var questions=[
  {
  question:"where do i live ",
  answer:"moradabad",
},
{
  question:"where i want to go ",
  answer:"usa",
},
{
  question:"when is my birthday ",
  answer:"3january",
},
{
  question:"what is my fav. color",
  answer:"black",
},{
  question:"who is my fav. football player",
  answer:"christiano ronaldo",
}
];
for(var i=0;i<questions.length;i++)
{
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
console.log("Final score is = "+score);