
import app from 'apprun';

let authenticated = false;
export function signIn(user: string, pass: string): Promise<boolean> {
  authenticated = user === '1@1';
  return new Promise<boolean>(resolve => {
    window.setTimeout(() => {
      resolve(authenticated);
    }, 200)
  })
}

export function authorize() {
  if (!authenticated) app.run('#signin');
  return authenticated;
}

