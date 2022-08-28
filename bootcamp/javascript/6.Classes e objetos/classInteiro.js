/*
Cria a classe Inteiro que tem um construtor que recebe um valor e 
mantém apenas a parte inteira do valor se for um número e 0 
se não for.

Deve ser possível aceder à propriedade valor sem a poder alterar.

Deves utilizar o # para marcar a propriedade privada e 
implementar apenas o get para que seja possível obter o valor 
sem o alterar.
*/
class Inteiro {
    // completa a classe
    #Vvalor
    constructor(n){
        if(!Number.isNaN(Number(n))){
            this.#Vvalor = Math.floor(n)
        }else{
            this.#Vvalor = 0
        }
    }
    
    get valor(){
        return this.#Vvalor
    }
}