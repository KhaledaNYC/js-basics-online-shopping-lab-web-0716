var cart =[];

function setCart(newCart) {
  cart = newCart;
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function getCart() {
  return cart;
}
function addToCart(item) {
  cart.push({item: Math.floor(Math.random()*100)})
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length === 0){
    console.log('Your shopping cart is empty.');
  } else {
  var message = "In your cart, you have "
  for (var item in cart) {
    message += `${item} at $${cart[item]}, `
  }
   console.log(message.slice(0,-2));
 }
}

// function removeFromCart(item) {
//     if (cart.hasOwnProperty(item)){
//       delete cart[].item;
//     }
//     else {
//       console.log('That item is not in your cart.');
//     }
//     return cart;
// }

function removeFromCart(item) {
  cart.forEach(function(ele,i,arr){
    if(ele.hasOwnProperty(item)){
    delete ele.item;
    } else {
      console.log('That item is not in your cart.');
    }
  });
  return cart;
}

function placeOrder(creditCardNumber) {
  var totalFunc = total();
  if( creditCardNumber === undefined ) {
    console.log("We don't have a credit card on file for you to place your order.");
  } else {
    console.log(`Your total cost is $${totalFunc}, which will be charged to your card ${creditCardNumber}`);
    cart = [];
  }
  return cart;
}
