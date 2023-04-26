const formatCurrency = (current: number): string => {//constante recebeu current do tipo number e vai devolver uma string um valor formatado
    return current.toLocaleString( // toLocaleString():especificar a linguagem cujas convenções de formatações serão utilizadas e personalizar o comportamento da função
        'pt-br',//Formato brasileiro
        {
            style: 'currency',//Estilo current de moeda a coração e formato brasileiro 
            currency: 'BRL'
        });
};

export default formatCurrency;