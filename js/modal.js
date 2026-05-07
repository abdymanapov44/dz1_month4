const btnOpen = document.querySelector('#btn-get')
const modal = document.querySelector('.modal')


const showModal = () => {
    modal.style.display = 'block'
    
}
btnOpen.onclick = showModal;

function onScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        showModal()
        window.removeEventListener('scroll', onScroll) 
    }
}
window.addEventListener('scroll', onScroll)

const modalClose = document.querySelector('.modal_close')
modalClose.addEventListener('click', () =>{
    modal.style.display = 'none';
})


