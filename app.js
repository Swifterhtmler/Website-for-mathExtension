// let intervalID;


// function getRandomInt() {
//    let number= Math.floor(Math.random() * 100);
//    return console.log(number)
// }
  
// intervalID = setInterval(getRandomInt, 1000);



document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container');
    const numInStrip = 30;  
    const stripWidth = 100 / 10; // Assuming a fixed number of 10 strips across the screen

    function createStrip() {
        const strip = document.createElement('div');
        strip.classList.add('strip');

        let numbers = '';
        for (let j = 0; j < numInStrip; j++) {
            numbers += Math.floor(Math.random() * 100000) + ' ';
        }

        strip.textContent = numbers;

        const duration = 20; // Fixed duration for linear scrolling

      // Randomized horizontal position
        strip.style.width = `${stripWidth}%`;
        strip.style.animationDuration = `${duration}s`;

        container.appendChild(strip);

        // Remove the strip once it moves out of the view
        setTimeout(() => {
            strip.remove();
        }, duration * 1000);
    }

    // Create a new strip every 0.5 seconds
    setInterval(createStrip, 500);
});

