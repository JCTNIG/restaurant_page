import amala from "./images/amala-ewedu.png";
import egusi from "./images/egusi-soup.jpeg";
import jollof from "./images/Jollof-Rice.jpeg";
import pepperSoup from "./images/perpper-soup.jpeg";
import nkwobi from "./images/nkwobi.jpg";

export default function menu() {
  const content = document.getElementById('content');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
  const menuDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  h1.textContent = 'Menu';
  content.appendChild(h1);
  //menuDiv.appendChild(h1);
  menuDiv.classList.add('menuDiv');

  const dishMenu = document.createElement('div');
  dishMenu.classList.add('dishMenu');
  const dishH2 = document.createElement('h2');
  dishH2.textContent = 'Dishes';
  
  // Dish 1

  const dish1 = document.createElement('div');
  const description1 = document.createElement('div')
  const h31 = document.createElement('h3');
  const p1i = document.createElement('p');
  const p1ii = document.createElement('p');

  const jollofImage = new Image();
  jollofImage.src = jollof;
  jollofImage.width = 200;

  dish1.appendChild(jollofImage);

  h31.textContent = 'Jollof Rice';
  p1i.textContent = "Description: A popular West African dish made with rice, tomatoes, onions, and a blend of spices. Served with fried plantains, chicken, or beef."
  ;
  p1ii.textContent = 'Price: ₦1000';
  dish1.classList.add('dish')
  description1.appendChild(h31);
  description1.appendChild(p1i);
  description1.appendChild(p1ii);

  content.appendChild(dishH2);
  dish1.appendChild(description1);
  dishMenu.appendChild(dish1);

  //Dish2

  const dish2 = document.createElement('div');
  const description2 = document.createElement('div');

  const egusiImage = new Image();
  egusiImage.src = egusi;
  egusiImage.width = 200;

  dish2.appendChild(egusiImage);

  const h32 = document.
  createElement('h3');
  const p2i = document.createElement('p');
  const p2ii = document.createElement('p');

  h32.textContent = 'Egusi Soup';
  p2i.textContent = "Description: A thick, savory soup made with ground melon seeds, vegetables, and meat or fish. It has a rich, nutty flavor and is commonly eaten with pounded yam or fufu."
  ;
  p2ii.textContent = 'Price: ₦1500';
  dish2.classList.add('dish')
  description2.appendChild(h32);
  description2.appendChild(p2i);
  description2.appendChild(p2ii);

  dish2.appendChild(description2);
  dishMenu.appendChild(dish2);

  //dish 3


  const dish3 = document.createElement('div');
  const description3 = document.createElement('div');
  const h33 = document.createElement('h3');
  const p3i = document.createElement('p');
  const p3ii = document.createElement('p');

  const amalaImage = new Image();
  amalaImage.src = amala;
  amalaImage.width = 200;

  dish3.appendChild(amalaImage);

  h33.textContent = 'Amala and Ewedu';
  p3i.textContent = "Description: A popular Yoruba dish consisting of smooth, soft amala (made from yam flour) served with a green leafy soup called ewedu. The soup is typically flavored with locust beans and eaten with assorted meats."
  ;
  p3ii.textContent = 'Price: ₦2000';
  dish3.classList.add('dish')
  description3.appendChild(h33);
  description3.appendChild(p3i);
  description3.appendChild(p3ii);

  dish3.appendChild(description3);

  dishMenu.appendChild(dish3);

  //Dish 4


  const dish4 = document.createElement('div');
  const description4 = document.createElement('div');
  const h34 = document.createElement('h3');
  const p4i = document.createElement('p');
  const p4ii = document.createElement('p');

  const PepperSoupImage = new Image();
  PepperSoupImage.src = pepperSoup;
  PepperSoupImage.width = 200;

  dish4.appendChild(PepperSoupImage);

  h34.textContent = 'Pepper Soup';
  p4i.textContent = "Description: A spicy broth-based soup made with assorted meats or fish, peppers, and traditional spices. It's known for its fiery flavor and is often enjoyed as a starter or during cold weather."
  ;
  p4ii.textContent = 'Price: ₦2500';
  dish4.classList.add('dish')
  description4.appendChild(h34);
  description4.appendChild(p4i);
  description4.appendChild(p4ii);

  dish4.appendChild(description4);
  dishMenu.appendChild(dish4);

  // Dish 5

  const dish5 = document.createElement('div');
  const description5 = document.createElement('div');
  const h35 = document.createElement('h3');
  const p5i = document.createElement('p');
  const p5ii = document.createElement('p');

  const nkwobiImage = new Image();
  nkwobiImage.src = nkwobi;
  nkwobiImage.width = 200;

  dish5.appendChild(nkwobiImage);

  h35.textContent = 'Nkwobi';
  p5i.textContent = "Description: A traditional Igbo delicacy made from cow feet, seasoned with a spicy sauce made from palm oil, utazi leaves, and traditional spices. It's typically served as a side dish at social gatherings or bars.";
  p5ii.textContent = 'Price: ₦2500';
  dish5.classList.add('dish')
  description5.appendChild(h35);
  description5.appendChild(p5i);
  description5.appendChild(p5ii);

  dish5.appendChild(description5);
  dishMenu.appendChild(dish5);

  menuDiv.appendChild(dishMenu);

  const riceMenu = document.createElement('div');
  const riceH2 = document.createElement('h2');
  riceH2.textContent = '';
  riceMenu.appendChild(riceH2);

  menuDiv.appendChild(riceMenu)

  content.appendChild(menuDiv);
  content.classList.remove('homeBackground')

  return content;

}