const text = document.querySelector("h3");


function timeLoad(){
  const currentTime = new Date();
  const currentTimeHours = currentTime.getHours();
  const currentTimeMinutes = currentTime.getMinutes();
  const currentTimeSeconds = currentTime.getSeconds();
  
  text.innerText = `${currentTimeHours < 10 ? `0${currentTimeHours}` : currentTimeHours} : ${currentTimeMinutes < 10 ? `0${currentTimeMinutes}` :currentTimeMinutes } : ${currentTimeSeconds < 10 ? `0${currentTimeSeconds}` : currentTimeSeconds}`

  
}


function init() {
  setInterval(timeLoad,1000);
  
}
init();