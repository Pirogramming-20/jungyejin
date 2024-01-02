//JSON파일에서 아이템 fetch
function loadItems() {
  return fetch("data/data.json")
    .then((Response) => Response.json())
    .then((json) => json.items);
}
// 패치된 아이템 리스트 업데이트
function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// HTML에 리스트 추가할 것 만들기
function createHTMLString(item) {
  return `
      <li class="item">
          <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
          <span class="item__description">${item.gender}, ${item.size}</span>
      </li>
      `;
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }

  displayItems(items.filter((item) => item[key] === value));
}

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

//메인
loadItems().then((items) => {
  console.log(items);
  displayItems(items);
  setEventListeners(items);
});
