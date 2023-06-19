alert(`Contador de numeros positivos

El programa termina cuando Ud pone cero o un nro. negativo`)
let contador = 1;
let numero = parseInt(prompt("Porfavor ponga un numero positivo"));
while (numero >= 1) {
    alert(`Ingreso el nro. positivo: ${numero}`);
    ++contador
    numero = parseInt(prompt("Porfavor ponga un numero positivo"))
}
alert(`Ingreso un total de ${contador} nros. positivos`)
console.log(`Ingreso un total de ${contador} nros. positivos`);





