function createNav() {
  const nav = document.createElement('div');
  nav.classList.add('navbar');

  const btnHome = document.createElement('button');
  btnHome.classList.add('btn-home');
  btnHome.textContent = 'Home';
  const btnMenu = document.createElement('button');
  btnMenu.classList.add('btn-menu');
  btnMenu.textContent = 'Menu';
  const btnAbout = document.createElement('button');
  btnAbout.classList.add('btn-about');
  btnAbout.textContent = 'About';

  const buttons = [btnHome, btnMenu, btnAbout];

  nav.appendChild(btnHome);
  nav.appendChild(btnMenu);
  nav.appendChild(btnAbout);

  return {
    nav,
    buttons,
  };
}

export { createNav };
