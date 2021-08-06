import "jquery";
import "jquery-migrate";
import "popper.js";
import wNumb from "wnumb";
import QRCode from "qrcode";
import "./ingercodebase.css";
import {Loader, LoaderOptions} from 'google-maps';
import "./asset/fonts/CenturyGothic.ttf";
import "./asset/img/fondoinicio.png";


//--- Variables con dependencia golbales

window.baseurl="localhot";

//---- Import Controladores
import Restaurantes_c from './controladores/Restaurantes.js';
//--- Import componentes
import App from './componentes/App.inger';
import Inicio from './componentes/Inicio.inger';
import Restaurantes from './componentes/Restaurantes.inger';
import Contacto from './componentes/Contacto.inger';


//import Inicio from './componentes/Inicio.inger';
//--- Init
let Aplicacion =document.querySelector('aplicacion');
let Contenido =document.querySelector('contenido');
Aplicacion.innerHTML =App;
var URLactual = jQuery(location).attr("pathname");
var pathname = window.location.pathname;

//---- Declararar variables sin dependecias

//------------------Routing

if(URLactual=="/")
{
  link_inicio();
}else
if(URLactual=="/restaurantes")
{
  link_restaurantes();
}else
if(URLactual=="/contacto")
{
  link_contacto();
}else
{
  console.log(URLactual);  
  $("#contenido").html("<br><br><h1>Página no encontrada</h1>");
}

//-------------- funciones  globales


$(document).on("click", ".nav-item", navitem);


function loadlink(url){
  history.pushState(null, "", url);
}

function navitem()
{
    $('.navbar-toggler').trigger("click");
}

//Load Link sin carga

$(".link_inicio").click(function () {

  loadlink("/");
  link_inicio();
});

$(".link_contacto").click(function () {

  loadlink("/contacto");
  link_contacto();
});

$(".link_restaurantes").click(function () {

  loadlink("restaurantes");  
  link_restaurantes();
   
});

//----- Funciones link
function link_inicio(){

  $("#contenido").html(Inicio);

   
  const lat=3.4242814233739614;
  const long=-76.54170365914733;
  const options= {};
  const loader = new Loader('AIzaSyB6ToeLv8o6CjpC6zlk6XJ455sIDSbcPR0', options);
  const coord={lat: lat, lng: long};
  console.log(coord);
  loader.load().then(function (google) {
    const map = new google.maps.Map(document.getElementById('map'), {
        center:coord ,
        zoom: 14,
    });

    const marker = new google.maps.Marker({
    position: coord,
    map: map,
    });

  });

  //Restaurantes manual
  let restaurantes=["Brunch&Munch","Avocalia","Bottaniko","La cuadra","Cacerola","Burritos","Amor Perfecto","Mia Pizza"];
  restaurantes.map(function(x) {
         $("#list_restaurantes").append("<div>"+x+"</div>");
  });

  let urlapidev=window.baseurl+":9207/listar_restaurantes";
  fetch(urlapidev,{
    method: 'GET',
  })
  .then(response => {console.log(response);response.json();})
  .then(data => {
      
      data.map(function(x) {
         $("#list_restaurantes").append(x.name);
      });
            
  });

  

  $( ".formatprecio" ).each(function( index ) {
      var valor=$(this).text();
      var Format = wNumb({
          decimals: 0,
          thousand: '.',
          prefix: '$'
      });
      
      valor=Format.to( parseFloat(valor) );
      $(this).text(valor);
      
  });


}


function link_contacto(){

  $("#contenido").html(Contacto);
}

function link_restaurantes(){

  $("#contenido").html(Restaurantes);   
}

//-------------

$(function () {

    //$('select').selectpicker();  


    
});