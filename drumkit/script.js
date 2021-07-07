document.addEventListener("keydown", keyPress);

function keyPress(e) {
  let key = e.key.toLowerCase();
  const element = document.getElementsByClassName(key);
  if (element.length === 0) {
    return;
  }

  let audio;
  switch (key) {
    case "a":
      audio = new Audio("./01 - JavaScript Drum Kit_sounds_boom.wav");
      break;
    case "b":
      audio = new Audio("./01 - JavaScript Drum Kit_sounds_clap.wav");
      break;
    case "c":
      audio = new Audio("./01 - JavaScript Drum Kit_sounds_hihat.wav");
      break;
    case "d":
      audio = new Audio("./01 - JavaScript Drum Kit_sounds_kick.wav");
      break;
    case "e":
      audio = new Audio("./01 - JavaScript Drum Kit_sounds_ride.wav");
      break;
  }

  element[0].classList.add("playing");
  audio.play();
  setTimeout(() => {
    element[0].classList.remove("playing");
  }, 500);
}
