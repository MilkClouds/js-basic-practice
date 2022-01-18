const IMAGES = 3;
const chosenImage = Math.floor(Math.random() * IMAGES);

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}.jpeg`;

document.body.appendChild(bgImage);
