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
   - blueberries.jpg by Joanna Kosinska

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
    {
      name: "Basket of Blueberries",
      price: 20.00,
      quantity: 0,
      productId: 103,
      image: "/images/blueberries.jpg"
    }
    ];
    
const cart = [];

let total_paid = 0;

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

function getProduct(pid, plist) {
    return plist.find((products) => products.productId === pid);
}

/*this function looks at each product and increases 
    qty and pushes to cart (if not there already)
*/
function addProductToCart(pid) {
    let product = getProduct(pid,products);
    product.quantity += 1;
    if (!cart.includes(product)) {
    cart.push(product);
    }
}

/*this function check product id 
    and increments qty for every click
*/
function increaseQuantity(pid) {
    let product = getProduct(pid,cart);
    product.quantity += 1;
}

/*checks ID + whether exists in cart + whether qty =1
    ;qty = 0 is trivial since can only be >0 if not in cart
*/
function decreaseQuantity(pid) {
    let product = getProduct(pid,cart);
    if (product.quantity > 1) {
        product.quantity -= 1;
    } else if (product.quantity === 1) {
        product.quantity = 0;
        cart.splice(cart.indexOf(product),1);
    }
}

/*used splice here to just remove 1 entry at a time
    and replace with nothing
*/
function removeProductFromCart(pid) {
    let product = getProduct(pid,cart); 
    if (cart.includes(product)) {
    cart.splice(cart.indexOf(product),1);
    product.quantity = 0;
    }
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

/*called toFixed(2) on the front end outputs
    from this function because some of the results
    looked a little displeasing - 
    for example paying $8.99 of a $9 bill resulted in a
    available balance of many digits
*/
function pay(amount) {
    total_paid += amount;
    let cash_returned = (total_paid - cartTotal());
    if (cash_returned >= 0) {
    total_paid = 0;
    }
    return cash_returned;
}