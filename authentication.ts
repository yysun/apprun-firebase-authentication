import app, { Component } from 'apprun';

export let user = null;

export function signIn(username: string, pass: string): Promise<string> {
  user = null;
  return new Promise<string>(resolve => {
    window.setTimeout(() => {
      user = username;
      resolve(user);
    }, 200)
  })
}

export function authorize(componentClass) : any {
  const component = new componentClass();
  return class AuthorizedComponent extends Component {

    state = component.model || component.state;

    view = (state) => {
      if (!state.authorized) {
        app.run('#signin', location.hash);
        return;
      }
      return component.view(state);
    }
    update = component.update;
    
  }
}

