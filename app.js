let seconds = 0;
let minutes = 0;
let hours = 0;
let displaySecs = 0;
let displayMins = 0;
let displayHrs = 0;
let Interval;

function stopwatch(){
  seconds ++;
  if(seconds==60){
    seconds=0;
    minutes++;
  if(minutes==60){
    minutes=0;
    hours++;
    }
  }
  if(seconds<10){
    displaySecs=`0${seconds.toString()}`;
  } else{
    displaySecs=seconds;
  }
  if(minutes<10){
    displayMins=`0${minutes.toString()}`;
  } else{
    displayMins=minutes;
  }
  if(hours<10){
    displayHrs=`0${hours.toString()}`;
  } else{
    displayHrs=hours;
  }
  document.getElementById("displayTime").innerHTML=`${displayHrs}:${displayMins}:${displaySecs}`;
};

function start(){
  Interval= setInterval(stopwatch,1000);
};

function stop(){
  clearInterval(Interval);
};

function reset(){
  clearInterval(Interval);
  document.getElementById("displayTime").innerHTML="00:00:00"
  seconds=0;
  minutes=0;
  hours=0;
};




  
  
  
