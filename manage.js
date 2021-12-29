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

    $('#RichardsBtn').click(function(){
      let outerWi = window.outerWidth;
      $('.firstFeedBack').css('margin-left', (-4*outerWi));
    }); 
    
    $("#icons").click(function(){
      if($("#icons div").hasClass("icon")){
        $("#icons div").removeClass('icon');
        $("#icons div").addClass('roratedIcons');
      }else{
        $("#icons div").removeClass('roratedIcons');
        $("#icons div").addClass('icon');
      }

    });     

  });  