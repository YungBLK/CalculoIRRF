# Váriavel não tipada

*ERRO*: X implicity has an 'any' type.

*SOLUÇÃO*: O typescript está esperando que você dê um tipo para X
que pode ser uma váriavel, fn, parametro e etc..

# Escopo de uma funçao está esperando um tipo.

*error*  Argument of type 'number[]' is not assignable
to parameter of type 'string'.
*Solução* O typescript estava esperando um tipo string mas você 
tentou enviar por parametro o tipo array de número.




// const dataEmployess: Employess[] = [
    //   {
    //     id: 1,
    //     nome: "Letícia Aurora Farias",
    //     cpf: "936.938.039-60",
    //     salario: 998,
    //     desconto: 74.85,
    //     dependentes: 2,
    //   },
    //   {
    //     id: 2,
    //     nome: "Edson Thiago Drumond",
    //     cpf: "748.517.476-24",
    //     salario: 1045,
    //     desconto: 78.38,
    //     dependentes: 1,
    //   },
    //   {
    //     id: 3,
    //     nome: "Igor Lúcio Viera",
    //     cpf: "142.326.196-82",
    //     salario: 1045,
    //     desconto: 78.38,
    //     dependentes: 1,
    //   },
    //   {
    //     id: 4,
    //     nome: "Fátima Elza Tereza Castro",
    //     cpf: "701.118.872-08",
    //     salario: 5500,
    //     desconto: 628.95,
    //     dependentes: 0,
    //   },
    //   {
    //     id: 5,
    //     nome: "Sandra Giovanna Drumond",
    //     cpf: "715.890.756-25",
    //     salario: 4522,
    //     desconto: 492.03,
    //     dependentes: 3,
    //   },
    //   {
    //     id: 6,
    //     nome: "Valentina Clara Nunes",
    //     cpf: "101.151.404-41",
    //     salario: 10000,
    //     desconto: 713.1,
    //     dependentes: 4,
    //   },
    // ];