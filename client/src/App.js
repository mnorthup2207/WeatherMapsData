import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Weather from './pages/Weather';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={["/", "/landing"]}>
                    <Landing />
                </Route>
                <Route exact path={"/weather"}>
                    <Weather />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
