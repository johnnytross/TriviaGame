//create questions array
//create an answers object
//create wins and losses var
//create a var to hold the amount of time per question
//create a timer function 
//create on click function for start button
//inside this function, start the timer
//inside of this function, create a question var
//check the question var with a conditional. 
//if the question var is empty, post question 1
//after 30 seconds, post correct answer. Increment wins or losses accordingly
//after 3 seconds, show next question
//repeat
//show next question






// const questions = ["Who can beat heros in one punch?","What is the best GTA game?","Who is the greatest Tight End of all time?"];
// let answers = {
//     // answers1: ['Yoshi','One Punch Man','Mario','Venom'],
//     answers1: {
//         option1: 'Yoshi',
//         option2: 'One Punch Man',
//         option3: 'Mario',
//         option4: 'Venom',
//     },
//     // answers2: ['GTA III','GTA IV','GTA: San Andreas','GTA: Vice City'],
//     answers2: {
//         option1: 'GTA III',
//         option2: 'GTA IV',
//         option3: 'GTA: San Andreas',
//         option4: 'GTA: Vice City',
//     },
//     // answers3: ['Tony Gonzalez','Austin Hooper','Jimmy Graham','Gronk'],
//     answers3: {
//         option1: 'Tony Gonzalez',
//         option2: 'Austin Hooper',
//         option3: 'Jimmy Graham',
//         option4: 'Gronk',
//     }
// };

//Create a list of questions and answers 
const questions = [
    {
        q: "Who can beat heros in one punch?",
        answers: [
            'Yoshi',
            'One Punch Man',
            'Mario',
            'Venom'],
        correctAnswer: 'One Punch Man',
    },
    {
        q: "What is the best GTA game?",
        answers: [
            'GTA III',
            'GTA IV',
            'GTA: San Andreas',
            'GTA: Vice City',
        ],
        correctAnswer: 'GTA: San Andreas',
    },
    {
        q: "Who is the greatest Tight End of all time?",
        answers: [
             'Tony Gonzalez',
             'Austin Hooper',
             'Jimmy Graham',
             'Gronk',
        ],
        correctAnswer: 'Tony Gonzalez',
    }

]
// console.log(answers.answers1.option1);

let wins = 0;

let losses = 0;

let timesUp;

let counter = 0;

// timeCount();

//This function tracks the timer and automatically ends the quiz if 0 seconds remain
function timeCount() {
    $("#wins").hide();
    $("#losses").hide();
    let timer = 5;
    $("#timer").text(timer + "s");

    countDown = setInterval(function () {
        $("#time").text(timer + "s");
        timer--;
        

        if (timer == 0) {
            //this stops the setInterval from continuing to count down
            clearInterval(countDown);
            // console.log("Times up");
            timesUp = setTimeout(buildQuestions, 3000)
            losses++;
            $("#wins").show();
            $("#losses").show();
            $("#wins").text("Wins: " + wins);
            $("#losses").text("Losses: " + losses);
        }


    }, 1000);
}

//create function to construct questions
function buildQuestions() {
    $("#startBtn").hide();
    if (counter < 3){
    
    quizText = $("#quiz");
    $("#quiz").text(questions[counter].q);
    // quizText.append(`<br><button type="submit" class="button">${questions[counter].answers[counter]}</button>`);
    for (var i = 0; i < 4; i++){
        quizText.append(`<br><button type="submit" class="button">${questions[counter].answers[i]}</button>`);
    }
       
    // $("#quiz").append(`<br><button type="submit" class="button">${questions[counter].answers[counter]}</button>`);
    // $("#quiz").append(`<br><button type="submit" class="button">${questions[counter].answers[counter + 1]}</button>`);
    // $("#quiz").append(`<br><button type="submit" class="button">${questions[counter].answers[counter + 2]}</button>`);
    // $("#quiz").append(`<br><button type="submit" class="button">${questions[counter].answers[counter + 3]}</button>`);
    timeCount();
    clearTimeout(timesUp);
    counter++;
    } else {
        $("#quiz").text("End of Quiz");
        $("#startBtn").show();
        counter = 0;
    }
};

//<input type="submit" value="Start" class="button" id="startBtn">

//create a function to check if correct answer was selected

//create an on click function
$("#startBtn").click(buildQuestions);



// console.log(questions);


//create a list of answers 
// const answers = ["A mammal","A reptile","50"];

// const bogusAnswers = ["An insect","A fossil","48","A meme","An ankle bitter","Uber"];





// console.log("Answer: " + answers[0]);

//Hide this paragraph until time runs out
// $("#time").hide();



// //On click function 
// $(".button").on("click", function(){
//     let timer = 30;

//     console.log("clicked");
//     console.log("Questions: " + questions[0]);
//     //call set interval function to start timer
//     setInterval(timer);
//     //show timer
//     $("#time").show();
//     //To make start button and 'click here to begin' and timeOut disappear
//     $("#startBtn").hide();
//     $("#quizStart").hide();
//     // $("#time").hide();
//     //delete the right answer from the last session on start button click
//     $(".answer").empty();
//     //To show questions pulled from array in a for loop
//     $(".question").html(`<p>${questions[0]}</p>`);
//     //To do: show answers using a for loop to create the buttons and assign value
//     $(".answer").append(`<input type="submit" value="${answers[0]}" class="button" id="CorrectAnswer"></input><br>`);
//     $(".answer").append(`<input type="submit" value="${bogusAnswers[0]}" class="wrongAnswer"></input><br>`);
//     $(".answer").append(`<input type="submit" value="${bogusAnswers[1]}" class="wrongAnswer"></input><br>`);
//     $(".answer").append(`<input type="submit" value="${bogusAnswers[2]}" class="wrongAnswer"></input><br>`);
//     //To do: display wins
//     $("#wins").html("Wins: " + wins);
//     //display losses
//     $("#losses").html("Losses: " + losses);
//     //Create a function to countdown from 30 and display in the DOM

//     setInterval(function(){
//         $("#time").html(timer + "s")
//         timer--;
//         if (timer <= 0){
//             // console.log("Time's up!")
//             $("#time").hide();
//             return true;
//         }
//     }, 1000);
//     //create a timeout function 
//     setTimeout(function(){
//         console.log("Time out"); 
//         //bring back the start button and show the timeOut paragraph
//         $("#startBtn").show();
//         //Hide the wrong answers
//         $(".wrongAnswer").hide();
//         //To do: delete the right answer from the last session on time out
//         losses++;
//         console.log("Number of losses: "+losses)
//         $("#losses").html("Losses: " + losses); 
//     }, 30000);



// });






    //To do: When time runs out, display time out. Display the correct answer.
    //To do: When the guess is wrong, display that the guess is wrong. Display the correct answer. 
    //To do: When the guess is right, display that the guess is right and congratulations. 



