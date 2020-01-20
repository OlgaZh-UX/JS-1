'use strict';
const modal = document.querySelector('.modal');
const showButton = document.querySelector('button');
const closeButton = document.querySelector('span');

closeButton.addEventListener('click', function() {
    modal.classList.remove('fadeInDown');
    modal.classList.add('fadeOutUp');
    setTimeout(function() {
        modal.classList.add('hidden');
    }, 1000);
});

showButton.addEventListener('click', function() {
    modal.classList.remove('fadeOutUp', 'hidden');
    modal.classList.add('animated', 'fadeInDown');
});
