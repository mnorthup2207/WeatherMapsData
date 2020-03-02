import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Weather from './pages/Weather';
import CoordinatesContext from './utils/CoordinatesContext'

function App() {
    const { searchNum } = CoordinatesContext
    return (
        <Router>
            <Switch>
                <Route exact path={["/", "/landing"]}>
                    <Landing />
                </Route>
                <Route exact path={"/weather"}>
                    <CoordinatesContext.Provider value={searchNum}>
                        <Weather />
                    </CoordinatesContext.Provider>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
