function changeMark(icon, idea) {
  if (icon.classList.contains("ri-star-fill")) {
    icon.classList.remove("ri-star-fill");
    icon.classList.add("ri-star-line");
  } else {
    icon.classList.remove("ri-star-line");
    icon.classList.add("ri-star-fill");
  }
}
