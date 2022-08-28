/*
Cria uma função que recebe uma data e uma língua como argumentos e a retorna o dia da semana por extenso.

As línguas suportadas são português (pt) e inglês (en)

Dias da semana em português: segunda-feira, terça-feira, quarta-feira, quinta-feira, sexta-feira, sábado e domingo.

Dias da semana em inglês: monday, tuesday, wednesday, thursday, friday, saturday, sunday.
*/
function diaDaSemanaPorExtensoBilingue(data, lingua){
    // escreve aqui a função
    const DIAS_SEMANA = ["domingo","segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
    const DAYS_WEEK = ["sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

    switch(lingua){
        case "pt": return DIAS_SEMANA[data.getDay()]
        default: return DAYS_WEEK[data.getDay()]
    }
} 