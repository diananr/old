/*-----------------------------------*/
$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});

consoleText(["Front End Developer"],'text',["#F87060"]);
function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore decolorar'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

var cargaPag = function(){
  $(".dir").click(ocultarSec);
  $("#todos").click(mostrarTodos);
  $("#landing").click(mostrarLanding);
  $("#mobile").click(mostrarMobile);

  $(".hab").smoove({
    offset  : '25%',
    moveY   : '100px',
  });
}
$(document).ready(cargaPag);

var ocultarSec = function(){
  $("#otrosDatos").toggleClass("ocultar");
  $(".descripcion").toggleClass("ocultar");
}

var mostrarTodos = function(){
  $("#mostrarTodos").removeClass("ocultar");
  $("#mostrarLanding").addClass("ocultar");
  $("#mostrarMobile").addClass("ocultar");
}

var mostrarLanding = function(){
  $("#mostrarLanding").removeClass("ocultar");
  $("#mostrarTodos").addClass("ocultar");
  $("#mostrarMobile").addClass("ocultar");
}

var mostrarMobile = function(){
  $("#mostrarMobile").removeClass("ocultar");
  $("#mostrarLanding").addClass("ocultar");
  $("#mostrarTodos").addClass("ocultar");
}
