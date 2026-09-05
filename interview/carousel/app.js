const getImageSection = document.getElementById("carousel_section");
let counter = 0;
let images = [
  "https://fastly.picsum.photos/id/273/200/300.jpg?hmac=C0IK2DPqr03oiShSklDGIHBzHorcmVrky7A_uvBEzIM",
  "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fi0.wp.com%2Fpicjumbo.com%2Fwp-content%2Fuploads%2Fsilhouettes-of-hawaiian-palms-at-a-gorgeous-sunset-free-image.jpeg%3Fh%3D800%26quality%3D80&imgrefurl=https%3A%2F%2Fpicjumbo.com%2F&docid=Kzg7bmtb2MSiyM&tbnid=yjbyIahNbtz_hM&vet=12ahUKEwiBya65ndeWAxVoSWwGHbQKOCsQnPAOegUIsAIQAA..i&w=533&h=800&hcb=2&ved=2ahUKEwiBya65ndeWAxVoSWwGHbQKOCsQnPAOegUIsAIQAA",
  "https://fastly.picsum.photos/id/273/200/300.jpg?hmac=C0IK2DPqr03oiShSklDGIHBzHorcmVrky7A_uvBEzIM",
];
function appendItems() {
  let image = document.createElement("img");
  let p = document.createElement("p");
  image.src = images[counter];
  p.innerText = counter;
  getImageSection.append(image);
  getImageSection.append(p);
}

function previous() {
  console.log(counter);
  if (counter <= 0) return;
  getImageSection.innerHTML = "";
  counter--;
  appendItems();
}
function next() {
  if (images.length - 1 === counter) return;
  getImageSection.innerHTML = "";
  counter++;
  appendItems();
}

appendItems();
