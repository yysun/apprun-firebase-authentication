import app, { Component } from 'apprun';
import home from './home';
import about from './about';
import contact from './contact';
import signin from './signin';
import admin from './admin';
import profile from './profile';

import { user, isAuthorized } from './auth';

const app_id = 'my-app';
const main_id = 'main';

new signin().mount(main_id);
new home().mount(main_id);
new about().mount(main_id);
new contact().mount(main_id);
new admin().mount(main_id);
new profile().mount(main_id);

app.on('//', route => {
  const menus = document.querySelectorAll('.navbar-nav li');
  for (let i = 0; i < menus.length; ++i) menus[i].classList.remove('active');
  const item = document.querySelector(`[href='${route}']`);
  item && item.parentElement.classList.add('active');
})

class AppComponent extends Component {

  view = state => <div>
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
              aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#/">Project name</a>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#admin" className={isAuthorized('admin')?'':'btn disabled'}>Admin</a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {user ?
                <>
                  <li><a href="#profile">Profile</a></li>
                  <li><a href="#signout">Sign Out</a></li>
                </> : <li><a href="#signin">Sign In</a></li>}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container" id="main"></div>
    </div>

  update = {
    '#auth': state => state
  }

}

new AppComponent().start(app_id);
