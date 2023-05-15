
var questions =[{
	question:"who is built this quiz app?",
	choices:["samuel zang","michael smith","james may","gospel columbus"],
	correctAnswer:3
},{
	question:"Who invented telephone?",
	choices:["Nickola Tesla","James Watt","Alexander Graham Bell","Henry Ford"],
	correctAnswer:2
},{
	question:"Who are the founders of Apple Inc?",
	choices:["steve jobs and steve woz","bill gates and paul allen","Elon Musk and peter thiel","larry page and sergery brin"],
	correctAnswer:0
},{
	question:"Who discovered electricity?",
	choices:["steve jobs","john logie baird","michael faraday","bill gates"],
	correctAnswer:2
},{
	question:"Who is the father of computer?",
	choices:["thomas edison","charles babage","william eintovin","alex dean"],
	correctAnswer:1
},{
	question:"What is my surname?",
	choices:["columbus","Akpan","essien","billy"],
	correctAnswer:0
},{
	question:"What is my Name?",
	choices:["gospel","samuel","william","james"],
	correctAnswer:0
},{
	question:"What school did gospel attend?",
	choices:["yabatech","unilag","akspoly","crutech"],
	correctAnswer:2
},{
	question:"What is gospel best food?",
	choices:["beans","eba","gospel has no best food"],
	correctAnswer:2
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // On clicking next, display the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //                    $(document).find(".nextButton").toggle();
                    //                    $(document).find(".playAgainButton").toggle();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}