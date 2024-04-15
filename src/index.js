import home from "./home_page.js";
import menu from "./menu.js";
import contact from "./contact.js";
import "./style.css";

home();

const homeButton = document.getElementById('home')
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

homeButton.addEventListener('click', home);
menuButton.addEventListener('click', menu);
contactButton.addEventListener('click', contact);