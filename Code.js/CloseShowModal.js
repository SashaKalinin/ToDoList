//CLOSE MODAL
function closeModal() {
    let modal = document.querySelector('#exampleModal');
    document.body.classList.remove('modal-open');
    modal.classList.remove('show');
    modal.removeAttribute('aria-modal');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('style', 'display: none');
    const modalBackdrops = document.getElementsByClassName('modal-backdrop');
    document.body.removeChild(modalBackdrops[0]);
    const delShadow = document.querySelector('.modal-backdrop');
    

}

//SHOW MODAL
function showModal() {
    let modal = document.querySelector('#exampleModal');
    document.body.classList.add('modal-open');
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('style', 'display: block');
    let fadeElem = document.createElement("div");
    fadeElem.className = 'modal-backdrop fade show ';
    const addAfter = document.querySelector('#script');
    addAfter.after(fadeElem);
}
