const sun = document.querySelector('.sun-img');
const mercury = document.querySelector('.mercury-img');
const venus = document.querySelector('.venus-img');
const earth = document.querySelector('.earth-img');
const mars = document.querySelector('.mars-img');

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
