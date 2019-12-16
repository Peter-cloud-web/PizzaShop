
 
//  $(document).ready(function()   {
//      $("#Order").click(function () {

// $( ".men_ex" ).toggle({
//         duration: 3000,

//     });
// $( ".men_top" ).toggle({
//         duration: 3000,
//     });
// $( ".size" ).toggle({
//         duration: 3000,
//   });  
//  });
// });

//   $(document).ready(function(){
//     $("#piz1").click(function () {
//       var one = document.getElementById("piz1");
//     $( "#icon1" ).toggle({
//     });
//     event.preventDefault();
//   });
//      $("#piz2").click(function () {
//     $( "#icon2" ).toggle({
//     });
//     event.preventDefault();
//   });
//      $("#piz3").click(function () {
//     $( "#icon3" ).toggle({
//     });
//     event.preventDefault();
//   });
//      $("#piz4").click(function () {
//     $( "#icon4" ).toggle({
//     });
//     event.preventDefault();
//   });
//      $("#piz5").click(function () {
//     $( "#icon5" ).toggle({
//     });
//     event.preventDefault();
//   });





//      $("#crus1").click(function () {
//     $( "#icon6" ).toggle({
//     });
//     event.preventDefault();
//   });
//      $("#crus2").click(function () {
//     $( "#icon7" ).toggle({
//     });
//     event.preventDefault();
//   });
//      $("#crus3").click(function () {
//     $( "#icon8" ).toggle({
//     });
//     event.preventDefault();
//   });
//      $("#crus4").click(function () {
//     $( "#icon9" ).toggle({
//     });
//     event.preventDefault();
//   });
//      $("#crus5").click(function () {
//     $( "#icon10" ).toggle({
//     });
//     event.preventDefault();
//   });




//      $("#size1").click(function () {
//     $( "#icon11" ).toggle({
//     });
//     event.preventDefault();
//   });  
//       $("#size2").click(function () {
//     $( "#icon12" ).toggle({
//     });
//     event.preventDefault();
//   });
//    $("#size3").click(function () {
//     $( "#icon13" ).toggle({
//     });
//     event.preventDefault();
//   });
// });

$(document).ready(function() {
    $("#placeOrder").submit(function(event) { var pizzaSizePrice = function getSize() {
        var pizzaSize = document.getElementById("size").value;
        return parseInt(pizzaSize);
        };        var pizzaCrustPrice = function getCrustType() {
            var pizzaCrust = document.getElementById("crust").value;
            return parseInt(pizzaCrust);
        };        var pizzaToppingsPrice = function getToppings() {
            var pizzaToppings = document.getElementById("toppings").value;
            return parseInt(pizzaToppings);
        };        var pizzaQuantityPrice = function getQuantity() {
            var pizzaQuantity = document.getElementById("quantity").value;
            return parseInt(pizzaQuantity);
        };        function UserOrder(size, crust, toppings) {
            this.newSize = size;
            this.newCrust = crust;
            this.newToppings = toppings;
        }        var inputForUserOrder = new UserOrder(
            pizzaSizePrice(),
            pizzaCrustPrice(),
            pizzaToppingsPrice(),
            pizzaQuantityPrice()
        );        var totalPrice = (inputForUserOrder.newSize +
            inputForUserOrder.newCrust +
            inputForUserOrder.newToppings) *
            inputForUserOrder.newQuantity;        alert(totalPrice);        if (totalPrice > 0) {
            alert("Your order is = ksh" + totalPrice);
            var delivery = confirm(
            "For home delivery, an additional fee of 150 will be inccured. Would you like to proceed?"
            );
            if (delivery === true) {
                for (;;) {
                    var location = prompt(
                    "Select a location for delivery: "
                    );
                    if (location !== "") {
                    alert(
                        "Your order will be delivered here: " +
                        location +
                        ". Thank you! Order again soon"
                    );                    break;
                    } else {
                    alert(
                        "Please enter a valid location to have your order delivered!"
                    );
                    }
                }                alert(
                    "Your order is = ksh" +
                    totalPrice +
                    " + ksh100 delivery fee."
                );
                } else {
                alert(
                    "Thank you! Your order has been processed, pick it within 72hrs or order."
                );
                alert(
                    "Your total order is = ksh" + totalPrice
                );
                }
                $("#placeOrder").reset();
            } else {
                alert("Please fill in all the valid fields for an order");
            }        event.preventDefault();
    });
  });


