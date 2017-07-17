import app, { Component } from 'apprun';
import { user, authorize } from './authentication';

export default class aboutComponent extends Component {

  auth = () => user && user.startsWith('1');

  state = {
    content: 'about'
  }

  view = authorize(state => {
    return state.authorized && <div>
      <h1>{state.content} - {user} </h1>
    </div>
  })

  update = {
    '#about': state => ({ ...state, authorized: this.auth() }),
  }
}
