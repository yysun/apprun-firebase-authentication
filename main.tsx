import app, { Component } from 'apprun';
import home from './home';
import about from './about';
import contact from './contact';
import Header from './header';
import signin from './signin';

const app_id = 'my-app';
const main_id = 'main';

new signin().mount(app_id);
new home().mount(main_id);
new about().mount(main_id);
new contact().mount(main_id);

app.on('//', route => {
  const menus = document.querySelectorAll('.navbar-nav li');
  for (let i = 0; i < menus.length; ++i) menus[i].classList.remove('active');
  const item = document.querySelector(`[href='${route}']`);
  item && item.parentElement.classList.add('active');
})

class AppComponent extends Component {

  view = state => <div>
    <Header />
    <div className="container" id="main"></div>
  </div>

  update = {
    '#auth': state => state
  }

}

new AppComponent().start(app_id);
