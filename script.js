window.addEventListener("DOMContentLoaded", () => {
    　　const audio = document.getElementById("audio-1");
    　audio.addEventListener('click', function(){
    　　document.getElementById("sounds-1").currentTime = 0;
    　　document.getElementById("sounds-1").play();
    　});
    });