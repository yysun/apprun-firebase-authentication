
import app, { Component } from 'apprun';

export let authenticated = false;
export let user = null;

export function signIn(username: string, pass: string): Promise<boolean> {
  user = null;
  authenticated = username === '1@1';
  return new Promise<boolean>(resolve => {
    window.setTimeout(() => {
      user = username;
      resolve(authenticated);
    }, 200)
  })
}


export function authorize(component) {
  
  return class AuthorizedComponent extends Component {
    state = component.model || component.state;

    view = (state) => {
      if (!authenticated) {
        app.run('#signin', location.hash || '#');
        return;
      }
      return component.view(state);
    }

    update = component.update;
  }
}

