/*Responsável por adicionar interação no nosso site, ou seja, o que o site deve fazer quando algo acontecer*/

/*
alert("Olá mundo!!");//Função já pré-definida dentro do javascript, que envia um alerta com uma mensagem ao usuário assim que abrir a página

var resposta = confirm("Deseja excluir?");//Aqui vamos atribuir o valor gerado pelo confirm na variável resposta
console.log(resposta);//Aqui imprime o valor da resposta no console
*/

var a = 10;
var b = 20;

alert(a+b);

function somar(a, b){//Criamos uma função para realizar a soma de dois elementos
	return parseInt(a) + parseInt(b);
}

console.log(somar(5,7));//Chamamos a função para calcular os valores nos parentêses. E depois imprimimos o resultado no console

//Criando uma escuta para um evento
/*O querySelector permite selecionar alguém do documento. Como queremos selecionar alguém que tem um id, o identificamos com (#Nome_id). Depois de identificar onde queremos que o 
evento ocorra adicionamos um addEventListener para que ele saiba o que ele deve esperar que ocorra e se ocorrer deve fazer o que a função determinar.*/
document.querySelector("#calcular").addEventListener("click", function() {
	let valorA = document.querySelector("#valorA").value;//Usamos o value para trazer apenas o valor que tem dentro desse documento
	let valorB = document.querySelector("#valorB").value;
	if(valorA.length > 0 && valorB.length > 0){//Verificamos se os valores tem algum dado, se os dois espaços de input tem algum valor
		somar(valorA, valorB);
	}else{
		alert("Entre com os valores para calcular");
	}
});