import app, { Component } from 'apprun';
import { user } from './firebase-auth';

export default class homeComponent extends Component {

  auth = () => !!user;

  state = {
    content: 'home'
  }

  view = state => {
    return state.authorized && <div>
      <h1>{state.content} - {user.displayName} </h1>
    </div>
  }

  update = {
    '#': state => ({ ...state, authorized: this.auth() })
  }
}
