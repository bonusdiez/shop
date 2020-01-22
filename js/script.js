/**
 * Корзина
 */
document.addEventListener('DOMContentLoaded', ()=>{

  
  const cart = document.querySelector('.cart-wrapper')
  const cartOpenBtn = document.querySelector('.cart-open-btn')
  const cartCloseBtn = document.querySelector('.cart-close-btn')
  cartOpenBtn.addEventListener('click', ()=>{
    cart.classList.add('cart-wrapper-open')
  })
  cartCloseBtn.addEventListener('click', ()=>{
    cart.classList.remove('cart-wrapper-open')
  })

})

