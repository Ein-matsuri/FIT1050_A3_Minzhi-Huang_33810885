function toggleText() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btn = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.textContent = "Read more";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.textContent = "Close";
  }
}

