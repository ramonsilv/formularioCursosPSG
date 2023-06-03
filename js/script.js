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
