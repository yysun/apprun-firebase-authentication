import app from 'apprun';
import home from './home';
import about from './about';
import contact from './contact';
import signin from './signin';

const element = document.getElementById('my-app');

new signin().start(element);
new home().start(element);
new about().start(element);
new contact().start(element);

app.on('//', route => {
  const menus = document.querySelectorAll('.navbar-nav li');
  for (let i = 0; i < menus.length; ++i) menus[i].classList.remove('active');
  const item = document.querySelector(`[href='${route}']`);
  item && item.parentElement.classList.add('active');
})
