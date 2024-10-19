const header = document.getElementById("header");
const hamMenu = document.querySelector(".ham-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  header.classList.toggle("tapped");
});

const counts = document.querySelectorAll(".count");
const speed = 15;

const targetElement = document.getElementById("stats"); // Replace with your element's ID
const targetScrollY =
  targetElement.getBoundingClientRect().top + window.scrollY;

function activateFunction() {
  console.log("Function activated at scroll position:", targetScrollY);
  // Your code here
  clearInterval(scrollCheck); // Stop checking once activated
}

// Polling method to check scroll position
const scrollCheck = setInterval(() => {
  if (window.scrollY * 2 >= targetScrollY) {
    activateFunction();
    counts.forEach((counter) => {
      function upDate() {
        const target = Number(counter.getAttribute("data-target"));
        const count = Number(counter.innerText);
        const inc = target / speed;
        if (count < target) {
          counter.innerText = Math.floor(inc + count);
          setTimeout(upDate, 50);
        } else {
          counter.innerText = target;
        }
      }
      upDate();
    });
  }
}, 100); // Check every 100 milliseconds

console.log(targetScrollY);
