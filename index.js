const pizzas = [{
    id: 1,
    nombre: "Napolitana",
    ingredientes: ["tomate", "queso mozzarella", "ajo", "aceite de oliva"],
    precio: 1600},
{
    id: 2,
    nombre: "Margarita",
    ingredientes: ["salsa de tomate", "queso mozzarella", "albahaca"],
    precio: 500},
{
    id: 3,
    nombre: "Cuatro Quesos",
    ingredientes: ["queso muzzarela", "queso gorgonzola", "queso parmesano", "queso fontina"],
    precio: 1300},
{
    id: 4,
    nombre: "Pepperoni",
    ingredientes: ["salsa de tomate", "muzzarela", "pepperoni"],
    precio: 1200},
{
    id: 5,
    nombre: "Hongos",
    ingredientes: ["muzzarella", "champignon", "portobellos"],
    precio: 400},
{
    id: 6,
    nombre: "jamon y morron",
    ingredientes: ["Jamon", "muzzarella", "morron"],
    precio: 1400}

]

console.log("-----------------------------------------------------------------------------");

console.log("a)  Las pizzas que tengan un id impar");

for (let index = 0; index < 6; index++) {
if (pizzas[index].id % 2 != 0) {
    console.log("La pizza de " + pizzas[index].nombre + " tiene el ID impar " + pizzas[index].id);}
}

console.log("-----------------------------------------------------------------------------");

console.log("b) ¿Hay alguna pizza que valga menos de $600?");

console.log("Las pizzas con un valor menor a $600 son: ")

for (let index = 0; index < 6; index++) {
if (pizzas[index].precio <= 600) {
    console.log(pizzas[index].nombre + " con el ID " + pizzas[index].id + " ($" + pizzas[index].precio + ")");}
}

console.log("-----------------------------------------------------------------------------");

console.log("c) El nombre de cada pizza con su respectivo precio.");

for (let index = 0; index < 6; index++) {

console.log("La pizza " + pizzas[index].nombre + " tiene un valor de: $" + pizzas[index].precio);

}

console.log("--------------------------------------------------------------------------");

console.log("d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual)");

for (let index = 0; index < 6; index++) {

console.log("La pizza " + pizzas[index].nombre + " tiene los siguientes ingredientes:");

for (let index1 = 0; index1 < 3; index1++) {

console.log(pizzas[index].ingredientes[index1]);}
console.log("/////////////////////////////////////////////////")}