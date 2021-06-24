/*--------------------------------variable declaration-------------------------------*/
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let timer;

const minutesTag = document.getElementById('minutes');
const secondsTag = document.getElementById('seconds');
const milliSecondsTag = document.getElementById('milli-seconds');

const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');

/*----------------------------------event-listeners-----------------------------------*/

//on start button click, start the timer
startButton.addEventListener('click', startTimer);

//on stop button click, clear the interval
stopButton.addEventListener('click', stopTimer);

//on reset button click, clear the interval and reset the values
resetButton.addEventListener('click', resetTimer);

/*--------------------------------function declaration---------------------------------*/

//function to start the stopwatch
function startTimer(){

    //disable the start button once clicked
    startButton.disabled = 'disabled';

    //setInterval for 10ms
    timer = setInterval(interval, 10);
}

//function to stop the stopwatch
function stopTimer(){

    //clear the set interval to stop the timer
    clearInterval(timer);

    //enable the start button
    startButton.disabled = '';
}

//function to reset the stopwatch
function resetTimer(){

    //clear the set interval to stop the timer
    clearInterval(timer);

    //reset the variables to 0
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;

    //reset back the html to 0
    minutesTag.innerHTML = '00';
    secondsTag.innerHTML = '00';
    milliSecondsTag.innerHTML = '00';
    startButton.disabled = '';
}

//function to change different variables
function interval(){

    //increment the milliSeconds variable after every 10ms
    milliSeconds++;


    if(milliSeconds <= 9){
        milliSecondsTag.innerHTML = '0' + milliSeconds;
    }else if(milliSeconds <= 99){
        milliSecondsTag.innerHTML = milliSeconds;
    }else{

        //if milliSeconds exceed 99, decrement them back to 0 and increment the second variable by 1
        seconds++;
        milliSecondsTag.innerHTML = '00';
        milliSeconds = 0;

        if(seconds <= 9){
            secondsTag.innerHTML = '0' + seconds;
        }else if(seconds < 60){
            secondsTag.innerHTML = seconds;
        }else{

            //if seconds exceed 60, decrement them back to 0 and increment the minute variable by 1
            minutes++;
            seconds = 0;
            secondsTag.innerHTML = '00';
            
            if(minutes <= 9){
                minutesTag.innerHTML = '0' + minutes;
            }else if(minutes <= 99){
                minutesTag.innerHTML = minutes;
            }
        }
    }
}
