import { galleryItems } from './gallery-items.js';


// Change code below this line
const gallery = document.querySelector(".gallery");

const fullGallery = galleryItems.map((galleryItem) => 
    `<div class="gallery__item">
    <a class="gallery__link" onclick="return false" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.decription}"
      />
    </a>
    </div>`
  ).join("");

gallery.insertAdjacentHTML("afterbegin", fullGallery);

const zoom = document.querySelectorAll(".gallery__item");

zoom.forEach((item, index) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${galleryItems[index].original}" width="800" height="600">
`);
instance.show();
});
});