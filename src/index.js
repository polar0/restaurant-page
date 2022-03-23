import { createNav } from './navbar.js';
import { createHome } from './home.js';
import { createMenu } from './menu.js';
import { createAbout } from './about.js';

const content = document.querySelector('#content');
const { home, menuBtnLarge } = createHome();
const { menu } = createMenu();
const { about } = createAbout();
const { nav, buttons } = createNav();
buttons[0].classList.add('active');

buttons[0].addEventListener('click', function () {
  updatePage(this, home);
});

buttons[1].addEventListener('click', function () {
  updatePage(this, menu);
});

menuBtnLarge.addEventListener('click', function () {
  updatePage(buttons[1], menu);
});

buttons[2].addEventListener('click', function () {
  updatePage(this, about);
});

content.appendChild(nav);
content.appendChild(home);

function updatePage(that, newPage) {
  content.children[1].remove();
  content.appendChild(newPage);

  for (const btn of buttons) {
    btn.classList.remove('active');
  }
  that.classList.add('active');
}
