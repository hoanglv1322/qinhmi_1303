document.addEventListener("DOMContentLoaded", function () {
  const dayTime = document.getElementById("dayTime");
  const hourTime = document.getElementById("hourTime");
  const minuteTime = document.getElementById("minuteTime");
  const secondTime = document.getElementById("secondTime");

  var timeTarget = new Date("October 3, 2021");

  function countDown() {
    var timeCurrent = new Date();

    let time = timeTarget - timeCurrent;

    let day = Math.floor(time / 1000 / 3600 / 24);
    let hour = Math.floor((time / 1000 / 3600) % 24);
    let minute = Math.floor((time / 1000 / 60) % 60);
    let second = Math.floor((time / 1000) % 60);

    secondTime.innerHTML = format(second);
    minuteTime.innerHTML = format(minute);
    hourTime.innerHTML = format(hour);
    dayTime.innerHTML = format(day);
  }

  setInterval(countDown, 1000);

  function format(x) {
    if (x < 10) {
      x = "0" + x;
    }
    return x;
  }



    var swiper = new Swiper(".mySwiper", {
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    var swiper = new Swiper(".mySwiper1", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

});
