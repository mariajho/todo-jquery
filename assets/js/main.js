$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var datos = $("#tarea").val();
		if(datos == ""){
			alert("Ingresa una tarea");	
		}
		else{
			$("#checkear").append("<div><span class='center-align'>"+ '<br>' + '<span class="glyphicon glyphicon-unchecked"></span>' + '<br>' + datos + '<br>' + '<button id="botoncito">Remove</button>');	
		}
	});
});


