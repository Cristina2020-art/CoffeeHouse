// =========================
// Coffee House - script.js
// =========================


// =========================
// 1. MENIU MOBIL (dacă îl extinzi ulterior)
// =========================

const nav = document.querySelector("nav ul");

if (nav) {
    const toggleBtn = document.createElement("button");
    toggleBtn.innerHTML = "☰";
    toggleBtn.classList.add("menu-toggle");
    document.querySelector("header").prepend(toggleBtn);

    toggleBtn.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
    });
}


// =========================
// 2. BUTON SCROLL TO TOP
// =========================

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// =========================
// 3. ANIMAȚIE LA SCROLL (carduri / secțiuni)
// =========================

const animatedElements = document.querySelectorAll(".card, .product-card, .testimonial, .offer-box");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

animatedElements.forEach(el => observer.observe(el));


// =========================
// 4. EFECT BUTOANE
// =========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});


// =========================
// 5. INTERACȚIUNE PRODUSE (mini feedback)
// =========================

const productButtons = document.querySelectorAll(".product-card .btn");

productButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.innerHTML = "Adăugat ✓";
        btn.style.background = "green";

        setTimeout(() => {
            btn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Comandă';
            btn.style.background = "";
        }, 1500);
    });
});


// =========================
// 6. FORMULAR CONTACT (validare simplă)
// =========================

const form = document.querySelector(".contact-form form");

if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");
        let valid = true;

        inputs.forEach(input => {
            if (input.hasAttribute("required") && input.value.trim() === "") {
                valid = false;
            }
        });

        if (!valid) {
            alert("Te rog completează toate câmpurile obligatorii!");
            return;
        }

        alert("Mesaj trimis cu succes! 🚀");
        form.reset();
    });
}


// =========================
// 7. LOGARE ÎNCĂRCARE SITE
// =========================

window.addEventListener("load", () => {
    console.log("Coffee House loaded successfully!");
});