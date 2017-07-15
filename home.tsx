import app, { Component } from 'apprun';
import Header from './header';
import { user, authorize } from './authentication';

@authorize
export default class homeComponent extends Component {

  auth = () => user && user.startsWith('1');

  state = {
    content: 'home'
  }

  view = (state) => {
    return <div>
      <Header />
      <div className="container">
        <h1>{state.content} - {user}</h1>
      </div>
    </div>
  }

  update = {
    '#': state => {
      return ({ ...state, authorized: this.auth() })
    }
  }
}
