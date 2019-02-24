/*
   Adriano Alves
   Feb 23 2019
   JS to change the position on the box element
   this will set the position of the red box to relative when user click on button
*/

function change2Relative(){
  document.getElementById("btChangeRel").addEventListener("click", function(){
    var box = document.getElementById("firstElement");
    box.style.position = "relative";

  });
}
