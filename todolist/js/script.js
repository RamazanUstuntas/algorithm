const uList = document.getElementById("list");
const currentList = document.getElementsByTagName("li");
const inputTask = document.getElementById("task");
const itemsArray = localStorage.getItem("todo")
  ? JSON.parse(localStorage.getItem("todo"))
  : [];

localStorage.setItem("todo", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("todo"));

uList.addEventListener("click", checkedItem);
uList.addEventListener("click", deleteItem);

//LOADPAGE
let toDo = itemsArray;
if (toDo != null) {
  let html;
  for (let i = 0; i < toDo.length; i++) {
    html = `<li>
      <span>
      ${toDo[i]}
      </span>
      <span class="close"> X </span>
      </li>`;
    uList.innerHTML += html;
  }
}
/* // For Current Items Listing with "close" mark
for (let i = 0; i < currentList.length; i++) {
  if (currentList[i].className !== "close") {
    const span = document.createElement("span");
    span.classList.add("close");
    span.innerHTML = "X";
    currentList[i].appendChild(span);
  }
} */

//MAIN FUNCTIONS
const newElement = () => {
  const uList = document.getElementById("list");
  if (inputTask.value.trim() !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.classList.add("close");
    span.innerHTML = "X";
    li.innerHTML = ` <span> ${inputTask.value} </span>`;
    li.appendChild(span);
    uList.appendChild(li);
    console.log(inputTask);
    itemsArray.push(inputTask.value.trim());
    localStorage.setItem("todo", JSON.stringify(itemsArray));
    inputTask.value = "";
    $(".success").toast("show");
  } else {
    $(".error").toast("show");
  }
};

function checkedItem(e) {
  e.target.classList.toggle("checked");
}

function deleteItem(e) {
  if (e.target.className === "close") {
    if (confirm("Silme işlemine devam etmek istiyor musunuz ?")) {
      itemsArray.forEach((element, id) => {
        if (
          element ===
          e.target.parentElement.firstChild.nextElementSibling.textContent.trim()
        ) {
          itemsArray.splice(id, 1);
        }
      });
      localStorage.setItem("todo", JSON.stringify(itemsArray));
      e.target.parentElement.remove();
    }
  }
}
