function calc() {
    let idade = document.getElementById('idade').value;
    let renda = parseFloat(document.getElementById('renda').value);
    let pessoas = parseInt(document.getElementById('pessoa').value);

    const hoje = new Date();
    const nasc = new Date(idade);
    let idadeconver = hoje.getFullYear() - nasc.getFullYear();

    rendapercapita = (renda / pessoas)
}