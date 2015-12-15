$(document).ready(function() {
  $("#postale").hide();
  $("#mail").hide();

  $("#img1").click(function(){
    $("#postale").show("fast");
    return false;
  });

  $("#postale").click(function(){
    $("#postale").hide("fast");
    return false;
  });

  $("#img2").click(function(){
    $("#mail").toggle("fast");
    return false;
  });
});

$(function(){
  setInterval(function(){
    $(".slideshow ul").animate({marginLeft:-550},800,function(){
      $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
    })
  }, 3900);
 });

 var timeout    = 500;
 var closetimer = 0;
 var ddmenuitem = 0;

 function jsddm_open()
 {  jsddm_canceltimer();
    jsddm_close();
    ddmenuitem = $(this).find('ul').css('visibility', 'visible');}

 function jsddm_close()
 {  if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

 function jsddm_timer()
 {  closetimer = window.setTimeout(jsddm_close, timeout);}

 function jsddm_canceltimer()
 {  if(closetimer)
    {  window.clearTimeout(closetimer);
       closetimer = null;}}

 $(document).ready(function()
 {  $('#jsddm > li').bind('mouseover', jsddm_open)
    $('#jsddm > li').bind('mouseout',  jsddm_timer)});

 document.onclick = jsddm_close;
