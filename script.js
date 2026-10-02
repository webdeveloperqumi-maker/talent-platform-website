const talentPool = [
  {
    name: "Cheryl Da Silva",
    category: "MARKETING",
    largeRole: "CONTENT<br>STRATEGY",
    role: "Marketing Strategist"
  },
  {
    name: "Jeremy Santy",
    category: "DESIGN",
    largeRole: "PRODUCT<br>DESIGN",
    role: "Product Designer"
  },
  {
    name: "Camila Pereira",
    category: "MARKETING",
    largeRole: "PAID<br>MEDIA",
    role: "Marketing Specialist"
  },
  {
    name: "Erita Skendaj",
    category: "PROJECTS",
    largeRole: "PROJECT<br>DELIVERY",
    role: "Project Manager"
  },
  {
    name: "Vladimir Mitrovic",
    category: "ENGINEERING",
    largeRole: "SOFTWARE<br>ENGINEERING",
    role: "Engineer"
  },
  {
    name: "Casey Arrington",
    category: "PRODUCT",
    largeRole: "PRODUCT<br>MANAGEMENT",
    role: "Product Manager"
  }
];


/* =========================
   HERO PROFESSIONALS
========================= */

const heroCards = [
  document.querySelector(".person-card-one"),
  document.querySelector(".person-card-two"),
  document.querySelector(".person-card-three")
];


function getRandomPeople() {
  const shuffled = [...talentPool].sort(() => Math.random() - 0.5);

  return shuffled.slice(0, 3);
}


function updateHeroCard(card, person) {
  if (!card || !person) return;

  const category = card.querySelector(".person-category");
  const largeRole = card.querySelector(".person-large-role");
  const role = card.querySelector(".hero-person-role");
  const name = card.querySelector(".hero-person-name");

  card.style.opacity = "0.35";

  setTimeout(() => {

    if (category) {
      category.textContent = person.category;
    }

    if (largeRole) {
      largeRole.innerHTML = person.largeRole;
    }

    if (role) {
      role.textContent = person.role;
    }

    if (name) {
      name.textContent = person.name;
    }

    card.style.opacity = "1";

  }, 300);
}


function rotateHeroProfessionals() {

  const people = getRandomPeople();

  heroCards.forEach((card, index) => {

    updateHeroCard(
      card,
      people[index]
    );

  });
}


/* Show three professionals immediately */
rotateHeroProfessionals();


/* Rotate the professionals every 8 seconds */
setInterval(
  rotateHeroProfessionals,
  8000
);


/* =========================
   SUBTLE HERO MOVEMENT
========================= */

heroCards.forEach((card, index) => {

  if (!card) return;

  card.style.transition =
    "transform 0.45s ease, opacity 0.35s ease";


  card.addEventListener("mousemove", (event) => {

    const rect = card.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) /
      rect.width - 0.5;

    const y =
      (event.clientY - rect.top) /
      rect.height - 0.5;

    const strength =
      index === 1 ? 4 : 3;

    card.style.transform =
      `translate(${x * strength}px, ${y * strength}px)`;

  });


  card.addEventListener("mouseleave", () => {

    card.style.transform = "";

  });

});


/* =========================
   TALENT DIRECTORY
   (keeps the existing
   lower section working)
========================= */

const categoryButtons =
  document.querySelectorAll(".talent-category");

const professionalGrid =
  document.querySelector(".professional-grid");


function renderProfessionals(people) {

  if (!professionalGrid) return;

  professionalGrid.innerHTML = "";

  people.forEach(person => {

    const card =
      document.createElement("article");

    card.className =
      "professional-card";

    card.innerHTML = `
      <span class="professional-category">
        ${person.category}
      </span>

      <h3>
        ${person.name}
      </h3>

      <p>
        ${person.role}
      </p>

      <button type="button">
        View profile →
      </button>
    `;

    professionalGrid.appendChild(card);

  });

}


function getCategoryPeople(category) {

  return talentPool.filter(
    person =>
      person.category === category
  );

}


function showCategory(category) {

  const people =
    getCategoryPeople(category);

  renderProfessionals(people);

}


categoryButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const category =
        button.dataset.category;

      showCategory(category);

    }
  );

});


/* Initial talent directory */
renderProfessionals(talentPool);
