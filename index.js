nivel_alcancado = "Ferro"

while (nivel_alcancado !== "Imortal"){  
    vitorias = Math.floor(Math.random() * 101);
    derrotas = Math.floor(Math.random() * 101);
    nivel_alcancado = atribuidorDeNivelDeJogador(vitorias,derrotas)
    saldo_de_vitorias = calcular_saldo_de_vitorias(vitorias,derrotas)
    console.log(`O Herói tem de saldo de ${saldo_de_vitorias} está no nível de ${nivel_alcancado}`)
}
function calcular_saldo_de_vitorias(vitorias,derrotas){
    saldo_de_vitorias = vitorias - derrotas
    return saldo_de_vitorias
}

function atribuidorDeNivelDeJogador(vitorias,_derrotas) {
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    return nivel
}
