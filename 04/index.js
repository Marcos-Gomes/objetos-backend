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

for (let usuario of usuarios) {
    const { nome, idade, maior_idade } = usuario;
    if (usuario.idade >= 18) {
        console.log({ nome, idade, maior_idade: true });
    } else {
        console.log({ nome, idade, maior_idade: false });
    }
}