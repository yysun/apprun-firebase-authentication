import app, {Component} from 'apprun';
import { user, authorize } from './authentication';

export default class contactComponent extends Component {
  state = 'contact';

  view = (state) => {
    return <div>
      <h1>{state} - {user ? user : '[anonymous]'} </h1>
    </div>
  }

  update = {
    '#contact': state => state,
  }
}

