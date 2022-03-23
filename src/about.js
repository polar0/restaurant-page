function createAbout() {
  const about = document.createElement('div');
  about.classList.add('container');
  about.classList.add('about');

  const title = document.createElement('div');
  title.textContent = 'About';

  const desc = document.createElement('div');
  desc.textContent = 'There is nothing you really need to know about us...';
  const tease = document.createElement('div');
  tease.textContent = 'Maybe you just need to try ?';

  about.appendChild(title);
  about.appendChild(desc);
  about.appendChild(tease);

  return { about };
}

export { createAbout };
