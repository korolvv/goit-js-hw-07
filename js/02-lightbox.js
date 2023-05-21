import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const gallery = new SimpleLightbox('.gallery a');
const gallery = document.querySelector(".gallery");

function createItem() {
	const itemArr = [];

	galleryItems.forEach((item) => {
		let li = document.createElement("li");
		let link = document.createElement("a");
		link.href = item.original;
		let img = document.createElement("img");
		li.classList.add("gallery__item");
		link.classList.add("gallery__link");
		img.classList.add("gallery__image");
		img.src = item.preview;
		img.alt = item.description;

		link.appendChild(img);
		li.appendChild(link);
		itemArr.push(li);
	});
	gallery.append(...itemArr);
}

createItem();

const galleryList = new SimpleLightbox(".gallery a");

