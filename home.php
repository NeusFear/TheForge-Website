<!doctype hyml>
<html>
  <head>
    <meta charset="utf-8"></meta>
      <!--Tab Title-->
    <title>The Forge</title>

      <!--Meta-->
    <meta content="The Forge - Minecraft Network" name="description"></meta>
    <meta content="SkyForge_" name="author"></meta>

      <!--Favicon-->
    <!--<link href="images/favicon.ico" rel="shortcut icon"></link>-->

      <!--Fonts-->
    <link href="https://fonts.googleapis.com/css?family=Anton" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet"></link>

      <!--Styles-->
    <link href="css/style.css" rel="stylesheet"></link>
  </head>





  <script>
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
    function hide(hide) {
      document.getElementById(hide).style.display = "none"
    }
    function left() {
      i = 1
      while (document.getElementById(i)) {
        if (document.getElementById(i).style.display == "block") {
          if (i === 1) { break; }
          i1 = i
          i1--;
          document.getElementById(i).style.width = "0px"
          setTimeout(hide(i), 600);
          document.getElementById(i1).style.display = "block"
          document.getElementById(i1).style.width = "100%"
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
          document.getElementById(i).style.width = "0px"
          setTimeout(hide(i), 600);
          document.getElementById(i1).style.display = "block"
          document.getElementById(i1).style.width = "100%"

          pagenav();
        }
        i++;
      }
    }
    window.onload = function(){ pagenav(); };
  </script>
  <body>
    <div class="section" id="1" style="display:block;">
      <div id="header" class="header">Home</div>
      <div class="content">Text</div>

    </div>





    <div class="section" id="2" style="display:none;">
      <div id="header" class="header">Forums</div>
        <div id="content" class="content">
            THIS IS WHERE THE PAGE CONTENT WOULD BE 2
        </div>
    </div>





    <div class="section" id="3" style="display:none;">
      <div id="header" class="header">Wiki</div>
        <div id="content" class="content">
            THIS IS WHERE THE PAGE CONTENT WOULD BE 3
        </div>
    </div>






    <div class="nav" id="nav">
      <input class="button" id="left" type="button" value="&#9664;" onclick="left();" style="float:left;" />
      <div class="pages" id="things" style="float:left;">
        Stuff
      </div>
      <input class="button" id="right" type="button" value="&#9654;" onclick="right();" style="float:left;" />
    </div>



  </body>
</html>
