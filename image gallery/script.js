const images = [
  {
    src: "images/img1.jpg",
    description: "Mountains stand tall, but serenity runs deep in still waters. 🏞️✨"
  },
  {
    src: "images/img2.jpg",
    description: "Where the river flows, peace quietly follows. 🌿💧"
  },
  {
    src: "images/img3.jpg",
    description: "Every fallen leaf tells a story on the path of serenity. 🍁"
  },
  {
    src: "images/img4.jpg",
    description: "Let your soul flow like the waterfall, rising with every ray of light. 🌄💧"
  },
  {
    src: "images/img5.jpg",
    description: "Painted skies and whispered winds — nature's way of saying, *'pause and feel the magic.'* 🌅✨"
  }
];

let currentIndex = 0;

const imgElement = document.getElementById("gallery-image");
const descElement = document.getElementById("image-description");

function showImage(index) {
  imgElement.src = images[index].src;
  descElement.textContent = images[index].description;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}
