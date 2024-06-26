window.addEventListener("DOMContentLoaded", () => {
  const colorModeBtn = document.querySelectorAll(".color_mode-btn");
  const parentColorMode = document.querySelectorAll(".header_color-mode");
  const imgElement = document.querySelector(".color_mode-btn img");
  const imageSources = ["images/icons/sun.svg", "images/icons/moon.png"];

  let currentImageIndex = 0;

  const loadDarkMode = () => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      enableDarkMode();
      colorModeBtn.forEach((btn) => {
        btn.classList.add("active");
      });
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

  parentColorMode.forEach((item) => {
    item.addEventListener("click", () => {
      colorModeBtn.forEach((btn) => {
        btn.classList.toggle("active");
      });
      imgElement.src = nextImageSource();
      document.body.classList.toggle("dark");
      saveDarkMode();
    });
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
const closeNavBtn = document.querySelectorAll(".close__nav-btn");
const nav = document.querySelector("header .nav");
const mediaNav = document.querySelector(".media__header");

openNavBtn.addEventListener("click", () => {
  nav.classList.add("active");
  mediaNav.classList.toggle("active");
  document.body.style.overflow = "hidden";
});
closeNavBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    nav.classList.remove("active");
    mediaNav.classList.remove("active");
    document.body.style.overflow = "auto";
  })
);
document.addEventListener("click", function (e) {
  var target = e.target;
  if (!mediaNav.contains(target) && target != openNavBtn) {
    mediaNav.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});
// accordion
const showMoreLessons = document.querySelector(".show__mode-lessons");

const accordion = document.querySelectorAll(".accordion");
if (showMoreLessons) {
  showMoreLessons.addEventListener("click", () => {
    showMoreLessons.classList.toggle("rotate");
  });
}
if (accordion) {
  accordion.forEach((item, index) => {
    if (showMoreLessons) {
      showMoreLessons.addEventListener("click", () => {
        showMoreLessons.classList.toggle("rotate");

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
// courese check box
const coureseCheckBox = document.querySelectorAll(
  ".activation__course-check-box"
);
if (coureseCheckBox) {
  coureseCheckBox.forEach((item) => {
    item.addEventListener("click", () => {
      coureseCheckBox.forEach((el) => el.classList.remove("checked"));
      item.classList.add("checked");
    });
  });
}

// dropdown footer
const footerCol = document.querySelectorAll(".footer .coll");
footerCol.forEach((col) => {
  const footerHeader = col.querySelector(".col__header");
  const footerUl = col.querySelector("ul");
  const footerArrowDown = col.querySelector(".footer__arrow-down");

  footerHeader.addEventListener("click", () => {
    footerUl.classList.toggle("show");
    footerArrowDown.classList.toggle("rotate");
  });
});

// tab content
try {
  const tabContents = document.querySelectorAll(".tab__content");
  const tabHeaderItems = document.querySelectorAll(".tab__header-item");
  const nextTabBtn = document.querySelectorAll(".next-tab");

  if (tabContents) {
    function hideTabContent() {
      tabContents.forEach((content) => {
        content.classList.remove("show");
        content.classList.add("hide");
      });
      tabHeaderItems.forEach((item) => item.classList.remove("checked"));
    }

    function showTabContent(idx = 0) {
      tabContents.forEach((content, index) => {
        content.classList.remove("show");
        content.classList.add("hide");
      });
      tabHeaderItems.forEach((item) => item.classList.remove("checked"));

      tabContents[idx].classList.remove("hide");
      tabContents[idx].classList.add("show");
      tabHeaderItems[idx].classList.add("checked");

      const stepNumberElement = document.querySelector(".step__number");
      stepNumberElement.textContent = idx + 1;
    }

    hideTabContent();
    showTabContent();

    tabHeaderItems.forEach((btn, idx) => {
      btn.addEventListener("click", (e) => {
        hideTabContent();
        showTabContent(idx);
      });
    });
    nextTabBtn.forEach((btn, idx) => {
      btn.addEventListener("click", (e) => {
        const currentTab = document.querySelector(".tab__header-item.checked");
        const nextTab = currentTab.nextElementSibling;
        if (nextTab) {
          hideTabContent();
          nextTab.classList.add("checked");
          showTabContent(Array.from(tabHeaderItems).indexOf(nextTab));
        }
      });
    });
  }
} catch (error) {
  console.log(error);
}

// interface cards
const interFaceCards = document.querySelectorAll(".interface__card");

interFaceCards.forEach((card) => {
  card.addEventListener("click", () => {
    interFaceCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
  });
});

// reviews swiper
try {
  let swiper = document.querySelector(".reviews-swiper");
  if (swiper) {
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
  }
} catch (error) {
  console.log(error);
}
