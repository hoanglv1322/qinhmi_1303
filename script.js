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

  const carousel = document.querySelector(".carousel__list");
  const cells = carousel.querySelectorAll(".carousel__cell");

  const cellWidth = carousel.offsetWidth;
  const cellHeight = carousel.offsetHeight;
  const cellSize = cellHeight;
  const cellCount = 21;

  const radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
  const theta = 360 / cellCount;

  var selectedIndex = 0;

  function rotateCarousel() {
    const angle = theta * selectedIndex * -1;
    carousel.style.transform =
      "translateZ(" + -radius + "px) " + "rotateX(" + -angle + "deg)";

    const cellIndex =
      selectedIndex < 0
        ? cellCount - ((selectedIndex * -1) % cellCount)
        : selectedIndex % cellCount;

    const cells = document.querySelectorAll(".carousel__cell");
    cells.forEach((cell, index) => {
      if (cellIndex === index) {
        if (!cell.classList.contains("selected"))
          cell.classList.add("selected");
      } else {
        if (cell.classList.contains("selected")) {
          cell.classList.remove("selected");
        }
      }
    });
  }

  function selectPrev() {
    selectedIndex--;
    rotateCarousel();
  }

  function selectNext() {
    selectedIndex++;
    rotateCarousel();
  }

  var prevButton = document.querySelector(".previous-button");
  prevButton.addEventListener("click", selectPrev);

  var nextButton = document.querySelector(".next-button");
  nextButton.addEventListener("click", selectNext);

  function initCarousel() {
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      const cellAngle = theta * i;
      cell.style.transform =
        "rotateX(" + -cellAngle + "deg) translateZ(" + radius + "px)";
    }

    rotateCarousel();
  }

  initCarousel();
});


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
