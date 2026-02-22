/* NAVBAR CLOSE ON CLICK */

$(document).ready(function(){

  $(".nav-link").click(function(){

    $(".navbar-collapse").collapse("hide");

  });

});


/* SMOOTH SCROLL */

$(document).ready(function(){

  $(".nav-link").click(function(e){

    if(this.hash !== ""){

      e.preventDefault();

      var hash = this.hash;

      $("html, body").animate({

        scrollTop: $(hash).offset().top

      }, 800);

    }

  });

});


/* SIMPLE HERO ANIMATION */

$(document).ready(function(){

  $(".hero h1").hide().fadeIn(1200);

  $(".hero p").hide().fadeIn(1800);

  $(".custom-btn").hide().fadeIn(2200);

});


/* SERVICE HOVER EFFECT EXTRA */

$(document).ready(function(){

  $(".main").hover(

    function(){

      $(this).css("transform","scale(1.05)");

    },

    function(){

      $(this).css("transform","scale(1)");

    }

  );

});


/* SCROLL TO TOP BUTTON */

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

    if(mybutton){

      mybutton.style.display = "block";

    }

  } else {

    if(mybutton){

      mybutton.style.display = "none";

    }

  }

};


function topFunction() {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}
