$(document).ready(function() {//Essa linha de comando serve para indicar que o programa deve executar a função(function) somente quando a página(document) acabar de carregar, estiver pronta(.ready).
	/*$("#logotipo").on("mouseover", function() {//Nesta linha nos estamos dizendo que o programa deve executar a função quando passarmos o mouse(mouseover) por cima do logotipo. Como o logotipo tem identificação do tipo id utilizamos o #.
		console.log("Passou o mouse no logotipo!");
	});
	$("#logotipo").on("mouseover", function() {
		$("#banner h1").css({"color":"red", "font-size": "12em", "transition":"1s"})//Neste comando vamos alterar propriedades do css do h1 que está no id="banner" quando passarmos o mouse no logotipo. Para alterar apenas uma propriedade usamos somente o (), mas para alterar mais de uma temos que colocar {} dentro dos () e listar quais propriedades serão alteradas e para quais valores. A propriedade transition serve para mostrar a transformação que ocorre, demorando o tempo que determinamos.
	});
	*/
	$("#logotipo").on("mouseover", function() {
		$("#banner h1").addClass("efeito");//Nesse comando vamos adicionar uma classe que vai afetar o h1 e que vai ser executada ao passarmos o mouse no logotipo. No caso alterar o seu css(classe efeito está no arquivo css).
	}).on("mouseout", function() {//Podemos adicionar mais de uma condição a um elemento, para isso basta fazermos como nessa linha. Aqui vamos indicar o que deve acontecer quando o mouse sair de cima do logotipo.
		$("#banner h1").removeClass("efeito");
	});

	$("#input-search").on("focus", function() {
		$("li.search").addClass("ativo");
	}).on("blur", function() {//O blur seria o contrário do focus, quando o elemento não estiver mais selecionado
		$("li.search").removeClass("ativo");
	});

	$(".thumbnails").owlCarousel({//Aqui vamos configurar como o carrossel deve se comportar
		loop: true,//Aqui vamos dizer que ele deve passar no loop automaticamente
		nav: true,//Vamos adicionar uma navegação, para o usuário controlar o carrossel
		navText: ["Anterior", "Próximo"],//Aqui vamos indicar o texto que deve estar associado a navegação
		margin: 10,
		responsive: {//Aqui vamos declarar quantas imagens devem aparecer no carrossel dependendo do tamanho da tela
			0:{
				items: 1
			},
			480: {
				items: 2
			}, 
			768: {
				items: 4
			},
			1200: {
				items: 5
			},
		}
	});

	var owl = $('.owl-carousel');//Configurando as setas para passar para a notícia anterior ou posterior
	owl.owlCarousel();

	$("#btn-news-prev").on("click", function() {

		owl.trigger('prev.owl.carousel');

	});

	$("#btn-news-next").on("click", function() {

		owl.trigger('next.owl.carousel');

	});

	$("#page-up").on("click", function(event){//Aqui vamos programar o botão que retorna ao topo da página. Temos como paramêtro esse event, pois como é uma tag a, temos que evitar que o evento de a ocorrá.


		$("body").animate({//A classe animate serve para dizer que deve haver um efeito para subir, não deve apenas aparecer no topo.

			scrollTop: 0//A função scroll top serve para enviar a página a algum lugar no topo, como queremos o começo da página enviamos ao pixel zero.
	
		}, 1000);//Para o animate temos que determinar o tempo que queremos que demore para realizar a ação, em milisegundos.

		event.preventDefault();//Aqui removemos a função natural de evento.

	});

	$("#btn-bars").on("click", function(){

		$("header").toggleClass("open-menu");//O toggleClass adiciona ou remove uma classe ao elemento.

	});

	$("#menu-mobile-mask, .btn-close").on("click", function() {//Podemos declarar a mesma função a mais de um elemento somente separando os elementos por ',' antes de indicar em qual momento ativar a função

		$("header").removeClass("open-menu");

	});

	$("#btn-search").on("click", function(){

		$("header").toggleClass("open-search");

		$("#input-search-mobile").focus();

	});

});