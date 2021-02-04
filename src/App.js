import React from 'react';
import './App.css';
import HomePage from './pages/home';
import SettingsPage from './pages/settings';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/settings">
                        <SettingsPage />
                    </Route>
                </Switch>
            </Router>
        </div>
  );
}

export default App;
