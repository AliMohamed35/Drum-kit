window.addEventListener('keydown', playSound)

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // this is to prevent function from working
    audio.currentTime = 0; // this is to re-wind the audio
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); // this returns NodeList soI can use forEach().
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

