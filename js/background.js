const images = [
  "배경1.png",
  "배경2.jpg",
  "배경3.jpg",
  "배경4.jpg",
  "배경5.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.className = "bgImg";
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
