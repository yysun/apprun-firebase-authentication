import app, { Component } from 'apprun';
import Header from './header';
import { user, authorize } from './authentication';

@authorize
export default class aboutComponent extends Component {

  state = 'about';

  view = (state) => {
    return <div>
      <Header />
      <div className="container">
        <h1>{state} - {user} </h1>
      </div>
    </div>
  }

  update = {
    '#about': state => state,
  }
}

// export default authorize(aboutComponent);
