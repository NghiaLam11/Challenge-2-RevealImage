const mover = document.querySelector(".mover");
const imgElement = document.querySelector(".img");
const images = [
  "/images/arno-smit-sKJ7zSylUao-unsplash.jpg",
  "/images/sergey-shmidt-koy6FlCCy5s-unsplash.jpg",
  "/images/slava-stupachenko-tSc0IGImr-c-unsplash.jpg",
  "/images/todd-kent-kW1P8R-UoWI-unsplash.jpg",
  "/images/virginia-lackinger-JV0y2YgXJcY-unsplash.jpg",
];
const onMove = (e) => {
  mover.style.transition = "none";
  console.log(e.pageX, e.pageY);
  console.log(mover.offsetWidth, mover.offsetHeight);
  mover.style.width = e.pageY / 2 + "px";
  mover.style.height = e.pageY / 2 + "px";
  mover.style.left = e.pageX - mover.offsetWidth / 2 + "px";
  mover.style.top = e.pageY - mover.offsetHeight / 2 + "px";
};
window.addEventListener("mousemove", onMove);
let isMove = false;
let presentImg = 0;
window.addEventListener("click", (e) => {
  console.log(e.pageX, e.pageY);
  if (!isMove) {
    mover.style.transition = "all 1s ease-out";
    mover.style.width = window.innerWidth * 2 + "px";
    mover.style.height = window.innerWidth * 2 + "px";
    mover.style.left = -50 + "%";
    mover.style.top = -100 + "%";
    window.removeEventListener("mousemove", onMove);
  } else {
    mover.style.transition = "all 1s ease-out";
    mover.style.width = 10 + "px";
    mover.style.height = 10 + "px";
    mover.style.left = e.pageX + "px";
    mover.style.top = e.pageY + "px";
    console.log(presentImg, "B");
    setTimeout(() => {
      imgElement.src = images[presentImg];
    }, 1000);

    if (presentImg === images.length - 1) {
      presentImg--;
    } else {
      presentImg++;
    }
    console.log(presentImg, "A");
    window.addEventListener("mousemove", onMove);
  }
  isMove = !isMove;
});
