/**
 * Função Auxiliar (Função Pura) para determinar o Nível do Herói.
 * Utiliza estruturas condicionais (if/else if/else) e o saldo de vitórias.
 * @param {number} saldoVitorias - O saldo de partidas (vitórias - derrotas).
 * @returns {string} O nome do Nível Rankeado.
 */
function determinarNivel(saldoVitorias) {
    let nivel = "";

    // A ordem dos 'if' é crucial. Deve-se ir do menor para o maior,
    // ou do maior para o menor, garantindo que os intervalos sejam exclusivos.
    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        // A condição 'maior ou igual a 101' cobre a regra 'maior que 101'
        // e é a última faixa.
        nivel = "Imortal";
    } else {
        // Caso o saldo seja negativo (derrotas > vitórias) ou zero
        nivel = "Não Rankeado ou Ferro (Saldo Zero/Negativo)"; 
    }

    return nivel;
}


/**
 * Função Principal para calcular o Rank e exibir a mensagem final.
 * Recebe as entradas do jogador.
 * @param {number} vitorias - Quantidade de vitórias do jogador.
 * @param {number} derrotas - Quantidade de derrotas do jogador.
 */
function calcularRank(vitorias, derrotas) {
    // 1. Variável para o Saldo de Rankeadas
    const saldoVitorias = vitorias - derrotas;

    // 2. Determinar o Nível chamando a função auxiliar
    const nivel = determinarNivel(saldoVitorias);

    // 3. Exibir a mensagem de saída
    const mensagemFinal = `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
    
    // Podemos usar 'console.log' para o ambiente de desenvolvimento
    console.log("--- Resultado da Partida Rankeada ---");
    console.log(mensagemFinal);
    console.log(`Vitórias: ${vitorias}, Derrotas: ${derrotas}`);
    console.log("-------------------------------------");

    // Retorna o resultado como um objeto (boa prática)
    return {
        saldo: saldoVitorias,
        nivel: nivel,
        mensagem: mensagemFinal
    };
}


// --- Exemplos de Uso (Testes da Função) ---

// Exemplo 1: Ferro (Vitórias < 10)
calcularRank(7, 3); // Saldo: 4 -> Ferro

// Exemplo 2: Ouro (Entre 51 e 80)
calcularRank(120, 55); // Saldo: 65 -> Ouro

// Exemplo 3: Lendário (Entre 91 e 100)
calcularRank(105, 10); // Saldo: 95 -> Lendário

// Exemplo 4: Imortal (Maior ou igual a 101)
calcularRank(150, 40); // Saldo: 110 -> Imortal

// Exemplo 5: Bronze (Entre 11 e 20)
calcularRank(30, 15); // Saldo: 15 -> Bronze