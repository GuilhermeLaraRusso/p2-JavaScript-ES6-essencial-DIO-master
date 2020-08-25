// Retorna um boolean verificando se todos os itens de um array satisfazem a dondição


// Exemplo 1

const arr = [1, 3, 3, 4, 3];
const allEvenNumbers = arr.every(value => value % 2 === 0);
console.log(allEvenNumbers);

//Exemplo 2

const alunos = [
    {
        nome: 'André',
        nota: 8
    },
    {
        nome: 'João',
        nota: 6
    },
    {
        nome: 'Matias',
        nota: 5
    }

];

//verifica se todos os alunos foram aprovados
const todosAprovados = alunos.every(aluno => aluno.nota >= 7);
console.log(todosAprovados);


