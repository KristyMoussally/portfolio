/*-------------------------------------------------------------------------------------

 # Images Interactives
 
 -------------------------------------------------------------------------------------*/

const modalProg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");
const imagesProjets = document.getElementsByClassName("photo");
const imagesProjetsPreview = document.getElementsByClassName("img-vr");
const modalImg = document.getElementById("showImg");

closeBtn.addEventListener("click", function () {
  modalProg.style.display = "none";
});

// Prendre les url des images (les url sont dans le fichier css)
for (let i = 0; i < imagesProjets.length; i++) {
  imagesProjets[i].onclick = function () {
    modalProg.style.display = "block";

    const bg = window.getComputedStyle(this).backgroundImage;

    // Enlever les mark url de background-image : url() pour l'utiliser au sript
    const imageUrl = bg.replace(/^url\(["']?/, "").replace(/["']?\)$/, "");

    modalImg.src = imageUrl;
  };
}

// Même code pour les preview images
for (let i = 0; i < imagesProjetsPreview.length; i++) {
  imagesProjetsPreview[i].onclick = function () {
    modalProg.style.display = "block";

    const bg = window.getComputedStyle(this).backgroundImage;

    // Enlever les mark url de background-image : url() pour l'utiliser au sript
    const imageUrl = bg.replace(/^url\(["']?/, "").replace(/["']?\)$/, "");

    modalImg.src = imageUrl;
  };
}
