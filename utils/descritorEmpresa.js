export default class Descritor {

    descrever(empresa){

        console.log("Razao social:", empresa.razaoSocial)
        console.log("Nome fantasia:", empresa.nomeFantasia)
        console.log("cnpj:", empresa.cnpj)

        console.log("Endereco")
        console.log("Rua:", empresa.endereco.rua, " Bairro:", empresa.endereco.bairro, " Cidade:", empresa.endereco.cidade, " numero:", empresa.endereco.numero)
      

        console.log("\nFuncionarios:")

        for(let i = 0; i < empresa.funcionarios.length; i++){

            let funcionario = empresa.funcionarios[i]

            console.log("Nome:", funcionario.nome)
            console.log("Matricula:", funcionario.matricula)
            console.log("CPF:", funcionario.cpf)

            console.log("Rua:", funcionario.endereco.rua, " Bairro:", funcionario.endereco.bairro, " Cidade:", funcionario.endereco.cidade, " numero:", funcionario.endereco.numero)
            // (@^▽^@)ノ
        }

    }

}