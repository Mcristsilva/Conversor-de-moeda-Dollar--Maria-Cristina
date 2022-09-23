function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorEmReal = valorEmDolarNumerico * 6;
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "Resulto em Reais é R$" + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
  console.log(valorEmReal);
}
