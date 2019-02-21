document.addEventListener('DOMContentLoaded', () => {
// keep the line above exactly as it is



// make an event handler work for any P element on the page
const p = document.querySelectorAll('p')

p.forEach(function(e) {
    e.addEventListener('click', fadeOut);
});

function fadeOut() {
    // the next lines run the animation on the element that was clicked
    // the keyword -this- refers to the event target - in this case,
    // the P that was clicked
    if (this.className === 'fader') {
        this.style.animationPlayState = 'running';
        this.addEventListener('animationend', function() {
            this.style.animationPlayState = 'paused';
            this.style.display = 'none';
        });
    }
}



// // keep the line below exactly as it is
});
