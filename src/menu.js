import lorem from './lorem.js';

export default function menu() {
  const content = document.getElementById('content');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  const menuDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';
  menuDiv.appendChild(h1);

  const chickenMenu = document.createElement('div');
  const chickenH2 = document.createElement('h2');
  chickenH2.textContent = 'Chicken';
  chickenMenu.appendChild(chickenH2);

  const paragraphs = [];

  for (let i = 1; i < 4; i++) {
    const paragraph = document.createElement('p');

    paragraph.classList = 'paragraph';
    paragraph.textContent = lorem(5);
    paragraphs.push(paragraph);
  }

  paragraphs.forEach(paragraph => {
    chickenMenu.appendChild(paragraph);
  } );

  menuDiv.appendChild(chickenMenu);

  const riceMenu = document.createElement('div');
  const riceH2 = document.createElement('h2');
  riceH2.textContent = 'Rice';
  riceMenu.appendChild(riceH2);

  const ricePara = [];

  for (let i = 1; i < 6; i++) {
    const paragraph = document.createElement('p');

    paragraph.classList = 'paragraph';
    paragraph.textContent = lorem(5);
    ricePara.push(paragraph);
  }

  ricePara.forEach(paragraph => {
    riceMenu.appendChild(paragraph);
  } );

  menuDiv.appendChild(riceMenu)

  content.appendChild(menuDiv);
  content.classList.remove('homeBackground')

  return content;

}