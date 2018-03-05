import app, { Component } from 'apprun';

export let user = null;
let returnTo;

export async function signIn(username: string, pass: string): Promise<string> {
  user = null;
  return new Promise<string>(resolve => {
    window.setTimeout(() => {
      user = { username };
      app.run('#auth', user);
      document.location.replace(returnTo);
      resolve(user);
    }, 200)
  })
}

export function isAuthorized(roles): boolean {
  if (!user) return false;
  switch (roles) {
    case 'admin': return user.username.startsWith('admin');
    case 'profile': return true;
  }
}

export function authorize(roles, func: Function): Function {
  return isAuthorized(roles) ?
    func() :
    app.run('#signin', document.location.hash);
}

app.on('#signin', hash => {
  returnTo = hash || '#admin'; // default page after sign in
})

app.on('#signout', () => {
  user = null;
  app.run('#auth', user);
  location.hash = '';
})