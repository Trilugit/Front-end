function valoracion() {
    var valoracion_value = document.getElementById('val').value;
    alert("Has valorado con " + valoracion_value + " puntos");
}

function cuent() {
    var country = document.getElementById('pais').value;
    var ciban = document.getElementById('ciban').value;
    var enti = document.getElementById('enti').value;
    var suc = document.getElementById('suc').value;
    var dc = document.getElementById('dc').value;
    var cuenta = document.getElementById('cuenta').value;

    var cuenta_completa = country + ciban + "-" + enti + "-" + suc + "-" + dc + "-" + cuenta;
    alert("Le informamos que su cuenta bancaria es " + cuenta_completa);
}

function diasemana() {

    function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

    var dia_value = document.getElementById('date').value;

    var day = getDayName(dia_value, "es-ES");
    alert("La fecha seleccionada en el elemento de fecha es un " + day);
}

var data = {
    "01":"Alava",
    "02":"Albacete",
    "03":"Alicante",
    "04":"Almeria",
    "05":"Avila",
    "06":"Badajoz",
    "07":"Islas Baleares",
    "08":"Barcelona",
    "09":"Burgos",
    "10":"Caceres",
    "11":"Cadiz",
    "12":"Castellon",
    "13":"Ciudad Real",
    "14":"Cordoba",
    "15":"La Coruña",
    "16":"Cuenca",
    "17":"Gerona",
    "18":"Granada",
    "19":"Guadalajara",
    "20":"Guipuzcoa",
    "21":"Huelva",
    "22":"Huesca",
    "23":"Jaen",
    "24":"Leon",
    "25":"Lerida",
    "26":"La Rioja",
    "27":"Lugo",
    "28":"Madrid",
    "29":"Málaga",
    "30":"Murcia",
    "31":"Navarra",
    "32":"Orense",
    "33":"Asturias",
    "34":"Palencia",
    "35":"Las Palmas",
    "36":"Pontevedra",
    "37":"Salamanca",
    "38":"Santa Cruz de Tenerife",
    "39":"Cantabria",
    "40":"Segovia",
    "41":"Sevilla",
    "42":"Soria",
    "43":"Tarragona",
    "44":"Teruel",
    "45":"Toledo",
    "46":"Valencia",
    "47":"Valladolid",
    "48":"Vizcaya",
    "49":"Zamora",
    "50":"Zaragoza",
    "51":"Ceuta",
    "52":"Melilla"
}

function cp() {

    var codigo = document.getElementById('cpostal').value;
    var code_codigo = codigo.substring(0,2);

    var localidad = document.getElementById('localidad').value;

    function checkcode() {

        if (code_codigo in Object.keys(data)) {
            return true;
        } else {
            return false;

        }
    }

    function checklocal() {

        return Object.values(data).includes(localidad);
    }

    function checkformat() {
        if (codigo.length > 5 || codigo.length <= 4 || isNaN(codigo)) {
            return false;
        }
        else {
            return true;
        }
    }
    
    if (checkcode() && checklocal() && checkformat()) {
        document.getElementById('error_alert').style["display"] = "none";
        document.getElementById('true_alert').style["display"] = "block";
    } else {
        document.getElementById('true_alert').style["display"] = "none";
        document.getElementById('error_alert').style["display"] = "block";
    }

    event.preventDefault();

}


function send_data() {
    cp();
}