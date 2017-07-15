import app, { Component } from 'apprun';
import Header from './header';
import { user, authorize } from './authentication';

@authorize
export default class homeComponent extends Component {

  state = 'home';

  view = (state) => {
    return <div>
      <Header />
      <div className="container">
        <h1>{state} - {user}</h1>
      </div>
    </div>
  }

  update = {
    '#': state => state
  }
}

// export default authorize(homeComponent);
