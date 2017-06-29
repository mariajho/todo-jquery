$(document).ready(function(){
	$("button").click(function(e){
		e.preventDefault();
		var datos = $("#tarea").val();
		if(datos == ""){
			alert("Ingresa una tarea");	
		}
		else{
			$("#checkear").append("<div><span class='center-align'>"+'<br>' + datos + '<br>' + '<button>Remove</button>');	
		}
	});
});
