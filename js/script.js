

$(document).ready(function() {
    $("#placeOrder").click(function(event) { 
        var sizePrice = function getSize() {
        var pizzaSize = document.getElementById("size").value;
        return parseInt(pizzaSize);
        }; 

            var crustPrice = function getCrustType() {
            var pizzaCrust = document.getElementById("crust").value;
            return parseInt(pizzaCrust);
        };        
            var toppingsPrice = function getToppings() {
            var pizzaToppings = document.getElementById("toppings").value;
            return parseInt(pizzaToppings);
        }; 
            var quantityPrice = function getQuantity() {
            var pizzaQuantity = document.getElementById("quantity").value;
            return parseInt(pizzaQuantity);
        };        
        function UserOrder(size, crust, toppings,quantity) {
            this.newSize = size;
            this.newCrust = crust;
            this.newToppings = toppings;
            this.newQuantity = quantity;
        }        
        var inputForUserOrder = new UserOrder(
            sizePrice(),
            crustPrice(),
            toppingsPrice(),
            quantityPrice()
        );        
        var totalPrice = (inputForUserOrder.newSize + inputForUserOrder.newCrust +inputForUserOrder.newToppings) *  inputForUserOrder.newQuantity;        
            alert("Your total price is Ksh :"  +totalPrice);

            if (totalPrice > 0) {
            alert("Your order of ksh :"+ totalPrice +" ,has been placed.Thank you");
            var delivery = confirm(
            "For home delivery, an additional fee of 150 will be inccured. Would you like to proceed?");
            if (delivery === true) {
                for (;;) {
                    var location = prompt(
                    "Enter  a location for delivery: "
                    );
                    if (location !== "") {
                    alert(
                        "Your order will be delivered to: " +
                        location +
                        ". Thank you for orderin with the Pizza booth"
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


