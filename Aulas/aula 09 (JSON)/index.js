let disciplina = 
[
  {
  nome: "ED",
  ano: 2022
  },
  {
  nome: "LS",
  ano: 2022,
  },
];

console.log(disciplina);

disciplina.curso = "TSi";

console.log(disciplina[1]);

disciplinas = {
    20: {
      "nome": 'LS',
      "ano": 2022
    },
    10: {
      "nome": 'ED',
      "ano": 2022
    },
    TSI2010: {
      "nome": 'WEB I',
      "ano": 2022
    },
    'prop composta': {
      "nome": 'WEB II',
      "ano": 2022
    }
  }

// Objeto Javascript
let livro = {
  titulo: "Js na prática",
  paginas: 530,
  ano:2019
}
// console.log(JSON.stringify(livro));

//Propriedade Json = Se difere do objeto, pois é totalmente uma string
let livroJson = `{
  "titulo": "Js na prática",
  "paginas": 530,
  "ano": 2019,
  "esgotado": true,
  "editora": {
    "nome": "redimir",
  },
}`;

console.log(livroJson)


let objLivro = JSON.parse(livroJson);

// console.log(objLivro.ano)

const ip = {
    address: '192.168.0.75',
    mask: '255.255.255.254'
  }
  
  console.log(ip);
  
  ip.version = 'v4'
  console.log(ip)
  
  delete ip.version;
  console.log(ip)
  