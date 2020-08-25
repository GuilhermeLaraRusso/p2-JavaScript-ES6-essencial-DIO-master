// Função keys retorna um Array Iterator que contém as chaves para cada elemento do array

const arr = [1, 2, 3, 4, 5];

const arrIterator = arr.keys();

console.log(arrIterator.next());
// {value: 0, done: false}

console.log(arrIterator.next());
// {value: 1, done: false}

console.log(arrIterator.next());
// {value: 2, done: false}

console.log(arrIterator.next());
// {value:2, done: false}