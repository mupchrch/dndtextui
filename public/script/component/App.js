import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import DataTable from './DataTable'
import Dnd from './Dnd';
import '../../style/App.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/data" component={DataTable} />
          <Route path="/dnd" component={Dnd} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
