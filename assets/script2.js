
// Start Quiz button to start prompts
function promptMe(){
    var userAdjective = prompt("GOOD LUCK!");
    alert (questions);
}

// possible prompt to start quiz.
// var myButtonHtml = document.getElementById('MyButton');
// myButtonHtml.addEventListener('click', function() {
//   // When button is clicked.. now prompt the user
//   var usersResponse = prompt("What does html stand for");
// });


// Possible Timer function
function timeDown() {
    timer = 60;
    var interval = setInterval(function () {
      document.getElementById("timer").innerHTML = timer;
      timer--;
      timerText.innerText = timer;
      if (timer === 0) {
        clearInterval(interval);
        localStorage.setItem("lastQuizScore", score);
        return window.location.assign("end.html");
      }
    }, 1000);
  }


// points creator for score
function scoreUp(num) {
    score += num;
    scoreText.innerText = score;
  } 

//add Score to High Score section



// Quiz questions
var questions = [
    {
        prompt: "1. What is the only vowel on a standard keyboard that is not on the top line of letters?\n(a) A\n(b) E\n(c) I\n(d) U",
        answer: "a"
    },
    {
        prompt: "2. What is celebrated in February and was also made into a film??\n(a) Valentines Day\n(b) Ground Hogs Day\n(c) Mardi Gras\n(d) Nirvana Day",
        answer: "b"
    },
    {
        prompt: "3. How many flat faces does a dodecahedron have??\n(a) 22\n(b) 32\n(c) 12\n(d) 20",
        answer: "c"
    },
    {
        prompt: "4. What is short for Light amplification by stimulated emission of radiation?\n(a) LAMP\n(b) LIGHT RADIATION\n(c) LIGHT SPEED\n(d) LASER",
        answer: "d"
    },
    {
        prompt: "5. What HTML stand for?\n(a) Hackers Teaching Machines to Learnn\n(b) Ham,Tomato, Mayo, Lettuce\n(c) Hypertext Markup Language\n(d) Hold The MaiL",
        answer: "c"
    },
    {
        prompt: "6. Which country were the 1932 Winter Olympic Games held in?\n(a) USA\n(b) SWEDEN\n(c) JAPAN\n(d) ITALY",
        answer: "a"
    },
    {
        prompt: "7. How many laps must a driver survive to win the Indianapolis 500?\n(a) 475\n(b) 450\n(c) 500\n(d) 200",
        answer: "d"
    },
    {
        prompt: "8. What kind of animal is the title character in the 2003 movie Finding Nemo?\n(a) Yellow Tang\n(b) Clownfish\n(c) Pufferfish\n(d) Moorish Idod",
        answer: "b"
    },
    {
        prompt: "9. Due to getting sick, which astronaut was replaced in the Apollo XIII mission?\n(a) Buzz Aldrin\n(b) Neil Armstrong\n(c) Ken Mattingly\n(d) Buck Rogers",
        answer: "c"
    },
    {
        prompt: "10. Who provided the original voice for the Genie in Aladdin?\n(a) Barbara Eden\n(b) Will Smith\n(c) Robin Williams\n(d) James Iglehart",
        answer: "c"
    },
];
    
// Determining points 
var score = 0;

for(var i = 0; i < questions.length; i++){
     var response = window.prompt(questions[i].prompt);
     if(response == questions[i].answer){
          score++;
          alert("Correct!");
     } else {
          alert("WRONG!");
     }
}
alert("you got " + score + "/" + questions.length);

//  ScoreBoard function
