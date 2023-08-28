var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
  scrollFunction()
  growLogo()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


jQuery(function($){    
  $(window).scroll(function(){ 
      if($(window).scrollTop() > 0) {
          $('.logo').show();
      } else {
          $('.logo').hide();
      }
  }); 
});

function growLogo() {
  var Logo = document.getElementById("Logo")
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    Logo.style.width = '30%';
  } else {
    Logo.style.width = '45%';
  }
}