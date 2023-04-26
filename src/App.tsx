import React from 'react';
import { ThemeProvider } from 'styled-components';//importa dentro do styled-components o ThemeProvider para modo dark e light
import GlobalStyles from './styles/GlobalStyles';//importa arquivo com css para uso

import { useTheme } from './hooks/theme';

import Routes from './routes';//import das paginas rotas do site


const App: React.FC = () => {
    const {theme} = useTheme();//devolve um contexto, tem a ver com modo dark e light e hooks react
    
    return (// quando possui mais de dois componentes no return ele deve ser cobrido com um por completo msm q seja apenasvazio<>+2componentes </> 
        <ThemeProvider theme={theme}>{/*coloca o thema de dark e light das cores*/}
            <GlobalStyles />
            <Routes/>
        </ThemeProvider>
    );
}

export default App;