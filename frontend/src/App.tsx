import React from 'react';
import './App.css';
import Buildings from './pages/buildings/Buildings';
import { Switch, Route, Redirect } from "react-router";
import { Box } from '@material-ui/core'
import AppBar from './components/AppBar';
import { RouteConstants } from './RouteConstants';
import Funds from './pages/funds/Funds';
import Cities from './pages/cities/Cities';

const App: React.FC = () => {
  return (
    <Box>
        <AppBar title="Buildings"/>
        <Box >
            <Switch>
                <Route exact path={RouteConstants.home} component={Buildings} />
                <Route path={RouteConstants.buildings} component={Buildings} />
                <Route path={RouteConstants.funds} component={Funds} />
                <Route path={RouteConstants.cities} component={Cities} />
                <Redirect to={RouteConstants.home} />
            </Switch>
        </Box>
    </Box>
)
}

export default App;
