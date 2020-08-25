// Lê o array e retorna o primeiro item deste array que satisfaz a uma determinada condição

const arr = [10, 20, 30, 40, 50];

const findFirstGreaterThanTen = arr.find(value => value > 10);
console.log(findFirstGreaterThanTen);
