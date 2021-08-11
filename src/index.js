import "jquery";
import "jquery-migrate";
import "popper.js";
import wNumb from "wnumb";
import QRCode from "qrcode";
const axios = require('axios');
import "./ingercodebase.css";
import {Loader, LoaderOptions} from 'google-maps';
import "./asset/fonts/CenturyGothic.ttf";
import "./asset/img/fondoinicio.png";


//--- Variables con dependencia golbales

window.baseurl="localhost";

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

  let restaurantes=[900042119,900042109,900095952,900042123,900042113,900054051];

  restaurantes.map(function(x) {

     axios.get('/listar_restaurantes?restaurante='+x)
      .then(response => {   
        console.log(response.data);

        let datosres=response.data;
        if(!datosres.estado){
          alert("Error");
        }else{

          $("#list_restaurantes").append("<div>"+datosres.nombre+" - "+datosres.direccion+"<br>"+datosres.mensaje+"</div><hr>");

        }
                   
           
      
      })
      .catch(error => {
        console.log(error);
      });

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