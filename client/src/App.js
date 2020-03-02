import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Weather from './pages/Weather';
import SavedPoints from './pages/SavedPoints';

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
                <Route exact path={"/saved-points"}>
                    <SavedPoints />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
