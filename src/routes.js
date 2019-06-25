import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Listagem from './pages/listagem/Listagem'
import Novo from './pages/novo/Novo'
import Editar from './pages/editar'
// import Teste from './pages/teste/Teste'

function routes() {
    return(
        <Switch>
            <Route path="/" exact component={Listagem} />
            <Route path="/novo" component={Novo} />
            <Route path="/editar/:id" component={Editar} />
        </Switch>
    )
  }

  export default routes;