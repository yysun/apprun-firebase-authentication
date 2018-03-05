import app, { Component } from 'apprun';

export default class homeComponent extends Component {

  state = {
    content: 'home'
  }

  view = state =>
    <h1>{state.content} </h1>

  update = {
    '#': state => state
  }
}
