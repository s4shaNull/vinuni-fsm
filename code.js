$(document).ready(function(){
	
	$(".btn").click(function(){
		
		var main_typeEstado = parseInt($("input[name='main_type']:checked").val());
		var qtdEstados = parseInt($("option:selected").val());
		var qtdmain_inputs = parseInt("1");
		var qtdSaidas = parseInt("1");
		
		var tp = "Mealy";
		if(main_typeEstado == 1) tp = "Moore";
		
		qtdEstados++;
		
		var tabela = $("textarea[name='text_area']").val();
		var vetorTop = tabela.replace( /\n/g," ").split(" ");
		for(var i = 0; i < vetorTop.length; i++){
			vetorTop[i] = parseInt(vetorTop[i],10);
		}
		
		localStorage.setItem("main_typeMaquina",main_typeEstado);
		localStorage.setItem("qtdEst",qtdEstados);
		localStorage.setItem("vetTop",vetorTop);
		window.open("simulation.html");
		
	});
	
});
