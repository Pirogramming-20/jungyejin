function loadItems() {
  return fetch("data/data.json")
    .then((Response) => Response.json())
    .then((json) => json.items);
}

//메인
loadItems().then((items) => {
  console.log(items);
  //   displayItems(items);
  //   setEventListeners(items);
});
