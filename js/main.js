const countdown = document.querySelector('.countdown');
//set the launch date
const launchDate = new Date('November 20 2018 13:00:00').getTime();
// update every second
const intervl = setInterval(() => {
    //get todays date and time (in milliseconds)
    const now = new Date().getTime();
    //distance from now to the launch date
    const distance = launchDate - now;

    //Time calculations

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //display result

    countdown.innerHTML = `
<div>${days}<span>Days</span></div>
<div>${hours}<span>Hours</span></div>
<div>${mins}<span>Minutes</span></div>
<div>${seconds}<span>Seconds</span></div>
`;
    //if launch date is passed
    if (distance < 0) {
        //stop countdown
        clearInterval(intervl);
        //style and out put text
        countdown.style.color = '#17a2b8';
        countdown.innerHTML = 'Launched!';


    }
}, 1000);