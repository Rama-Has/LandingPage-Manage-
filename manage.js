"use strict";




/*
document.getElementById('icons').onclick=function () {
  document.getElementById("menu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  let iconss =document.getElementById("icons")
  if (!event.target.match(iconss)) {
    let dropdowns = document.querySelectorAll("#menu a");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/


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
      let outerWi = window.outerWidth;
      $('.firstFeedBack').css('margin-left',  0.1*window.outerWidth);
      $('.firstFeedBack').css('margin-right', 0.1*window.outerWidth);
    });    

    $('#AlisBtn').click(function(){
      $('.firstFeedBack').css('margin-left', -1*window.outerWidth + 0.1*window.outerWidth);
    }); 

    $('#RichardsBtn').click(function(){
      let outerWi = window.outerWidth;
      $('.firstFeedBack').css('margin-left', -2*(outerWi) + 0.1*window.outerWidth);
    }); 


    $("#icons").click(function(){
      if($("#icons div").hasClass("icon")){
          $("#icons div").removeClass('icon');
          $("#icons div").addClass('roratedIcons');
          $(".menu").addClass('active');
      }else{
          $("#icons div").removeClass('roratedIcons');
          $("#icons div").addClass('icon');
          $(".menu").removeClass("active");
      }
  }); 


  });  