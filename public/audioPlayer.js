
audioPlayer();

function audioPlayer() {

  var playlist = $("#playlist li a");

  var currentAudioIndex = 0;

  var audioPlayer = $("#audioPlayer")[0];

  audioPlayer.src = playlist[0];

  audioPlayer.addEventListener("ended", function() {
    currentAudioIndex++;
    if (currentAudioIndex == playlist.length)
      currentAudioIndex = 0;
    audioPlayer.src = playlist[currentAudioIndex];
    audioPlayer.play();
  });

  var promise = audioPlayer.play();
  // console.log('audioPlayer promise=' + promise);
  if (promise !== undefined) {
    promise
    .then(result => {
      // console.log('audioPlayer: audio play succeeded: result=' + result);
    })
    .catch(error => {
      console.log('audioPlayer: audio play failed: error=' + error);
    });
  }
}

