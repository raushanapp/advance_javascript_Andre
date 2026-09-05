const carouselSection = document.getElementById("carousel_section");
const images = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
];

let currentIndex = 0;

function renderSlide() {
  carouselSection.innerHTML = "";

  const image = document.createElement("img");
  const caption = document.createElement("p");

  image.src = images[currentIndex];
  image.alt = `Slide ${currentIndex + 1}`;
  image.className = "carousel_image";

  caption.textContent = `${currentIndex + 1} / ${images.length}`;
  caption.className = "carousel_caption";

  carouselSection.appendChild(image);
  carouselSection.appendChild(caption);
}

function previous() {
  if (currentIndex > 0) {
    currentIndex--;
    renderSlide();
  }
}

function next() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    renderSlide();
  }
}

renderSlide();
