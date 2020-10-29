
$(document).ready(function(){

  /*
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);
    let indice = filename.indexOf(".");
    let nombreSection = filename.substring(0, indice);
    if(nombreSection != "login"){
      document.getElementById("titleSection").innerHTML = nombreSection.toUpperCase();
    }else{

    }
  */

})
$(document).on('ready', function() {
  
    $('.field').on('focus', function() {
      $('body').addClass('is-focus');
    });
    
    $('.field').on('blur', function() {
      $('body').removeClass('is-focus is-type');
    });
    
    $('.field').on('keydown', function(event) {
      $('body').addClass('is-type');
      if((event.which === 8) && $(this).val() === '') {
        $('body').removeClass('is-type');
      }
    });
    
  });
  $(document).ready(function() {

    $('#example-1').progress_fnc();
    $('#example-2').progress_fnc();
    $('#example-3').progress_fnc();
    $('#example-4').progress_fnc();
    $('#example-5').progress_fnc();
    $('#example-6').progress_fnc();
    $('#example-7').progress_fnc();
    $('#example-8').progress_fnc();
    $('#example-9').progress_fnc();
    $('#example-10').progress_fnc();
    $('#example-11').progress_fnc();
    $('#example-12').progress_fnc();
    $('#example-13').progress_fnc();
  
    $('.progressStart').on('click', function() {
      var perent = $(this).closest("div").attr("id");
      $('#' + perent).progress_fnc({ type: 'start' });
    });
  
    $('.progressReset').on('click', function() {
      var perent = $(this).closest("div").attr("id");
      $('#' + perent).progress_fnc({ type: 'reset' });
    });
  
  });
  
  
  (function($) {
  
    $.fn.progress_fnc = function(options) {
      var settings = $.extend({
        type: 'start'
      }, options);
  
      var div = $(this);
      var progress = div.find('.cssProgress');
  
      progress.each(function() {
        var self = $(this);
        var progress_bar = self.find('.cssProgress-bar');
        var progress_label = self.find('.cssProgress-label, .cssProgress-label2');
        var progress_value = progress_bar.data('percent');
        var percentage = parseInt(progress_value, 10) + '%';
  
        progress_bar.css({'width': '0%', 'transition': 'none', '-webkit-transition': 'none', '-moz-transition': 'none'});
  
        if(settings.type == 'start') {
  
          progress_bar.animate({
            width: percentage
          }, {
            duration: 1000,
            step: function(x) {
              progress_label.text(Math.round(x) + '%');
            }
          });
  
        } else if(settings.type == 'reset') {
          progress_bar.css('width', '0%');
          progress_label.text('0%');
        }
  
      });
    }
  
  }(jQuery));