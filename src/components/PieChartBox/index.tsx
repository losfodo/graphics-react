import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer
} from 'recharts';//importa oq sera usado no recharts vendo na documentação

import { 
    Container,
    SideLeft,
    LegendContainer,
    Legend,
    SideRight,
 }  from './styles';


 interface IPieChartProps {//interface tipescript com dados da pizza grafica
     data: {
        name: string;
        value: number;
        percent: number;
        color: string;
     }[];//coloca [] de array caso tenha mais dados para por no grafico virando assim um array de dados
 }

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (//conponente estavel sem return q ja vai ser retornado de uma vez, recebe dados de data
    <Container>
        <SideLeft>
            <h2>Relação</h2>
            <LegendContainer>
                {
                    data.map((indicator) => (//parametro extra criado para emendar interface de dados data
                        <Legend key={indicator.name} color={indicator.color}>{/*legenda de porcentagem da entradas e saida*/}  
                        <div>{indicator.percent}%</div>
                        <span>{indicator.name}</span>
                        </Legend>
                    ))              
                }
            </LegendContainer>
        </SideLeft>

        <SideRight>
            <ResponsiveContainer>
                <PieChart>{/*grafico em si parte de fora de pizza */}
                    <Pie data={data} dataKey="percent">{/*parte de dentro pizza recebendo parametro data com dados, data pey pizza percent */}
                        {
                            data.map((indicator) => (//cell:fatias da pizza com nome e cor de acordo com indicator
                                <Cell key={indicator.name} fill={indicator.color} />
                            ))
                        }
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </SideRight>
    </Container>
);

export default PieChartBox;