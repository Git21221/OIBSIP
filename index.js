const nav = document.querySelector(".fa");
const header = document.querySelector(".tp-nav");
const toogleNav = () => {
     header.classList.toggle("active");
};
nav.addEventListener('click', () => toogleNav());