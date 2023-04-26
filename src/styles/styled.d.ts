import 'styled-components';// importa a dependencia para ajudar no css

declare module 'styled-components' {//declara modulo que sera sobreescrevido
    export interface DefaultTheme {//exporta interface de uma forma q não precisa reexportar algo de dentro
        title: string;
    
        colors: {
            primary: string;//cores ficarão como string para funionar o dark e light modo
            secondary: string;
            tertiary: string;
    
            white: string;
            black: string;
            gray: string;
    
            success: string;
            info: string;
            warning: string;
        },
    };
}