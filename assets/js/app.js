
  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.sidenav');
  //   var instances = M.Sidenav.init(elems, options);
  // });


  // document.addEventListener('DOMContentLoaded', function() {
  //   M.AutoInit();
  //   var elems = document.querySelectorAll('.parallax');
  //   var instances = M.Parallax.init(elems);
  //   $('.sidenav').sidenav();
    
  // });

  $(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
  });