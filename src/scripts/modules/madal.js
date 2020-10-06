const modal = (modal, openSelector) =>{
const modalPopup = document.querySelector(modal),
      modalClose = document.querySelector('[data-modul-close]'),
      modalOpen = document.querySelectorAll(openSelector);

      modalOpen.forEach(item =>{
        item.addEventListener('click', ()=>{
          modalPopup.style.display = '';
          document.querySelector('body').style.overflow ='hidden';
        });
      });

      modalPopup.addEventListener('click', (e) =>{
        console.log(e.target);
        console.log(e);
        if (e.target === modalPopup || e.target === modalClose){
          modalPopup.style.display = 'none';
          document.querySelector('body').style.overflow ='';
        }
      });


};

export default modal;