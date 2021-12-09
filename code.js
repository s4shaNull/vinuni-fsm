$(document).ready(function(){
	
	$(".btn").click(function(){
		
		var main_typeState = parseInt($("input[name='main_type']:checked").val());
		var qtdStates = parseInt($("option:selected").val());
		var qtdmain_inputs = parseInt("1");
		var qtdmain_outputs = parseInt("1");
		
		var tp = "Mealy";
		if(main_typeState == 1) tp = "Moore";
		
		qtdStates++;
		
		var main_table = $("textarea[name='text_area']").val();
		var vectorTop = main_table.replace( /\n/g," ").split(" ");
		for(var i = 0; i < vectorTop.length; i++){
			vectorTop[i] = parseInt(vectorTop[i],10);
		}
		
		localStorage.setItem("main_typeMachine",main_typeState);
		localStorage.setItem("qtdEst",qtdStates);
		localStorage.setItem("vetTop",vectorTop);
		window.open("simulation.html");
		
	});
	
});
