/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/

/* Create a function called emptyCart that empties the products from the cart */

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

let products = [
    {
      name: "Basket of Cherries",
      price: 2.00,
      quantity: 0,
      productId: 100,
      image: "/images/cherry.jpg"
    },
    {
      name: "Basket of Oranges",
      price: 3.00,
      quantity: 0,
      productId: 101,
      image: "/images/orange.jpg"
    },
    {
      name: "Basket of Strawberries",
      price: 4.00,
      quantity: 0,
      productId: 102,
      image: "/images/strawberry.jpg"
    },
    // {
    //   name: "Basket of Blueberries",
    //   price: 20.00,
    //   quantity: 0,
    //   productId: 103,
    //   image: "/images/joanna-kosinska-blueberries.jpg"
    // }
    ];
    
    const cart = [];
    
    module.exports = {
      products,
      cart,
      addProductToCart,
      increaseQuantity,
      decreaseQuantity,
      removeProductFromCart,
      cartTotal,
      pay, 
      emptyCart,
      /* Uncomment the following line if completing the currency converter bonus */
      // currency
    }
    
    /*this function looks at each product and increases 
      qty and pushes to cart (if not there already)
    */
    function addProductToCart(pid) {
      products.forEach(function(element) {
        if (pid === element.productId && cart.includes(element)) {
            element.quantity += 1;
        } else if (pid === element.productId && !(cart.includes(element))) {
            element.quantity += 1;
            cart.push(element);
          }
      })
    }
    
    /*this function check product id 
      and increments qty for every click
    */
    function increaseQuantity(pid) {
      products.forEach(function(element) {
        if (pid === element.productId)  {
          element.quantity += 1;
        }
      })
    }
    
    /*checks ID + whether exists in cart + whether qty =1
      ;qty = 0 is trivial since can only be >0 if not in cart
    */
    function decreaseQuantity(pid) {
      products.forEach(function(element) {
        if ((pid === element.productId) && (cart.includes(element)) && (element.quantity > 1)) {
            element.quantity -= 1;
        } else if ((pid === element.productId) && (cart.includes(element)) && (element.quantity === 1)) {
            element.quantity = 0;
            cart.splice(cart.indexOf(element),1);
        }
      })
    }
    
    /*used splice here to just remove 1 entry at a time
      and replace with nothing
    */
    function removeProductFromCart(pid) {
      products.forEach(function(element) {
        if (pid === element.productId && cart.includes(element)) {
          element.quantity = 0;
          cart.splice(cart.indexOf(element),1);
          }
      })
    }
    
    /*thought about checking whether item should be in cart
      but figured was not necessary since qty=0 if not in cart
    */
    function cartTotal() {
      let sum = 0;
      cart.forEach(function(item) {
        sum += item.quantity * item.price;
      })  
      return sum;
    }
    
    /*used splice to clear all cart entries
      sets product qty = 0 for everything
    */
    function emptyCart() {
      cart.splice(0, cart.length);
      products.forEach(function(element) {
        element.quantity = 0;
      })
    }
    
    /*if the remainig balance was small, the front end displayed
      a very large number of sign digits, so I added a toFixed(2) here
      but that threw an error (I'm guessing because of rounding 
      checksum error), so I removed it
    */
    function pay(amount) {
      return (amount - cartTotal());
    }
    
    /* project rubric asks for this global variable 
       but I don't see where it is used on the front end
    */
    let balance = pay(); 