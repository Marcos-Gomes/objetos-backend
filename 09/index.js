const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
];

let posicao = 0;
let nome = "";

for (let i = 0; i < participantes.length; i++) {
    if (participantes[i].nome === "Carlos") {
        posicao = i + 1;
        nome = participantes[i].nome;
    }
}

console.log(`Galera... O ${nome} está na posição ${posicao}, corre lá!`);