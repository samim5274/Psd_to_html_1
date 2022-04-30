$(document).ready(function(){


  // STICKY MENU

  $(".js--service-section").waypoint(function(direction){
    if (direction == "down") {
        $("nav").addClass("sticky");
    }
    else {
      $("nav").removeClass("sticky");
    }
  });


  // MIXITUP (PROTFOLIO SECTION)
  var mixer = mixitup('.container');
});
