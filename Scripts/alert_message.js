function mostrar_msj_success_ordencompra(mensaje) {


    var type = BootstrapDialog.TYPE_SUCCESS;
    var $titulo = $('<div style="font-weight: bold;"> Operación Exitosa</div>');
    var $textAndPic = $('<div class="tipo_msj_success"></div>');
    $textAndPic.append('<img alt="" src="../../images/accept32x32.png" height="32" width="32" />');
    $textAndPic.append(mensaje);
    BootstrapDialog.configDefaultOptions({
        cssClass: 'cuadro-dialog',
        buttons: [{
            cssClass: 'btn-success center-block',
            icon: 'glyphicon glyphicon-check'
        }],
    });
    BootstrapDialog.alert({
        title: $titulo,
        message: $textAndPic,
        //    closable: true,
        //    closeByBackdrop: false,
        //    closeByKeyboard: false,
        type: type, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
        closable: true, // <-- Default value is false
        draggable: true, // <-- Default value is false
        buttonLabel: 'Aceptar', // <-- Default value is 'OK',
        callback: function (result) {
            $("#ajax_loader").css("display", "");
            var href_url = "/OrdenCompras/GenerarOC/";
            $.ajax({
                async: false,
                type: "POST",
                url: href_url,
                contentType: "application/json; charset=utf-8",
                dataType: false,
                success: function (result) {
                    $("#ajax_loader").css("display", "none");
                    if (result == -1) {
                        mostrar_msj_error("Su Sessión a ha expirado. Ingrese al Sistema nuevamente");
                        window.location.href = "/../Home/Login";
                    } else {
                        $("#genera_oc").click();
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    mostrar_msj_error("error de Conexion");
                }
            });
        }
    });

}

function mostrar_msj_success_ordencompraaprobada(mensaje) {


    var type = BootstrapDialog.TYPE_SUCCESS;
    var $titulo = $('<div style="font-weight: bold;"> Operación Exitosa</div>');
    var $textAndPic = $('<div class="tipo_msj_success"></div>');
    $textAndPic.append('<img alt="" src="../../images/accept32x32.png" height="32" width="32" />');
    $textAndPic.append(mensaje);
    BootstrapDialog.configDefaultOptions({
        cssClass: 'cuadro-dialog',
        buttons: [{
            cssClass: 'btn-success center-block',
            icon: 'glyphicon glyphicon-check'
        }],
    });
    BootstrapDialog.alert({
        title: $titulo,
        message: $textAndPic,
        //    closable: true,
        //    closeByBackdrop: false,
        //    closeByKeyboard: false,
        type: type, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
        closable: true, // <-- Default value is false
        draggable: true, // <-- Default value is false
        buttonLabel: 'Aceptar', // <-- Default value is 'OK',
        callback: function (result) {
            listar_Ordenes();
            $("#modal_enviocorreo").modal("show");
        }
    });

}



function mostrar_msj_advertencia(mensaje) {
    BootstrapDialog.closeAll();
    var type = BootstrapDialog.TYPE_WARNING;
    var $titulo = $('<div style="font-weight: bold;">  Advertencia</div>');
    var $textAndPic = $('<div class="tipo_msj_warning"></div>');
    $textAndPic.append('<img alt="" src="../../images/warning32x32.png" height="32" width="32" />');
    $textAndPic.append(mensaje);

    var dialog = new BootstrapDialog({
        type: type,
        title: $titulo,
        message: $textAndPic,
        cssClass: 'cuadro-dialog',
        buttons: [{
            label: 'Aceptar',
            cssClass: 'btn-warning center-block',
            action: function (dialog) {
                dialog.close();
            }
        }]
    });
    dialog.open();
}

function mostrar_msj_error_volverIniciar(mensaje, ruta_login) {

    var type = BootstrapDialog.TYPE_DANGER;
    var $titulo = $('<div style="font-weight: bold;">  Ha Ocurrido un Error</div>');
    var $textAndPic = $('<div class="tipo_msj_error"></div>');
    $textAndPic.append('<img alt="" src="../../images/error.png" height="32" width="32" />');
    $textAndPic.append(mensaje);
    BootstrapDialog.configDefaultOptions({
        cssClass: 'cuadro-dialog',
        buttons: [{
            cssClass: 'btn-danger center-block',
            icon: 'glyphicon glyphicon-check'
        }],
    });
    BootstrapDialog.alert({
        title: $titulo,
        message: $textAndPic,
        //    closable: true,
        //    closeByBackdrop: false,
        //    closeByKeyboard: false,
        type: type, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
        closable: true, // <-- Default value is false
        draggable: true, // <-- Default value is false
        buttonLabel: 'Aceptar', // <-- Default value is 'OK',
        callback: function (result) {
            window.location.href = ruta_login;
        }
    });

}
function mostrar_msj_error_accionClick(mensaje, id_accion_click) {

    var type = BootstrapDialog.TYPE_DANGER;
    var $titulo = $('<div style="font-weight: bold;">  Ha Ocurrido un Error</div>');
    var $textAndPic = $('<div class="tipo_msj_error"></div>');
    $textAndPic.append('<img alt="" src="../../images/error.png" height="32" width="32" />');
    $textAndPic.append(mensaje);
    BootstrapDialog.configDefaultOptions({
        cssClass: 'cuadro-dialog',
        buttons: [{
            cssClass: 'btn-danger center-block',
            icon: 'glyphicon glyphicon-check'
        }],
    });
    BootstrapDialog.alert({
        title: $titulo,
        message: $textAndPic,
        //    closable: true,
        //    closeByBackdrop: false,
        //    closeByKeyboard: false,
        type: type, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
        closable: true, // <-- Default value is false
        draggable: true, // <-- Default value is false
        buttonLabel: 'Aceptar', // <-- Default value is 'OK',
        callback: function (result) {
            $("#" + id_accion_click).click();
        }
    });

}

function mostrar_msj_error(mensaje) {
    BootstrapDialog.closeAll();
    var type = BootstrapDialog.TYPE_DANGER;
    var $titulo = $('<div style="font-weight: bold;">  Ha Ocurrido un Error</div>');
    var $textAndPic = $('<div class="tipo_msj_error"></div>');
    $textAndPic.append('<img alt="" src="../../images/error.png" height="32" width="32" />');
    $textAndPic.append(mensaje);

    var dialog = new BootstrapDialog({
        type: type,
        title: $titulo,
        message: $textAndPic,
        cssClass: 'cuadro-dialog',
        buttons: [{
            label: 'Aceptar',
            cssClass: 'btn-danger center-block',
            action: function (dialog) {
                dialog.close();
            }
        }]
    });
    dialog.open();
}

function mostrar_msj_success(mensaje) {

    BootstrapDialog.closeAll();
    var type = BootstrapDialog.TYPE_SUCCESS;
    var $titulo = $('<div style="font-weight: bold;"> Operación Exitosa</div>');
    var $textAndPic = $('<div class="tipo_msj_success"></div>');
    $textAndPic.append('<img alt="" src="../../images/accept32x32.png" height="32" width="32" />');
    $textAndPic.append(mensaje);

    var dialog = new BootstrapDialog({
        type: type,
        title: $titulo,
        message: $textAndPic,
        cssClass: 'cuadro-dialog',
        buttons: [{
            label: 'Aceptar',
            cssClass: 'btn-success center-block',
            action: function (dialog) {
                dialog.close();
            }
        }]
    });
    dialog.open();

}
function mostrar_msj_success_focus(mensaje, idfocus) {

    BootstrapDialog.closeAll();
    var type = BootstrapDialog.TYPE_SUCCESS;
    var $titulo = $('<div style="font-weight: bold;"> Operación Exitosa</div>');
    var $textAndPic = $('<div class="tipo_msj_success"></div>');
    $textAndPic.append('<img alt="" src="../../images/accept32x32.png" height="32" width="32" />');
    $textAndPic.append(mensaje);

    var dialog = new BootstrapDialog({
        type: type,
        title: $titulo,
        message: $textAndPic,
        cssClass: 'cuadro-dialog',
        buttons: [{
            label: 'Aceptar',
            cssClass: 'btn-success center-block redireccionar',
            action: function (dialog) {
                dialog.close();
                $("#" + idfocus).focus();
            }
        }]
    });

    dialog.open();

}
function mostrar_msj_success_redireccion(mensaje, redireccionar_vista) {

    BootstrapDialog.closeAll();
    var type = BootstrapDialog.TYPE_SUCCESS;
    var $titulo = $('<div style="font-weight: bold;"> Operación Exitosa</div>');
    var $textAndPic = $('<div class="tipo_msj_success"></div>');
    $textAndPic.append('<img alt="" src="../../images/accept32x32.png" height="32" width="32" />');
    $textAndPic.append(mensaje);

    var dialog = new BootstrapDialog({
        type: type,
        title: $titulo,
        message: $textAndPic,
        cssClass: 'cuadro-dialog',
        buttons: [{
            label: 'Aceptar',
            cssClass: 'btn-success center-block redireccionar',
            action: function (dialog) {
                dialog.close();
                window.location.href = redireccionar_vista;
            }
        }]
    });

    dialog.open();

}

function mostrar_msj_success_accionClick(mensaje, id_accion_click) {

    var type = BootstrapDialog.TYPE_SUCCESS;
    var $titulo = $('<div style="font-weight: bold;"> Operación Exitosa</div>');
    var $textAndPic = $('<div class="tipo_msj_success"></div>');
    $textAndPic.append('<img alt="" src="../../images/accept32x32.png" height="32" width="32" />');
    $textAndPic.append(mensaje);
    BootstrapDialog.configDefaultOptions({
        cssClass: 'cuadro-dialog',
        buttons: [{
            cssClass: 'btn-success center-block redireccionar',
            icon: 'glyphicon glyphicon-check'
        }],
    });
    BootstrapDialog.alert({
        title: $titulo,
        message: $textAndPic,
        //    closable: true,
        //    closeByBackdrop: false,
        //    closeByKeyboard: false,
        type: type, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
        closable: true, // <-- Default value is false
        draggable: true, // <-- Default value is false
        buttonLabel: 'Aceptar', // <-- Default value is 'OK',
        callback: function (result) {
            $("#" + id_accion_click).click();
        }
    });

}