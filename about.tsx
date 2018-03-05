import app, { Component } from 'apprun';

export default class aboutComponent extends Component {

  state = {
    content: 'about'
  }

  view = state => <h1>{state.content}</h1>

  update = {
    '#about': state => state
  }
}
