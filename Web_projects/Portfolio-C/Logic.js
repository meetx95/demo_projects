/* ── CURSOR ─────────────────────────────── */
const dot = document.getElementById("cursor-dot");
const ring = document.getElementById("cursor-ring");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
});

(function loop() {
  rx += (mx - rx) * 0.18;
  ry += (my - ry) * 0.18;
  dot.style.left = mx + "px";
  dot.style.top = my + "px";
  ring.style.left = rx + "px";
  ring.style.top = ry + "px";
  requestAnimationFrame(loop);
})();

/* ── TYPEWRITER ─────────────────────────── */
const phrases = [
  "Frontend Developer",
  "Programmer",
  "Motion Graphics Artist",
  "React Enthusiast",
];
let pi = 0,
  ci = 0,
  deleting = false;
const tw = document.getElementById("typewriter");

function type() {
  const word = phrases[pi];
  if (!deleting) {
    tw.textContent = word.slice(0, ++ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    tw.textContent = word.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 55 : 95);
}
type();

/* ── NAVBAR SCROLL + ACTIVE ─────────────── */
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll("section[id]");
const navAs = document.querySelectorAll(".nav-links a");

window.addEventListener(
  "scroll",
  () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);

    let current = "";
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navAs.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === "#" + current);
    });
  },
  { passive: true },
);

/* ── HAMBURGER ──────────────────────────── */
const ham = document.getElementById("hamburger");
const menu = document.getElementById("mobileMenu");

ham.addEventListener("click", () => {
  ham.classList.toggle("open");
  menu.classList.toggle("open");
});
function closeMobile() {
  ham.classList.remove("open");
  menu.classList.remove("open");
}

/* ── SCROLL REVEAL ──────────────────────── */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ── CONTACT FORM ───────────────────────── */
const form = document.getElementById("contactForm");
const feedback = document.getElementById("formFeedback");
const submitBtn = document.getElementById("submitBtn");

function validate() {
  let ok = true;
  const fields = [
    { id: "fname", err: "err-name", msg: "Name is required." },
    { id: "femail", err: "err-email", msg: "Valid email is required." },
    { id: "fsubject", err: "err-subject", msg: "Subject is required." },
    { id: "fmessage", err: "err-message", msg: "Message is required." },
  ];
  fields.forEach((f) => {
    const el = document.getElementById(f.id);
    const em = document.getElementById(f.err);
    const val = el.value.trim();
    const isEmail = f.id === "femail";
    const invalid =
      !val || (isEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val));
    el.classList.toggle("error", invalid);
    em.textContent = invalid ? f.msg : "";
    if (invalid) ok = false;
  });
  return ok;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validate()) return;

  submitBtn.textContent = "Sending…";
  submitBtn.disabled = true;

  setTimeout(() => {
    form.reset();
    feedback.classList.add("success");
    submitBtn.textContent = "Send Message →";
    submitBtn.disabled = false;
    setTimeout(() => feedback.classList.remove("success"), 5000);
  }, 1200);
});

// live clear errors
["fname", "femail", "fsubject", "fmessage"].forEach((id) => {
  document.getElementById(id).addEventListener("input", function () {
    this.classList.remove("error");
  });
});