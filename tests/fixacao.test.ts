import {fixacao} from '../src/fixacao'

describe("testando fixacao", ()=>{
    test ("deve retornar lista contendo cada letra de uma palavra", () =>{
        const result1 = fixacao ("dev")
        const result2 = fixacao ("casa")

        expect(result1).toEqual(["d", "e", "v"])
        expect(result2).toEqual(["c", "a", "s",'a'])
        expect(result2).toContain('s')

    })

})