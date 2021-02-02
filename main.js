const sun = document.querySelector('.sun-img');
const mercury = document.querySelector('.mercury-img');
const venus = document.querySelector('.venus-img');
const earth = document.querySelector('.earth-img');
const mars = document.querySelector('.mars-img');
const asteroids = document.querySelector('.asteroids-img');
const sunDescription = document.querySelector('.sun-description');
const mercuryDescription = document.querySelector('.mercury-description');
const venusDescription = document.querySelector('.venus-description');
const earthDescription = document.querySelector('.earth-description');
const marsDescription = document.querySelector('.mars-description');
const asteroidsDescription = document.querySelector('.asteroids-description');

sun.addEventListener('mouseenter', function(){
    this.classList.add('hover');
});

sun.addEventListener('mouseleave', function(){
    this.classList.remove('hover');
});

mercury.addEventListener('mouseenter', function(){
    this.classList.add('hover');
});

mercury.addEventListener('mouseleave', function(){
    this.classList.remove('hover');
});

venus.addEventListener('mouseenter', function(){
    this.classList.add('hover');
});

venus.addEventListener('mouseleave', function(){
    this.classList.remove('hover');
});

earth.addEventListener('mouseenter', function(){
    this.classList.add('hover');
});

earth.addEventListener('mouseleave', function(){
    this.classList.remove('hover');
});

mars.addEventListener('mouseenter', function(){
    this.classList.add('hover');
});

mars.addEventListener('mouseleave', function(){
    this.classList.remove('hover');
});

asteroids.addEventListener('mouseenter', function(){
    this.classList.add('hover');
});

asteroids.addEventListener('mouseleave', function(){
    this.classList.remove('hover');
});

sun.addEventListener('click', e => {
    sunDescription.style.visibility = 'visible';
});

mercury.addEventListener('click', e => {
    mercuryDescription.style.visibility = 'visible';
});

venus.addEventListener('click', e => {
    venusDescription.style.visibility = 'visible';
});

earth.addEventListener('click', e => {
    earthDescription.style.visibility = 'visible';
});

mars.addEventListener('click', e => {
    marsDescription.style.visibility = 'visible';
});

asteroids.addEventListener('click', e => {
    asteroidsDescription.style.visibility = 'visible';
});
