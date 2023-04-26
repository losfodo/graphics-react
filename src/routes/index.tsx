import React from 'react';//nesse arquivo sera feito a verificação de rotas authenticadas e nao authenticadas
import { BrowserRouter } from 'react-router-dom';//BrowserRouter é necessario para funcionamento das rotas

import { useAuth } from '../hooks/auth';

import App from './app.routes';
import Auth from './auth.routes';

const Routes: React.FC = () => {
    const { logged } = useAuth();
    
    return (
        <BrowserRouter>{/*necessario ter algo ao redor de app para fucionar react-router-dom*/}
            { logged ? <App/> : <Auth /> }{/*se estiver logado dai para dashboards da acesso se nao mantem no login*/}
        </BrowserRouter>
    );
}

export default Routes;