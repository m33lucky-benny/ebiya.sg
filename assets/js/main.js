const currentPage = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-link").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});
