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
  

  const dish1 = document.createElement('div');
  const h31 = document.createElement('h3');
  const p1i = document.createElement('p');
  const p1ii = document.createElement('p');

  h31.textContent = 'Jollof Rice';
  p1i.textContent = "Description: A popular West African dish made with rice, tomatoes, onions, and a blend of spices. Served with fried plantains, chicken, or beef."
  ;
  p1ii.textContent = 'Price: ₦1000';
  dish1.classList.add('dish')
  dish1.appendChild(h31);
  dish1.appendChild(p1i);
  dish1.appendChild(p1ii);

  content.appendChild(dishH2);
  dishMenu.appendChild(dish1);

  //Dish2

  const dish2 = document.createElement('div');
  const h32 = document.createElement('h3');
  const p2i = document.createElement('p');
  const p2ii = document.createElement('p');

  h32.textContent = 'Egusi Soup';
  p2i.textContent = "Description: A thick, savory soup made with ground melon seeds, vegetables, and meat or fish. It has a rich, nutty flavor and is commonly eaten with pounded yam or fufu."
  ;
  p2ii.textContent = 'Price: ₦1500';
  dish2.classList.add('dish')
  dish2.appendChild(h32);
  dish2.appendChild(p2i);
  dish2.appendChild(p2ii);

  dishMenu.appendChild(dish2);

  //dish 3


  const dish3 = document.createElement('div');
  const h33 = document.createElement('h3');
  const p3i = document.createElement('p');
  const p3ii = document.createElement('p');

  h33.textContent = 'Pepper Soup';
  p3i.textContent = "Description: A spicy broth-based soup made with assorted meats or fish, peppers, and traditional spices. It's known for its fiery flavor and is often enjoyed as a starter or during cold weather."
  ;
  p3ii.textContent = 'Price: ₦2000';
  dish3.classList.add('dish')
  dish3.appendChild(h33);
  dish3.appendChild(p3i);
  dish3.appendChild(p3ii);

  dishMenu.appendChild(dish3);

  //Dish 4


  const dish4 = document.createElement('div');
  const h34 = document.createElement('h3');
  const p4i = document.createElement('p');
  const p4ii = document.createElement('p');

  h34.textContent = 'Pepper Soup';
  p4i.textContent = "Description: A traditional Nigerian soup made with palm fruit extract, assorted meats or fish, and spices. It has a rich, earthy taste, served with starches like eba or pounded yam."
  ;
  p4ii.textContent = 'Price: ₦2500';
  dish4.classList.add('dish')
  dish4.appendChild(h34);
  dish4.appendChild(p4i);
  dish4.appendChild(p4ii);

  dishMenu.appendChild(dish4);

  // Dish 5


  const dish5 = document.createElement('div');
  const h35 = document.createElement('h3');
  const p5i = document.createElement('p');
  const p5ii = document.createElement('p');

  h35.textContent = 'Pepper Soup';
  p5i.textContent = "Description: A traditional Nigerian soup made with palm fruit extract, assorted meats or fish, and spices. It has a rich, earthy taste, served with starches like eba or pounded yam."
  ;
  p5ii.textContent = 'Price: ₦2500';
  dish5.classList.add('dish')
  dish5.appendChild(h35);
  dish5.appendChild(p5i);
  dish5.appendChild(p5ii);

  dishMenu.appendChild(dish5);

  menuDiv.appendChild(dishMenu);

  const riceMenu = document.createElement('div');
  const riceH2 = document.createElement('h2');
  riceH2.textContent = 'Rice';
  riceMenu.appendChild(riceH2);

  menuDiv.appendChild(riceMenu)

  content.appendChild(menuDiv);
  content.classList.remove('homeBackground')

  return content;

}