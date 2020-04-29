let url = window.location.origin;

window.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft" || e.key.match(/^j$/i)) {
    const previousComic = document
      .querySelector(".left a")
      .getAttribute("href");
    window.location = `${url}/${previousComic}`;
  } else if (e.key === "ArrowRight" || e.key.match(/^k$/i)) {
    const nextComic = document.querySelector(".right a").getAttribute("href");
    window.location = `${url}/${nextComic}`;
  } else if (e.key.match(/^a$/i)) {
    const altText = document
      .querySelector("#comic_body img.comic")
      .getAttribute("title");
    window.alert(altText);
  } else if (e.key.match(/^r$/i)) {
    window.location = "http://www.ohnorobot.com/random.php?comic=636";
  }
});
