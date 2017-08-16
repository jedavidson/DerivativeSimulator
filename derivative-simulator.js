// script
<HTML>
<HEAD>
<TITLE>The greatest quiz in existence</TITLE>
<SCRIPT>

// Create a number variable to count how many questions have been answered
var answered = 0;

// Create array variables to hold the questions, the options(choices), the answers, users answers, and game responses
var questions = new Array();
var choices = new Array();
var answers = new Array();
var useranswers = new Array();

// Fill the question, options and answers arrays like the following. Create 3 more questions.

questions[0] = "1. 9 + 10 is ..."; // The first question
choices[0] = new Array(); // choices is an array or arrays (a 2D array) with the first array holding the four options for the first question
choices[0][0] = "21";
choices[0][1] = "19";
choices[0][2] = "Half of 38";
choices[0][3] = "All of the above";
answers[0] = choices[0][3]; // The answer to the first question is the 4th option.

questions[1] = "Every 4 years, February has..."
choices[1] = new Array();
choices[1][0] = "30 days";
choices[1][1] = "31 days";
choices[1][2] = "28 days";
choices[1][3] = "29 days";
answers[1] = choices[1][3];

questions[2] = "What activity is usually associated with being on a day out with the boys?"
choices[2] = new Array();
choices[2][0] = "Cracking open a big one";
choices[2][1] = "Cracking open a cold one";
choices[2][2] = "Slicing open a chilly one";
choices[2][3] = "Dogging the boys for your missus";
answers[2] = choices[2][1];

questions[3] = "Who would win in a fight?"
choices[3] = new Array();
choices[3][0] = "A beautifully designed elaborate piece of computer software";
choices[3][1] = "One stinky semicolon";
answers[3] = choices[3][1]; // :(

// This function displays the quiz in the browser. Comment on how it works.
function renderQuiz() {
  for(i=0;i<questions.length;i++) {
    document.writeln('<p>' + questions[i]+'</p>');
    for(j=0;j<choices[i].length;j++) {
      document.writeln('<input type="radio" name="answer_' + i + '" value="' + choices[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="submitAnswer(' + i + ', this, \'question_' + i + '\', \'label_' + i + '_' + j + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + choices[i][j] + '</label><br />');
    }
  }
  document.writeln('<p><input type="submit" value="Show Score" onclick="showScore()" /> <input type="submit" value="Reset Quiz" onclick="resetQuiz(true)" /></p><p style="display:none"><img src="correct.gif" style="border:0" alt="Correct!" /><img src="incorrect.gif" style="border:0" alt="Incorrect!" /></p>');
}

// Write a function to submit a user's answer. Called when a radio button option is selected.
function submitAnswer(questionId, obj, classId, labelId){
  // assign the value in obj to the useranswers at position questionId
  useranswers[questionId] = obj.value;

  // disable the question with classId
  disableQuestion(classId);

  // increment answered
  answered++;

}

// disable the question once it has been answered
function disableQuestion(classId) {
  var alltags=document.all? document.all : document.getElementsByTagName("*")
  for (i=0; i<alltags.length; i++) {
    if (alltags[i].className == classId) {
      alltags[i].disabled = true;
    }
  }
}

// Write a function to display the final score to an alert message
function showScore() {
  //create 2 number variables to keep track of the number or correct and incorrect responses.
  var correct = 0;
  var incorrect = 0;
  //loop through all of the usersanswers comparing them to the corresponding answer. Increment the above variables accordingly
  for(i=0;i<useranswers.length;i++) {
    if(useranswers[i] === answers[i]){
      correct++;
    }else{
      incorrect++;
    }
  }
  //calculate the pertage score
  var score = (correct/questions.length)*100;

  // create an alert that displays the score
  alertMsg = "Your score was " + score + "% (" + correct + "/" + questions.length + ")"
  alert(alertMsg);
}

</SCRIPT>
</HEAD>
<BODY>

<script type="text/javascript">
  renderQuiz();

</script>
</BODY>
