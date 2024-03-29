window.addEventListener("DOMContentLoaded", () => {
  const colorModeBtn = document.querySelector(".color_mode-btn");

  let currentImageIndex = 0;

  // Dark mode holatini localStorage dan yuklash
  const loadDarkMode = () => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    if (isDarkMode) {
      enableDarkMode();
      colorModeBtn.classList.add("active");
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

  loadDarkMode();

  colorModeBtn.addEventListener("click", () => {
    colorModeBtn.classList.toggle("active");
    document.body.classList.toggle("dark");
    saveDarkMode();
  });

  function nextImageSource() {
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;
    return imageSources[currentImageIndex];
  }
});
