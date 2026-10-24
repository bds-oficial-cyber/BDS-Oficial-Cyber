const canvas = document.getElementById("matrix")
const ctx = canvas.getContext("2d");
let largura = window.innerWidth;
let altura = window.innerHeight;
canvas.width = largura;
canvas.height = altura;
const caracteres = "アカサタナハマヤラワ0123456789";
const cores = ["#001A4D", "#003B8E", "#0066CC"];
const tamanhoFonte = 16;
const velocidade = 0.5;
const colunas = Math.floor(largura / tamanhoFonte);
const gotas = [];
const coresColunas = [];
for (let i = 0; i < colunas; i++) {
    gotas[i] = 1;
    coresColunas[i] = cores[Math.floor(Math.random() * cores.length)];
}

ctx.fillStyle = "#00FF41";
ctx.font = tamanhoFonte + "px monospace";

function animar() {
    ctx.clearRect(0, 0, largura, altura);
    ctx.fillStyle = "rgba(8, 10, 13, 0.08)";
    ctx.fillRect(0, 0, largura, altura);

    ctx.fillStyle = cores[Math.floor(Math.random() * cores.length)];

    for (let i = 0; i < gotas.length; i++) {
        const texto = caracteres[Math.floor(Math.random() * caracteres.length)];

        ctx.fillText(texto, i * tamanhoFonte, gotas[i] * tamanhoFonte);

        if (gotas[i] * tamanhoFonte > altura && Math.random() > 0.975) {
            gotas[i] = 0;
        }

        gotas[i] += velocidade;
    }

    requestAnimationFrame(animar);
}

animar();

