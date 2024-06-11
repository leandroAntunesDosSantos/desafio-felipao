const btb = document.querySelector("#send");

btb.addEventListener("click", function (e) {
    e.preventDefault();

    let nameInput = document.querySelector("#name").value;

    let pointsInput = document.querySelector("#points").value;

    let level = "";

    if (pointsInput < 1000) {
        level = "Ferro";
    } else if (pointsInput >= 1001 && pointsInput <= 2000) {
        level = "Bronze";
    } else if (pointsInput >= 2001 && pointsInput <= 5000) {
        level = "Prata";
    } else if (pointsInput >= 5001 && pointsInput <= 7000) {
        level = "Ouro";
    } else if (pointsInput >= 7001 && pointsInput <= 8000) {
        level = "Platina";
    } else if (pointsInput >= 8001 && pointsInput <= 9000) {
        level = "Ascendente";
    } else if (pointsInput >= 9001 && pointsInput <= 10000) {
        level = "Imortal";
    } else if (pointsInput >= 10001) {
        level = "Radiante";
    }

    const mostrar = document.querySelector("#mostrar");
    mostrar.innerHTML = `O Herói de nome ${nameInput} está no nível de ${level}`;
});
