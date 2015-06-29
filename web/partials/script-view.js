 
   
   



   // setTimeout(function(){
   //  // var odometer = document.getElementById("odometer");
   //  // var odometer2 = document.getElementById("odometer2");
   //  // var odometer3 = document.getElementById("odometer3");
   //  // odometer.innerHTML = 57397;
   //  // odometer2.innerHTML = 93;
   //  // odometer3.innerHTML = 120;
   //  }, 800);

        
    $(document).ready(function(){
        $("#sticker").sticky({topSpacing:100});
        $("#premium-stick").sticky({topSpacing:49});
        $("#free-stick").sticky({topSpacing:49});
        $("#sticky-nav").sticky({topSpacing:0});
   

    $(window).resize(function() {
    $('.auto-height').height($(window).height() -  $('.navbar').height() - $('.app-footer').height() - 96);
    });
    $(window).trigger('resize');
  

   
    $(window).load(function() {

          

    // The slider being synced must be initialized first
    $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    pauseOnAction: true,
    pauseOnHover: true,
    itemWidth: 128,
    itemMargin: 0,
    touch: true,
    asNavFor: '#slider'
    });
   
    $('#slider').flexslider({
    animation: "slide",
    pauseOnAction: true,
    pauseOnHover: true,
    directionNav: true,
    touch: true, 
    controlNav: false,
    animationLoop: false,
    sync: "#carousel"
    });
    });

     });
