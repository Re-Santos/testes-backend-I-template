import {pratica2} from '../src/pratica2'

describe("Testando prática2", () => {
//não economize na descrição deo teste, ela precisa te dar uma ideia do que esta testando, sem vc saber o contexto do teste
    test("deve retornar true se receber número inteiro par", () => {
       const result1 = pratica2(10)
       const result2 = pratica2(2)
       const result3 = pratica2(9992)
       const result4 = pratica2(304)

       expect (result1).toBe(true)
       expect (result2).toBe(true) 
       // tbm poderia ser expect (result2).not.toBe(false) // ou expect(result2).toBeTruthy
       expect (result3).toBe(true)
       expect (result4).toBe(true)
    })

    test ("deve retornar false se receber número inteiro impar", () =>{
        const result1 = pratica2(11)
        const result2 = pratica2(29)

        expect (result1).toBe(false)
        expect (result2).toBe(false)

    })
    
    test ("deve retornar null se receber parâmetro diferente de number", () =>{
        const result = pratica2("a"as any)
        expect(result).toBeNull() // podemos usar qualquer um das opções abaixo tbm
        expect(result).toEqual(null)
        expect(result).toBe(null)
    })
})


//no terminal npm run test