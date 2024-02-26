let balls = document.getElementsByClassName("ball");
document.onmousemove = function () {
  let x = (event.clientX * 100) / window.innerWidth + "%";
  let y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    balls[i].style.left = x;
    balls[i].style.top = y;
    balls[i].style.transform = "translate(-" + x + ",-" + y + ")";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const roxyBtn = document.getElementById("roxy-btn");
  const linksContainer = document.getElementById("links-container");

  roxyBtn.addEventListener("click", function () {
    linksContainer.classList.toggle("hidden");
    roxyBtn.style.display = "none"; 
  });
});

let easteregg1 = document.querySelector('.easterEgg')

easteregg1.addEventListener('click', () => {
  const img = document.createElement('img')
  img.classList.add('pinkie')
  img.setAttribute('src', "public/pinkie.webp")
  document.body.appendChild(img)
  setTimeout(() => {
    img.remove()
  }, 2000);
} )

