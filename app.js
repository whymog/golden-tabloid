let url = window.location.origin;

window.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    const previousComic = document.querySelector(".left a").getAttribute("href");
    window.location = `${url}/${previousComic}`;
  } else if (e.key === "ArrowRight") {
    const nextComic = document.querySelector(".right a").getAttribute("href");
    window.location = `${url}/${nextComic}`;
  }
});
