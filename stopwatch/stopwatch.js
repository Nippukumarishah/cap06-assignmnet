
let timer;
let isRunning = false;
let startTime;
function startTimer(){
    if (!isRunning) {
        isRunning = true;
        startTime = new Date().getTime();
    timer = setInterval(stopWatch,1000);
    }
}
function stopTimer(){
    if (isRunning) {
        isRunning = false;
    clearInterval(timer);
    }
}
function resetTimer(){
    isRunning = false;
    clearInterval(timer);
    document.getElementById('stopwatch').textContent="00 : 00 : 00";
    
}
function stopWatch(){
    const currentTime = new Date().getTime();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000);
      
      const hours = Math.floor(elapsedTime / 3600);
      const minutes = Math.floor((elapsedTime % 3600) / 60);
      const seconds = elapsedTime % 60;
      const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
      document.getElementById('stopwatch').textContent = formattedTime;
    
    
}
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }