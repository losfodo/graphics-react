import React from 'react';
import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,//teste
    Legend,//teste
    CartesianGrid,
    Tooltip,
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
} from 'recharts';//tudo o que é necessario para o grafico de linha, Line:linha do grafico,

import formatCurrency from '../../utils/formatCurrency';

import { 
    Container, 
    ChartContainer,
    Header,
    LegendContainer,
    Legendd,
}  from './styles';

const dataa = [
    {
      subject: 'bitcoin',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'investimentos',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'terrenos',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'aluguel',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'gastos',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'viagens',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];


interface IHistoryBoxProps {
    data: {//data possui 3 parametros
        month: string;
        amountEntry: number;
        amountOutput: number;
    }[],
    lineColorAmountEntry: string;
    lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
    data, lineColorAmountEntry, lineColorAmountOutput
}) => (
    <Container>
        <Header>
            <h2>Histórico de saldo</h2>

            <LegendContainer>
                <Legendd color={lineColorAmountEntry}>
                    <div></div>
                    <span>Entradas</span>
                </Legendd>
           
                <Legendd color={lineColorAmountOutput}>
                    <div></div>
                    <span>Saídas</span>
                </Legendd>
            </LegendContainer>
        </Header>

        <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">{/*onde ficará o grafico em si geral*/}
                <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
                    <XAxis dataKey="month" stroke="#cecece" />
                    <YAxis />{/*mostra parte lateral do saldo para visualização melhor*/}
                    <Tooltip formatter={(value) => formatCurrency(Number(value))} />{/*formatter coloca arquivo logica formatCurrency para formarta em dinheiro corretamente*/}
                    <Legend />{/*mostra uma legenda abaixo tbm que nao é necessario*/}
                    <Line 
                        type="monotone"                
                        dataKey="amountEntry"//dados
                        name="Entradas"
                        stroke={lineColorAmountEntry}
                        strokeWidth={5}//largura da inha
                        dot={{ r: 5}}//tamanho do raio da bolinha
                        activeDot={{ r: 8}}//aumenta bolinha
                    />{/*linha do grafico*/}
                    <Line 
                        type="monotone"                
                        dataKey="amountOutput"
                        name="Saídas"
                        stroke={lineColorAmountOutput}
                        strokeWidth={5}
                        dot={{ r: 5}}
                        activeDot={{ r: 8}}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
        
        <ResponsiveContainer width="50%" height="50%">{/*grafico de radar exemplo simples*/}
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataa}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="@" dataKey="A" stroke="#d884c7" fill="#d884c7" fillOpacity={0.6} />
          <Radar name="Rafa" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
)

export default HistoryBox;