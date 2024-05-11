const btnStart = document.querySelector(".start");
const btnLearn = document.querySelector(".btn-learn");
const form = document.querySelector("#form");
const secHow = document.querySelector("#how");
const header = document.querySelector(".header");
const sectionHero = document.querySelector(".section-hero");
const navLink = document.querySelectorAll(".nav-link");

//sticky-nav
const heroObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        document.body.classList.add("sticky");
      } else {
        document.body.classList.remove("sticky");
        navLink.forEach((link) => {
          link.classList.remove("border-bottom");
        });
      }
    });
  },
  {
    root: null,
    threshold: 0.05,
    rootMargin: "-40px",
  }
);

heroObserver.observe(sectionHero);

//smooth-btn-scroll
btnStart.addEventListener("click", function (e) {
  e.preventDefault();
  form.scrollIntoView({ behavior: "smooth" });
});

btnLearn.addEventListener("click", function (e) {
  e.preventDefault();
  how.scrollIntoView({ behavior: "smooth" });
});

//nav-scroll
const nav = document.querySelector(".nav");
nav.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    header.classList.remove("nav-open");
  }
});
// Fade and Sec-border on nav
const secobserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.remove("fade");
        navLink.forEach((link) => {
          const linkid = link.getAttribute("href");
          if (linkid === "#" + id) {
            link.classList.add("border-bottom");
          } else {
            link.classList.remove("border-bottom");
          }
        });
      }
    });
  },
  {
    root: null,
    threshold: 0.15,
    rootMargin: "20px",
  }
);

const sec = document.querySelectorAll(".section");
sec.forEach((secs) => {
  secobserver.observe(secs);
  secs.classList.add("fade");
});

//mobile-nav
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const navOpen = function(e){
  e.preventDefault();
  nav.classList.add("nav-open");
  btnClose.classList.add('nav-btn-open');
  btnOpen.classList.add('nav-btn-close');
};

const navCLose = function(e){
  e.preventDefault();
  nav.classList.remove("nav-open");
  btnClose.classList.remove('nav-btn-open');
  btnOpen.classList.remove('nav-btn-close');
};

btnOpen.addEventListener("click", navOpen.bind());
// btnClose.style.display = 'block';
// btnOpen.style.display = 'none';
  
btnClose.addEventListener("click", navCLose.bind());
// btnOpen.style.display = 'block';
// btnClose.style.display = 'none';

navLink.forEach(navs =>{
  navs.addEventListener('click', function(e){
    navCLose(e);
  // btnOpen.style.display = 'block';
  // btnClose.style.display = 'none';
  });
});


//year
const now = new Date();
const year = now.getFullYear();
document.querySelector(".year").textContent = year;

//js hover event(nav)
const handler = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const link = e.target;
    const logo = link.closest(".header").querySelector("img");
    const sibling = link.closest(".header").querySelectorAll(".nav-link");

    sibling.forEach((sib) => {
      if (sib !== link) {
        sib.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
}
document.querySelector(".header").addEventListener("mouseover", handler.bind(.5));
document.querySelector(".header").addEventListener("mouseout", handler.bind(1));


//sticky
