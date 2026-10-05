/* =========================================================
   TALENT PLATFORM — TALENT DIRECTORY
   Names + roles only
   ========================================================= */

const talentPool = [
  /* =========================
     DEVELOPERS
     ========================= */
  {
    name: "Victor Krim",
    category: "engineering",
    role: "AI Developer"
  },
  {
    name: "Manuela Kajkara",
    category: "engineering",
    role: "AR/VR Developer"
  },
  {
    name: "Nimrod Talmon",
    category: "engineering",
    role: "AI Developer"
  },
  {
    name: "Gabriel de Souza",
    category: "engineering",
    role: "Principal AI Engineer"
  },
  {
    name: "Ram Verma",
    category: "engineering",
    role: "Data Engineer"
  },
  {
    name: "Simon Geisler",
    category: "engineering",
    role: "AI Researcher"
  },
  {
    name: "Vladimir Mitrovic",
    category: "engineering",
    role: "iOS Developer"
  },
  {
    name: "Jonah Elbaz",
    category: "engineering",
    role: "React Developer"
  },

  /* =========================
     DESIGNERS
     ========================= */
  {
    name: "Fabio Muniz",
    category: "design",
    role: "Designer"
  },
  {
    name: "Abdulhameid Grandoka",
    category: "design",
    role: "Designer"
  },
  {
    name: "Danielle Thompson",
    category: "design",
    role: "Product Designer"
  },
  {
    name: "Kevin Korpi",
    category: "design",
    role: "Product Designer"
  },
  {
    name: "Rachel Gelb",
    category: "design",
    role: "Product Designer"
  },
  {
    name: "Guilherme Cerqueira",
    category: "design",
    role: "Product Designer"
  },
  {
    name: "James Rhodes",
    category: "design",
    role: "Product Designer"
  },
  {
    name: "Great Ndidi",
    category: "design",
    role: "Product Designer"
  },
  {
    name: "Anne Clark",
    category: "design",
    role: "Product Designer"
  },
  {
    name: "Alex Gilev",
    category: "design",
    role: "Product Designer"
  },
  {
    name: "Ritika Sharma",
    category: "design",
    role: "Product Designer"
  },
  {
    name: "Jordan Grauf",
    category: "design",
    role: "Product Designer"
  },
  {
    name: "Jeremy Santy",
    category: "design",
    role: "Product Designer"
  },

  /* =========================
     MARKETING EXPERTS
     ========================= */
  {
    name: "Brion Roberto",
    category: "marketing",
    role: "Marketing Strategist"
  },
  {
    name: "Kate Macknight",
    category: "marketing",
    role: "Marketing Manager"
  },
  {
    name: "Orly Sigal",
    category: "marketing",
    role: "Marketing Director"
  },
  {
    name: "Anna Yelkina-Damman",
    category: "marketing",
    role: "Marketing Manager"
  },
  {
    name: "Jason Raphael",
    category: "marketing",
    role: "Digital Strategy Consultant"
  },
  {
    name: "Jennifer Rustigian",
    category: "marketing",
    role: "Marketing Director"
  },
  {
    name: "Blake Stockton",
    category: "marketing",
    role: "Marketing Expert"
  },
  {
    name: "Camila Pereira",
    category: "marketing",
    role: "Marketing Expert"
  },
  {
    name: "David Bailey",
    category: "marketing",
    role: "Marketing Expert"
  },
  {
    name: "Jake Madoff",
    category: "marketing",
    role: "Growth Marketing Expert"
  },
  {
    name: "Cheryl Da Silva",
    category: "marketing",
    role: "Marketing Strategist"
  },

  /* =========================
     MANAGEMENT CONSULTANTS
     ========================= */
  {
    name: "Jakub Rehor",
    category: "consulting",
    role: "Financial Analyst"
  },
  {
    name: "Vincent Grandjean",
    category: "consulting",
    role: "Business Strategist"
  },
  {
    name: "Margaryta Pugachova",
    category: "consulting",
    role: "M&A Expert"
  },
  {
    name: "Andrew Aziz",
    category: "consulting",
    role: "Finance Expert"
  },
  {
    name: "Kelly Sickles",
    category: "consulting",
    role: "Finance Expert"
  },
  {
    name: "Neil Portus",
    category: "consulting",
    role: "Finance Expert"
  },
  {
    name: "Gayemarie Brown",
    category: "consulting",
    role: "Management Consultant"
  },
  {
    name: "Arvind Kumar",
    category: "consulting",
    role: "Growth Strategy Consultant"
  },
  {
    name: "Fabian Schvartzman",
    category: "consulting",
    role: "Business Strategy Consultant"
  },

  /* =========================
     PROJECT MANAGERS
     ========================= */
  {
    name: "Richard Forsythe",
    category: "project",
    role: "Project Manager"
  },
  {
    name: "Anna D. Lukasiak",
    category: "project",
    role: "Project Manager"
  },
  {
    name: "Kamil Imański",
    category: "project",
    role: "Scrum Master"
  },
  {
    name: "Charlie Lucas",
    category: "project",
    role: "Program Manager"
  },
  {
    name: "Tarik Aossey",
    category: "project",
    role: "Senior Project Manager"
  },
  {
    name: "Julia Manning",
    category: "project",
    role: "Agile Coach"
  },
  {
    name: "Erica Gasparini",
    category: "project",
    role: "Project Manager"
  },
  {
    name: "Erita Skendaj",
    category: "project",
    role: "Project Manager"
  },

  /* =========================
     PRODUCT MANAGERS
     ========================= */
  {
    name: "Adan Perez",
    category: "product",
    role: "Product Owner"
  },
  {
    name: "Greg Prickril",
    category: "product",
    role: "Interim CPO"
  },
  {
    name: "Casey Arrington",
    category: "product",
    role: "Product Manager"
  },
  {
    name: "Zachary Goldberg",
    category: "product",
    role: "Product Manager"
  },
  {
    name: "Sreedevi Kaimal",
    category: "product",
    role: "Product Manager"
  },
  {
    name: "Mayank Mittal",
    category: "product",
    role: "Product Manager"
  },
  {
    name: "Adrian Gonzalez",
    category: "product",
    role: "AI Product Manager"
  },

  /* =========================
     SALES EXPERTS
     ========================= */
  {
    name: "Ramanujam T R",
    category: "sales",
    role: "Sales Strategist"
  },
  {
    name: "Deby Chung",
    category: "sales",
    role: "Business Development Manager"
  },
  {
    name: "Lorenzo Santos",
    category: "sales",
    role: "Sales Manager"
  }
];


/* =========================================================
   TALENT DIRECTORY ELEMENTS
   ========================================================= */

const professionalList = document.getElementById("professional-list");
const professionalRole = document.getElementById("professional-role");
const professionalDescription = document.getElementById(
  "professional-description"
);

const talentCategories = document.querySelectorAll(".talent-category");


/* =========================================================
   CATEGORY DATA
   ========================================================= */

const categoryDescriptions = {
  engineering:
    "Explore professionals working across software engineering and technology.",

  design:
    "Explore professionals creating thoughtful digital and visual experiences.",

  marketing:
    "Explore professionals specialising in growth, campaigns and brand strategy.",

  consulting:
    "Explore professionals helping organizations solve complex strategic challenges.",

  project:
    "Explore professionals responsible for planning, coordination and delivery.",

  product:
    "Explore professionals connecting product strategy, customer needs and business goals.",

  sales:
    "Explore professionals specialising in commercial strategy, sales and partnerships."
};


/* =========================================================
   RENDER TALENT
   ========================================================= */

function renderTalent(category) {
  if (!professionalList) return;

  const filteredTalent = talentPool.filter(
    person => person.category === category
  );

  professionalList.innerHTML = "";

  if (filteredTalent.length === 0) {
    professionalList.innerHTML = `
      <div class="professional-empty">
        <span>No professionals currently listed.</span>
      </div>
    `;
    return;
  }

  filteredTalent.forEach((person, index) => {
    const item = document.createElement("div");

    item.className = "professional-item";

    item.innerHTML = `
      <span class="professional-number">
        ${String(index + 1).padStart(2, "0")}
      </span>

      <div class="professional-details">
        <strong>${person.name}</strong>
        <span>${person.role}</span>
      </div>

      <span class="professional-arrow">→</span>
    `;

    professionalList.appendChild(item);
  });
}


/* =========================================================
   CATEGORY SWITCHING
   ========================================================= */

talentCategories.forEach(button => {
  button.addEventListener("click", () => {
    talentCategories.forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    const category = button.dataset.category;
    const role = button.dataset.role;
    const description =
      button.dataset.description ||
      categoryDescriptions[category] ||
      "";

    if (professionalRole) {
      professionalRole.textContent = role;
    }

    if (professionalDescription) {
      professionalDescription.textContent = description;
    }

    renderTalent(category);
  });
});


/* =========================================================
   INITIAL DIRECTORY STATE
   ========================================================= */

const initialCategory = document.querySelector(
  ".talent-category.active"
);

if (initialCategory) {
  const initialCategoryName = initialCategory.dataset.category;

  if (professionalRole) {
    professionalRole.textContent =
      initialCategory.dataset.role || "Developers";
  }

  if (professionalDescription) {
    professionalDescription.textContent =
      initialCategory.dataset.description ||
      categoryDescriptions[initialCategoryName] ||
      "";
  }

  renderTalent(initialCategoryName);
}


/* =========================================================
   HERO ROTATION
   ========================================================= */

const heroCards = document.querySelectorAll(".hero-person");

let currentHero = 0;

function rotateHero() {
  if (!heroCards.length) return;

  heroCards.forEach(card => {
    card.classList.remove("hero-active");
  });

  heroCards[currentHero].classList.add("hero-active");

  currentHero = (currentHero + 1) % heroCards.length;
}


/* =========================================================
   REDUCED MOTION
   ========================================================= */

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;


/* =========================================================
   START HERO ROTATION
   ========================================================= */

if (heroCards.length) {
  heroCards[0].classList.add("hero-active");

  if (!prefersReducedMotion && heroCards.length > 1) {
    setInterval(rotateHero, 4500);
  }
}


/* =========================================================
   CASE STUDY INTERACTION
   ========================================================= */

const caseStudy = document.querySelector(".featured-case-study");

if (caseStudy && !prefersReducedMotion) {
  caseStudy.addEventListener("mousemove", event => {
    const rect = caseStudy.getBoundingClientRect();

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 2;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    caseStudy.style.setProperty(
      "--mouse-x",
      `${x * 8}px`
    );

    caseStudy.style.setProperty(
      "--mouse-y",
      `${y * 8}px`
    );
  });

  caseStudy.addEventListener("mouseleave", () => {
    caseStudy.style.setProperty("--mouse-x", "0px");
    caseStudy.style.setProperty("--mouse-y", "0px");
  });
}


/* =========================================================
   MOBILE TALENT CATEGORY FLOW
   ========================================================= */

const categoryContainer = document.querySelector(
  ".talent-categories"
);

if (categoryContainer) {
  categoryContainer.addEventListener("wheel", event => {
    if (window.innerWidth <= 768) {
      event.preventDefault();

      categoryContainer.scrollLeft += event.deltaY;
    }
  }, { passive: false });
}


/* =========================================================
   EXPOSE DATA FOR DEBUGGING
   ========================================================= */

window.TalentPlatform = {
  talentPool,
  renderTalent
};
