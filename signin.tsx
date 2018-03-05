import app, { Component } from 'apprun';
import { signIn } from './auth';

export default class signInComponent extends Component {
  state = { signedIn: false };

  view = (state) => state.signedIn ? null : <div>
      {state.message && <div className="alert alert-danger">
        {state.message}
      </div>}
      <form className="form-horizontal" onsubmit={e => this.run('signin', e)} >
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-5">
            <h2>Sign in</h2>
          </div>
        </div>
        <div className="form-group">
          <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
          <div className="col-sm-5">
            <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
          <div className="col-sm-5">
            <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-5">
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-5">
            <button type="submit" className="btn btn-default">Sign in</button>
          </div>
        </div>
      </form>
    </div>

  update = {
    '#signin': state => state,
    'signin': async (state, e) => {
      e.preventDefault();
      const user = (document.getElementById('inputEmail3') as HTMLInputElement).value;
      const pass = (document.getElementById('inputPassword3') as HTMLInputElement).value;
      const signedIn = await signIn(user, pass);
      const message = signedIn ? '' : 'Sign in failed. Please try again.';
      return signedIn ? null : { ...state, signedIn, message };
    }
  }
}
