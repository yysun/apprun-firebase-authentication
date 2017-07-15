import app, {Component} from 'apprun';
import Header from './header';
import { user, authorize } from './authentication';

export default class contactComponent extends Component {
  state = 'contact';

  view = (state) => {
    return <div>
      <Header />
      <div className="container">
        <h1>{state} - {user ? user : '[anonymous]'} </h1>
      </div>
    </div>
  }

  update = {
    '#contact': state => state,
  }
}

