import app, {Component} from 'apprun';
import { user } from './firebase-auth';

export default class contactComponent extends Component {
  state = 'contact';

  view = (state) => {
    return <div>
      <h1>{state} - {user ? user.displayName : '[anonymous]'} </h1>
    </div>
  }

  update = {
    '#contact': state => state,
  }
}

