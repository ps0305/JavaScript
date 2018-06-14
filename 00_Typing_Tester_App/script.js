var textAreaBorder = document.querySelector("#text-area");
var textArea = document.querySelector("#text-area");
var originalText = document.querySelector(".text-section-div p").innerHTML;
var resetButton = document.querySelector("#reset");
var theTimer = document.querySelector(".timer");
var congratsSection = document.querySelector('.cong-section');

var timer = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;
var curentTime = "";
var interval = 0;
var timerRunning = false;
// Add leading zero to numbers 9 or below:
    function leadingZero(time) {
        if(time <=9){
            return "0"+time;
        }else{
            return time;
        }
    }


// Run a standard minute/second/hundredths timer:

    function startTimer() {
        minutes = Math.floor((timer/100)/60);
        seconds = Math.floor((timer/100) - (minutes * 60));
        milliSeconds = Math.floor(timer - (seconds * 100) - (minutes * 6000));

        minutes = leadingZero(minutes);
        seconds = leadingZero(seconds);
        milliSeconds = leadingZero(milliSeconds);

        currentTime = minutes+":"+seconds+":"+milliSeconds;
        theTimer.innerHTML = currentTime;
        timer++;
    }




    // Match the text entered with the provided text on the page:
    function spellCheck() {
        var textEntered = textArea.value;
        //console.log(textEntered);
        //logic to count entered partial text
        var partialText = originalText.substring(0,textEntered.length);
        if(textEntered.length === 0){
        textAreaBorder.style.borderColor = 'gray';
    }
    else{
        if(textEntered === originalText){
            textAreaBorder.style.borderColor = 'green';
            clearInterval(interval);
            congratsSection.style.display = 'block';
        }else{
            if(textEntered === partialText){
                textAreaBorder.style.borderColor = 'lightBlue';
            }else{
                textAreaBorder.style.borderColor = 'orange';
            }
        }
    }
}



// Start the timer:
    function start() {
        var textEnteredLen = textArea.value.length;
        //console.log(textEnteredLen)
        if (textEnteredLen === 0 && !timerRunning){
            //start time
            interval = setInterval(startTimer ,10);
            timerRunning =true;
        }
    }


    // Reset everything:
    function reset() {
      //console.log('reset button clicked');
        clearInterval(interval)
        timer = 0;
        minutes = 0;
        seconds = 0;
        milliSeconds = 0;
        curentTime = "";
        interval = 0;
        timerRunning = false;
        theTimer.innerHTML = "00:00:00";
        textArea.value = "";
        textAreaBorder.style.borderColor = 'grey';
        congratsSection.style.display = 'none';
    }


// Event listeners for keyboard input and the reset button:
    textArea.addEventListener('keypress',start);
    textArea.addEventListener('keyup' ,spellCheck);
    resetButton.addEventListener('click',reset);
