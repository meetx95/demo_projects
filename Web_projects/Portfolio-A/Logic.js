AOS.init({
  duration: 1000,
  once: true
});

const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
  else {
    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

function time() {
  var d = new Date();
  var y = d.getFullYear();
  setTimeout("time()", 1000);
  var text = `©` + ` ` + y + ` ` +`Meet Gamit - All Rights Reserved`;
  var Foot = document.getElementById("foottext").innerText = text;
}
time();
