import React, { useState, useMemo, useCallback } from 'react';//import react padrão

//pagina de dashboard e seus parte aqui
import ContentHeader from '../../components/ContentHeader';//cabeçario da aplicação colocado
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';
import PieChartBox from '../../components/PieChartBox';
import HistoryBox from '../../components/HistoryBox';//grafico de linha
import BarChartBox from '../../components/BarChartBox'

import expenses from '../../repositories/expenses';
import gains from '../../repositories/gains';
import listOfMonths from '../../utils/months';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';
import grinningImg from '../../assets/grinning.svg';
import opsImg from '../../assets/ops.svg';


import { 
    Container,
    Content, 
} from './styles';


const Dashboard: React.FC = () => {//React.FC:do tipo função,
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);//useState é o React Hook que permite adicionar estado a um componente funcional...
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());//Ele retorna um array com dois valores: o estado atual e uma função para atualizá-lo. O Hook recebe um valor de estado inicial como argumento e retorna um valor de estado atualizado sempre que a função


    const years = useMemo(() => {//logica do ano para dashboards input,,useMemo=memoriza o valor
        let uniqueYears: number[] = [];

        [...expenses, ...gains].forEach(item => {//criando uma nova forEach incluindo os dois repositorios juntos
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
           }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });
    },[]);


    const months = useMemo(() => {//nao necessita de um return apenas => é suficiente
        return listOfMonths.map((month, index) => {
            return {//return só é necessario para o retornar de algo q foi verificado antes algo especifico q tem muito codigo e necessita especificar o retorno
                value: index + 1,
                label: month,
            }
        });
    },[]);
    
    
    const totalExpenses = useMemo(() => {//expenses mostra o total no mês e ano selecionados
        let total: number = 0;

        expenses.forEach(item => {//expenses forEach dos dados 
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected){//que tevem mes selecionado e ano selecionado
                try{
                    total += Number(item.amount)//para pegar o total em dinheiro
                }catch{
                    throw new Error('Invalid amount! Amount must be number.')//em casos de erro
                }
            }
        });

        return total;//return para a const totalExpenses funcionar
    },[monthSelected, yearSelected]);


    const totalGains = useMemo(() => {
        let total: number = 0;

        gains.forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            if(month === monthSelected && year === yearSelected){
                try{
                    total += Number(item.amount)
                }catch{
                    throw new Error('Invalid amount! Amount must be number.')
                }
            }
        });

        return total;
    },[monthSelected, yearSelected]);

    const totalBalance = useMemo(() => {//const com logica do total do saldo
        return totalGains - totalExpenses;//retorna ganhos menos as despesas
    },[totalGains, totalExpenses]);//[totalGains, totalExpenses] para caso de mudanças no repositório atualizar a pagina com useMemo

    const message = useMemo(() => {
        if(totalBalance < 0){//condiçoes de acordo com total saldo
            return {
                title: "Que triste!",
                description: "Neste mês, você gastou mais do que deveria.",
                footerText: "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
                icon: sadImg
            }
        }      
        else if(totalGains === 0 && totalExpenses === 0){//se nao teve registro nenhum 
            return {
                title: "Op's!",
                description: "Neste mês, não há registros de entradas ou saídas.",
                footerText: "Parece que você não fez nenhum registro no mês e ano selecionado.",
                icon: opsImg
            }
        }
        else if(totalBalance === 0){//se total deu zero
            return {
                title: "Ufaa!",
                description: "Neste mês, você gastou exatamente o que ganhou.",
                footerText: "Tenha cuidado. No próximo tente poupar o seu dinheiro.",
                icon: grinningImg
            }
        }
        else{
            return {
                title: "Muito bem!",
                description: "Sua carteira está positiva!",
                footerText: "Continue assim. Considere investir o seu saldo.",
                icon: happyImg //imagem emoji feliz a ver com mensagembox
            }
        }

    },[totalBalance, totalGains, totalExpenses]);//para useMemo funcionar e atualizar dados de acordo

    const relationExpensesVersusGains = useMemo(() => {
        const total = totalGains + totalExpenses;//total de entradas + saidas

        const percentGains = Number(((totalGains / total) * 100).toFixed(1));//calculo percentual entradas,, arredonda para 1 digito toFixed(1) fica melhor visivel 
        const percentExpenses = Number(((totalExpenses / total) * 100).toFixed(1));//calculo percentual saidas

        const data = [//dados da porcentagem
            {
                name: "Entradas",
                value: totalGains,//logica numerica porcentagem
                percent: percentGains ? percentGains : 0, 
                color: '#F7931B'//muda a cor tanto da legenda porcentagem tanto grafico de pizza
            },
            {
                name: "Saídas",
                value: totalExpenses,
                percent: percentExpenses ? percentExpenses : 0, 
                color: '#E44C4E'//E44C4E
            },
        ];

        return data;//retorna const data
    },[totalGains, totalExpenses]);//atualizar sempre totalGains totalExpenses com memo para manter atualizado sempre os dados

    const historyData = useMemo(() => {
        return listOfMonths //retorna lista arquivo criado com os meses no grafico de linha faz map
        .map((_, month) => {//_ seria o valor e month seria o index q é o foco
            
            let amountEntry = 0;//inicia 0
            gains.forEach(gain => {//percorre array gains do repositorio dentro do map do month
                const date = new Date(gain.date);//converte para o mês pegando date parametro com datas dentro do repositorio gains
                const gainMonth = date.getMonth();//pega o mes da data apenas
                console.log('gainMonth', gainMonth)
                const gainYear = date.getFullYear();//pega o ano data apenas
                console.log('gainYear', gainYear )

                if(gainMonth === month && gainYear === yearSelected){//se mes igual mes selecionado e ano igual ano selecionado
                    try{
                        amountEntry += Number(gain.amount);//pega amountEntry e incrementa  gain.amount
                    }catch{
                        throw new Error('amountEntry is invalid. amountEntry must be valid number.')
                    }
                }
            });

            let amountOutput = 0;//para as saidas mesmo q acima
            expenses.forEach(expense => {
                const date = new Date(expense.date);
                const expenseMonth = date.getMonth();
                const expenseYear = date.getFullYear();

                if(expenseMonth === month && expenseYear === yearSelected){
                    try{
                        amountOutput += Number(expense.amount);
                    }catch{
                        throw new Error('amountOutput is invalid. amountOutput must be valid number.')
                    }
                }
            });


            return {//retorno final
                monthNumber: month,
                month: listOfMonths[month].substr(0, 3),//substr(0, 3)=para mostrar is meses jan fev mai mar abreviado
                amountEntry,//dado q vai grafico entrada
                amountOutput//dado grafico saida
            }
        })
        .filter(item => {//filtro caso chegue ao mês limite
            const currentMonth = new Date().getMonth();//pega o mês da data atual
            const currentYear = new Date().getFullYear();//pega o ano da data atual
            return (yearSelected === currentYear && item.monthNumber <= currentMonth) || (yearSelected < currentYear)//retorna filtro no grafico de linha
        });//se ano selecionado input for === ano atual e mês numero menor q mês atual ou ano selecionado menor de ano atual
    },[yearSelected]);//ano selecionado sempre ser atualizado com useMemo

    const relationExpensevesRecurrentVersusEventual = useMemo(() => {//grafico em barra logica saida
        let amountRecurrent = 0;//inicial da logica grafico em barra recorrente
        let amountEventual = 0;//eventual inicial

        expenses
        .filter((expense) => {//filtrando repositorio
            const date = new Date(expense.date);//data atual
            const year = date.getFullYear();//ano atual
            const month = date.getMonth() + 1;//mês atual

            return month === monthSelected && year === yearSelected;//mês igual ao mês selecionado e ano tbm retornado
        })
        .forEach((expense) => {
            if(expense.frequency === 'recorrente'){//frequencia igual recorrente
                return amountRecurrent += Number(expense.amount);//retorna dados recorrente
            }

            if(expense.frequency === 'eventual'){
                return amountEventual += Number(expense.amount);//retorna dados eventual
            }
        });

        const total = amountRecurrent + amountEventual;

        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));//pegando a porcentagem
        const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));//toFixed(1) uma casa decimal

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0, 
                color: "#F7931B"
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: "#E44C4E"
            }
        ];//retorno do grafico em barras Recorrentes Eventuais
    },[monthSelected, yearSelected]);//sempre q atualizar mês e ano do input muda 


    const relationGainsRecurrentVersusEventual = useMemo(() => {
        let amountRecurrent = 0;
        let amountEventual = 0;

        gains
        .filter((gain) => {
            const date = new Date(gain.date);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;

            return month === monthSelected && year === yearSelected;
        })
        .forEach((gain) => {
            if(gain.frequency === 'recorrente'){
                return amountRecurrent += Number(gain.amount);
            }

            if(gain.frequency === 'eventual'){
                return amountEventual += Number(gain.amount);
            }
        });

        const total = amountRecurrent + amountEventual;

        const percentRecurrent = Number(((amountRecurrent / total) * 100).toFixed(1));
        const percentEventual = Number(((amountEventual / total) * 100).toFixed(1));

        return [
            {
                name: 'Recorrentes',
                amount: amountRecurrent,
                percent: percentRecurrent ? percentRecurrent : 0,
                color: "#F7931B"
            },
            {
                name: 'Eventuais',
                amount: amountEventual,
                percent: percentEventual ? percentEventual : 0,
                color: "#E44C4E"
            }
        ];
    },[monthSelected, yearSelected]);

    const handleMonthSelected = useCallback((month: string) => {//useCallback:parecido com useMemo o useCallback memoriza a função
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }
        catch{
            throw new Error('invalid month value. Is accept 0 - 24.')
        }
    },[]);


    const handleYearSelected = useCallback((year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }
        catch{
            throw new Error('invalid year value. Is accept integer numbers.')
        }
    },[]);


    return (//aqui fica toda a logica da pagina de dashboards o retorno do html
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B">{/*iniciando com cabeçario, linecolor especifica a cor de acordo com qual titulo */}
                <SelectInput 
                    options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)} //onChange usa mês selecionado no input
                    defaultValue={monthSelected}
                />{/*mandando o componente SelectInput dentro de outro component ContentHeader*/}
                <SelectInput 
                    options={years} 
                    onChange={(e) => handleYearSelected(e.target.value)} 
                    defaultValue={yearSelected}
                />
            </ContentHeader>

            <Content>
                <WalletBox 
                    title="saldo"
                    color="#4E41F0"
                    amount={totalBalance}//const totalBalance com logica saldo
                    footerlabel="atualizado com base nas entradas e saídas"
                    icon="dolar"
                />{/*colocando logica dos cartoes no dashboard index principal*/}

                <WalletBox 
                    title="entradas"
                    color="#F7931B"
                    amount={totalGains}
                    footerlabel="atualizado com base nas entradas e saídas"
                    icon="arrowUp"
                />{/*coloca o case dos icon nomeados no outro arquivo*/}

                <WalletBox 
                    title="saídas"
                    color="#E44C4E"
                    amount={totalExpenses}//coloca função esse total na saida do card
                    footerlabel="atualizado com base nas entradas e saídas"
                    icon="arrowDown"
                />

                <MessageBox
                    title={message.title}
                    description={message.description}//retorna tudo do arquivo MessageBox com seus atributos e logica const message
                    footerText={message.footerText}
                    icon={message.icon}
                />

                <PieChartBox data={relationExpensesVersusGains} />{/*recebe toda a função com logica dentro do grafico de pizza*/}

                <HistoryBox 
                    data={historyData} //coloca constante com dado de toda logica
                    lineColorAmountEntry="#F7931B"
                    lineColorAmountOutput="#E44C4E"
                />

                <BarChartBox 
                    title="Saídas" //local onde fica grafico de barra
                    data={relationExpensevesRecurrentVersusEventual} //toda a logica
                />
                
                <BarChartBox 
                    title="Entradas"
                    data={relationGainsRecurrentVersusEventual} 
                />
                
            </Content>
        </Container>
    );
}

export default Dashboard;//vai exportar toda essa const Dashboard