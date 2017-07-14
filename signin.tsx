import app, { Component } from 'apprun';

function signIn(user: string, pass: string): Promise<boolean> {
  const ok = user === '1@1';
  return new Promise<boolean>(r => {
    window.setTimeout(() => {
      r(ok)
    }, 2000)
  })
}

export default class homeComponent extends Component {
  state = { signedIn: false };

  view = (state) => {
    if (state instanceof Promise) {
      return <div>Signing in ...</div>
    }
    if (state.signedIn) {
      return <div>
        <h2>Welcome, {state.user}
          <button type="submit" className="btn btn-default pull-right" onclick={() => this.run('signout')}>Sign Out</button>
        </h2>
      </div>
    }
    return <div>
      {state.message && <div className="alert alert-danger">
        {state.message}
      </div>}
      <form className="form-horizontal" onsubmit={() => this.run('signin')} >
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
  }

  update = {
    '#signin': state => ({ signIn: false }),
    'signin': async state => {
      const user = (document.getElementById('inputEmail3') as HTMLInputElement).value;
      const pass = (document.getElementById('inputPassword3') as HTMLInputElement).value;
      const signedIn = await signIn(user, pass);
      const message = signedIn ? '' : 'Sign in failed. Please try again.';
      return { ...state, signedIn, user, message }
    },
    'signout': state => ({ ...state, signedIn: false })
  }
}
