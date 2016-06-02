
 var video = document.getElementById("Video");
function vidplay() {
      
       var button = document.getElementById("play");
       if (video.paused) {
          video.play();
          button.textContent = "paused"; 
          button.removeClass ("glyphicon-play");
          button.addClass ("glyphicon glyphicon-pause")
       } else {
          video.pause();
          button.addClass ("glyphicon glyphicon-play");
       }
    }

    function restart() {
        var video = document.getElementById("Video");
        video.currentTime = 0;
    }

    function skip(value) {
        var video = document.getElementById("Video");
        video.currentTime += value;
    }      


 function updateProgressBar() { var progressBar = document.getElementById('progress-bar'); 
 var percentage = Math.floor((100 / video.duration) * video.currentTime); 
 progressBar.value = percentage; progressBar.innerHTML = percentage + '% played'; }
   

   video.addEventListener('timeupdate', updateProgressBar, false);