function createMenu() {
  const menu = document.createElement('div');
  menu.classList.add('container');
  menu.classList.add('menu');

  const title = document.createElement('div');
  title.textContent = 'Menu';
  menu.appendChild(title);

  const gridDish = document.createElement('div');
  gridDish.classList.add('grid');
  const gridDessert = document.createElement('div');
  gridDessert.classList.add('grid');
  const gridBeverage = document.createElement('div');
  gridBeverage.classList.add('grid');

  let aliments = [];

  for (let i = 0; i < 13; i++) {
    const item = document.createElement('i');
    const caption = document.createElement('span');
    item.classList.add('menu-item');
    item.classList.add('fa-solid');
    aliments.push(item);
    aliments[i].appendChild(caption);
  }

  aliments[0].classList.add('fa-utensils');
  aliments[0].setAttribute('value', 'Dishes');
  aliments[1].classList.add('fa-bowl-food');
  aliments[1].setAttribute('value', 'Meat bowl');
  aliments[2].classList.add('fa-fish-fins');
  aliments[2].setAttribute('value', 'Fish');
  aliments[3].classList.add('fa-burger');
  aliments[3].setAttribute('value', 'Burger');
  aliments[4].classList.add('fa-egg');
  aliments[4].setAttribute('value', 'Egg');
  aliments[5].classList.add('fa-bowl-rice');
  aliments[5].setAttribute('value', 'Rice bowl');

  for (let i = 0; i < 6; i++) {
    gridDish.appendChild(aliments[i]);
  }
  menu.appendChild(gridDish);

  aliments[6].classList.add('fa-spoon');
  aliments[6].setAttribute('value', 'Desserts');
  aliments[7].classList.add('fa-bread-slice');
  aliments[7].setAttribute('value', 'French toast');
  aliments[8].classList.add('fa-cheese');
  aliments[8].setAttribute('value', 'Cheese');

  for (let i = 6; i < 9; i++) {
    gridDessert.appendChild(aliments[i]);
  }
  menu.appendChild(gridDessert);

  aliments[9].classList.add('fa-wine-glass-empty');
  aliments[9].setAttribute('value', 'Drinks');
  aliments[10].classList.add('fa-bottle-water');
  aliments[10].setAttribute('value', 'Bottle of water');
  aliments[11].classList.add('fa-champagne-glasses');
  aliments[11].setAttribute('value', 'Glass of wine');
  aliments[12].classList.add('fa-coffee');
  aliments[12].setAttribute('value', 'Coffee');

  for (let i = 9; i < aliments.length; i++) {
    gridBeverage.appendChild(aliments[i]);
  }
  menu.appendChild(gridBeverage);

  return { menu };
}

export { createMenu };
