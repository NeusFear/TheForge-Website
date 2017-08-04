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

      <!--Scripts-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="scripts/parallax.js"></script>
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





    function changeimage(image, id) {
      document.getElementById(id).style.backgroundImage = 'url(images/' + image + ')';
    }
    function assignimages() {
      i = 1
      page = "parallax-" + i;
      while (document.getElementById(page)) {
        image = page + ".png";
        changeimage(image, page)
        i++;
        page = "parallax-" + i;
      }
    }


    window.onload = function(){
       pagenav();
       assignimages();
    };

  </script>
  <body>
    <div class="section" id="1" style="display:block;">
      <div id="header" class="header"><font color="#ffc342">THEFORGE</font>HOME</div>

      <div class="parallax" id="parallax-1">
         <button type="button" class="button" onclick="changeimage('temp.png', 'parallax-1')">Change Image</button>
      </div>

      <div class="parallax" id="parallax-2"></div>

    </div>





    <div class="section" id="2" style="display:none;">
      <div id="header" class="header"><font color="#ffc342">THEFORGE</font>NEWS</div>
        <div id="content" class="content">
            News
        </div>
    </div>





    <div class="section" id="3" style="display:none;">
      <div id="header" class="header"><font color="#ffc342">THEFORGE</font>FORUMS</div>
        <div id="content" class="content">
            the Forge Forums
        </div>
    </div>





    <div class="section" id="4" style="display:none;">
      <div id="header" class="header"><font color="#ffc342">THEFORGE</font>REVIEWS</div>
        <div id="content" class="content">
            Review Pages
        </div>
    </div>





    <div class="section" id="5" style="display:none;">
      <div id="header" class="header"><font color="#ffc342">THEFORGE</font>COMMUNITY</div>
        <div id="content" class="content">
            Server info and things
        </div>
    </div>





    <div class="section" id="6" style="display:none;">
      <div id="header" class="header"><font color="#ffc342">THEFORGE</font>PROFILE</div>
        <div id="content" class="content">
            Profile Page
        </div>
    </div>






    <div class="nav" id="nav">
      <input class="navbutton" id="left" type="button" value="&#9664;" onclick="left();" style="float:left;background:transparent;" />
      <div class="pages" id="things" style="float:left;">
        Stuff
      </div>
      <input class="navbutton" id="right" type="button" value="&#9654;" onclick="right();" style="float:left;background:transparent;" />
    </div>



  </body>
</html>
