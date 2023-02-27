let card = document.querySelector(".cards")

function loadImages(num = 20) {
  let i = 0

  while (i < num) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((a) => a.json())
      .then((data) => {
        let img = document.createElement("img");
        img.src = data.message;
        card.appendChild(img);
      });
    i++
  }
}

loadImages()

window.addEventListener("scroll", () => {
  const { scrollY, innerHeight } = window
  if (scrollY + innerHeight >= document.documentElement.scrollHeight) {
    loadImages()
  }
})