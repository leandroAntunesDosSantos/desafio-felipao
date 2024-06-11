const btb = document.querySelector("#send");

btb.addEventListener("click", function (e) {
    e.preventDefault();

    let nameInput = document.querySelector("#name").value;

    let victoryInput = document.querySelector("#victory").value;
    let defeatInput = document.querySelector("#defeat").value;

    let pointsInput = saldoTotal(victoryInput, defeatInput);


    let level = "";

    if (pointsInput < 10) {
        level = "Ferro";
    } else if (pointsInput >= 11 && pointsInput <= 20) {
        level = "Bronze";
    } else if (pointsInput >= 21 && pointsInput <= 50) {
        level = "Prata";
    } else if (pointsInput >= 51 && pointsInput <= 80) {
        level = "Ouro";
    } else if (pointsInput >= 81 && pointsInput <= 90) {
        level = "Diamante";
    } else if (pointsInput >= 91 && pointsInput <= 100) {
        level = "Lendário";
    } else if (pointsInput >= 101) {
        level = "Imortal";
    } 

    const mostrar = document.querySelector("#mostrar");
    mostrar.innerHTML = `O Herói de nome ${nameInput} tem de saldo ${pointsInput} está no nível de ${level}`;
    
});


function saldoTotal(victoryInput, defeatInput){
    return victoryInput - defeatInput;
}