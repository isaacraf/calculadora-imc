function calculateIMC() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById("resultado").innerHTML = "Valores inválidos para peso ou altura.";
    } else {
        const imc = weight / (height * height);
        document.getElementById("resultado").innerHTML = "Seu IMC é: " + imc.toFixed(2);
    }
}