const quizData = [
    {
        question: " Which of the following programming languages is primarily used for front-end web development?",
        choice: ["Python", "JavaScript", "Ruby", "Java"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Which of the following CSS frameworks is commonly used for building responsive and mobile-first websites?",
        choice: ["Django", "Angular", "jQuery", "Bootstrap"],
        correctAnswer: "Bootstrap"
    },
    {
        question: "Which of the following is an example of a server-side scripting language commonly used in web development?",
        choice: ["JavaScript", "PHP", "HTML", "CSS"],
        correctAnswer: "PHP"
    },
    {
        question: "Which of the following is an example of a CSS preprocessor used to enhance the capabilities of CSS?",
        choice: ["Python", "jQuery", "Sass", "Angular"],
        correctAnswer: "Sass"
    },
    {
        question: "Which of the following is a widely-used JavaScript framework for building user interfaces?",
        choice: ["React", "jQuery", "Django", " Ruby on Rails"],
        correctAnswer: "React"
    }
];

const questionContainer = document.querySelector(".question");
const choicesContainer = document.querySelector(".choices");
const scoreContainer = document.querySelector(".score")
const liveContainer = document.querySelector(".live")

let score = 0;
let live = 5;

scoreContainer.textContent = `Score: ${score}`;
liveContainer.textContent = `Live: ${live}`

const renderQuiz = () =>{
    const randomQuestion = quizData[Math.floor(Math.random() * quizData.length)];

    console.log(randomQuestion)

    const question = randomQuestion.question
    questionContainer.textContent = question;
    const choice = randomQuestion.choice;

    for (let i = 0; i < choice.length; i++) {
        const option = document.createElement("li")
        option.textContent = choice[i];
        choicesContainer.appendChild(option)

        option.addEventListener("click", () =>{
            if(option.innerHTML === randomQuestion.correctAnswer){
                score +=50;
                scoreContainer.textContent = `Score: ${score}`;
                console.log(score)
                choicesContainer.innerHTML = " ";
                renderQuiz()
            }
            else{
                score -=50;
                live --;
                if(live == 0){
                    location.reload()
                }
                liveContainer.textContent = `Live: ${live}`
                scoreContainer.textContent = `Score: ${score}`;
                choicesContainer.innerHTML = " ";
                renderQuiz()
            }
        })
    }
}

renderQuiz()