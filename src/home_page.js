import lorem from './lorem.js';
import myLogo from './images/logo.png';
import foodBackground from './images/foodBackground.jpeg';

export default function home() {
  const content = document.getElementById('content');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }

  const brandLogo = document.getElementById('brand');

  brandLogo.removeChild(brandLogo.firstChild)
  const logo = new Image();
  logo.src = myLogo
  logo.height = 50;
  logo.width = 60; 
  brandLogo.appendChild(logo);

  content.classList = 'homeBackground';

  const h2 = document.createElement('h2');
  h2.textContent = 'Home of Delicious Flavors';
  content.appendChild(h2);

  const p1 = document.createElement('p');
  p1.textContent = "Welcome to JC Restaurant, where every dish tells a story of passion and flavor. Explore our menu crafted with care, featuring a fusion of local and international delights. Join us for an unforgettable dining experience filled with warmth, flavor, and hospitality."





  ;

  content.appendChild(p1)
  return content;
}