
function validateRutKeyPress(el, evt) {
    
    var charCode = (evt.which) ? evt.which : event.keyCode;
    var number = el.value.split('-');
    if (charCode != 45 && charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 75) {
        return false;
    }


    //get the carat position
    var caratPos = getSelectionStart(el);
    var dotPos = el.value.indexOf("-");
    if (caratPos == 0 && charCode == 45) {
        return false;
    }
    if (caratPos > dotPos && dotPos > -1 && (number[1].length > 0)) {
        return false;
    }
    if (dotPos == -1 && charCode == 75) {
        return false;
    }
    if (dotPos > -1 && charCode == 75 && (number[1].length > 0)) {
        return false;
    }
    return true;
}



function numberFormat_decimal(numero) {
    // Variable que contendra el resultado final
    var resultado = "";

    // Si el numero empieza por el valor "-" (numero negativo)
    if (numero[0] == "-") {
        // Cogemos el numero eliminando los posibles puntos que tenga, y sin
        // el signo negativo
        nuevoNumero = numero.replace(/\./g, '').substring(1);
    } else {
        // Cogemos el numero eliminando los posibles puntos que tenga
        nuevoNumero = numero.replace(/\./g, '');
    }

    // Si tiene decimales, se los quitamos al numero
    if (numero.indexOf(",") >= 0)
        nuevoNumero = nuevoNumero.substring(0, nuevoNumero.indexOf(","));

    // Ponemos un punto cada 3 caracteres
    for (var j, i = nuevoNumero.length - 1, j = 0; i >= 0; i-- , j++)
        resultado = nuevoNumero.charAt(i) + ((j > 0) && (j % 3 == 0) ? "." : "") + resultado;

    // Si tiene decimales, se lo añadimos al numero una vez forateado con 
    // los separadores de miles
    if (numero.indexOf(",") >= 0)
        resultado += numero.substring(numero.indexOf(","));

    if (numero[0] == "-") {
        // Devolvemos el valor añadiendo al inicio el signo negativo
        return "-" + resultado;
    } else {
        return resultado;
    }
}

function validateFloatComaKeyPress(el, evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    var number = el.value.split(',');
    if (charCode != 44 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    //just one dot
    if (number.length > 1 && charCode == 44) {
        return false;
    }
    //get the carat position
    var caratPos = getSelectionStart(el);
    var dotPos = el.value.indexOf(",");
    if (caratPos > dotPos && dotPos > -1 && (number[1].length > 1)) {
        return false;
    }
    return true;
}
function validateFloatPuntoKeyPress(el, evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    var number = el.value.split('.');

    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    //just one dot
    if (number.length > 1 && charCode == 46) {
        return false;
    }

    //get the carat position
    var caratPos = getSelectionStart(el);
    var dotPos = el.value.indexOf(".");
    if (caratPos == 0 && charCode == 46) {
        return false;
    }
    if (caratPos > dotPos && dotPos > -1 && (number[1].length > 1)) {
        return false;
    }

    return true;
}

function getSelectionStart(o) {
    if (o.createTextRange) {
        var r = document.selection.createRange().duplicate()
        r.moveEnd('character', o.value.length)
        if (r.text == '') return o.value.length
        return o.value.lastIndexOf(r.text)
    } else { return o.selectionStart }
}
function formatea_miles(entrada) {
    
    if (entrada != "") {
        var num = entrada.toString().replace(/\./g, '');
        if (!isNaN(num)) {
            num = num.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g, "$1.");
            num = num.split("").reverse().join("").replace(/^[\.]/, "");
            entrada = num;
        } else {
            entrada = entrada.replace(/[^\d\.]*/g, "");
        } //else {
        //    entrada = input.value.replace(/[^\d\.]*/g, "");
        //}
    }
    return entrada;
}
function Moneda(entrada) {
    if (entrada != "") {
        var num = entrada.toString().replace(/\./g, '');
        if (!isNaN(num)) {
            num = num.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g, "$1.");
            num = num.split("").reverse().join("").replace(/^[\.]/, "");
            entrada = num;
        } else {
            entrada = entrada.replace(/[^\d\.]*/g, "");
        } //else {
        //    entrada = input.value.replace(/[^\d\.]*/g, "");
        //}
    }
    return entrada;
}


function Moneda2(entrada, evento) {
    entrada = entrada.value;
    var num = entrada.toString().replace(/\./g, '');
    if (!isNaN(num)) {
        num = num.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g, "$1.");
        num = num.split("").reverse().join("").replace(/^[\.]/, "");
        entrada = num;
    }
    entrada.value = num;
}
function format_negativo(numero, evento) {
    // Variable que contendra el resultado final

    var tecla = evento.which;
    if ((tecla != 37) && (tecla != 39)) {
        var resultado = "";
        valor = numero.value;

        if (valor.length > 1) {
            // Si el numero empieza por el valor "-" (numero negativo)
            if (valor[0] == "-") {
                // Cogemos el numero eliminando los posibles puntos que tenga, y sin
                // el signo negativo
                nuevoNumero = valor.replace(/\./g, '').substring(1);
            } else {
                // Cogemos el numero eliminando los posibles puntos que tenga
                nuevoNumero = valor.replace(/\./g, '');
            }

            // Si tiene decimales, se los quitamos al numero
            if (valor.indexOf(",") >= 0)
                nuevoNumero = nuevoNumero.substring(0, nuevoNumero.indexOf(","));

            // Ponemos un punto cada 3 caracteres
            for (var j, i = nuevoNumero.length - 1, j = 0; i >= 0; i-- , j++)
                resultado = nuevoNumero.charAt(i) + ((j > 0) && (j % 3 == 0) ? "." : "") + resultado;

            // Si tiene decimales, se lo añadimos al numero una vez forateado con 
            // los separadores de miles
            if (valor.indexOf(",") >= 0)
                resultado += valor.substring(valor.indexOf(","));

            if (valor[0] == "-") {
                // Devolvemos el valor añadiendo al inicio el signo negativo
                numero.value = "-" + resultado;
            } else {
                numero.value = resultado;
            }
        }
    }
}


function format_2(numero, evento) {
    // Variable que contendra el resultado final

    var tecla = evento.which;
    if ((tecla != 37) && (tecla != 39)) {
        var resultado = "";
        valor = numero.value;

        if (valor.length > 1) {
            // Si el numero empieza por el valor "-" (numero negativo)
            if (valor[0] == "-") {
                // Cogemos el numero eliminando los posibles puntos que tenga, y sin
                // el signo negativo
                nuevoNumero = valor.replace(/\./g, '').substring(1);
            } else {
                // Cogemos el numero eliminando los posibles puntos que tenga
                nuevoNumero = valor.replace(/\./g, '');
            }

            // Si tiene decimales, se los quitamos al numero
            if (valor.indexOf(",") >= 0)
                nuevoNumero = nuevoNumero.substring(0, nuevoNumero.indexOf(","));

            // Ponemos un punto cada 3 caracteres
            for (var j, i = nuevoNumero.length - 1, j = 0; i >= 0; i-- , j++)
                resultado = nuevoNumero.charAt(i) + ((j > 0) && (j % 3 == 0) ? "." : "") + resultado;

            // Si tiene decimales, se lo añadimos al numero una vez forateado con 
            // los separadores de miles
            if (valor.indexOf(",") >= 0)
                resultado += valor.substring(valor.indexOf(","));

            if (numero[0] == "-") {
                // Devolvemos el valor añadiendo al inicio el signo negativo
                numero.value = resultado;
            } else {
                numero.value = resultado;
            }
        }
    }
}

function format(numero) {
    // Variable que contendra el resultado final  

    var resultado = "";
    valor = numero.value;
    if (valor.length > 1) {
        // Si el numero empieza por el valor "-" (numero negativo)
        if (valor[0] == "-") {
            // Cogemos el numero eliminando los posibles puntos que tenga, y sin
            // el signo negativo
            nuevoNumero = valor.replace(/\./g, '').substring(1);
        } else {
            // Cogemos el numero eliminando los posibles puntos que tenga
            nuevoNumero = valor.replace(/\./g, '');
        }

        // Si tiene decimales, se los quitamos al numero
        if (valor.indexOf(",") >= 0)
            nuevoNumero = nuevoNumero.substring(0, nuevoNumero.indexOf(","));

        // Ponemos un punto cada 3 caracteres
        for (var j, i = nuevoNumero.length - 1, j = 0; i >= 0; i-- , j++)
            resultado = nuevoNumero.charAt(i) + ((j > 0) && (j % 3 == 0) ? "." : "") + resultado;

        // Si tiene decimales, se lo añadimos al numero una vez forateado con 
        // los separadores de miles
        if (valor.indexOf(",") >= 0)
            resultado += valor.substring(valor.indexOf(","));

        if (numero[0] == "-") {
            // Devolvemos el valor añadiendo al inicio el signo negativo
            numero.value = resultado;
        } else {
            numero.value = resultado;
        }
    }
}
function FormatearRUT(rut) {
    //var cont = 0;
    //var format;
    //if (rut.length == 0) {
    //    return "";
    //} else {
    //    rut = rut.replace(".", "");
    //    rut = rut.replace("-", "");
    //    format = "-" + rut.substring(rut.length - 1);
    //    for (var i = rut.length - 2; i >= 0; i--) {
    //        format = rut.substring(i, i + 1) + format;
    //        cont++;
    //        if (cont == 3 && i != 0) {
    //            format = "." + format;
    //            cont = 0;
    //        }
    //    }
    //    format = format.replace(".", "").replace(".", "").replace(".", "");
    //    return format;
    //}

    var verificador;
    if (rut.length > 0) {
        rut = rut.replace('-', '');
        rut = rut.replace('.', '').replace('.', '');
        verificador = rut.substring(rut.length - 1)

        var cerosStr = "00000000";

        var cantidadCeros = (8 - (rut.length - 1)); //se descuenta el digito verificador

        if (cantidadCeros > 0) {
            rut = cerosStr.substring(0, cantidadCeros) + rut;
        }
        var rutCerosPuntos = rut.substring(0, 2) + rut.substring(2, 5) + rut.substring(5, 8) + "-" + verificador;

        return rutCerosPuntos;

    }
    else return "";

}

function PostCeroCodigo(codigo) {
    if (codigo.length > 0) {
        codigo = codigo.replace("-", "").replace("-", "");
        var cantidadCeros = 4 - (codigo.length);
        var codigoCeros = "";
        for (i = 0; i < cantidadCeros; i++) {
            codigoCeros = codigoCeros + "0";
        }
        codigoCeros = codigo + codigoCeros;
        var str = codigoCeros.substring(0, 1) + "-" + codigoCeros.substring(1, 2) + "-" + codigoCeros.substring(2, 4);
        return str;

    } else return "";

}

function AnteponeCeroCodigo(codigo) {
    if (codigo.length > 0) {
        codigo = codigo.replace("-", "").replace("-", "");
        var cantidadCeros = 4 - (codigo.length);
        var codigoCeros = "";
        for (i = 0; i < cantidadCeros; i++) {
            codigoCeros = codigoCeros + "0";
        }
        codigoCeros = codigoCeros + codigo;
        //var str = codigoCeros.substring(0, 1) + "-" + codigoCeros.substring(1, 2) + "-" + codigoCeros.substring(2, 4);
        var str = codigoCeros
        return str;

    } else return "";

}

function aaaammdd(fecha) {
    
    var dd = (fecha.getDate() < 10) ? "0" + fecha.getDate().toString() : fecha.getDate().toString();
    var mm = (fecha.getMonth() + 1 < 10) ? "0" + (fecha.getMonth() + 1).toString() : (fecha.getMonth() + 1).toString();
    var aa = fecha.getFullYear();
    return aa + "-" + mm + "-" + dd;
}

function redondear(num, scale) {
    if (!("" + num).includes("e")) {
        return +(Math.round(num + "e+" + scale) + "e-" + scale);
    } else {
        var arr = ("" + num).split("e");
        var sig = ""
        if (+arr[1] + scale > 0) {
            sig = "+";
        }
        return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
    }
}