import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galeryRef = document.querySelector('.gallery');

function createGallery(items) {
  return items
    .map(
      item =>
        `<div class="gallery__item">
      <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}"
      data-source= "${item.original}"
       alt="${item.description}"></a></div>`
    )
    .join('');
}
const addGallary = createGallery(galleryItems);

galeryRef.innerHTML = addGallary;

galeryRef.addEventListener('click', clickOnImage);

function clickOnImage(event) {
  blockStandartAction(event);
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const instance =
    basicLightbox.create(`<img src="${event.target.dataset.source}
        " width="800" height="600" >`);
  instance.show();

  galeryRef.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}

function blockStandartAction(event) {
  event.preventDefault();
}
