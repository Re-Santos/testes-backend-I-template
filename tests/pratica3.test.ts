import {pratica3} from '../src/pratica3'

//INPUT 
//  2 números
//OUTPUT
//  objeto
//  soma
//  multiplicação
//Exemplo: Se enviarmos (3 e 5) retorna {soma:8; multiplicação:15}. obs. Teste a funcionalidade pelo caso de sucesso primeiro

describe("Testando pratica3", () => {
//não economize na descrição deo teste, ela precisa te dar uma ideia do que esta testando, sem vc saber o contexto do teste
    test("deve retornar um objeto contendo propriedades soma e multiplicação", () => {
       const result1 = pratica3(3, 5)
       const result2 = pratica3(90, 1)
       const result3 = pratica3(0, -20)

       expect (result1). toEqual ({soma:8, multiplicacao:15})
       expect (result2). toEqual ({soma:91, multiplicacao:90})
       expect (result3). toEqual ({soma:-20, multiplicacao:-0})
      
    
    })
})