// add event listner to the window.
window.addEventListener('keydown', playSound);

// Created a function to play sound when event is done
function playSound(e) {
    const keys = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0; // this will rewind the sound
    audio.play();
    keys.classList.add('playing');
}

// Create function to remove the transition.
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

// add event listeners to seek for any changes on the buttons:

// this returns NodeList so I can use forEach():
const keys = document.querySelectorAll('.key');
// this returns NodeList so I can use forEach():


keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 
