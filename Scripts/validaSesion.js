$(document).ready(function () {

    $(".menu_navegacion").click(function (ev) {
        ev.preventDefault();
 
        var controlador = $(this).data("controlador");
        var vista = $(this).data("vista");
        var href = "/" + $(this).attr('href');
        href = "/ValidaSesion/esActiva/";
        $.post(href, function (data) {
            /// Ponemos la respuesta de nuestro script en el DIV recargado
            if (data == -1) {
                mostrar_msj_error_volverIniciar("Sus variable de Sessión ha expirado, debe volver a loguearse", "/../Home/Login")
            } else if (data == -3) {
                mostrar_msj_error_accionClick("Debe Seleccionar Empresa Primero", "administrar_establecerEmpresa");

            } else if (data == -4) {
                mostrar_msj_error_accionClick("Debe Seleccionar Obra", "administrar_establecerObra");
            }
            else if (data == -5) {
                mostrar_msj_error_accionClick("Para Ingresar Solicitud, la obra establecida debe tener presupuesto aprobado", "administrar_ingresarPresupuestos");
            }
            else {
                href = "/"+controlador+"/"+vista+"/";
                window.location = href;
            }
        });
    });
});
