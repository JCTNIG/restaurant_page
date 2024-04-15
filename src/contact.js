import lorem from "./lorem.js"

export default function contact() {
  const content = document.getElementById('content');

  while (content.firstChild) {
    content.removeChild(content.firstChild);
  };

  const contactP1 = document.createElement('p');
  contactP1.textContent = "For any inquiries or reservations, feel free to reach out to us:"
  content.appendChild(contactP1);

  const ul = document.createElement('ul');
  const l1 = document.createElement('li');
  const l2 = document.createElement('li');
  const l3 = document.createElement('li');
  const l4 = document.createElement('li');

  l1.textContent = 'Phone: +2348149560907';
  l2.textContent = 'Email: ocjustc@gmail.com';
  l3.textContent = 'Address: World Wide';
  l4.textContent = 'Opening Hours:'

  const l4ul = document.createElement('ul');
  const l4l1 = document.createElement('li');
  const l4l2 = document.createElement('li');

  l4l1.textContent = 'Monday to Friday: 8:00 AM - 9:00 PM';
  l4l2.textContent = 'Saturday and Sunday: 11:00 AM - 11:00 PM';

  l4ul.appendChild(l4l1);
  l4ul.appendChild(l4l2);
  l4.appendChild(l4ul);

  ul.appendChild(l1);
  ul.appendChild(l2);
  ul.appendChild(l3);
  ul.appendChild(l4);
  content.appendChild(ul);
  

  content.classList.remove('homeBackground')
  return content;


};