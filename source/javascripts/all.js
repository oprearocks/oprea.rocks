'use strict';

var menuButtonToggle = document.querySelector('#mainMenuToggle');
var mainMenu = document.querySelector('#mainMenu');

menuButtonToggle.addEventListener('click', function() {
  mainMenu.classList.toggle('c-main-menu-items--visible')
}, false);

// let lCounter = 0;
// let rCounter = 0;
// let times = 0;
// let viewportWidth = document.body.offsetWidth;

// document.addEventListener('touchstart', (e) => {
//   times++;

//   if (e.touches[0].pageX < viewportWidth / 2) {
//     lCounter++;
//   } else {
//     rCounter++;
//   }

//   if (times > 3) {
//     let cond = prompt("Are you left handed?");
//     if (cond) {
//       document.querySelector('.c-header--spaced').classList.add('u-swap-order');
//     }
//   }
// }, false);
