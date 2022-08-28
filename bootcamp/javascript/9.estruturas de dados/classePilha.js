/*
Implementa a class PILHA, que recebe no construtor um argumento CAPACIDADE.

Deve possuir pelo menos uma propriedade:

1. capacidade, inicializada com o valor argumento do construtor se estiver definido, ou infinito se esse valor não estiver definido.
Não deve ser possível adicionar mais elementos à pilha do que a capacidade da mesma.

Deve possuir dois metodos:

adicionar(elem)
remover()
obterValor()
O método adicionar recebe como argumento o elemento que se pretende inserir na pilha, se a pilha já estiver com tantos quanto a capacidade, retorna .
"Pilha cheia"
O método remover, retira um elemento da pilha, caso a pilha esteja vazia, deve retornar "Pilha vazia!".

O método obterValor deve retornar o elemento mais recentemente adicionado à pilha, caso a pilha esteja vazia, deve retornar "pilha vazia!".

Lembra-te que uma pilha  é sempre LIFO - last in, frist Out.
*/
class Pilha {
    #capacidade
    #elems = []
        
        constructor(capacidade){
            this.#capacidade = capacidade ?? Infinity
        }
    
        adicionar(elem){
                if(this.#elems.length == this.#capacidade) return "Pilha cheia!"
            this.#elems.push(elem)
        }
        remover(){
            if(this.#elems.length == 0) return "Pilha vazia!"
            this.#elems.pop()
        }
    
        obterValor(){
            if(this.#elems.length == 0) return "Pilha vazia!"
            return this.#elems[this.#elems.length - 1]
        }
    }