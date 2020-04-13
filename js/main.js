var loadRole = function(value){
  var text = document.getElementById('roleText');

  var x = 1;
  var letterCount = 1;
  var visible = true;
  var waiting = false;

  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      text.innerHTML = value.substring(0, letterCount)
      window.setTimeout(function() {
        x = 1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === value.length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      text.innerHTML = value.substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      visible = false;
    } else {
      visible = true;
    }
  }, 400)
}

var loadPage = function(){
  loadRole('Software Developer');
}

$(document).ready(loadPage);