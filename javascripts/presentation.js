$(document).ready(function(){
  $('#accordion').accordion({collapsible: true, active: false});

  $('.question').click(function(){
    $('.glyphicon', this).toggleClass('glyphicon-menu-up').toggleClass('glyphicon-menu-down')
  })


});
