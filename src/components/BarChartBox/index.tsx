import React from 'react';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    Cell,
    Tooltip,
} from 'recharts';

import formatCurrency from '../../utils/formatCurrency';

import { 
    Container,
    SideLeft,
    SideRight,
    LegendContainer,
    Legend,
}  from './styles';

interface IBarChartProps {//interface tsx
    title: string;
    data: {//dados pegos em \pages\Dashboard\index.tsx para colocar no grafico de barra
        name: string;
        amount: number;
        percent: number;
        color: string
    }[],//dentro da data coloca vetor array [] pois varios elementos dentro de data
}

const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => (//dados da interface colocados IBarChartProps> = ({ title, data 
        <Container>
            <SideLeft>
                <h2>{title}</h2>

                <LegendContainer>{/*legenda com porcentagem */}
                    {
                        data.map((indicator) => (//indicator apenas para referenciar oq pegar no map com data
                            <Legend key={indicator.name} color={indicator.color}>
                            <div>{indicator.percent}%</div>
                            <span>{indicator.name}</span>
                            </Legend>  
                        ))              
                    }
                </LegendContainer>
            </SideLeft>
            

            <SideRight>
                <ResponsiveContainer>{/*grafico em barra */}
                    <BarChart data={data}>                    
                        <Bar dataKey="amount" name="Valor">
                            {
                                data.map((indicator) => (
                                    <Cell 
                                        key={indicator.name}
                                        fill={indicator.color}
                                        cursor="pointer"    
                                    />
                                ))
                            }
                        </Bar>   
                        <Tooltip 
                            cursor={{fill: 'none'}}//remove efeito ao passar o mouse pois nao fica bom visualmente
                            formatter={(value) => formatCurrency(Number(value))} //formata o valor ao passar mouse
                        />
                    </BarChart>
                </ResponsiveContainer>
            </SideRight>       
        </Container>
    );

export default BarChartBox;