import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashbord from '../pages/Dashbord';
import Tarefas from '../pages/Tarefas';

const Routes = ()=>(
    <Switch>
        <Route path="/" component={Dashbord} exact/>
        <Route path="/Tarefas" component={Tarefas} />
    </Switch>
)

export default Routes ;