function compile() {
  //var html = document.getElementById("html");
  // var css = document.getElementById("css");
  var js = document.getElementById("js");
  var preview = document.getElementById("preview");
  // var code = document.getElementById("code").contentWindow.document;
  var code = js.value;
  eval(code);
  /*
  document.body.onkeyup = function() {
    code.open();
    code.writeln(
      html.value +
        "<style>" +
        css.value +
        "</style>" +
        "<script>" +
        js.value +
        "</script>"
    );
    code.close();
    //compile();
  };
  */

}


function refreshPage(){
    window.location.reload();
} 

function setup() {
  createCanvas(800, 400);
}

/*
function setup() {
  createCanvas(800, 400);
}

function draw() {
  rect(250, 0, 150, 150);
  rect(250, 249, 150, 150);
  rect(500, 0, 150, 150);
  rect(500, 249, 150, 150);
}
*/

