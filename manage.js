
"use strict";

(function() {
    window.addEventListener('load',initial);
    let navBarD = id('navbarD');
    function initial(){
        navBarD.addEventListener('scroll', changeBackgroundColor());    
        /*
        if(document.body.scrollTop > 15 || document.documentElement.scrollTop > 15){
            navBarD.style.backgroundColor = '#ffffff';
        } else{
            navBarD.style.backgroundColor = 'none';
        }
        */
    }

    function changeBackgroundColor(){
        navBarD.style.backgroundColor = '#ffffff';
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