import { galleryItems } from "./gallery-items.js";


// Change code below this line

const gallery = document.querySelector(".gallery");

function createItem() {
	const itemArr = [];

	galleryItems.forEach((item) => {
		let li = document.createElement("li");
		let link = document.createElement("a");
        let img = document.createElement("img");
        
        li.classList.add("gallery__item");
        
		link.classList.add("gallery__link");
        link.href = item.original;
        
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

gallery.addEventListener("click", openFullSize);

function openFullSize(e) {
    const { dataset, alt } = e.target;
	e.preventDefault();
	const content = document.createElement("div");
	const img = document.createElement("img");

	img.src = dataset.source;
	img.alt = alt;
	content.appendChild(img);

	const instance = basicLightbox.create(content);
    
    instance.show();
    
    document.addEventListener("keydown", (event) => {
        if (event.key === 'Escape') {
            const visible = basicLightbox.visible();
            if (visible) {
                instance.close();
            }
        }
    });
}




