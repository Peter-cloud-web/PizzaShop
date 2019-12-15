
 $(document).ready(function() {
     $("#Order").click(function () {
$( "#pizza" ).toggle({
        duration: 3000,
    
    });
$( "#Sizes" ).toggle({
          duration: 3000,
    });
$( "#Crust" ).toggle({
        duration: 3000,

    });
  });  


     $("#pizza").click(function () {
$( ".men_ex" ).toggle({
        duration: 3000,

    });
$( ".size" ).hide({
          duration: 3000,
    });
$( ".men_top" ).hide({
        duration: 3000,

    });
  });  

     $("#Crust").click(function () {
$( ".men_top" ).toggle({
        duration: 3000,
    });
$( ".size" ).hide({
          duration: 3000,
    });
$( ".men_ex" ).hide({
        duration: 3000,

    });
  }); 

     $("#Sizes").click(function () {
$( ".size" ).toggle({
        duration: 3000,

    });
$( ".men_ex" ).hide({
        duration: 3000,

    });
$( ".men_top" ).toggle({
        duration: 3000,
    });
  }); 
    }); 

  