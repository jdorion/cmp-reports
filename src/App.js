import React from 'react';
import { hot } from 'react-hot-loader';


class App extends React.Component {
  render() {
    return <div>Hello, world: {translations.text1}</div>;
  }
}

export default hot(module)(App); // eslint-disable-line
