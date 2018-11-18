
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
    $('.carousel').carousel();
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    


  // Copy my email address to clipboard so that address isn't on website.
    $('#email-address').click(function(){
      var email = "kbauertx@gmail.com"
      copyTextToClipboard(email);
    });
    

    function copyTextToClipboard(text) {
      var textArea = document.createElement("textarea");

      textArea.style.position = 'fixed';
      textArea.style.top = 0;
      textArea.style.left = 0;
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = 0;
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
      } catch (err) {
        console.log('Oops, unable to copy');
      }
      document.body.removeChild(textArea);
    }
    

  });