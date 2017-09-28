
function audioPlayer() {

  var currentAudioIndex = 0;

  var audioPlayer = $("#audioPlayer")[0];
  var playlist = $("#playlist li a");

  audioPlayer.src = playlist[0];
  audioPlayer.play();

  audioPlayer.addEventListener("ended", function() {
    currentAudioIndex++;
    if (currentAudioIndex == playlist.length)
      currentAudioIndex = 0;
    audioPlayer.src = playlist[currentAudioIndex];
    audioPlayer.play();
  });
}

audioPlayer();
