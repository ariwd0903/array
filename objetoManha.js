let pessoa= {
    PrimeiroNome: "irmão do",
    SegundoNome: "jorel",
    idade: 10,
    corDosOlhos: "preto",
    hobbies: ['música', 'filmes', 'esportes'],
 endereço: {
     rua: "Rua do bobos",
     numero: 0,
     cidade: "São Paulo",
     estado: "SP",
    },
}
console.log(pessoa);
console.log(pessoa.PrimeiroNome);
console.log(pessoa.SegundoNome, pessoa.idade);
console.log(pessoa.hobbies[1]);
console.log(pessoa.endereço.cidade);

let{
    PrimeiroNome,
    SegundoNome,
    endereço: {cidade}
} =pessoa;

console.log(`O ${PrimeiroNome} ${SegundoNome} é de ${cidade}`);

const array= [1,2,3,4,5];
let [valor01,valor02,...resto]=array
console.log(valor01);
console.log(valor02);
console.log(resto);