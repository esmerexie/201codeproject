'use strict';

// building the trivia

function userName() {
    let name = prompt("What is your name?");
    console.log("The user's name is " + name);
    name = alert("Hello " + name + "! Welcome to my trivia website!");
}



function userQ() {
    let qtion = prompt("Have your read my biography yet?");

    if (qtion == "No".toLowerCase()) {
        qtion = alert("I think you should read my biography first! Then reload the page again!");
        // console.log("I think you should read my biography first! Then reload the page again!")
        throw "exit";
    } else if (qtion == "Yes".toLowerCase()) {
        qtion = alert("awesome lets get started! Note that all answers are lowercase!");
    }

    let qtion1 = prompt("What is the developer's Name?");
    if (qtion1 == "Rexie".toLowerCase()) {
        qtion1 = alert("You got it right! 1 out of 7");
        // console.log("You got it right! 1 out of 7")
    } else {
        qtion1 = alert("try again :c");
        throw "exit";
    }

    let qtion2 = prompt("What is the developer's favorite fruit?");
    if (qtion2 == "Mangos".toLowerCase()) {
        qtion2 = alert("Two IN A ROW?! You are on fire! 2 out of 7");
        // console.log("Two IN A ROW?! You are on fire! 2 out of 7")
    } else {
        qtion2 = alert("try again :c");
        throw "exit";
    }

    let qtion3 = prompt("Does Rexie like to do YOGA?");
    if (qtion3 == "No".toLowerCase()) {
        qtion3 = alert("Congrats! you got three correct! 3 out of 7");
        // console.log("Congrats! you got three correct! 3 out of 7")
    } else {
        qtion3 = alert("try again :c");
        throw "exit";
    }

    let qtion4 = prompt("Does Rexie want to become a bodybuilder?");
    if (qtion4 == "No".toLowerCase()) {
        qtion3 = alert("Congrats! 4 out of 7");
        // console.log(""Congrats! but I think you know me a little too well ;sus;"")
    } else {
        qtion4 = alert("try again :c");
        throw "exit";
    }

    let qtion5 = prompt("Do I currently reside in Washington state?");
    if (qtion5 == "Yes".toLowerCase()) {
        qtion5 = alert("Congratulations! you passed the first part! 5 out of 7");
        // console.log("Congratulations! You have passed my trivia!")
    } else {
        qtion5 = alert("try again :c");
        throw "exit";
    }

    for (let i = 0; i < 4; i++) {
        let guess = prompt("Guess a number from 1-10 ");

        if (guess == 7) {
            guess = alert("You got it correct! 6 out of 7");
            return;
        }

        else if (guess < 7) {
            guess = alert("Try again but a little higher! " + i + " / 3")
        }
        else if (guess > 7) {
            guess = alert("Try again but a little lower!")
        }
    }


}

function gME() {
    for (let i = 0; i < 7; i++) {
        let wonD = prompt("What is my favorite game? For all possibilites check my bio!");

        if (wonD === "rust") {
            wonD = alert("You got it! You got all of the questions on my trivia correct! 7 out of 7");
            return;
        }
        else if (wonD != "rust")
            wonD = alert("try again! " + i + "/6")
    }
}

userName();
userQ();
gME();
