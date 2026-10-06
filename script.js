// const body = document.body;

// const themeToggle = document.getElementById("themeToggle");

// const savedTheme = localStorage.getItem("caselab-theme");

// if (savedTheme === "dark") {
//     body.classList.add("dark");
// }

// updateThemeIcon();

// themeToggle.addEventListener("click", () => {
//     body.classList.toggle("dark");

//     localStorage.setItem(
//         "caselab-theme",
//         body.classList.contains("dark") ? "dark" : "light"
//     );

//     updateThemeIcon();
// });

// function updateThemeIcon() {
//     themeToggle.textContent = body.classList.contains("dark") ? "☀" : "☾";

//     themeToggle.setAttribute(
//         "aria-label",

//         body.classList.contains("dark") ?
//         "Switch to light theme" :
//         "Switch to dark theme"
//     );
// }

// /* =========================================
// AUTHENTICATION MODAL
// ========================================= */

// const modal = document.getElementById("authModal");

// const loginBtn = document.getElementById("loginBtn");

// const heroLogin = document.getElementById("heroLogin");

// const closeModal = document.getElementById("closeModal");

// const tabs = document.querySelectorAll(".tab");

// const nameField = document.getElementById("nameField");

// const authTitle = document.getElementById("authTitle");

// const authSubtitle = document.getElementById("authSubtitle");

// const authSubmit = document.getElementById("authSubmit");

// function openAuth(mode = "login") {
//     modal.classList.add("show");

//     setAuthMode(mode);

//     document.body.style.overflow = "hidden";
// }

// function closeAuth() {
//     modal.classList.remove("show");

//     document.body.style.overflow = "";
// }

// function setAuthMode(mode) {
//     tabs.forEach((tab) => {
//         tab.classList.toggle(
//             "active",

//             tab.dataset.mode === mode
//         );
//     });

//     const signup = mode === "signup";

//     nameField.classList.toggle("hidden", !signup);

//     authTitle.textContent = signup ?
//         "Create your account." :
//         "Welcome back.";

//     authSubtitle.textContent = signup ?
//         "Join CaseLab and save your favourite designs." :
//         "Sign in to continue shopping.";

//     authSubmit.textContent = signup ? "Create account" : "Login";
// }

// loginBtn.addEventListener("click", () => openAuth("login"));

// heroLogin.addEventListener("click", () => openAuth("signup"));

// closeModal.addEventListener("click", closeAuth);

// modal.addEventListener("click", (e) => {
//     if (e.target === modal) {
//         closeAuth();
//     }
// });

// document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") {
//         closeAuth();
//     }
// });

// tabs.forEach((tab) => {
//     tab.addEventListener("click", () => {
//         setAuthMode(tab.dataset.mode);
//     });
// });

// document.getElementById("authForm").addEventListener("submit", (e) => {
//     e.preventDefault();

//     alert("Demo only: connect this form to your authentication backend.");
// });

// /* =========================================
// PRODUCT FILTERING + SEARCH
// ========================================= */

// const filters = document.querySelectorAll(".filter");

// const products = document.querySelectorAll(".product");

// const searchInput = document.getElementById("searchInput");

// let currentFilter = "all";

// function filterProducts() {
//     const query = searchInput.value.toLowerCase().trim();

//     products.forEach((product) => {
//         const matchesCategory =
//             currentFilter === "all" ||
//             product.dataset.category === currentFilter;

//         const matchesSearch = product.dataset.name
//             .toLowerCase()
//             .includes(query);

//         product.style.display =
//             matchesCategory && matchesSearch ? "" : "none";
//     });
// }

// filters.forEach((filter) => {
//     filter.addEventListener("click", () => {
//         filters.forEach((f) => f.classList.remove("active"));

//         filter.classList.add("active");

//         currentFilter = filter.dataset.filter;

//         filterProducts();
//     });
// });

// searchInput.addEventListener("input", filterProducts);

// /* =========================================
// SHOPPING CART
// ========================================= */

// let cartCount = 0;

// const cartCounter = document.getElementById("cartCount");

// document.querySelectorAll(".add").forEach((button) => {
//     button.addEventListener("click", () => {
//         cartCount++;

//         cartCounter.textContent = cartCount;

//         const original = button.textContent;

//         button.textContent = "Added ✓";

//         setTimeout(() => {
//             button.textContent = original;
//         }, 900);
//     });
// });

// document.getElementById("cartBtn").addEventListener("click", () => {
//     if (cartCount === 0) {
//         alert("Your bag is empty.");
//     } else {
//         alert(
//             `You have ${cartCount} item${
//       cartCount === 1 ? "" : "s"
//     } in your bag.`
//         );
//     }
// });


// document
//     .getElementById("newsletterForm")
//     .addEventListener("submit", (e) => {
//         e.preventDefault();

//         const button = e.target.querySelector("button");

//         button.textContent = "Subscribed ✓";

//         e.target.reset();

//         setTimeout(() => {
//             button.textContent = "Subscribe";
//         }, 1600);
//     });