let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index = 0; index < numbers.length; index += 1){

    console.log(numbers[index]);
}
console.log('--------------------')

let counter=0;

for(let index = 0; index < numbers.length; index += 1){
    counter = counter + numbers[index]
console.log('Soma Parcial: ' + (counter));
}
console.log('Soma Final :' + (counter));
console.log('Número de Elementos: ' + (numbers.length));

let mediaaritmetica = counter/numbers.length;

console.log('Média Aritmética: ' + (counter/numbers.length));

if(mediaaritmetica>20){
    console.log('Media Maior que 20');
}
else{
    console.log('Media Menor que 20');
}

let maior=0;

for(let index = 0; index < numbers.length; index += 1){

    if(numbers[index]>maior){
        maior =numbers[index]
    }

}
console.log('Maior Número ' + maior);

let contadori = 0;

for(let index = 0; index < numbers.length; index += 1){

    if(numbers[index] % 2 == 1){
        contadori +=1;
    }

}
console.log('Contador de Ímpar: ' + contadori);







