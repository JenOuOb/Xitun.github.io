// 設定按鈕
let btnOrigin = document.querySelector('#btn-origin');
let btnExperience = document.querySelector('#btn-experience');
let btnCooperation = document.querySelector('#btn-cooperation');
// 設定三個modal
// let aboutModal = document.querySelector('#about-modal');
// 設定modal
let modalOrigin = document.querySelector('#modal-origin');
let modalExperience = document.querySelector('#modal-experience');
let modalCooperation = document.querySelector('#modal-cooperation');
// 設定modal的關閉按鈕
let modalCloseBtn = document.querySelectorAll('.modal-close-btn');


btnOrigin.onclick = function(){
    // aboutModal.style.display='block';
    modalOrigin.style.display='block';
}
btnExperience.onclick = function(){
    // aboutModal.style.display='block';
    modalExperience.style.display='block';
}

btnCooperation.onclick = function(){
    // aboutModal.style.display='block';
    modalCooperation.style.display='block';
}
function modalClose(){
//    aboutModal.style.display='none';
   modalOrigin.style.display='none';
   modalExperience.style.display='none';
   modalCooperation.style.display='none';
 }

 modalCloseBtn.forEach(e => e.addEventListener('click',modalClose));



