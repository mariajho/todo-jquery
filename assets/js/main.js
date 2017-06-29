$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var datos = $("#tarea").val();
		if(datos == ""){
			alert("Ingresa una tarea");	
		}
		else{
			$("#checkear").append("<div><span class='center-align'>"+ '<br>' + '<input type="checkbox" id="test5" /><label for="test5"></label>' + '<br>' + datos + '<br>' + '<button id="botoncito">Remove</button>');	
		}
	});
});


