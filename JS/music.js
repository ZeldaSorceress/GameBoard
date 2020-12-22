function playpause() {
    var audio = document.getElementById('hyrulefield');
    if (audio.paused) {
        audio.play();
        $('#play').removeClass('glyphicon-play-circle')
        $('#play').addClass('glyphicon-pause')
    }else{
        audio.pause();
        audio.currentTime = 0
        $('#play').addClass('glyphicon-play-circle')
        $('#play').removeClass('glyphicon-pause')
    }
}

function pauseplay() {
  var audio = document.getElementById('saria');
  if (audio.paused) {
      audio.play();
      $('#play').removeClass('glyphicon-play-circle')
      $('#play').addClass('glyphicon-pause')
  }else{
      audio.pause();
      audio.currentTime = 0
      $('#play').addClass('glyphicon-play-circle')
      $('#play').removeClass('glyphicon-pause')
  }
}

function zelda() {
  var audio = document.getElementById('zelda');
  if (audio.paused) {
      audio.play();
      $('#play').removeClass('glyphicon-play-circle')
      $('#play').addClass('glyphicon-pause')
  }else{
      audio.pause();
      audio.currentTime = 0
      $('#play').addClass('glyphicon-play-circle')
      $('#play').removeClass('glyphicon-pause')
  }
}