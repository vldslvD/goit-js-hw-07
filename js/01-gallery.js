import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (image) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", markup);

galleryRef.addEventListener("click", onImageClick);

function onImageClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }
  e.preventDefault();

  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}
