const sliders = (slides, prev, next, autoplay) => {
  let slideIndex = 1,
      paused = false;
  const items = document.querySelectorAll(slides);

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = items.length;
    }
    items.forEach((item) => {
      item.classList.add("animate__animated");
      item.style.display = "none";
    });
    items[slideIndex - 1].style.display = "";
  }
  showSlides(slideIndex);

  function changeSlides(n) {
    showSlides((slideIndex += n));
  }

  try {
    const prevBtn = document.querySelector(prev),
      nextBtn = document.querySelector(next);

    prevBtn.addEventListener("click", () => {
      changeSlides(-1);
      items[slideIndex - 1].classList.remove("animate__slideInLeft");
      items[slideIndex - 1].classList.add("animate__slideInRight");
    });

    nextBtn.addEventListener("click", () => {
      changeSlides(1);
      items[slideIndex - 1].classList.remove("animate__slideInRight");
      items[slideIndex - 1].classList.add("animate__slideInLeft");
    });
  } catch (e) {}

  function activateAnimation() {
    if (autoplay) {
      paused = setInterval(function () {
        changeSlides(1);
        items[slideIndex - 1].classList.remove("animate__slideInRight");
        items[slideIndex - 1].classList.add("animate__slideInLeft");
      }, 3000);
    }
  }
  activateAnimation();

  items[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener("mouseleave", () => {
    activateAnimation();
  });
};

export default sliders;
