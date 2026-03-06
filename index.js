import Descritor from "./utils/descritorEmpresa.js"
import Empresa from "./model/empresa.js"
import Endereco from "./model/endereco.js"
import Funcionario from "./model/funcionario.js"
import Telefone from "./model/telefone.js"

let endereco = new Endereco(123,'Av. Paulista','Jardim Paulista','São Paulo')

let telefone = new Telefone('11','9-9999-9999')

let funcionario = new Funcionario(
    'Tony Stark',
    '123456789',
    '143.893.126-33',
    endereco,
    telefone
)

let funcionarios = [funcionario]

let telefones = [telefone]

let empresa = new Empresa(
    funcionarios,
    endereco,
    'ABC LTDA',
    'Mercado online',
    '12.345.678/0001-90',
    telefones
)

let descritor = new Descritor()

descritor.descrever(empresa)