
"use strict";

(function() {
    window.addEventListener('load',initial);
    let navBarD = id('navbarD');
    function initial(){
        navBarD.addEventListener('scroll', changeBackgroundColor());
        console.log("FirstFunction");
    }

    function changeBackgroundColor(){
        navBarD.style.backgroundColor = '#ffffff';
        console.log("SecondFunction");
    }
    
    
    function qs(selector) {
        return document.querySelector(selector);
      }

      function id(name) {
        return document.getElementById(name);
      }
       
      function qsa(query) {
        return document.querySelectorAll(query);
      }   
    
})();  