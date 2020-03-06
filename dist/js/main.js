const pageNavDesktop = document.querySelector(".page-nav-desktop");
const pageNavMobile = document.querySelector(".page-nav-mobile");

window.addEventListener("scroll", e => {
  if (window.scrollY > 150) {
    window.requestAnimationFrame(() => {
      smallNav(pageNavDesktop);
      smallNav(pageNavMobile);
    });
  } else if (window.scrollY < 100) {
    window.requestAnimationFrame(() => {
      bigNav(pageNavDesktop);
      bigNav(pageNavMobile);
    });
  }
});

// This is the important part!

function smallNav(element) {
  const sectionHeight = element.scrollHeight;

  requestAnimationFrame( () => {
    element.style.height = "40px";
    
    requestAnimationFrame( () => {
      element.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    })
  });
}

function bigNav(element) {
  const sectionHeight = element.scrollHeight;

  requestAnimationFrame( () => {
    element.style.backgroundColor = "rgba(0, 0, 0, 0)";
  });

  element.style.height = sectionHeight + "px";
}

const image = document.querySelector("video");

// const size = [];
// image.addEventListener("load", () => {
//   window.addEventListener("resize", () => {
//     size.splice(1, 0, image.width);
//     console.log(Math.max(...size));
//   });
// });

function high(arr) {
  return Math.max(arr);
}