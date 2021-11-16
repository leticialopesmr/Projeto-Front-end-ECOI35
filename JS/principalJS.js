// Pagina JS da pagina index.html .............
//Ana Letícia Lopes Moreira    RA:2018013951
//Arthur Lopes Saraiva         RA:2020011060

function cadastrarEmail() {
  var email = document.getElementById("email").value;
  if (email != '' ) {
      alert("Email cadastrado com sucesso!");
      return true;
  } else {
    alert("Preencha seu email");
      return false;
  }
};

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobileMenu",
  ".navList",
  ".navList li",
);
mobileNavbar.init();
