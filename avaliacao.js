
//1
const nome = Tarcyane
const numero = 24

//2
const jogosFavoritos =["Roblox", "Mobile Lends", "Pol"];

//3
console.log("#### Exercício 3 ####");
console.log("Jogos Favoritos da Tarcyane são:")

let i = 0;
while (i < 3){
    console.log(jogosFavoritos[i]);
    i++;
}

//4
const filmeFavorito = {
    nome : nome,
    titulo : "Predador",
    lancamento : 2025,
    notaIMDb : 5.5 ,
};

//5
console.log("#### Exercício 5 ####")

if(filmeFavorito.notaI8MD <= 4.0){
    console.log("O filme possui uma nota considerada baixa.")
}

if(filmeFavorito.notaIBMD >=7.0){
    console.log("O filme é muito bom!")
}

if(filmeFavorito.notaIBMD >= 4.1 && filmeFavorito<= 7.0){
    console.log("O filme possui uma nota considerarda rasóvel .")
}

//6
const previsaoTempo = [
    {
        dia: "segunda",
        temperaturaMin: 14,
        temperaturaMax: 19,
        chanceDeChuva: 10
    },
    {
        dia: "terça",
        temperaturaMin: 13,
        temperaturaMax: 20,
        chanceDeChuva: 10
    },
    {
        dia: "quarta",
        temperaturaMin: 15,
        temperaturaMax: 22,
        chanceDeChuva: 80
    },
    {
        dia: "quinta",
        temperaturaMin: 13,
        temperaturaMax: 18,
        chanceDeChuva: 60
    },
    {
        dia: "sexta",
        temperaturaMin: 12,
        temperaturaMax: 16,
        chanceDeChuva: 40
    }
]

function verificaChuva(listaPrevisao) {
    let i = 0
    while (i < 5){
        if(listaPrevisao[i].chanceDeChuva >= 50){
            console.log(listaPrevisao[i].dia+": levar guarda chuva")
        }else{
        console.log(listaPrevisao[i].dia+":tempo agradável")
        }
    i++;
    }
}
verificaChuva(previsaoTempo);