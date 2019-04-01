//Create a list of questions
const questions = ["What is a cat?","What is a snake?","How many states are there in the US?"];

//create a list of answers 
const answers = ["A mammal","A reptile","50"];

const bogusAnswers = ["An insect","A fossil","48","A meme","An ankle bitter","Uber"];

let wins = 0

let losses = 0;

let timer = 30;

console.log("Answer: " + answers[0]);

//Hide this paragraph until time runs out
$("#time").hide();



//On click function 
$(".button").on("click", function(){
    console.log("clicked");
    console.log("Questions: " + questions[0]);
    //To make start button and 'click here to begin' and timeOut disappear
    $("#startBtn").hide();
    $("#quizStart").hide();
    $("#time").hide();
    //delete the right answer from the last session on start button click
    $(".answer").empty();
    //To show questions pulled from array in a for loop
    $(".question").html(`<p>${questions[0]}</p>`);
    //To do: show answers using a for loop to create the buttons and assign value
    $(".answer").append(`<input type="submit" value="${answers[0]}" class="button" id="CorrectAnswer"></input><br>`);
    $(".answer").append(`<input type="submit" value="${bogusAnswers[0]}" class="wrongAnswer"></input><br>`);
    $(".answer").append(`<input type="submit" value="${bogusAnswers[1]}" class="wrongAnswer"></input><br>`);
    $(".answer").append(`<input type="submit" value="${bogusAnswers[2]}" class="wrongAnswer"></input><br>`);
    //To do: display wins
    $("#wins").html("Wins: " + wins);
    //display losses
    $("#losses").html("Losses: " + losses);
    //Create a function to countdown from 30 and display in the DOM
    setInterval(function(){
        $("#time").html(timer + "s")
        timer--;
        if (timer <= 0){
            console.log("Time's up!")
        }
    }, 1000);
    //create a timeout function 
    setTimeout(function(){
        console.log("Time out"); 
        //bring back the start button and show the timeOut paragraph
        $("#startBtn").show();
        $("#time").show();
        //Hide the wrong answers
        $(".wrongAnswer").hide();
        //To do: delete the right answer from the last session on time out
        losses++;
        console.log("Number of losses: "+losses)
        $("#losses").html("Losses: " + losses);
    }, 3000);

    
    
});


    

    
     
    //To do: When time runs out, display time out. Display the correct answer.
    //To do: When the guess is wrong, display that the guess is wrong. Display the correct answer. 
    //To do: When the guess is right, display that the guess is right and congratulations. 
    
    

