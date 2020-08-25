// Retorna um Array Iterator que contém que contém os pares chaves/valor para cada elemento do array

const arr = [10, 20, 30, 40, 50];

const arrIterator = arr.entries();

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());