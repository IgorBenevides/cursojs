// const carro = {
//     marca:'ford', 
//     modelo: 'ka', 
//     ano:2015, 
//     placa:'ABC-1234',
//     buzina: function () {alert ('Biiiiiiiii')},
//     cor:'Branco',
//     completo: function() {
//         return 'o modelo do carro é '+this.modelo+ ' e a marca é '+this.marca ;
//     }
// };


// console.log(carro.completo());



const carro = {
    marca:'ford', 
    ano:2010, 
    cor:'branco',
    motor: function () {alert('Bammm') },
    completo: function () {
        return this.marca+this.cor+this.ano},


};

console.log(carro.completo())

