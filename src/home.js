function createHome() {
  const home = document.createElement('div');
  home.classList.add('container');
  home.classList.add('home');

  const title = document.createElement('div');
  title.textContent = 'Welcome';
  const menuBtnLarge = document.createElement('button');
  menuBtnLarge.textContent = 'To the menu';

  home.appendChild(title);
  home.appendChild(menuBtnLarge);
  return {
    home,
    menuBtnLarge,
  };
}

export { createHome };
