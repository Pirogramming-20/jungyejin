function changeMark(icon, idea) {
  if (icon.classList.contains("ri-star-fill")) {
    icon.classList.remove("ri-star-fill");
    icon.classList.add("ri-star-line");
  } else {
    icon.classList.remove("ri-star-line");
    icon.classList.add("ri-star-fill");
  }
}

function changeInterest(object, idea, direction) {
  var container = object.parentElement;

  var interestElement = container.querySelector(".interest");

  var num = parseInt(interestElement.textContent);
  newInterest = num + direction;

  interestElement.textContent = newInterest;
}

document.getElementById("sort").addEventListener("change", function () {
  var selectedValue = document.getElementById("sort").value;

  window.location.href =
    window.location.pathname + "?sort_option=" + selectedValue;
});
