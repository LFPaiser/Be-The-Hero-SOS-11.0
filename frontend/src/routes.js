import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/logon';
import Cadastro from './pages/register';
import Dashboard from './pages/dashboard';
import NovaAtividade from './pages/newActivity';



function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Logon} />
        <Route path='/cadastro' component={Cadastro} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/atividades/nova' component={NovaAtividade} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
