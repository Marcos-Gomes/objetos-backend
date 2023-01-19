const usuarios = [
    {
        nome: "João",
        idade: 25
    },
    {
        nome: "Ana",
        idade: 18
    },
    {
        nome: "Beatriz",
        idade: 15
    },
    {
        nome: "Carlos",
        idade: 16
    },
    {
        nome: "Antonio",
        idade: 32
    }
];

let adultos = [];
let jovens = [];

for (let i = 0; i < usuarios.length; i++) {
    if (usuarios[i].idade >= 18) {
        adultos.push(usuarios[i]);
    } else {
        jovens.push(usuarios[i]);
    }
}
console.log("adultos", adultos);
console.log("jovens", jovens);