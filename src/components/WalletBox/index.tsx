import React, { useMemo } from 'react';
import CountUp from 'react-countup';

import dolarImg from '../../assets/dolar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';//imagens q ficaram nos cartoes de dados
import arrowDownImg from '../../assets/arrow-down.svg';


import { Container }  from './styles';

interface IWalletBoxProps {//interface ts dos cartoes com dados de saldo entradas e saidas
    title: string;
    amount: number;
    footerlabel: string;
    icon: 'dolar' | 'arrowUp' | 'arrowDown';//colocar as 3 imagens em um parametro só
    color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({//propriedades da constante abaixo com toda logica dos cartoes ou wallet carteira
    title,
    amount,
    footerlabel,
    icon,
    color
}) => {

    const iconSelected = useMemo(() => {//logica do icon para cada uma, utilizar o useMemo para garantir o retorno do icone na memoria da um susto na função
        switch (icon) {
            case 'dolar':
                return dolarImg;
            case 'arrowUp': 
                return arrowUpImg;
            case 'arrowDown':
                return arrowDownImg;
            default:
              return undefined;
        }
    },[icon]);

    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <strong>R$ </strong>
                <CountUp 
                    end={amount}
                    separator="."
                    decimal=","
                    decimals={2}                                    
                />{/*end é efeito CountUp e amount é o dinheiro, decimal casa coloca virgula,decimals={2}quantas casas decimais tera */}
            </h1>
            <small>{footerlabel}</small>
            <img src={iconSelected} alt={title} />{/*como seria retornado*/}
        </Container>
    );
}

export default WalletBox;