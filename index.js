var cart = []

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function total() {
  var t = 0
  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += Number(cart[i][item])
    }
  }
  return t
}

function addToCart(item) {
      let price = Math.floor(Math.random() * 100)
let o = {}
  o[item] = price
  cart.push(o)
  console.log(`${item} has been added to your cart.`)
  return cart
}

