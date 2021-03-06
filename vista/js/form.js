$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip(); //activar el tooltip de bootstrap

  $( ".fecha" ).datepicker({
    dateFormat: "dd/mm/yy"
  }); //Instalacion del "date picker" de Jquery UI
  //$( ".fecha" ).datepicker( "option", "dateFormat", "dd/mm/yy" ); //seleccion del formato para la fecha

  //Funcion de validacion para fechas en facturas
  $('.fecha-inicial-venta').on('change', function() {
    $('.fecha-final-venta').datepicker('option', 'minDate', $(this).val());
  });

  $('.fecha-inicial-compra').on('change', function() {
    $('.fecha-final-compra').datepicker('option', 'minDate', $(this).val());
  });

  //Formulario de factura
  $('#seleccion').on('change', function(){ //Oculta y muestra el formulario correspondiente mediante un select
    var prev = $(this).data('val');
    var current = $(this).val();

    if (prev) {
      $('#' + prev).hide(1000);
    }

    $('#' + current).show(1000);
    $(this).data('val', $(this).val());
  });

  $('#tipo1').on('change', function(){ //Oculta y muestra la fecha final en el formulario de factura venta
    var type = $(this).val();

    if (type == 'P') {
      $('#credito1').show(1000);
      $('#p1').attr('required','required')
    }
    else {
      $('#credito1').hide(1000);
      $('#p1').attr('required','required')
    }
  });

  $('#tipo2').on('change', function(){ //Oculta y muestra la fecha final en el formulario de factura compra
    var type = $(this).val();

    if (type == 'P') {
      $('#credito2').show(1000);
      $('#p2').attr('required','required')
    }
    else {
      $('#credito2').hide(1000);
      $('#p2').attr('required','required')
    }
  });

  //Validacion de formularios
  $('input[pattern]').on('change keyup', function(){
    if(this.checkValidity())
    {
      $(this).removeClass('form-control-warning');
      $(this).parent().removeClass('has-warning');
      $(this).addClass('form-control-success');
      $(this).parent().addClass('has-success');
    }
    else
    {
      $(this).removeClass('form-control-success');
      $(this).parent().removeClass('has-success');      
      $(this).addClass('form-control-warning');
      $(this).parent().addClass('has-warning');
    }
  });

  $('#continuar').click(function(){
    
  if($(this).text() == 'Continuar'){ 
    $('#cliente').hide(1000);
    $('#empresa').show(1000);
    $(this).html('<b>Atras</b>');
  }

  else {
    $('#empresa').hide(1000);
    $('#cliente').show(1000);
    $(this).html('<b>Continuar</b>');
  }
  });
});