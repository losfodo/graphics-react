import React, { createContext, useState, useContext } from 'react';

interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;//função signIn
    signOut(): void;//void:nao devolve nada
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);//inicia por padrão assim hooks

const AuthProvider: React.FC = ({ children }) => {//children:filho q recebera os componentes
    const [logged, setLogged] = useState<boolean>(() => {//cria estado
        const isLogged = localStorage.getItem('@minha-carteira:logged');//procura no storage se o usuario esta logado

        return !!isLogged;//se tem !!isLogged é verdadeiro
    });

    const signIn = (email: string, password: string) => {
        if(email === 'rafael@email.com' && password === '123'){//se o email e senha for igual de acordo,, normalmente seria um repositorio
            localStorage.setItem('@minha-carteira:logged', 'true');//estão logados checando no localStorage feito em AuthProvider
            setLogged(true);//true
        }else{
            alert('Senha ou usuário inválidos!');//senão senha e usuario invalidos
        }
    }

    const signOut = () => {//ao sair
        localStorage.removeItem('@minha-carteira:logged');//remove do storage usando removeItem,,abre no console e verifica em aplication se esta em ordem o @minha-carteira:logged
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, signIn, signOut}}>{/*retorno padrão de AuthContext provider*/}
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): IAuthContext {//cria uma função pra pegar AuthContext
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };//exporta ambos