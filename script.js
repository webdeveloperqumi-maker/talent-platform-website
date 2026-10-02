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
    role: "Marketing & Paid Media Specialist"
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

const heroCards = [
  document.querySelector(".person-card-one"),
  document.querySelector(".person-card-two"),
  document.querySelector(".person-card-three")
];

function getRandomPeople() {
  const shuffled = [...talentPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 3);
}

function updateCard(card, person) {
  if (!card || !person) return;

  const category = card.querySelector(".person-category");
  const largeRole = card.querySelector(".person-large-role");
  const role = card.querySelector(".hero-person-role");
  const name = card.querySelector(".hero-person-name");

  card.style.opacity = "0.35";

  setTimeout(() => {
    if (category) category.textContent = person.category;
    if (largeRole) largeRole.innerHTML = person.largeRole;
    if (role) role.textContent = person.role;
    if (name) name.textContent = person.name;

    card.style.opacity = "1";
  }, 250);
}

function rotateHeroPeople() {
  const people = getRandomPeople();

  heroCards.forEach((card, index) => {
    updateCard(card, people[index]);
  });
}

/* Initial people */
rotateHeroPeople();

/* Change the three professionals occasionally */
setInterval(rotateHeroPeople, 8000);


/* Subtle movement when the mouse moves */
heroCards.forEach((card, index) => {
  if (!card) return;

  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    const strength = index === 1 ? 4 : 3;

    card.style.transform =
      `translate(${x * strength}px, ${y * strength}px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
