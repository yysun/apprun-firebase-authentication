import app, { Component } from 'apprun';
import Header from './header';
import { user, authorize } from './authentication';

@authorize
export default class aboutComponent extends Component {

  auth = () => user && user.startsWith('1');

  state = {
    content: 'about'
  }

  view = (state) => {
    return <div>
      <Header />
      <div className="container">
        <h1>{state.content} - {user} </h1>
      </div>
    </div>
  }

  update = {
    '#about': state => ({ ...state, authorized: this.auth() }),
  }
}
