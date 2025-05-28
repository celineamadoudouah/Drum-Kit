/*
var buttonLetter = ["w", "a", "s", "d", "j", "k", "l"]
var buttonSound = ["tom-1", "tom-2", "tom-3", "tom-4", "snare", "kick-bass", "crash"];
var k = document.querySelectorAll(".drum").length;


for (var i = 0; i < k; i++){
    document.querySelector("." + buttonLetter[i]).addEventListener("click", function () {
        var audio = new Audio('sounds/' + buttonSound[i] + '.mp3');
        audio.play();
    })
}
*/

//Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });
}

    document.addEventListener("keydown", function (event) {
        
        makeSound(event.key);

        buttonAnimation(event.key);

    })

//Detecting Keyboard Press

function makeSound(key) {

    switch (key) {
                case "w":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;

                case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;

                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;

                case "d":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;

                case "j":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;

                case "k":
                    var kickBass = new Audio("sounds/kick-bass.mp3");
                    kickBass.play();
                    break;

                case "l":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;

                default: console.log(buttonInnerHTML);
                    break;
            }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
    
};