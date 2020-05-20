function playSound(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  audio.currentTime = 0; // rewind the start
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName != "transform") return; // Skip it if its not a transform
  //   console.log(e.propertyName);
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
