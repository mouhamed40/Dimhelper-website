const menu = document.getElementById("menu");
const action = document.getElementById("actions");

menu.addEventListener("click",()=>{
hundleMenu();
});

function hundleMenu() {
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
  
}