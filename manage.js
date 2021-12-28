"use strict";


  $(document).ready(function(){
    /*Changing the background of the navBar while scrolling the window*/
    $(window).scroll(function(){
      if ($(window).scrollTop() > 80){
        $("#navbarD").css('background-color', 'white');
      }else{($(window).scrollTop() < 130)
        $("#navbarD").css('background-color', 'rgba(255, 255, 255, 0)');  
      }                 
    });

    $('#AnishasBtn').click(function(){
      $('.firstFeedBack').css('margin-left', 0);
    });    

    $('#AlisBtn').click(function(){
      $('.firstFeedBack').css('margin-left', -window.outerWidth);
    }); 

    $('#AnishasBtn').click(function(){
      $('.firstFeedBack').css('margin-left', 0);
    });                                                

         
  });  