import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const fullGallery = galleryItems.map((galleryItem) => 
    `<a class="gallery__item" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        alt="${galleryItem.description}"/>
    </a>`
  ).join("");

gallery.insertAdjacentHTML("afterbegin", fullGallery);

let lightbox = new SimpleLightbox(".gallery a", { captions: true, captionData: "alt", captionType: "attr", captionDelay: 250, captionPosition: "bottom", captionSelector: "img" });