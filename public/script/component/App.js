import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Channels from './Channels'
import '../../style/App.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/data/channels" component={Channels} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
