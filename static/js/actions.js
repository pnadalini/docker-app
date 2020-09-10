function switchTheme() {
  document.getElementById('webPageTheme').href = document.getElementById('webPageTheme').href.includes("css/bootstrap.min.css") ?
    document.getElementById('webPageTheme').href = "./css/dark.bootstrap.min.css" : document.getElementById('webPageTheme').href = "./css/bootstrap.min.css";
}

function changeFont() {
  document.querySelector("main").classList.toggle('arial-black');
}

function changeNavColor() {
  document.querySelector("nav").classList.toggle('navbar-dark');
  document.querySelector("nav").classList.toggle("bg-dark");
  document.querySelector("nav").classList.toggle('navbar-light');
  document.querySelector("nav").classList.toggle("bg-light");
}

function changeFontColor(){
  document.querySelectorAll("main").forEach((element) => {
    element.classList.toggle("text-success");
  });
}

function toggleFooter(){
  document.querySelector(".footer").classList.toggle("position-fixed");
}
