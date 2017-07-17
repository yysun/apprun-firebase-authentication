import app, { Component } from 'apprun';
import { user, authorize } from './authentication';

export default class homeComponent extends Component {

  auth = () => user && user.startsWith('1');

  state = {
    content: 'home'
  }

  view = authorize(state => {
    return state.authorized && <div>
      <h1>{state.content} - {user} </h1>
    </div>
  })

  update = {
    '#': state => ({ ...state, authorized: this.auth() })
  }
}
