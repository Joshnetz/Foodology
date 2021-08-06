import wNumb from "wnumb";
/* function globales jquery*/
var wnd;
var wnd2;
var wnd3;
var wndchat;



$(document).on('ready',function(){
//call function
/* 	definition on*/	



$(document).on("keypress", ".search", search);
$(document).on("keypress", ".entertextsubmit input[type=text],input[type=password]", textentersubmit);
$(document).on("keypress", ".validate_only_string", validate_only_string);
$(document).on("keypress", ".onlystring_sinspace", onlystring_sinspace);
$(document).on("keypress", ".KeypressOnlyNumber", KeypressOnlyNumber);
$(document).on("keypress", ".Keypresspercent", Keypresspercent);
$(document).on("keypress", ".Keypressfloat", Keypressfloat);





/*
$(document).delegate('#saveprofile',"click",save_profile);
*/


$("#nomodalwindows").click(function () {
    wnd.close();
    wnd="";
});

$("#simodalwindows").click(function () {
	funcName=$(this).data("function");
	//alert(funcName);
	eval( funcName ); 
});

$("#nomodalwindows2").click(function () {
    wnd2.close();
    wnd2="";
});

$("#simodalwindows2").click(function () {
	funcName=$(this).data("function");
	//alert(funcName);
	eval( funcName ); 
});

$("#nomodalwindows3").click(function () {
    wnd3.close();
    wnd3="";
});

$("#simodalwindows3").click(function () {
	funcName=$(this).data("function");
	//alert(funcName);
	eval( funcName ); 
});

$("#nomodalwindowschat").click(function () {
    wndchat.close();
    wndchat="";
});

$("#simodalwindowschat").click(function () {
	funcName=$(this).data("function");
	//alert(funcName);
	eval( funcName ); 
});

//fin document ready
});

/* 	definition function exit*/
/* function globales*/

export default function info()
{
	console.log("Web Js Ingercode");
}


export function mostrarocul(id,classrefer)
{
	$("."+classrefer).fadeOut();
	$("#"+id).fadeIn(900);
}

export function ocultarclase(classrefer)
{
$("."+classrefer).fadeOut(100);	
}

export function mostrarclase(classrefer)
{
$("."+classrefer).fadeIn(500);
}

export function mostrardiv(id)
{

	$("#"+id).show();
}

export function ocultardiv(id)
{
	$("#"+id).hide();
}

export function openmodal(contenidomodal,functionmodal,titlemodal)
{
	$("#simodalwindows").data("function",functionmodal);
	
	wnd = $("#modalWindow").kendoWindow({
                      title: titlemodal,
                      modal: true,
                      visible: false,
                      resizable: false,
                      maxWidth: 990,
                      maxHeight:670          
                  }).data("kendoWindow");
	$("#contentmodalwindows").html(contenidomodal);
	$("#modalWindow_wnd_title").text(titlemodal);
	wnd.center().open();
}

export function openmodal2(contenidomodal,functionmodal,titlemodal)
{
	$("#simodalwindows2").data("function",functionmodal);
	
	wnd2 = $("#modalWindow2").kendoWindow({
                      title: titlemodal,
                      modal: true,
                      visible: false,
                      resizable: false,
                      maxWidth: 990,
                      maxHeight:670          
                  }).data("kendoWindow");
	$("#contentmodalwindows2").html(contenidomodal);
	$("#modalWindow_wnd_title2").text(titlemodal);
	wnd2.center().open();
}


export function openmodal3(contenidomodal,functionmodal,titlemodal)
{
	$("#simodalwindows3").data("function",functionmodal);
	
	wnd3 = $("#modalWindow3").kendoWindow({
                      title: titlemodal,
                      modal: true,
                      visible: false,
                      resizable: false,
                      maxWidth: 990,
                      maxHeight:670          
                  }).data("kendoWindow");
	$("#contentmodalwindows3").html(contenidomodal);
	$("#modalWindow_wnd_title3").text(titlemodal);
	wnd3.center().open();
}

export function openmodalchat(contenidomodal,functionmodal,titlemodal)
{
	$("#simodalwindowschat").data("function",functionmodal);
	
	wndchat = $("#modalWindowchat").kendoWindow({
                      title: titlemodal,
                      modal: true,
                      visible: false,
                      resizable: false,
                      maxWidth: 990,
                      maxHeight:670          
                  }).data("kendoWindow");
	$("#contentmodalwindowschat").html(contenidomodal);
	$("#modalWindow_wnd_titlechat").text(titlemodal);
	wndchat.center().open();
}

export function textentersubmit(event)
{	
	if ( event.which == 13 ) {
     event.preventDefault();
     parents=$(this).parents('div.entertextsubmit');
     submit=$(parents).data("submit");
     $("#"+submit).trigger("click");
  	}
}

export function validate_only_string(evt){	
		 	
	var keyPressed = (evt.which) ? evt.which : evt.keyCode;
	return !((keyPressed>=47 && keyPressed<=58) || (keyPressed==46) );	 	
}

export function onlystring_sinspace(evt)
{
	var keyPressed = (evt.which) ? evt.which : evt.keyCode;
	return !((keyPressed==32));
}

export function KeypressOnlyNumber(evt)	
{
	var keyPressed = (evt.which) ? evt.which : evt.keyCode;
	return !(keyPressed > 31 && (keyPressed < 48 || keyPressed > 57));	 	
}

export function Keypresspercent(evt)	
{
 	var keyPressed = (evt.which) ? evt.which : evt.keyCode;
 	if(!(keyPressed > 31 && (keyPressed < 48 || keyPressed > 57)))
 	{
 		var num=String.fromCharCode(keyPressed);
	 	var numres=parseFloat(this.value)*10+parseInt(num);
	 	if(numres>100)
	 	{
	 		return false;
	 	}
 	}else{
 		return false;
 	} 	
}

export function Keypressfloat(evt)
{
 	var keyPressed = (evt.which) ? evt.which : evt.keyCode;
   	if(this.value=="")
   	{
   		return !(keyPressed > 31 && (keyPressed < 48 || keyPressed > 57) );
   	}else
   	{
   		return keyPressed==46 || !(keyPressed > 31 && (keyPressed < 48 || keyPressed > 57) );
   	}
}

export function formating(num,simbol)
{
	var separador= '.';
	var sepDecimal= ',';

	num +='';
		var splitStr = num.split('.');
		var splitLeft = splitStr[0];
		var splitRight = splitStr.length > 1 ? sepDecimal + splitStr[1] : '';
		var regx = /(\d+)(\d{3})/;
		while (regx.test(splitLeft))
	    {
		   splitLeft = splitLeft.replace(regx, '$1' + separador + '$2');
		}
		return simbol + splitLeft  +splitRight;
}

export function formatNumber(num,sim,cant)
{	

	if(num == '' || num == null){return sim+'0,00';}
		num = parseFloat(num);
		sim = sim ||'';
		return formating(num.toFixed(cant),sim);

}

export function formatNoNumber(number,simbol) {

	var value = ""
	var aux1 = number.split(",");
	var aux2 = aux1[0].split(".");

	for (var i = 0; i < aux2.length; i++) {
		value += ""+aux2[i];
	};

	if(aux1[1]=="00")
	{

	}else
	{

		value += "."+aux1[1];
	}
	

	if(simbol==undefined)
	{
		return value;
	}else{
		var number = value.split(simbol); 
		return number[0];
	}

	
}

export function uniqueField(jsonFilter,filterValue,nameValue)
{
	var i = 0;
	while(i < jsonFilter.length)
	{
		let datafiltertemp=jsonFilter[i][nameValue];
		if( datafiltertemp == filterValue)
		{			
			return false;
		}
		i++;

	}
	return true;
}


export function filter(datalisttemp,filterValue,filterHeaderGrid,fieldName)
{
      var i = 0;
      var jsonFilter= new Array();
      let stringvalue="";
      while(i < datalisttemp.length)
      {
      	for (var j =0; j < filterHeaderGrid.length; j++)
      	{
      		filterValue = filterValue.toString().toLowerCase();  
      		if(datalisttemp[i][filterHeaderGrid[j]]!="" && datalisttemp[i][filterHeaderGrid[j]]!=undefined)
      		{
      			stringvalue=datalisttemp[i][filterHeaderGrid[j]].toString().toLowerCase();
      		}else
      		{
      			stringvalue="";
      		}
      		
      		if(stringvalue.search(filterValue)!=-1)
      		{	          		 
      			 if(uniqueField(jsonFilter,datalisttemp[i][fieldName],fieldName))
      			 {      			        
                    jsonFilter.push(datalisttemp[i]);   	
      			 }                    			
      		}	
      	}
      	i++;
      }
      return jsonFilter;
}

export function search(e)
{
	
	var keycode = (e.keyCode ? e.keyCode : e.which);  
    if(keycode == '13')
    {       
        var datalistsearch=window.datalist1;
        var datalistsearchname=$(this).data("list");
        var datalistsearchcolum=$(this).data("column");
        var columprimary=$(this).data("primary");
        console.log(columprimary,datalistsearchcolum);
        var idgrid=$(this).data("idgrid");
        //console.log(datalistsearchname+" - "+datalistsearchcolum+" - "+columprimary+" - "+idgrid);
        if(datalistsearchname=="datalis2")
        {
        	datalistsearch=windows.datalist2;
        }

        if(datalistsearchname=="datalis3")
        {
        	datalistsearch=window.datalist3;
        }
        var column=datalistsearchcolum.split(",");
        console.log(this.value);
        var filterDataList =  filter(datalistsearch,this.value,column,columprimary);
        console.log(filterDataList);
	   	if (this.value=="" || filterDataList.length == datalistsearch.length)
	   	{
	   		$("#"+idgrid).data("kendoGrid").dataSource.data(datalistsearch);
	   		return;
	   	}   
       
        $("#"+idgrid).data("kendoGrid").dataSource.data(filterDataList);
                      
    }
}

export function urlpag(pag)
{
	location.href=baseurl+pag;
}

export function reload()
{
	location.reload();
}

export function selectKendo(){
	$("select").kendoDropDownList();
}

export function limpiar_alertas(form)
{
	$('#'+form+' .msg_alerta').html('<span class="form_tooltip"></span>');
	$('#'+form+' input,select,textarea').css('border-color',"#ccc");
}

export function limpiar_alerta(alerta)
{
	$('#'+alerta).text('');
}

export function limpiar_formulario(form)
{
	$('#'+form+' input[type="text"],input[type="password"],textarea').val('');
	$('#'+form+' select').val(0);
	$('#'+form+':checkbox:checked').removeAttr("checked");
	if($('#'+form+' input:radio').length > 0)
	{
	$('#'+form+' input:radio')[0].checked = true;
	}
}

export function validar_correo(valor)
{
	if (/[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/.test(valor)){
					
		return true;
	} else {
		
		return false;
	}
}

export function validar_tel(valor)
{
	if (/^[0-9]{2,3}-? ?[0-9]{5,6}$/.test(valor)){
					
		return true;
	} else {
		
		return false;
	}
}

export function validar_pass(valor)
{
	if (/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,30})$/.test(valor)){
					
		return true;
	} else {
		
		return false;
	}
}

export function validar_usuario(valor)
{
	if (/^[a-zA-Z0-9][a-zA-Z0-9_]{5,15}$/.test(valor)){
					
		return true;
	} else {
		
		return false;
	}
}

export function validar_alias(valor)
{
	if (/^[a-z0-9_]{5,30}$/.test(valor)){
							
		return true;
	} else {
		
		return false;
	}
}

export function validar_fecha(valor)
{
//falta	
if (/^[a-z0-9_]{5,20}$/.test(valor)){
					
		return true;
	} else {
		
		return false;
	}
}

export function validar_formulario(form)
{
	ban=true;
	requerido="";
	validatetipo="";
	$('#'+form+' .mensaje_alerta').css('display','none');

	$('#'+form+' input[type="text"],input[type="password"]').each(function(){

	id=this.id;
	requerido=$(this).data("requerido");
	validatetipo=$(this).data("tipo");
	element=$('#msg_'+id);
	$(this).css('border-color',"#ccc");
	if(requerido=="si"){
		if($(this).val()=="")
		{
			ban=false;			
			element.html('<span class="form_tooltip">* Requerido</span>');
			//$(this).css('border-color',"#7A020E");
			
		}else
		{
			if(validatetipo=="" || validatetipo=="text")
			{
				$(this).css('border-color',"#58AC29");
			}
			element.html('<span class="form_tooltip"></span>');
			
		}
	}
	
	thisval=$(this).val();
	element=$('#msg_'+id);
	if(thisval!="" && validatetipo=="correo")
	{
		val=validar_correo($(this).val());
		if(val==true){element.html('<span class="form_tooltip"></span>');$(this).css('border-color',"#58AC29");}else{element.html('<span class="form_tooltip">* ejemplo@dominio.com</span>');ban=false;}
	}

	if(thisval!="" && validatetipo=="pass")
	{
		val=validar_pass(thisval);
		if(val==true){element.html('<span class="form_tooltip"></span>');$(this).css('border-color',"#58AC29");}else{element.html('<span class="form_tooltip">* Minimo 6 caracteres y un numero(sin caracteres especiales)</span>');ban=false;}
	}

	if(thisval!="" && validatetipo=="tel")
	{
		val=validar_tel(thisval);
		if(val==true){element.html('<span class="form_tooltip"></span>');$(this).css('border-color',"#58AC29");}else{element.html('<span class="form_tooltip">* Son 7 Numeros</span>');ban=false;}
	}

	if(thisval!="" && validatetipo=="cel")
	{
		val=validar_cel(thisval);
		if(val==true){element.html('<span class="form_tooltip"></span>');$(this).css('border-color',"#58AC29");}else{element.html('<span class="form_tooltip">* Son 10 Numeros</span>');ban=false;}
	}

	if(thisval!="" && validatetipo=="usuario")
	{
		val=validar_usuario(thisval);
		if(val==true){element.html('<span class="form_tooltip"></span>');$(this).css('border-color',"rgb(88, 172, 41)");}else{element.html('<span class="form_tooltip">* Entre 6 y 15 Caracteres y numeros(sin caracteres especiales)</span>');ban=false;}
	}

	if(thisval!="" && validatetipo=="date")
	{
		format_date=$(this).data("formato");
		val=validar_fecha(thisval,format);
		if(val==true){element.html('<span class="form_tooltip"></span>');$(this).css('border-color',"rgb(88, 172, 41)");}else{element.html('<span class="form_tooltip">* El formato debe de ser'+format_date+'</span>');ban=false;}
	}

	if(thisval!="" && validatetipo=="alias")
	{
		val=validar_alias(thisval);
		if(val==true){element.html('<span class="form_tooltip"></span>');$(this).css('border-color',"rgb(88, 172, 41)");}else{element.html('<span class="form_tooltip">* Entre 6 y 30 Caracteres y numeros(sin caracteres especiales)</span>');ban=false;}
	}	
	
		
	});
	
	
	$('#'+form+' textarea').each(function(){
		id=$(this).attr('id');
		thisval=$(this).val();
		elemen=$('#msg_'+id);
		requerido=$(this).data("requerido");
		if(requerido=="si")
		{
			if(thisval=="")
			{
				ban=false;			
				elemen.html('<span class="form_tooltip">* Requerido</span>');
			}else
			{

				elemen.html('<span class="form_tooltip"></span>');
				$(this).css('border-color',"#58AC29");
			}
		}
		
	});
	

	$('#'+form+' select').each(function(){

		id=$(this).attr('id');
		elemen=$('#msg_'+id);
		requerido=$(this).data("requerido");
		if(requerido=="si")
		{
			if($(this).val()=="")
			{
				ban=false;
				
				elemen.html('<span class="form_tooltip">* Requerido</span>');
				$(this).css('border-color',"#ccc");
			}else
			{

				elemen.html('<span class="form_tooltip"></span>');
				$(this).css('border-color',"#58AC29");
			}
		}
		
	});
	$('#'+form+' .msg_alerta').fadeIn(1000);
	return ban;	
	
}

/* -----------------------------Perzonalizado -----------------------------------------------*/

$(document).on("click", "#boton_anunciar", boton_anunciar);
$(document).on("click", "#enviar_anunciar", enviar_anunciar);
$(document).on("click", "#btnbuscararrendar", btnbuscararrendar);
$(document).on("click", "#btnbuscarcomprar", btnbuscarcomprar);
$(document).on("click", "#btnbusquedapersonalizada", buscar_personalizado);

$(document).on("click", ".itempag", itempag);

export function itempag()
{
  $("#loadinpagpro").show();
  var pagn =$(this).data("pagina");
  htmllist(pagn);
}

export function boton_anunciar()
{
   $('#btnanunciar').trigger("click");
    return false;
}

export function enviar_anunciar(){
  var nombre=$("#anunciar-name").val();
  var celular=$("#anunciar-celular").val();
  var mensaje=$("#anunciar-texto").val();
  if(nombre=="" || celular=="" || mensaje=="")
  {
    alert("Debe de llenar los campos de texto!!")
    return false;
  }
  $.ajax({
    url: window.baseurl+"/enviaranuncio.php",
    type:"POST",
    data: {nombre:nombre,celular:celular,mensaje:mensaje},
    success: function( result ) {    
   
    alert(result);
    $("#anunciar-name").val("");
    $("#anunciar-celular").val("");
    $("#anunciar-texto").val("");

    },
    error: function () {
      return ("Error de Conexion ó de Referencia"); 
      console.log("No, Ajax");      
      } 
  }); 
}

export function btnbuscararrendar()
{
  $("#btnbuscararrendar").css( "background-color", "#007bff" );
  $("#btnbuscarcomprar").css( "background-color", "#545b62" );
  $("#tiposlectestado").val("Arrendar");
  $("#sliderprecios1").show(); 
  $("#sliderprecios2").hide();  
  $("#zonabotonini").html("<h1>Arrendar</h1>");

}

export function btnbuscarcomprar()
{
  $("#btnbuscarcomprar").css( "background-color", "#007bff" );
  $("#btnbuscararrendar").css( "background-color", "#545b62" );
  $("#tiposlectestado").val("Comprar");
  $("#sliderprecios2").show(); 
  $("#sliderprecios1").hide();
  $("#zonabotonini").html("<h1>Comprar</h1>"); 
}

export function buscar_personalizado(){  
  
  var sliderprecios1 = document.getElementById('sliderprecios1');
  var sliderprecios2 = document.getElementById('sliderprecios2');
  var estado = $("#tiposlectestado").val();
  var rango1 = 0;
  var rango2 = 0;
  var datarango1=sliderprecios1.noUiSlider.get();
  var datarango2=sliderprecios2.noUiSlider.get();  

  var Format = wNumb({
        decimals: 0,
        thousand: '.',
        prefix: '$'
    });

  var destinacion="Arriendo";

  if(estado=="Arrendar")
  {
   
    rango1 = Format.from( datarango1[0] );
    rango2 = Format.from( datarango1[1] );
    destinacion="Arriendo";
    
  }else{
    rango1 = Format.from( datarango2[0] );
    rango2 = Format.from( datarango2[1] );
    destinacion="Venta";
  }   
  
  var tipo= $('#selecttipo .filter-option-inner-inner').text();
  var zona=$('#selectzona .filter-option-inner-inner').text();
  var alcoba=$('#selectalcoba .filter-option-inner-inner').text();
  

  var b_estado="";
  var b_tipo="";
  var b_lugar="";
  var b_alcoba="";
  var b_rango="&preciodesde="+rango1+"&preciohasta="+rango2;


  if(tipo=="Tipo" && zona=="Zona" && alcoba=="Alcobas")
  {
    $('#msgmodal').trigger("click");
    return false;
  }

  if(estado!="Estado")
  {
    b_estado="&destinacion="+destinacion;
  }

  if(tipo!="Tipo")
  {
    b_tipo="&clase="+tipo;
  }

  if(tipo!="Alcobas")
  {
    b_alcoba="&alcobas="+alcoba;
  }

  if(zona!="Zona")
  {
    var zonapart=zona.split("|");
    var municipio=zonapart[0];
    var barrio=zonapart[1];
    b_lugar="&municipio="+municipio+"&barrio="+barrio;    
  }
 
  $("#contenido").html(Propiedades);
  $("#titulopropiedades").text("Lista de Propiedades.");
  
  console.log(estado,tipo,zona);
  var urlini="https://www.softinm.co/api/inmuebles/listar/98522042/arrendando?cantidadporpagina=6"+b_rango+b_estado+b_lugar+b_tipo+b_alcoba+"&pagina=1";
  let url=window.baseurl+"/gestion/propiedades.php";
  cargarlist(url,"listar_propiedad_perzonalizado",1);
  $('#selecttipo .filter-option-inner-inner').text("Habitaciones");
  $('#selectzona .filter-option-inner-inner').text("Inmueble");
  $('#selectalcoba .filter-option-inner-inner').text("Lugar");
  $("#tiposlectestado").val("Arrendar");
 //$('select').selectpicker();
    
}


//Carga de lista de propiedades
export function cargarlist(urlselect,data,pagn)
{
    $("#loadinpagpro").show();

    $.ajax({
      url: urlselect,
      type:"GET",
      data: data,
      success: function( resultdata ) {

        var dataset=JSON.parse(resultdata);
        console.log(dataset.result);
        window.datasetglobal=dataset.result;
        var html="";
        
        if($(window.datasetglobal).length>0)
        {
          var npaginas=Math.ceil($(window.datasetglobal.result).length/9);
          var htmlpaginas="";
          for (var i = 1; i <= npaginas; i++) {
          htmlpaginas+='<span class="badge paginamen itempag itempselect-'+i+'" data-pagina="'+i+'">'+i+'</span>';
          }

         $("#zonapaginacion").html(htmlpaginas);
         $("#zonapaginacion2").html(htmlpaginas);
         $(".itempselect-"+pagn).attr('style','background-color:#007bff');
        }else
        {
          html="<center><br><br><h2>No hay propiedades</h2></center>";          
          $("#zona_listpropiedades").html(html);
          $("#loadinpagpro").hide();
          return false;
        }  


        htmllist(pagn);     
        
      },
     error: function () {
      $("#loadinpagpro").hide();
          return ("Error de Conexion ó de Referencia"); 
          console.log("No, Ajax");      
        } 
  });
}

export function htmllist(pagn,destinacion)
{
  var nlistfin=(pagn)*9;
  var nlistini=(pagn-1)*9;
  var ni=1;
  var html="";
  var ni=1;
  $.each( window.datasetglobal, function( key, value ) {        
   
    if((ni>=(nlistini+1)) && (ni<=nlistfin))
    {


    if(ni==1 || ni==5)
    {
    	html+="<div><br></div>";
    	if(ni==5)
    	{
    		ni=0;
    	}
    }

    ni++;

    console.log(value);

    
    var precio=value.precio;                 
   
    html+='<div class="col fontz mb-3">';
    html+=      '<div class="card shadow-sm">';
    html+=        '<div style="width: 100%;text-align: right;position: absolute;">';
    html+=          '';
    html+=        '</div>';
    html+=        '<div style="width: 100%;text-align: right;position: absolute;top: 18px;">';
    html+=          '';
    html+=        '</div>';
    html+=        '<img src="'+window.baseurl+'/asset/img/propiedades/'+value.propiedades_codigo+'/1.jpg"   height="220" width="100%">';
    html+=        '<div class="card-body">';
    html+=          '<center><h5 style="margin-top:-75px"><span class="badge" style="margin:0px;background-color:#007bff;color:#fff">'+value.tipo_propiedad_titulo+'</span> <span class="badge" style="margin:0px;background-color:#5a6268">'+value.propiedades_estado_t+'</span> <span class="badge" style="margin:0px;background-color:#007bff"> COD '+value.propiedades_codigo+'</span></h5></center>';
    html+=          '<div style="font-size:10px;padding-left:8px">';
    html+=            '<nav style="--bs-breadcrumb-divider: \'>\';" aria-label="breadcrumb">';
    html+=                '<div">'+value.ciudad_propiedades_nombre+' / '+value.zona_propiedad_nombre+' / '+value.propiedades_sector+'</div>';
    html+=            '</nav>';
    html+=          '</div>';
    html+=            '<br>';
    html+=          '<div class="detalle">';
    html+=            '<table style="width:100%;text-align:center">';
    html+=              '<tr style="color:#000"><td><i class="fas fa-bed"></i></td><td><i class="fas fa-bath"></i></td><td><i class="fas fa-clone"></i></td><td><i class="fas fa-warehouse"></i></td></tr>';
    html+=              '<tr><td>'+value.propiedades_alcobas+'</td>';
    html+=              '<td>'+value.propiedades_banos+'</td>';
    html+=              '<td>'+value.propiedades_area+' m2</td>';
    html+=              '<td>'+value.propiedades_parqueadero+'</td></tr>';      
    html+=            '</table>';
    html+=          '</div>';
    html+=          '<hr>';

    var preciopropiedad=value.propiedades_precio;

    if(value.propiedades_estado_t=="Arriendo")
    {
      preciopropiedad=value.propiedades_precio_arriendo;
    }

    html+=          '<div style="font-size: 1.2em;">';
    html+=            '<nav style="background-color: #e9ecef;border-radius: .25rem;padding: .75rem 1rem;">';
    html+=                '<center><h4 class="formatprecio">'+preciopropiedad+'</h4></center>';
    html+=            '</nav>';
    html+=          '</div>';      
    html+=        '<a href="/cod-'+value.propiedades_codigo+'"><button type="button" class="btn btn-sm btn-primary " style="width:100%" data-id="'+value.consecutivo+'">Ver propiedad</button></a>';
    html+=        '</div>';
    html+=      '</div>';
    html+=    '</div>';
    html+=    '</div>';
    html+=    '</div>';  
  }
  if(ni==nlistfin)
  {
    return false;
  }
  ni++;
  
  });             

  $("#zona_listpropiedades").html(html);
  $("#loadinpagpro").hide();
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



