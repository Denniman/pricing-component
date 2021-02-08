const toggleBtn = document.querySelector('.btn--toggle')
const basicPrice = document.getElementById('basic-price')
const profPrice = document.getElementById('prof-price')
const masterPrice = document.getElementById('master-price')


toggleBtn.addEventListener('change', (e) => {
   
 if(e.target.checked) {
    basicPrice.textContent = `$${19.99}`
    profPrice.textContent = `$${24.99}`
    masterPrice.textContent = `$${39.99}`
 } else {
    basicPrice.textContent = `$${199.99}`
    profPrice.textContent = `$${249.99}`
    masterPrice.textContent = `$${399.99}`
 }

})