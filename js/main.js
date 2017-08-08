function pagenav() {
  i = 1
  var pages = [];
  while (document.getElementById(i)) {
    if (document.getElementById(i).style.display == "block") {
      pages.push("&#9679;")
    } else {
      pages.push("&#9675;")
    }
    i++;
  }
  var pagedis = pages.join(" ");
  document.getElementById("things").innerHTML = pagedis;
}
function left() {
  i = 1
  while (document.getElementById(i)) {
    if (document.getElementById(i).style.display == "block") {
      if (i === 1) { break; }
      i1 = i
      i1--;
      document.getElementById(i).style.display = "none";
      document.getElementById(i1).style.display = "block";
      pagenav();
    }
    i++;
  }
}
function right() {
  i = 1
  while (document.getElementById(i)) {
    if (document.getElementById(i).style.display == "block") {
      i1 = i
      i1++;
      if (!document.getElementById(i1)) { break; }
      document.getElementById(i).style.display = "none";
      document.getElementById(i1).style.display = "block";

      pagenav();
    }
    i++;
  }
}





function changeimage(image, id) {
  document.getElementById(id).style.backgroundImage = 'url(images/' + image + '.png)';
  blur();
}
function assignimages() {
  i = 1
  page = "parallax-" + i;
  while (document.getElementById(page)) {
    image = page + ".png";
    changeimage(page, page)
    i++;
    page = "parallax-" + i;
  }
}


window.onload = function(){
   pagenav();
   assignimages();
   document.getElementsByTagName('body')[0].onkeyup = function(e) {
     var ev = e || window.event;
     if(ev.keyCode == 37) {
       left();
       return false;
     }
     if(ev.keyCode == 39) {
       right();
       return false;
     }
   }
};
