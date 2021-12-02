const openModal = document.getElementById('form');
const closeModal = document.querySelector('.fa-times-circle');
const modal = document.querySelector('.modal')

openModal.addEventListener('click', (e) =>{
    e.preventDefault();
   modal.style.display = 'block'
})


closeModal.addEventListener('click',()=>{
    modal.style.display = 'none'
})