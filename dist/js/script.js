const mobileBtn = document.querySelector("#mobile-btn");
const mobileMenu = document.querySelector("#mobile-menu");

mobileBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const shrimpImg = document.getElementById("shrimp-img");

let angel = 0;

setInterval(() => {
  angel += 1;
  shrimpImg.style.transform = `rotate(${angel}deg)`;
}, 10);


// Search By Filter
document.getElementById("searchInput").addEventListener("keyup", function(){
  let searchValue = this.value.toLowerCase();
  let menuItems = document.querySelectorAll(".menu-item");

  menuItems.forEach((item)=>{
    let dishName = item.querySelector("h3").textContent.toLowerCase();

    if(dishName.includes(searchValue)){
      item.style.display = "flex"
    } else{
      item.style.display = "none";
    }
  })
})