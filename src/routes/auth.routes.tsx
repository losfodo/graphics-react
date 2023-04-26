import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import SignIn from '../pages/SignIn';

const AuthRoutes: React.FC = () => (
    <Switch>{/*Switch retornara rota*/}
        <Route path="/" component={SignIn} />{/*cria a rota de login*/}
    </Switch>
);

export default AuthRoutes;