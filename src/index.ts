// como fariamos para testar se está funcionando ou não, sem os tests automatizados

//import { pratica2 } from "./pratica2";

// console.log(pratica2(1))
// console.log(pratica2(2))
// console.log(pratica2(5))
// console.log(pratica2(10))

//depois npm run dev no terminal e  verificar a resposta (false,true, false, true)

//////////////////////////////////////////////////////////////

// Agora vamos testar com algo que não é número, para forçar o TS a ler vamos colocar "as any"
// import { pratica2 } from "./pratica2";
// console.log (pratica2("bananinha" as any)) //retornou null
// console.log (pratica2(1.1)) //como o número não é inteiro tbm retorna null