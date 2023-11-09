const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const img = ['images/cursed_mario1.jpg', 'images/cursed_mario2.jpg', 'images/cursed_mario3.jpg', 'images/cursed_mario4.jpeg', 'images/cursed_mario5.jpg'];
const alt = ['yurg', 'gurg', 'furg', 'murg', 'deez nuts'];

/* Looping through images */

function thumbLoop() {
    for (let i=0; i<5; i++){
        const newImg = document.createElement('img');
        newImg.setAttribute('src', img[i]);
        newImg.setAttribute('alt', alt[i]);
        thumbBar.appendChild(newImg);
    }
}

thumbLoop();

thumbBar.addEventListener('click', (e) =>  {
    if(e.target && e.target.nodeName == "IMG"){
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    }
});

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', (e) => {
    if(e.target.className == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }

    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});