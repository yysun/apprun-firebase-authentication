import app, { Component } from 'apprun';
import { user, authorize } from './auth';

export default class adminComponent extends Component {

  state = {
    content: 'admin'
  }

  view = state => authorize('admin', () => {
    return <div>
      <h1>{state.content} - {user} </h1>
    </div>
  })

  update = {
    '#admin': state => authorize('admin', () => state) //call back
  }
}
