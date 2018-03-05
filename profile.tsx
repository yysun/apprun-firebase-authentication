import app, { Component } from 'apprun';
import { user, authorize } from './auth';

export default class profileComponent extends Component {

  state = {
    content: 'profile'
  }

  view = state => authorize('profile', () => {
    return <div>
      <h1>{state.content} - {user} </h1>
    </div>
  })

  update = {
    '#profile': state => authorize('profile', () => state) //call back
  }
}
