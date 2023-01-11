// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line


const gallery = document.querySelector(`.gallery`)
const galleryItem = document.querySelector(`.gallery__item`)

 function creatMarkup(images) {
     return images.map(({ preview, original, description }) => {
         return `
<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div> `
     }).join('');
    
 }
gallery.insertAdjacentHTML(`beforeend`, creatMarkup(galleryItems))
const lightbox = new SimpleLightbox('.gallery a', {  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
