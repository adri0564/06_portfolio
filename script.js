window.addEventListener("load", slideIn);

function slideIn() {
  console.log("slideIn");
  document.querySelector(".container_slide_right").classList.add("slide_right");
  document.querySelector(".container_slide_left").classList.add("slide_left");
}
