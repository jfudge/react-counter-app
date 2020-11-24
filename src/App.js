import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import { Page1, Page2, Page3 } from './pages/Pages';
import Main from './components/Main/Main';

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="mb-3">
        <Header />
      </div>
      <div className="mainContent container-fluid">
        <Switch>
          <Route exact path="/page3">
            <Page3 />
          </Route>
          <Route exact path="/page2">
            <Page2 />
          </Route>
          <Route exact path="/page1">
            <Page1 />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </div>
      
    </div>
  );
}

export default App;
