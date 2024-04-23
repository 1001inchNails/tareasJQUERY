$(document).ready(function() {
    $("#agregar").click(function() {
        var inputTexto = $("#textoTarea").val();
        // Recuerda que no hay input si se agrega sin texto
        if (inputTexto.trim() === '') {
            alert('Por favor, introduzca una tarea');
            return;
        };
        
        var nuevaTarea = $("<li>" + inputTexto + "</li>");
        
        var borrarBTN = $("<button>Borrar</button>");
        var validarBTN = $("<button>Validar</button>");
        
        nuevaTarea.append(" ");
        nuevaTarea.append(borrarBTN).append(validarBTN);
        $("#listaTareas").append(nuevaTarea);
    });

    $("#listaTareas").on('click', 'button:contains("Borrar")', function() {
        $(this).parent().remove();
    });

    $("#listaTareas").on('click', 'button:contains("Validar")', function() {
        // Comprueba si el boto ha sido pulsado
        var esVerde = $(this).data('esVerde');
        if (esVerde) {
            // Si lo ha sido, lo cambia a negro
            $(this).parent().css("color", "black");
        } else {
            // Si no ha sido clickeado antes, lo cambia a verde
            $(this).parent().css("color", "green");
        }
        // Cambia la flag de comprobacion
        $(this).data('esVerde', !esVerde);
    });
});
