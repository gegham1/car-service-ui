import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => <p>main</p>} />
        <Route path="*" component={() => <p>not found</p>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
