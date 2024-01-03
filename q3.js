const verificarNumero = () => {
    return new Promise((resolve, reject) => {
        const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

        if (numeroAleatorio > 5) {
            resolve("Número alto!");
        } else {
            reject("Número baixo!");
        }
    });
};

// Exemplo de uso:
verificarNumero()
    .then(mensagem => console.log(mensagem))
    .catch(erro => console.error(erro));
