import React, { useMemo, useState, useEffect } from 'react';
import { uuid } from 'uuidv4';
 
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';

import gains from '../../repositories/gains';//para entrada gains
import expenses from '../../repositories/expenses';//saida expenses
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';
import listOfMonths from '../../utils/months';//lista dos meses para input

import { 
    Container, 
    Content, 
    Filters 
} from './styles';

interface IRouteParams {
    match: {
        params: {//parametro para ter mais organização no codigo caso precise ter mais parametros alem do type no futuro
            type: string;//type da url de entrada e saida nas rotas Route path="/list/:type" ao clicar no botão parametro aparece na rota console
        }
    }
}

interface IData {
    id: string;//parametros especificados com ts do expenses.ts e gains.ts
    description: string;
    amountFormatted: string;//no repositorio amount q sera editado para ter ajuste de dinheiro
    frequency: string;//tudo stirng pois averá formatação
    dateFormatted: string;//formatar o R$ do dinheiro do list data
    tagColor: string;
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([]);//useState é um array q na primeira posição [data:guarda valor do estado e a segunda setData: atualiza valor do estado atribuindo um valor inicial useState<IData[]>([])
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);//armazenara o mês selecionado, typescript tipo number
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());//armazena ano selecionado nas opçoes  para filtrar na lista
    const [frequencyFilterSelected, setFrequencyFilterSelected] = useState(['recorrente', 'eventual']);//Abre um novo estado inicial para armazenar as frequências, estado com duas opçoes recorrente', 'eventual começa inicialmente mostrando 0 recorrentes 1 eventual o array
    
    const movimentType = match.params.type;//coloca type em uma const q é a url path=/list/:type ou entry-balance

    const pageData = useMemo(() => {//modifica titulo e outras coisas de acordo com type url clicada se for entry-balance url lista ou outra
        return movimentType === 'entry-balance' ?
            {
                title: 'Entradas',
                lineColor: '#4E41F0',
                data: gains //se for entrada carrega dados da lista de ganhos
            }
            :       
            {
                title: 'Saídas',
                lineColor: '#E44C4E',
                data: expenses //se não de expenses
            }       
    },[movimentType]); //necessario para o memo do react funcionar e pode ir e voltar a alternacia deixando na memoria
     

    const years = useMemo(() => {//useMemo: do react para memorizar algo ?
        let uniqueYears: number[] = [];//recebe array vazio, controlar os anos q são unicos

        const { data } = pageData;//restruction para resumir melhor

        data.forEach(item => {//pega os numeros unicos e guarda no forEach:percorre um array
            const date = new Date(item.date);//pega data padrão
            const year = date.getFullYear();//pega o ano armazena na const

            if(!uniqueYears.includes(year)){//se não existe dentro da listagem do input ano
                uniqueYears.push(year)//adiciona ano na lista q não existe para não ter varios ex:2020 repitidos, e sempre ter os anos do repositorio
                
                // uniqueYears.sort()//para manter a lista inicialmente no ultimo ano prescrito 2020
                // setYearSelected(year)//para manter a lista inicialmente no ultimo ano prescrito 2020
            }
        });

        return uniqueYears.map(year => {//map: retorna uma nova lista formatada
            return {
                value: year,
                label: year,
            }
        });
    },[pageData]);


    const months = useMemo(() => {//useMemo automatizar e mudar o valor
        return listOfMonths.map((month, index) => {//map recria a lista do input
            return {
                value: index + 1,//+1 pq janeiro começa por zero, valores dentro do input
                label: month,//apenas a label 
            }
        });
    },[]);


    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = frequencyFilterSelected.findIndex(item => item === frequency);//procura pelo index findIndex item igual frequencia clicada escolhida,Se mantém selecionado todos
        if(alreadySelected >= 0){//ao clicar em um dos duas opçoes..
            const filtered = frequencyFilterSelected.filter(item => item !== frequency);//Ao clicar em um deles é deslecionado o filtro da lista
            setFrequencyFilterSelected(filtered);//Manda pra dentro da const de todos a cons do removido do filtrado
        }else{            
            setFrequencyFilterSelected((prev) => [...prev, frequency]);//usa o spread ...prev para manter o que foi tirado pelo if
        }
    }

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);//converte month que estava em tipo string para tipo number usando a const
            setMonthSelected(parseMonth);//
        }
        catch{
            throw new Error('invalid month value. Is accept 0 - 24.')
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }
        catch{
            throw new Error('invalid year value. Is accept integer numbers.')
        }
    }


    useEffect(() => {//hook useEffect nos auxilia a lidar com os side-effects (efeitos colaterais) e podemos usá-los também como ciclo de vida do componente.
        const { data } = pageData;

        const filteredData = data.filter(item => {//filtrar os valores com mesma data e ano selecionados
            const date = new Date(item.date);//nova data..,
            const month = date.getMonth() + 1;//+1 por que janeiro conta como zero
            const year = date.getFullYear();

            return month === monthSelected && year === yearSelected && frequencyFilterSelected.includes(item.frequency);//se o mês for igual ao mes selecionado monthSelected e ano selecionado e Frequência selecionada na lista
        });//retorno da lista acima

        const formattedData = filteredData.map(item => {//usando map para formatar a lista e devolver os valores antes filtrados com filter
            return {
                id: uuid(),//usando dependencia uuid() para gerar o id corretamente
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)),//transforma string em number tbm,,formata o valor numerico de dinheiro de dentro da lista
                frequency: item.frequency,
                dateFormatted: formatDate(item.date),//formata a data
                tagColor: item.frequency === 'recorrente' ? '#4E41F0' : '#E44C4E',//se for igual a recorrente azul se não vermelho
            }
        });
        
        setData(formattedData);//atualizar data com setData
    },[pageData, monthSelected, yearSelected, data.length, frequencyFilterSelected]); //pega tudo o que tem relação para uso da lista selecionada,


    return (
        <Container>
            <ContentHeader title={pageData.title} lineColor={pageData.lineColor}>
                <SelectInput 
                    options={months}//opçoes dos meses no input
                    onChange={(e) => handleMonthSelected(e.target.value)} //onChange ao mudar um mes no select input pra mostrar na lista os meses de acordo,,handleMonthSelected:função, pega target valor
                    defaultValue={monthSelected}//valor padrão fica monthSelected de default valor caso de algum erro
                />{/*SelectInput mes e ano abaixo */}
                <SelectInput 
                    options={years} 
                    onChange={(e) => handleYearSelected(e.target.value)} 
                    defaultValue={yearSelected}
                />
            </ContentHeader>

            <Filters>
                <button 
                    type="button"
                    className={`tag-filter 
                    tag-filter-recurrent
                    ${frequencyFilterSelected.includes('recorrente') && 'tag-actived'}`}//usa chaves para interpolar algo, oq inclue e se mantem ativo, se ta includes incluso recorrente add tag-actived 
                    onClick={() => handleFrequencyClick('recorrente')}//função handleFrequencyClick se tiver recorrente mostra na lista apenas os recorrentes
                >
                    Recorrentes
                </button>

                <button 
                    type="button"
                    className={`
                    tag-filter 
                    tag-filter-eventual
                    ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}//msm função q pega eventual no caso
                >
                    Eventuais
                </button>
            </Filters>

            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard 
                            key={item.id}//colocando os dados no retorno do conteudo
                            tagColor={item.tagColor}
                            title={item.description}
                            subtitle={item.dateFormatted}
                            amount={item.amountFormatted}
                        />//conteudo da lista
                    ))
                }     
            </Content>            
        </Container>
    );
}

export default List;