const burger = document.querySelector('.burger')
const enter = document.querySelector('.enter')
const menu = document.querySelector('.pos')
const reg = document.querySelector('.form-reg-container')
const close = document.querySelector('.reg-close')
const closeOrder = document.querySelector('.order-close')
const consult = document.querySelector('.consult')
const phone = document.querySelector('.form-order-container')
const height = window.innerHeight


burger.addEventListener('click', _=> {
  menu.classList.toggle('show')
})

enter.addEventListener('click', _=> {
  reg.classList.add('show')
  document.body.style.overflow = 'hidden'
})

close.addEventListener('click', _=> {
  reg.classList.remove('show')
  document.body.style.overflow = 'auto'
})

consult.addEventListener('click', _=> {
  console.log(height+'px')
  let h = height+'px'
  phone.style.height = h
  phone.classList.add('show')
  document.body.style.overflow = 'hidden'
  window.scrollTo(0, 0);
})

closeOrder.addEventListener('click', _=> {
  phone.classList.remove('show')
  document.body.style.overflow = 'auto'
})


