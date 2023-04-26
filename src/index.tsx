import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from './hooks/theme';//só consegue recuperar contexto com ThemeProvider pra pegar modo dark e light
import { AuthProvider } from './hooks/auth';

import App from './App';//todo conteudo pra funcionar vem em app

ReactDOM.render(
  <React.StrictMode>    
    <ThemeProvider>{/*cobrir todo o app pois possue dark e light mode*/}
      <AuthProvider>{/*cobrir todo o app com a authenticação de login*/}
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')//root: tem acesso a toda a pagina importante
);