/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

// dados de entrada do usuário;
// nome, idade, peso e altura

// variaveis
// patientsList

// tratamentos de dados e estrutura de dados
// patientsList será uma estrutura Array
// A estrutura patientsList[] ira conter os pacientes em forma de objetos{}
// Estrutura de repetição para percorrer a patientsList[]
// alert() para imprimir os nomes dos pacientes

const patientsList = [
  {
    name: 'Lucas F. de Lima',
    age: 23,
    Weight: 73,
    height: 168
  },
  {
    name: 'Jhenifer Souza',
    age: 18,
    Weight: 50,
    height: 160
  },
  {
    name: 'Andressa Andrade',
    age: 28,
    Weight: 60,
    height: 175
  }
]

// let patientsName = patientsList.map(patient => {
//   return patient.name
// })

let patientNameList = []
for (const paciente of patientsList) {
  let name = paciente.name
  patientNameList.push(name)
}

alert(patientNameList)
