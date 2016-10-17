'use strict';

const menuButtonToggle = document.querySelector('#mainMenuToggle');
const mainMenu = document.querySelector('#mainMenu');

menuButtonToggle.addEventListener('click', () => (
  mainMenu.classList.toggle('c-main-menu-items__visible')
), false);
