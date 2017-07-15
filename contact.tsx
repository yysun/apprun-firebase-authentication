import app, {Component} from 'apprun';
import Header from './header';

export default class contactComponent extends Component {
  state = 'contact';

  view = (state) => {
    return <div>
      <Header />
      <div className="container">
        <h1>{state}</h1>
      </div>
    </div>
  }

  update = {
    '#contact': state => state,
  }
}

