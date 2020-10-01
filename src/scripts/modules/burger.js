
function burgerTriggle (burgerSelector,mobileMenu) {
  const burger = document.querySelector(burgerSelector),
        mobile = document.querySelector(mobileMenu),
        contacts = document.querySelector('.header__contacts');
        console.log(mobile.classList.leght = 1);

        
        burger.addEventListener('click', ()=>{
          mobile.classList.toggle('active');
          burger.classList.toggle('active');
          mobile.classList.toggle('animate__animated');
          if (!burger.classList.contains('active')){
            contacts.classList.remove('animate__animated', 'animate__fadeOutUp');
            contacts.classList.add('animate__animated', 'animate__fadeInDown');
            document.querySelector('body').style.overflow="hidden";
          }else{
            contacts.classList.remove('animate__animated', 'animate__fadeInDown');
            contacts.classList.add('animate__animated', 'animate__fadeOutUp');
            document.querySelector('body').style.overflow="";
          }
        });
      

}
  // burgerTriggle('.burger__menu','.header__menu');
export default burgerTriggle;