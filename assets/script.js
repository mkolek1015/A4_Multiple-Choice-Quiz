const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const recordHighScorebutton = document.getElementById('recordHighScore')

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    recordHighScorebutton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
} 

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    } 
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
}
  
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }

// // add High Score to High Score section
//     document.getElementById("lastPasswords").innerHTML += password + "<br />";

function timer001(){
    c = c - 1;
    if (c < 20) {
        timer001.innerHTML = c;
    }

    if (c < 1) {
        window.clearInterval(update);
        message001.innerHTML = "Time's up";
        
    }
}

const questions = [
    {
        question: 'What is the only vowel on a standard keyboard that is not on the top line of letters?',
        answers: [
            {text: 'A', correct: true },
            {text: 'E', correct: false },
            {text: 'I', correct: false },
            {text: 'O', correct: false },
    ]
    },
    {
        question: 'What is celebrated in February and was also made into a film?',
        answers: [
            { text: 'Valentines Day', correct: false },
            { text: 'Ground Hogs Day', correct: true },
            { text: 'Mardi Gras', correct: false },
            { text: 'Nirvana Day', correct: false },

    ]
    },
    {
        question: 'How many flat faces does a dodecahedron have?',
        answers: [
            { text: '22', correct: false },
            { text: '32', correct: false },
            { text: '12', correct: true },
            { text: '50', correct: false },
    ]
    },
    {
        question: 'What is short for Light amplification by stimulated emission of radiation?',
        answers: [
            { text: 'Light Speed', correct: false },
            { text: 'Light Radiation', correct: false },
            { text: 'Laer', correct: false },
            { text: 'Laser', correct: true },
    ]
    },
    {
        question: 'What HTML stand for?',
        answers: [
            { text: 'Hypertext Markup Language', correct: true },
            { text: 'Hackers Teaching Machines to Learn', correct: false },
            { text: 'Hold The MaiL', correct: false },
            { text: 'Ham,Tomato, Mayo, Lettuce', correct: false },
    ]
    },
    {
        question: 'Which country were the 1932 Winter Olympic Games held in?',
        answers: [
            { text: 'United States', correct: true },
            { text: 'USSR', correct: false },
            { text: 'Canada', correct: false },
            { text: 'Japan', correct: false },
    ]
    },
    {
        question: 'How many laps must a driver survive to win the Indianapolis 500?',
        answers: [
            { text: '500', correct: false },
            { text: '750', correct: false },
            { text: '200', correct: true },
            { text: '400', correct: false },
    ]
    },
    {
        question: 'What kind of animal is the title character in the 2003 movie Finding Nemo?',
        answers: [
            { text: 'Moorish Idod', correct: false },
            { text: 'Clownfish', correct: true },
            { text: 'Yellow Tang', correct: false },
            { text: 'Pufferfish', correct: false },
    ]
    },
    {
        question: 'Due to getting sick, which astronaut was replaced in the Apollo XIII mission?',
        answers: [
            { text: 'Buzz Aldrin', correct: false },
            { text: 'Neil Armstrong', correct: false },
            { text: 'Buzz Lightyear', correct: false },
            { text: 'Ken Mattingly', correct: true },
    ]
    },
    {
        question: 'Who provided the original voice for the Genie in Aladdin?',
        answers: [
            { text: 'Will Smith', correct: false },
            { text: 'Robin Williams', correct: true },
            { text: 'James Iglehart', correct: false },
            { text: 'Barbara Eden', correct: false },
    ]
    },
    


]