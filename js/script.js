window.addEventListener("DOMContentLoaded", () => {
  const colorModeBtn = document.querySelector(".color_mode-btn");
  const parentColorMode = document.querySelector(".header_color-mode");
  const imgElement = document.querySelector(".color_mode-btn img");

  const imageSources = ["images/icons/sun.svg", "images/icons/moon.png"];

  let currentImageIndex = 0;

  const loadDarkMode = () => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      enableDarkMode();
      colorModeBtn.classList.add("active");
      imgElement.src = nextImageSource();
    }
  };

  const saveDarkMode = () => {
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
  };

  const enableDarkMode = () => {
    document.body.classList.add("dark");
    saveDarkMode();
  };

  loadDarkMode();

  parentColorMode.addEventListener("click", () => {
    colorModeBtn.classList.toggle("active");
    imgElement.src = nextImageSource();
    document.body.classList.toggle("dark");
    saveDarkMode();
  });

  function nextImageSource() {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    return imageSources[currentImageIndex];
  }

  // select language
  document.querySelectorAll(".option__value").forEach((option) => {
    option.addEventListener("click", () => {
      const selectedBox = document.querySelector(".eng");
      const optionChildEng = document.querySelector(".option__value .eng");
      selectedBox.innerHTML = option.innerHTML;
      optionChildEng.style.display = "none";
    });
  });
});

//  menu
const openNavBtn = document.querySelector(".open__nav-btn");
const closeNavBtn = document.querySelector(".close__nav-btn");
const nav = document.querySelector("header .nav");

openNavBtn.addEventListener("click", () => {
  nav.classList.add("active");
});
closeNavBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});

// accordion
const showMoreLessons = document.querySelector(".show__mode-lessons");

const accordion = document.querySelectorAll(".accordion");

if (accordion) {
  accordion.forEach((item, index) => {
    if(showMoreLessons) {
      showMoreLessons.addEventListener("click", () => {
        if (index !== 0) {
          item.classList.toggle("hide");
        }
      });
    }

    const accordionHeader = item.querySelector(".accordion__header");
    const accordionContent = item.querySelector(".accordion__content");
    accordionHeader.addEventListener("click", () => {
      const activeItem = document.querySelector(".accordion.active");
      if (activeItem && activeItem !== item) {
        activeItem.classList.remove("active");
        accordionHeader.classList.remove("active");
      }

      const activeBody = document.querySelector(
        ".accordion__content:not(.collapsed)"
      );
      if (activeBody && activeBody !== accordionContent) {
        activeBody.classList.add("collapsed");
        activeBody.style.height = "0";
      }

      accordionContent.classList.toggle("collapsed");
      const isCollapsed = accordionContent.classList.contains("collapsed");

      if (isCollapsed) {
        accordionContent.style.height = "0";
        item.classList.remove("active");
        accordionHeader.classList.remove("active");
      } else if (item.classList.contains("closed__accordion")) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
        accordionHeader.classList.add("active");
        accordionContent.style.height = accordionContent.scrollHeight + "px";
      }
    });
  });
}

// play video
const videoIframe = document.querySelector(".watch__video iframe");
const playBtn = document.querySelector(".play__btn");

if (playBtn) {
  playBtn.addEventListener("click", function () {
    if (videoIframe.contentWindow) {
      videoIframe.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        "*"
      );
    }
  });
}

// tariff
const labelBox = document.querySelectorAll(".label-box");

if (labelBox) {
  labelBox.forEach((box, idx) => {
    box.addEventListener("click", () => {
      labelBox.forEach((el) => {
        el.classList.remove("checked");
      });
      box.classList.add("checked");
    });
  });
}

// reviews swiper
try {
  var reviewsSwiper = new Swiper(".reviews-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 500,
    centeredSlides: true,
    initialSlide: 3,
    watchOverflow: true,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
    breakpoints: {
      1060: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      460: {
        slidesPerView: 1.3,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
} catch (error) {
  throw error;
}
