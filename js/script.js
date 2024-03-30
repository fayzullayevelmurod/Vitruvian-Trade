// window.addEventListener("DOMContentLoaded", () => {
//   const colorModeBtn = document.querySelector(".color_mode-btn");

//   let currentImageIndex = 0;
//   const imageSources = ["images/icons/sun.svg", "images/icons/support.svg"];

//   const loadDarkMode = () => {
//     const isDarkMode = localStorage.getItem("darkMode") === "true";
//     if (isDarkMode) {
//       enableDarkMode();
//       colorModeBtn.classList.add("active");
//     }
//   };

//   const saveDarkMode = () => {
//     localStorage.setItem("darkMode", document.body.classList.contains("dark"));
//   };

//   const enableDarkMode = () => {
//     document.body.classList.add("dark");
//     saveDarkMode();
//   };

//   loadDarkMode();

//   colorModeBtn.addEventListener("click", () => {
//     colorModeBtn.classList.toggle("active");
//     document.body.classList.toggle("dark");
//     saveDarkMode();
//     nextImageSource()
//   });

//   function nextImageSource() {
//     currentImageIndex = (currentImageIndex + 1) % imageSources.length;
//     return imageSources[currentImageIndex];
//   }
// });

window.addEventListener("DOMContentLoaded", () => {
  const colorModeBtn = document.querySelector(".color_mode-btn");
  const imgElement = document.querySelector(".color_mode-btn img");

  const imageSources = ["images/icons/sun.svg", "images/icons/moon.png"];

  let currentImageIndex = 0;

  // Dark mode holatini localStorage dan yuklash
  const loadDarkMode = () => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      enableDarkMode();
      colorModeBtn.classList.add("active");
      imgElement.src = nextImageSource();
    }
  };

  // Dark mode holatini localStorage ga saqlash
  const saveDarkMode = () => {
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
  };

  // Dark mode ni yoqish
  const enableDarkMode = () => {
    document.body.classList.add("dark");
    saveDarkMode();
  };

  // Dark mode ni o'chirish
  const disableDarkMode = () => {
    document.body.classList.remove("dark");
    saveDarkMode();
  };

  // Sahifani yuklagandan so'ng dark mode holatini yuklash
  loadDarkMode();

  colorModeBtn.addEventListener("click", () => {
    colorModeBtn.classList.toggle("active");
    imgElement.src = nextImageSource();
    document.body.classList.toggle("dark");
    saveDarkMode(); // Har bir tugmachani bosganda dark mode ni saqlash
  });

  function nextImageSource() {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    return imageSources[currentImageIndex];
  }
});
