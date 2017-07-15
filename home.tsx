import app, { Component } from 'apprun';
import Header from './header';
import { authorize } from './authentication';
export default class homeComponent extends Component {
  state = { authorized: false };

  view = (state) => {
    console.log(state)
    if (!state.authorized) return;
    return <div>
      <Header />
      <div className="container">
        <h2>{state.user}</h2>
      </div>
    </div>
  }

  update = {
    '#': state => ({ ...state, authorized: authorize() }),
    '#auth': (state, e) => {
      const { user, signedIn } = e;
      return {
        ...state, user, authorized: authorize()
      }
    }
  }
}
