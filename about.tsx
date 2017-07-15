import app, { Component } from 'apprun';
import Header from './header';
import { authorize } from './authentication';

export default class aboutComponent extends Component {
  state = 'about';

  view = (state) => {
    return <div>
      <Header />
      <div className="container">
        <h1>{state}</h1>
      </div>
    </div>
  }

  update = {
    '#about': state => state,
  }
}
