document.addEventListener('DOMContentLoaded', function() {
    // when document is loaded
    console.log("[loaded]")
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });