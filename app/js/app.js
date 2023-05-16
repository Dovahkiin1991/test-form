// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
  // File upload and change textarea height
  const output = document.querySelector(".custom-form-output");
  const input = document.querySelector(".custom-form-input");
  const uploadContainer = document.querySelector(".custom-form-info");
  const uploadTextarea = document.querySelector(".custom-form-upload textarea");
  let imagesArray = [];

  input.addEventListener("change", () => {
    const files = input.files;
    for (let i = 0; i < files.length; i++) {
      imagesArray.push(files[i]);
    }
    displayImages();
    changeHeightTextarea();
  });

  uploadTextarea.addEventListener("keydown", () => {
    changeHeightTextarea();
  });

  const displayImages = () => {
    let images = "";
    imagesArray.forEach((image, index) => {
      images += `<div class="image">
                <img src="${URL.createObjectURL(image)}" alt="image">
            </div>`;
    });
    output.innerHTML = images;
  };

  const changeHeightTextarea = () => {
    const height = uploadTextarea.scrollHeight;
    uploadTextarea.style.paddingBottom = uploadContainer.offsetHeight + "px";
    uploadTextarea.style.minHeight = height + "px";
    uploadTextarea.scrollTop = uploadTextarea.scrollHeight;
  };

  //Toggle Got sick from
  const togglePlace = document.querySelectorAll(".place-toggle .btn");
  const placeholderLabel = document.querySelector(".form-label-group input");

  togglePlace.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const placeholderText = btn
        .querySelector("input")
        .getAttribute("placeholder");
      togglePlace.forEach((f) => f.classList.remove("active"));
      e.target.classList.toggle("active");
      placeholderLabel.setAttribute("placeholder", placeholderText);
    });
  });
});
