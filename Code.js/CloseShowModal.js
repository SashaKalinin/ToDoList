var shadow = document.querySelector('#shadow');

//CLOSE MODAL

function closeModal() {
    let modal = document.querySelector('#exampleModal');
    document.body.classList.remove('modal-open');
    modal.classList.remove('show');
    modal.removeAttribute('aria-modal');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('style', 'display: none');
    const delShadow = document.querySelector('.modal-backdrop');
    document.querySelector('#shadow').classList.remove('modal-backdrop','fade','show');
}

//SHOW MODAL
function showModal() {
    let modal = document.querySelector('#exampleModal');
    document.body.classList.add('modal-open');
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('style', 'display: block');
    document.querySelector('#shadow').classList.add('modal-backdrop','fade','show') ;
}




