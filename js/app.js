'use strict';

// building the trivia

function userName() {
    let name = prompt("What is your name?");
    console.log("The user's name is " + name);
    name = alert("Hello " + name + "! Welcome to my trivia website!");
}

function userQ() {
    let qtion = confirm("Have your read my biography yet?");

    if (qtion == false) {
        qtion = alert("I think you should read my biography first! Then reload the page again!");
        // console.log("I think you should read my biography first! Then reload the page again!")
        return;
    }   else if (qtion == true) {
        qtion = alert("awesome lets get started! Note that YES is ok & NO is cancel!");
        } 
    
        let qtion1 = confirm("Is the developer's name Rexie?");
        if (qtion1 == true) {
            qtion1 = alert("You got it right!");
            // console.log("You got it right!")
        } else {
            qtion1 = alert("try again :c");
            return;
        }

        let qtion2 = confirm("Is the developer's favorite fruit apples?");
        if (qtion2 == false) {
            qtion2 = alert("Two IN A ROW?! You are on fire!");
            // console.log("Two IN A ROW?! You are on fire!")
        } else {
            qtion2 = alert("try again :c");
            return;
        }

        let qtion3 = confirm("Does Rexie like to do YOGA?");
        if (qtion3 == false) {
            qtion3 = alert("Congrats! you got three correct!");
            // console.log("Congrats! you got three correct!")
        } else {
            qtion3 = alert("try again :c");
            return;
        }
        
        let qtion4 = confirm("Does Rexie want to become a bodybuilder?");
        if (qtion4 == false) {
            qtion3 = alert("Congrats! but I think you know me a little too well ;sus;");
            // console.log(""Congrats! but I think you know me a little too well ;sus;"")
        } else {
            qtion4 = alert("try again :c");
            return;
        }

        let qtion5 = confirm("Last question! Do I currently reside in Washington state?");
        if (qtion5 == true) {
            qtion5 = alert("Congratulations! You have passed my trivia!");
            // console.log("Congratulations! You have passed my trivia!")
        } else {
            qtion5 = alert("try again :c");
            return;
        }
        
        
}

userName();
userQ();
