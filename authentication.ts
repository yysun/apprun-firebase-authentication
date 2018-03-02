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

export function signOut() {
  user = null;
}

export function authorize(view: Function) : Function {
  return (state) => {
    if (!state.authorized) return app.run('#signin', location.hash) && false;
    return view(state);
  }
}


