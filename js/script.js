function calc() {
  let idade = document.getElementById("idade").value;
  let renda = parseFloat(document.getElementById("renda").value);
  let pessoas = parseInt(document.getElementById("pessoa").value);

  const hoje = new Date();
  const nasc = new Date(idade);
  let idadeconver = hoje.getFullYear() - nasc.getFullYear();

  let rendapercapita = renda / pessoas;

  if (idadeconver >= 16 && rendapercapita < 1500) {
    document.getElementById("retorno").innerHTML =
      "Seja Bem-Vindo,<br> Pode prosseguir!";
  } else if (idadeconver < 16) {
    document.getElementById("retorno").innerHTML =
      "Não foi possivel realizar o cadadstro.<br> IDADE ABAIXO DE 16 ANOS.";
  } else if (rendapercapita > 1500) {
    document.getElementById("retorno").innerHTML =
      "Não foi possivel realizar o cadastro.<br> RENDA ACIMA DE R$1500,00";
  } else {
    document.getElementById("retorno").innerHTML =
      "Preencha os campos acima.";
  }
}

// PAGINA2
function calcularmedia(){
    n1 = parseFloat(document.getElementById('n1').value);
    n2 = parseFloat(document.getElementById('n2').value);
    n3 = parseFloat(document.getElementById('n3').value);

    let media = (n1 + n2 + n3) / 3;
    console.log(media)
    document.getElementById('resultado').textContent = "Media: " + media.toFixed(2);
    return media
}

function calcularpresencas(){
    let dia1 = parseInt(document.querySelector('input[name = "dia1"]:checked').value)
    let dia1 = parseInt(document.querySelector('input[name = "dia1"]:checked').value)
    let dia1 = parseInt(document.querySelector('input[name = "dia1"]:checked').value)
    let dia1 = parseInt(document.querySelector('input[name = "dia1"]:checked').value)
    let dia1 = parseInt(document.querySelector('input[name = "dia1"]:checked').value)
    let dia1 = parseInt(document.querySelector('input[name = "dia1"]:checked').value)
    let dia1 = parseInt(document.querySelector('input[name = "dia1"]:checked').value)
    let dia1 = parseInt(document.querySelector('input[name = "dia1"]:checked').value)
    let dia10 = parseInt(document.querySelector('input[name = "dia10"]:checked').value)
    let dia11 = parseInt(document.querySelector('input[name = "dia11"]:checked').value)
    let dia12 = parseInt(document.querySelector('input[name = "dia12"]:checked').value)
    
}