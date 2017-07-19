import app, { Component } from 'apprun';
import { user } from './firebase-auth';

export default class aboutComponent extends Component {

  auth = () => !!user;

  state = {
    content: 'about'
  }

  view = state => {
    return state.authorized && <div>
      <h1>{state.content} - {user.displayName} </h1>
    </div>
  }

  update = {
    '#about': state => ({ ...state, authorized: this.auth() }),
  }
}
