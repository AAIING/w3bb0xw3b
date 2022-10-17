function SoloNumerosDecimales(e, valInicial, nEntero, nDecimal) {
    var obj = e.srcElement || e.target;
    var key_code = (document.all) ? e.keyCode : e.which;
    var key_val = String.fromCharCode(key_code);
    var patron2 = /[\d.]/;
    var control = (key_code === 46 && (/[.]/).test(obj.value)) ? false : true;
    var existePto = (/[.]/).test(obj.value);

    var haveSelection = obj.selectionEnd - obj.selectionStart;

    //el tab
    if (key_code === 8)
        return true;

    if (valInicial !== obj.value) {
        var TControl = obj.value.length;
        if (existePto === false && key_code !== 46) {
            if (TControl === nEntero) {
                obj.value = obj.value + ".";
            }
        }

        if (existePto === true) {
            var subVal = obj.value.substring(obj.value.indexOf(".") + 1, obj.value.length);

            if (subVal.length >= nDecimal && !haveSelection) {
                return false;
            }
        }

        return patron2.test(key_val) && control;
    }
    else {
        if (valInicial === obj.value) {
            obj.value = '';
        }
        return patron2.test(key_val) && control;
    }
}

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
function aaaammdd(fecha) {
    
    var dd = (fecha.getDate() < 10) ? "0" + fecha.getDate().toString() : fecha.getDate().toString();
    var mm = (fecha.getMonth()+1 < 10 ) ? "0" + (fecha.getMonth() + 1).toString() : (fecha.getMonth() + 1).toString();
    var aa = fecha.getFullYear();
    return aa + "-" + mm + "-" + dd;
}

function sacarpunto(v) {
    a = v.replace('.', '');
    return a;
}
function validateIntKeyPress(el, evt) {
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
    if (charCode == 44) {
        return false;
    }
    return true;
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
function validateEnteroKeyPress(el, evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    //just one dot
    if (charCode == 44 || charCode == 46) {
        return false;
    }

    return true;
}
