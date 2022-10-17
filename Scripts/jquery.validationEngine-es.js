function valida_correo(correo) {
    var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (emailRegex.test(correo)) {
        return true;

    } else {
        return false;
    }

}
function valida_periodo_mes(mes_periodo) {
    var retorno = true;
    if (mes_periodo != "") {
        var mes_elegido_ = ($('#id_mes').html()).trim();
        var periodo_elegido = ($('#id_anio').html()).trim();
        if (mes_periodo.indexOf('-') != -1) {
            var mes_periodo_arr = mes_periodo.split('-');
        } else if (mes_periodo.indexOf('/') != -1) {
            var mes_periodo_arr = mes_periodo.split('/');

        }
        var mes_arr = mes_periodo_arr[1];
        if (mes_arr.length == 1) {
            mes_arr = "0" + mes_arr;
        }
        if (mes_elegido_.length == 1) {
            mes_elegido_ = "0" + mes_elegido_;
        }

        if (mes_arr == mes_elegido_ && periodo_elegido == mes_periodo_arr[2]) {
            retorno = true;
        } else {
            retorno = false;
        }
    }
    return retorno;
}

function valida_codigousuario_repetido_acceso(codigo) {

    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '/Usuarios/codigousuario_repetido_acceso/',                     
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {

            if (data == 1) {
                retorno = true;
                //alert("retorno verdadero dentro de ajax");
            } else if (data == 2) {
                retorno = false;
                //alert("retorno falso dentro de ajax")
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}

function valida_codigo_repetido_empresa(codigo) {

    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/codigo_repetido_empresa/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
                //alert("retorno verdadero dentro de ajax");
            } else if (data == 2) {
                retorno = false;
                //alert("retorno falso dentro de ajax")
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}

function valida_rut_repetido_empresa(rut) {

    var fd = new FormData();
    var retorno = true;
    fd.append("rut", rut);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/rut_repetido_empresa/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
                //alert("retorno verdadero dentro de ajax");
            } else if (data == 2) {
                retorno = false;
                //alert("retorno falso dentro de ajax")
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}

function valida_rut_repetido_ruts(rut) {
    var fd = new FormData();
    var retorno = true;
    fd.append("rut", rut);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/codigo_repetido_ruts/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
            } else if (data == 2) {
                retorno = false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}
function valida_rut_repetido_proveedor(rut) {
    var fd = new FormData();
    var retorno = true;
    fd.append("rut", rut);
    $.ajax({
        async: false,
        type: "POST",
        url: '/Proveedores/rut_repetido_proveedor/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
            } else if (data == 2) {
                retorno = false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;
        }
    });
    return retorno;
}
function valida_rut_repetido_chofer(rut) {
    var fd = new FormData();
    var retorno = true;
    fd.append("rut", rut);
    $.ajax({
        async: false,
        type: "POST",
        url: '/Choferes/rut_repetido_chofer/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
            } else if (data == 2) {
                retorno = false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}
function valida_rut_repetido_cliente(rut) {
    var fd = new FormData();
    var retorno = true;
    fd.append("rut", rut);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/rut_repetido_cliente/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
            } else if (data == 2) {
                retorno = false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}

function verifica_existencia_rut_ruts(rut) {
    var fd = new FormData();
    var retorno = true;
    fd.append("rut", rut);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/existe_rut_ruts/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
            } else if (data == 2) {
                retorno = false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}


function valida_codigo_repetido_centro(codigo) {
    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/codigo_repetido_centros/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
            } else if (data == 2) {
                retorno = false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}



function valida_codigo_repetido_tipodocumento(codigo) {
    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/codigo_repetido_tipodocumentos/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
            } else if (data == 2) {
                retorno = false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}

function valida_codigo_existente_centro(codigo) {
    var fd = new FormData();
    var retorno = true;
    if (codigo != "0") {
        fd.append("codigo", codigo);
        $.ajax({
            async: false,
            type: "POST",
            url: '../../Validacionesdb/codigo_existe_centros/',
            data: fd,
            DataType: 'json',
            contentType: false,
            processData: false,
            success: function (data) {
                if (data == 1) {
                    retorno = true;
                } else if (data == 2) {
                    retorno = false;
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
                retorno = false;
                return retorno;

            }
        });
    }
    return retorno;
}

function valida_codigo_repetido_ifrs(codigo) {
    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/codigo_repetido_ifrs/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
            } else if (data == 2) {
                retorno = false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}


function valida_codigo_repetido_grupo(codigo) {
    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/codigo_repetido_grupo/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
            } else if (data == 2) {
                retorno = false;
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}

function valida_codigo_repetido_codfin(codigo) {
    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/codigo_repetido_codfin/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
            } else if (data == 2) {
                retorno = false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}


function valida_codigo_repetido_cuenta(codigo) {
    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/codigo_repetido_cuenta/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
            } else if (data == 2) {
                retorno = false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}

//se puede usar la misma funcion de arriba, pero no es conveniente en caso de error, ya que retornaria un false esperando un true en caso de error
function valida_codigo_existente_cuenta(codigo) {
    var retorno = true;
    if (codigo != "") {
        var fd = new FormData();
        fd.append("codigo", codigo);
        $.ajax({
            async: false,
            type: "POST",
            url: '../../Validacionesdb/codigo_exite_cuenta/',
            data: fd,
            DataType: 'json',
            contentType: false,
            processData: false,
            success: function (data) {

                if (data == 1) {
                    retorno = true;
                } else if (data == 2) {
                    retorno = false;
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
                retorno = false;
                return retorno;

            }
        });
    }
    return retorno;
}
function valida_codigo_repetido_actividad(codigo) {

    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/codigo_repetido_actividad/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
                //alert("retorno verdadero dentro de ajax");
            } else if (data == 2) {
                retorno = false;
                //alert("retorno falso dentro de ajax")
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}
function valida_codigo_repetido_producto(codigo) {
    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Productos/codigo_existe_producto/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
            } else if (data == 2) {
                retorno = false;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}

function valida_tipo_repetido_sucursal(tipo) {

    var fd = new FormData();
    var retorno = true;
    fd.append("tipo", tipo);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/tipo_repetido_sucursal/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
                //alert("retorno verdadero dentro de ajax");
            } else if (data == 2) {
                retorno = false;
                //alert("retorno falso dentro de ajax")
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}

function valida_codigo_repetido_partida(partida) {

    var fd = new FormData();
    var retorno = true;
    fd.append("partida", partida);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/codigo_repetido_partida/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
                //alert("retorno verdadero dentro de ajax");
            } else if (data == 2) {
                retorno = false;
                //alert("retorno falso dentro de ajax")
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}
function valida_codigo_repetido_bodega(codigo) {
    
    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '/Bodegas/codigo_repetido_bodega/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
                //alert("retorno verdadero dentro de ajax");
            } else if (data == 2) {
                retorno = false;
                //alert("retorno falso dentro de ajax")
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}
function valida_codigo_repetido_condiciondep(codigo) {
    
    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '/Condicionesdep/codigo_repetido_condiciondep/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
                //alert("retorno verdadero dentro de ajax");
            } else if (data == 2) {
                retorno = false;
                //alert("retorno falso dentro de ajax")
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}
function valida_codigo_repetido_condiciondee(codigo) {
    
    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '/Condicionesdee/codigo_repetido_condiciondee/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
                //alert("retorno verdadero dentro de ajax");
            } else if (data == 2) {
                retorno = false;
                //alert("retorno falso dentro de ajax")
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}
function valida_codigo_repetido_observaciones(codigo) {
    
    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '/Observaciones/codigo_repetido_observaciones/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
                //alert("retorno verdadero dentro de ajax");
            } else if (data == 2) {
                retorno = false;
                //alert("retorno falso dentro de ajax")
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}

function valida_combobox_requerido(campo) {
    if (campo > 0) {
        return true;
    } else {
        return false;

    }

}

function valida_MayorqueCero(campo) {
    if (campo == null) {
        return false;
    } else if (campo == "") {
        return false;
    }
    else if (campo == "0") {
        return false;
    } else {
        return true;
    }

}


function valida_numero_requerido(campo) {
    
    if (campo != "") {
        campo = parseInt(campo.replace(/\./g, ''));
    }
    if (campo > 0) {
        return true;
    } else if (campo == "") {
        return false;
    }
    else {
        return false;

    }

}


function valida_codigo_repetido_sucursal(codigo) {

    var fd = new FormData();
    var retorno = true;
    fd.append("codigo", codigo);
    $.ajax({
        async: false,
        type: "POST",
        url: '../../Validacionesdb/codigo_repetido_sucursal/',
        data: fd,
        DataType: 'json',
        contentType: false,
        processData: false,
        success: function (data) {
            if (data == 1) {
                retorno = true;
                //alert("retorno verdadero dentro de ajax");
            } else if (data == 2) {
                retorno = false;
                //alert("retorno falso dentro de ajax")
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("errorThrown: " + errorThrown + "XMLHttpRequest: " + XMLHttpRequest + "textStatus: " + textStatus);
            retorno = false;
            return retorno;

        }
    });
    return retorno;
}




function ValidarRUT(rut) {
    var suma = 0; mul = 2; i = 0;
    var rutCerosPuntos = rut; //Rut formateado con ceros y puntos
    // Calcula la suma de cada digito multiplicado por su factor
    for (i = rutCerosPuntos.length - 3; i >= 0; i--) {
        if (rutCerosPuntos.charAt(i) != '.') { //No se toman en cuenta los puntos
            suma = suma + parseInt(rutCerosPuntos.charAt(i)) * mul;
            mul = (mul == 7) ? 2 : mul + 1;
            //alert('indice:' + i + ' - suma:' + suma);
        }
    }

    var dvr = '' + (11 - suma % 11);
    if (dvr == '10') dvr = 'K';
    else if (dvr == '11') dvr = '0';
    //alert('digito verificador:' + dvr);
    if (rutCerosPuntos.charAt(rutCerosPuntos.length - 2) != "-" ||
        rutCerosPuntos.charAt(rutCerosPuntos.length - 1).toUpperCase() != dvr) {
        return false;
    }
    else {
        return true;
    }
}

function valida_ultimos_dos_digitos(digitos) {
    var largoDigito = digitos.length;
    var ultimosDosDigitos = digitos.substr(largoDigito - 2, 2);
    if (ultimosDosDigitos == "00") {
        return false;
    } else {
        return true;
    }


}

function ValidaUsuario(forms) {

    return false;

}
(function ($) {
    $.fn.validationEngineLanguage = function () {
    };
    $.validationEngineLanguage = {
        newLang: function () {
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* Este campo es obligatorio",
                    "alertTextCheckboxMultiple": "* Por favor seleccione una opción",
                    "alertTextCheckboxe": "* Este checkbox es obligatorio"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* Ivalida ",
                    "alertText2": "Fecha Rango"
                },
                "ValidaRutRepetido_Chofer": {
                    "func": function (field, rules, i, options) {
                        var rut_ = field.val();
                        var retorno_rtsprove = valida_rut_repetido_chofer(rut_);
                        return (retorno_rtsprove);
                    },
                    "alertText": "* Rut Repetido"
                },
                "ValidaRut": {
                    "func": function (field, rules, i, options) {
                        var retorno = ValidarRUT(field.val());
                        //alert(retorno);
                        return (retorno);
                    },
                    "alertText": "* Rut Incorrecto"
                }, "ValidaempresaRepetido_Empresa": {
                    "func": function (field, rules, i, options) {
                        var retorno_r = valida_codigo_repetido_empresa(field.val());
                        //alert(retorno_r);
                        return (retorno_r);
                    },
                    "alertText": "* COdigo Empresa Repetida"
                },
                "ValidaRutRepetido_Empresa": {
                    "func": function (field, rules, i, options) {
                        var retorno_r = valida_rut_repetido_empresa(field.val());
                        //alert(retorno_r);
                        return (retorno_r);
                    },
                    "alertText": "* Rut Repetido"
                },
                "ValidaCodigoUsuarioRepetido_Acceso": {
                    "func": function (field, rules, i, options) {
                        var retorno_codigoem = valida_codigousuario_repetido_acceso(field.val());
                        return (retorno_codigoem);
                    },
                    "alertText": "* Codigo Usuario Repetido"
                },
                "ValidaCodigoRepetido_Sucursal": {
                    "func": function (field, rules, i, options) {
                        var retorno_s = valida_codigo_repetido_sucursal(field.val());
                        return (retorno_s);
                    },
                    "alertText": "* Codigo Repetido"
                },
                "ValidaCodigoRepetido_Bodega": {
                    "func": function (field, rules, i, options) {
                        var retorno_ob = valida_codigo_repetido_bodega(field.val());
                        return (retorno_ob);
                    },
                    "alertText": "* Codigo Repetido"
                },
                "ValidaCodigoRepetido_condicionesdep": {
                    "func": function (field, rules, i, options) {
                        var retorno_ob = valida_codigo_repetido_condiciondep(field.val());
                        return (retorno_ob);
                    },
                    "alertText": "* Codigo Repetido"
                },
                "ValidaCodigoRepetido_condicionesdee": {
                    "func": function (field, rules, i, options) {
                        var retorno_ob = valida_codigo_repetido_condiciondee(field.val());
                        return (retorno_ob);
                    },
                    "alertText": "* Codigo Repetido"
                },
                "ValidaCodigoRepetido_observaciones": {
                    "func": function (field, rules, i, options) {
                        var retorno_ob = valida_codigo_repetido_observaciones(field.val());
                        return (retorno_ob);
                    },
                    "alertText": "* Codigo Repetido"
                },
                 "ValidaCombobox": {
                    "func": function (field, rules, i, options) {
                        var retorno_ob = valida_combobox_requerido(field.val());
                        return (retorno_ob);
                    },
                    "alertText": "* Debe seleccionar alguna opción"
                },
                "ValidaEmail": {
                    "func": function (field, rules, i, options) {
                        var retorno_email = valida_correo(field.val());
                        //alert(retorno_r);
                        return (retorno_email);
                    },
                    "alertText": "* Correo Inválido"
                },
                "ValidaMayorqueCero": {
                    "func": function (field, rules, i, options) {
                        
                        var sololec = field.attr("readOnly");
                        if (sololec == "readonly")
                        {
                            return true;
                        }
                        else
                        {
                            var retorno_ob = valida_MayorqueCero(field.val());
                            return (retorno_ob);
                        }
                    },
                    "alertText": "* Debe seleccionar alguna opción"
                },
                "ValidaNumero": {
                    "func": function (field, rules, i, options) {
                        var retorno_ob = valida_numero_requerido(field.val());
                        return (retorno_ob);
                    },
                    "alertText": "* Debe ser mayor a cero"
                },
                "ValidaCodigoRepetido_Partida": {
                    "func": function (field, rules, i, options) {
                        var retorno_ob = valida_codigo_repetido_partida(field.val());
                        return (retorno_ob);
                    },
                    "alertText": "* Codigo Repetido"
                },
                "ValidaTipoMatrisRepetido_Sucursal": {
                    "func": function (field, rules, i, options) {
                        var retorno_s = valida_tipo_repetido_sucursal(field.val());
                        return (retorno_s);
                    },
                    "alertText": "* Codigo Repetido"
                },
                "VerificaCodigoExistente_Producto": {
                    "func": function (field, rules, i, options) {
                        var retorno_prod = valida_codigo_repetido_producto(field.val());
                        return (retorno_prod);
                    },
                    "alertText": "* Codigo Repetido"
                },
                "ValidaCodigoRepetido_Grupo": {
                    "func": function (field, rules, i, options) {
                        var codigo = field.val().replace(/-/g, "");
                        var retorno_g = valida_codigo_repetido_grupo(codigo);
                        return (retorno_g);
                    },
                    "alertText": "* Codigo Repetido"
                },
                "ValidaCodigoRepetido_Codfin": {
                    "func": function (field, rules, i, options) {
                        var codigo = field.val().replace(/-/g, "");
                        var retorno_cf = valida_codigo_repetido_codfin(codigo);
                        return (retorno_cf);
                    },
                    "alertText": "* Codigo Repetido"
                },
                "ValidaCodigoRepetido_Cuenta": {
                    "func": function (field, rules, i, options) {
                        var retorno_c = valida_codigo_repetido_cuenta(field.val());
                        return (retorno_c);
                    },
                    "alertText": "* Codigo Repetido"
                },
                "VerificaCodigoExistente_Cuenta": {
                    "func": function (field, rules, i, options) {
                        var retorno_cex = valida_codigo_existente_cuenta(field.val());
                        return (retorno_cex);
                    },
                    "alertText": "* No Existe Cuenta"
                },
                "ValidaCodigoRepetido_Actividad": {
                    "func": function (field, rules, i, options) {
                        var retorno_a = valida_codigo_repetido_actividad(field.val());
                        return (retorno_a);
                    },
                    "alertText": "* Codigo Repetido"
                },
                "ValidaCodigoRepetido_Centro": {
                    "func": function (field, rules, i, options) {
                        var retorno_cen = valida_codigo_repetido_centro(field.val());
                        return (retorno_cen);
                    },
                    "alertText": "* Codigo Repetido"
                },
                "ValidaCodigoRepetido_TipoDocumento": {
                    "func": function (field, rules, i, options) {
                        var retorno_cen = valida_codigo_repetido_tipodocumento(field.val());
                        return (retorno_cen);
                    },
                    "alertText": "* Codigo Repetido"
                },
                "ValidaRutClienteRepetido_Cliente": {
                    "func": function (field, rules, i, options) {
                        var rut_ = field.val();
                        var retorno_rtsprove = valida_rut_repetido_cliente(rut_);
                        return (retorno_rtsprove);
                    },
                    "alertText": "* Rut Repetido"
                },
                "ValidaRutProveedorRepetido_Proveedor": {
                    "func": function (field, rules, i, options) {
                        var rut_ = field.val();
                        var retorno_rtsprove = valida_rut_repetido_proveedor(rut_);
                        return (retorno_rtsprove);
                    },
                    "alertText": "* Rut Repetido"
                },
                "ValidaPeriodoMesElegido": {
                    "func": function (field, rules, i, options) {
                        var mes_periodo = field.val();
                        var retorno_mpel = valida_periodo_mes(mes_periodo);
                        return (retorno_mpel);
                    },
                    "alertText": "* El periodo o mes no corresponde con lo establecido"
                },
                "VerificaCodigoExistente_Centro": {
                    "func": function (field, rules, i, options) {
                        var retorno_cen = valida_codigo_existente_centro(field.val());
                        return (retorno_cen);
                    },
                    "alertText": "* No existe Centro"
                },
                "VerificaExistenciaRut_Ruts": {
                    "func": function (field, rules, i, options) {
                        var rut = field.val();
                        var retorno_rts = verifica_existencia_rut_ruts(rut);
                        return (retorno_rts);
                    },
                    "alertText": "* No existe Rut"
                },
                "ultimosDigitosCero": {
                    "func": function (field, rules, i, options) {
                        var retorno_0 = valida_ultimos_dos_digitos(field.val());
                        return (retorno_0);
                    },
                    "alertText": "* Los dos ultimos digitos deben ser mayor a cero"
                },
                "ValidaCodigoRepetido_Ifrs": {
                    "func": function (field, rules, i, options) {
                        var codigo = field.val().replace(/-/g, "");
                        var retorno_ifrs = valida_codigo_repetido_ifrs(codigo);
                        return (retorno_ifrs);
                    },
                    "alertText": "* Codigo Repetido"
                },
                "ajaxForm": {
                    "func": function (field, rules, i, options) {
                        return (field.val() == "1") ? true : false;
                    },
                    "alertText": "* Usuario o Contraseña erroneos"
                },
                "formulario": {
                    "func": function (field, rules, i, options) {
                        alert("paso por formulario");
                        return (field.val() == "1") ? true : false;
                    },
                    "alertText": "* Usuario o Contraseña erroneos"
                },
                "requiredInFunction": {
                    "func": function (field, rules, i, options) {
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* Field must equal test"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* Mínimo de ",
                    "alertText2": " caracteres autorizados"
                },
                "groupRequired": {
                    "regex": "none",
                    "alertText": "* Debe de rellenar al menos uno de los siguientes campos"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* Máximo de ",
                    "alertText2": " caracteres autorizados"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* El valor mínimo es "
                },
                "max": {
                    "regex": "none",
                    "alertText": "* El valor máximo es "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* Fecha anterior a "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* Fecha posterior a "
                },
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* Se ha excedido el número de opciones permitidas"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* Por favor seleccione ",
                    "alertText2": " opciones"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* Los campos no coinciden"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* La tarjeta de crédito no es válida"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* Número de teléfono inválido"
                },
                "email": {
                    // Shamelessly lifted from Scott Gonzalez via the Bassistance Validation plugin http://projects.scottsplayground.com/email_address_validation/
                    "regex": /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
                    "alertText": "* Correo inválido"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* No es un valor entero válido"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* No es un valor decimal válido"
                },
                "date": {
                    //"regex": /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/,
                    "regex": /^(?:(?:0?[1-9]|1\d|2[0-8])(\/|-)(?:0?[1-9]|1[0-2]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:31(\/|-)(?:0?[13578]|1[02]))|(?:(?:29|30)(\/|-)(?:0?[1,3-9]|1[0-2])))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(29(\/|-)0?2)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* Fecha inválida, por favor utilize el formato DD/MM/AAAA"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* Direccion IP inválida"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* URL Inválida"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* Sólo números"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \']+$/,
                    "alertText": "* Sólo letras"
                },
                "onlyLetterAccentSp": {
                    "regex": /^[a-z\u00C0-\u017F\ ]+$/i,
                    "alertText": "* Sólo letras"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* No se permiten caracteres especiales"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertTextLoad": "* Cargando, espere por favor",
                    "alertText": "* Este nombre de usuario ya se encuentra usado"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* Este nombre ya se encuentra usado",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* Este nombre está disponible",
                    // speaks by itself
                    "alertTextLoad": "* Cargando, espere por favor"
                },
                "ajaxNameCallPhp": {
                    // remote json service location
                    "url": "phpajax/ajaxValidateFieldName.php",
                    // error
                    "alertText": "* This name is already taken",
                    // speaks by itself
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxCheckRut": {
                    "url": "../../ValidaBD/rut_repetido",
                    "extraDataDynamic": ['#id_titulo'],
                    "alertText": "* Record already exists",
                    "alertTextOk": "good to go!",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxCheckRutRepetidoEmpresa": {
                    "url": "../../Validacionesdb/rut_repetido_empresa",
                    "extraDataDynamic": ['#rut'],
                    "alertText": "* Record already exists",
                    "alertTextOk": "rut valido!",
                    "alertTextLoad": "* Validando, por favor espere"
                },
                "ajaxLogin": {
                    "url": "../../ValidaBD/login",
                    "alertText": "* Record already exists",
                    "alertTextOk": "good to go!",
                    "alertTextLoad": "* Validating, please wait"
                },
                "validate2fields": {
                    "alertText": "* Por favor entrar HELLO"
                }
            };

        }
    };
    $.validationEngineLanguage.newLang();
})(jQuery);

