var myQuestions = [
    {
        question: "1) What is the name of the world’s largest football ground?",
        answers: {
            a: 'San Siro, Italy',
            b: 'Rungrado 1st of May Stadium,Pyongyang, North Korea',
            c: 'The Maracanã, Rio de Janeiro',
            d: 'Soccer City, South Africa'
        },
        correctAnswer: 'b'
    },
    {
        question: "2) Where was the 1980 European Cup Winners’ Cup Final held?",
        answers: {
            a: 'Brazil',
            b: 'Portugal',
            c: 'France',
            d: 'Belgium'
        },
        correctAnswer: 'd'
    },
    {
        question: "3) How many minutes are usually played in a foorball match?",
        answers: {
            a: '90',
            b: '200',
            c: '45',
            d: '30'
        },
        correctAnswer: 'a'
    },
    {
        question: "4) What color cards do the referees carry in a football match?",
        answers: {
            a: 'Red and Green',
            b: 'Yellow and Orange',
            c: 'Black and White',
            d: 'Red and Yellow'
        },
        correctAnswer: 'd'
    },
    {
        question: "5) What is the usual length of time allowed for half-time interval in a football match?",
        answers: {
            a: '15 minutes',
            b: '10 minutes',
            c: '25 minutes',
            d: '1 hour'
        },
        correctAnswer: 'a'
    },
    {
        question: "6) Robbie Earle plays for which country?",
        answers: {
            a: 'France',
            b: 'Jamaica',
            c: 'England',
            d: 'Scotland'
        },
        correctAnswer: 'b'
    },
    {
        question: "7) Deepdale is the ground for which British club?",
        answers: {
            a: 'Rochdale',
            b: 'Crewe Alexandra',
            c: 'Preston North End',
            d: 'Gillingham'
        },
        correctAnswer: 'b'
    },
    {
        question: "8) The J-League is the Professional Football League in which country?",
        answers: {
            a: 'Java',
            b: 'Japan',
            c: 'Jamaica',
            d: 'Jersey'
        },
        correctAnswer: 'b'
    },
    {
        question: "9) In what color strip do North Korea play in?",
        answers: {
            a: 'Red',
            b: 'Yellow',
            c: 'White',
            d: 'Black'
        },
        correctAnswer: 'c'
    },
    {
        question: "10) Which football club does David Beckham play for?",
        answers: {
            a: 'Real Madrid',
            b: 'Liverpool',
            c: 'Montevideo Wanderers',
            d: 'Manchester United'
        },
        correctAnswer: 'a'
    },
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');


generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

const btn = document.getElementById('submit');

btn.addEventListener('click', function onClick(event) {
  // 👇️ change background color
  document.body.style.backgroundColor = 'yellow';

  // 👇️ optionally change text color
  // document.body.style.color = 'black';
});



function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    document.getElementById('timer').innerHTML = 01 + ":" + 00;
    startTimer();

    function startTimer() {
        var presentTime = document.getElementById('timer').innerHTML;
        var timeArray = presentTime.split(/[:]+/);
        var m = timeArray[0];
        var s = checkSecond((timeArray[1] - 1));
        if (s == 59) { m = m - 1 }
        if (m < 0) {
            return
        }
    
        document.getElementById('timer').innerHTML = m + ":" + s;
        console.log(m)
        setTimeout(startTimer, 1000);
    
    }
    
    function checkSecond(sec) {
        if (sec < 10 && sec >= 0) 
        { 
            sec = "0" + sec 
        }; // add zero in front of numbers < 10
        if (sec < 0) { sec = "59" };
        return sec;
    }

    function showQuestions(questions, quizContainer) {
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // first reset the list of answers
            answers = [];

            // for each available answer...
            for (letter in questions[i].answers) {

                // ...add an html radio button
                answers.push(
                    '<label>'
                    +'<br/>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>' + '<br/>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div style="border: 2px solid #D3D3D3; padding: 30px 0 15px 30px; border-radius: 10px;">'
                +'<div class="question" style="margin-bottom:15px; font-size:1.5rem;">' + questions[i].question + '</div>'
                + '<div class="answers" style="color:gray; font-size:1.2rem; margin-left:10px;">' + answers.join('') + '</div>'
                +'</div>'
                +'<br/>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer) {

        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        // for each question...
        for (var i = 0; i < questions.length; i++) {

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // if answer is correct
            if (userAnswer === questions[i].correctAnswer) {
                // add to the number of correct answers
                numCorrect += 2;

                // color the answers green
                answerContainers[i].style.color = 'green';
            }
            // if answer is wrong or blank
            else {
                numCorrect -= 1;
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length * 2;
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }



}
