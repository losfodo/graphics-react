const formatDate = (date: string): string => {
   const dateFormatted = new Date(date);//cria nova data e coloca na const
   const year = dateFormatted.getFullYear();//pega ano
   
   const day = dateFormatted.getDate() > 9 //coloca nova data na const day getDate:data atual utc
   ? dateFormatted.getDate() : `0${dateFormatted.getDate()}`;//sendo maior q nove pega numero normal se não formata para ter um zero no começo ex:07/10/2002
   
   const month = dateFormatted.getMonth() + 1 > 9 //pega mês mais um pois janeiro contado como zero
   ? dateFormatted.getMonth() + 1 : `0${dateFormatted.getMonth() + 1}`; //ex:10/08/....

   return `${day}/${month}/${year}`;//retorna formatado
};

export default formatDate;