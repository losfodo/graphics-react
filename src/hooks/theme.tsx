import React, { createContext, useState, useContext } from 'react';//createContext=permite que você crie um contexto que os componentes podem fornecer ou ler.
//usar hooks acima de forma separada armazenando em const
import dark from '../styles/themes/dark';//thema escuro e claro
import light from '../styles/themes/light';

interface IThemeContext {
    toggleTheme(): void; //const coloca como void padrão
    theme: ITheme;//interface dark e light dentro interface IThemeContext
}

interface ITheme {//copiado do arquivo dark e light ts 
    title: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);//começa vazio{} e tipo é IThemeContext

const ThemeProvider: React.FC = ({ children }) => {//const principal recebera filhos children
    const [theme, setTheme] = useState<ITheme>(() => {//useState [theme usar valor, setTheme usar para modificaçoes]
        const themeSaved = localStorage.getItem('@minha-carteira:theme');//localStorage:mantem salvo msm depois de atualizado ou trocado de pagina
//getItem:pega o item a ser salvo
        if(themeSaved) {
            return JSON.parse(themeSaved);//retornar convertido a json
        }else{
            return dark;//o pradrão sera modo dark se nao tiver
        }
    });

    const toggleTheme = () => {//função ou const de IThemeContext
        if(theme.title === 'dark'){
            setTheme(light);//usando useState ativa o thema claro
            localStorage.setItem('@minha-carteira:theme', JSON.stringify(light));//localStorage é global react não precisa import nem nada do tipo
        }else{
            setTheme(dark);//se não dark
            localStorage.setItem('@minha-carteira:theme', JSON.stringify(dark));//a chave é oq quiser como: @minha-carteira:theme,,transforma em arquivo json para usa-lo:JSON.stringify(dark))
        }//setItem:setar na pratica e manter salvo com localStorage
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>{/*disponibiliza para provider usar o toggleTheme, theme*/}
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);// retorna o valor de contexto para o contexto que você passou. Para determinar o valor de contexto

    return context;//retorna esse contexto
}


export { ThemeProvider, useTheme };
