/* =========================================
   TALENT PLATFORM — MAIN JAVASCRIPT
========================================= */


/* =========================================
   PUBLICLY LISTED TOPTAL TALENT
========================================= */

const talentPool = [

    /* ENGINEERING */

    {
        name: "Victor Krim",
        category: "engineering",
        displayCategory: "ENGINEERING",
        role: "AI Developer"
    },

    {
        name: "Manuela Kajkara",
        category: "engineering",
        displayCategory: "ENGINEERING",
        role: "AR/VR Developer"
    },

    {
        name: "Nimrod Talmon",
        category: "engineering",
        displayCategory: "ENGINEERING",
        role: "AI Developer"
    },

    {
        name: "Gabriel de Souza",
        category: "engineering",
        displayCategory: "ENGINEERING",
        role: "Principal AI Engineer"
    },

    {
        name: "Ram Verma",
        category: "engineering",
        displayCategory: "ENGINEERING",
        role: "Data Engineer"
    },

    {
        name: "Simon Geisler",
        category: "engineering",
        displayCategory: "ENGINEERING",
        role: "AI Researcher"
    },

    {
        name: "Vladimir Mitrovic",
        category: "engineering",
        displayCategory: "ENGINEERING",
        role: "iOS Developer"
    },

    {
        name: "Jonah Elbaz",
        category: "engineering",
        displayCategory: "ENGINEERING",
        role: "React Developer"
    },


    /* DESIGN */

    {
        name: "Jeremy Santy",
        category: "design",
        displayCategory: "DESIGN",
        role: "Product Designer"
    },

    {
        name: "Danielle Thompson",
        category: "design",
        displayCategory: "DESIGN",
        role: "Product Designer"
    },


    /* MARKETING */

    {
        name: "Andre N. Walker",
        category: "marketing",
        displayCategory: "MARKETING",
        role: "Brand Strategist"
    },

    {
        name: "Camila Pereira",
        category: "marketing",
        displayCategory: "MARKETING",
        role: "Paid Media Expert"
    },

    {
        name: "Cheryl Da Silva",
        category: "marketing",
        displayCategory: "MARKETING",
        role: "Marketing Strategist"
    },


    /* MANAGEMENT CONSULTING */

    {
        name: "Jakub Rehor",
        category: "consulting",
        displayCategory: "CONSULTING",
        role: "Financial Analyst"
    },

    {
        name: "Savannah Enright",
        category: "consulting",
        displayCategory: "CONSULTING",
        role: "Management Consultant"
    },

    {
        name: "Arvind Kumar",
        category: "consulting",
        displayCategory: "CONSULTING",
        role: "FP&A Expert"
    },


    /* PROJECT MANAGEMENT */

    {
        name: "Erita Skendaj",
        category: "project",
        displayCategory: "PROJECTS",
        role: "Project Manager"
    },


    /* PRODUCT MANAGEMENT */

    {
        name: "Adrian Gonzalez",
        category: "product",
        displayCategory: "PRODUCT",
        role: "AI Product Manager"
    },

    {
        name: "Casey Arrington",
        category: "product",
        displayCategory: "PRODUCT",
        role: "Product Manager"
    }

];


/* =========================================
   HERO
========================================= */

const heroCards = [
    document.querySelector(".person-card-one"),
    document.querySelector(".person-card-two"),
    document.querySelector(".person-card-three")
];


/* =========================================
   HERO PEOPLE
========================================= */

function getRandomPeople() {

    const shuffled = [...talentPool];

    for (let i = shuffled.length - 1; i > 0; i--) {

        const randomIndex =
            Math.floor(Math.random() * (i + 1));

        [shuffled[i], shuffled[randomIndex]] =
            [shuffled[randomIndex], shuffled[i]];
    }

    return shuffled.slice(0, 3);
}


/* =========================================
   UPDATE HERO
========================================= */

function updateHeroCard(card, person) {

    if (!card || !person) return;

    const category =
        card.querySelector(".person-category");

    const largeRole =
        card.querySelector(".person-large-role");

    const role =
        card.querySelector(".hero-person-role");

    const name =
        card.querySelector(".hero-person-name");


    card.style.opacity = "0.25";

    card.style.transform =
        "translateY(8px)";


    setTimeout(() => {

        if (category) {
            category.textContent =
                person.displayCategory;
        }

        if (largeRole) {
            largeRole.innerHTML =
                person.role.toUpperCase();
        }

        if (role) {
            role.textContent =
                person.role;
        }

        if (name) {
            name.textContent =
                person.name;
        }

        card.style.opacity = "1";

        card.style.transform =
            "translateY(0)";

    }, 350);

}


/* =========================================
   HERO ROTATION
========================================= */

function rotateHeroProfessionals() {

    const people =
        getRandomPeople();

    heroCards.forEach(
        (card, index) => {

            updateHeroCard(
                card,
                people[index]
            );

        }
    );

}


/* =========================================
   HERO INITIAL STATE
========================================= */

if (heroCards.length === 3) {

    setTimeout(
        rotateHeroProfessionals,
        5000
    );

    setInterval(
        rotateHeroProfessionals,
        8000
    );

}


/* =========================================
   HERO CARD MOVEMENT
========================================= */

heroCards.forEach(
    (card, index) => {

        if (!card) return;

        card.style.transition =
            "transform 0.45s ease, opacity 0.35s ease";


        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left) /
                    rect.width - 0.5;

                const y =
                    (event.clientY - rect.top) /
                    rect.height - 0.5;


                const strength =
                    index === 1 ? 5 : 3;


                card.style.transform =
                    `translate(${x * strength}px, ${y * strength}px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "translate(0, 0)";

            }
        );

    }
);


/* =========================================
   TALENT DIRECTORY
========================================= */

const categoryButtons =
    document.querySelectorAll(
        ".talent-category"
    );


const professionalList =
    document.getElementById(
        "professional-list"
    );


const professionalRole =
    document.getElementById(
        "professional-role"
    );


const professionalDescription =
    document.getElementById(
        "professional-description"
    );


/* =========================================
   CATEGORY FILTER
========================================= */

function getCategoryPeople(category) {

    return talentPool.filter(
        person =>
            person.category === category
    );

}


/* =========================================
   RENDER TALENT
========================================= */

function renderProfessionals(people) {

    if (!professionalList) return;

    professionalList.innerHTML = "";


    if (people.length === 0) {

        professionalList.innerHTML = `
            <div class="professional-empty">
                <span>VERIFIED TALENT</span>
                <p>
                    More verified professionals in this category
                    will appear here soon.
                </p>
            </div>
        `;

        return;
    }


    people.forEach(
        (person, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "professional-profile";


            card.style.setProperty(
                "--profile-delay",
                `${index * 80}ms`
            );


            card.innerHTML = `

                <div class="profile-number">
                    ${String(index + 1).padStart(2, "0")}
                </div>


                <div class="profile-main">

                    <span>
                        ${person.displayCategory}
                    </span>


                    <h4>
                        ${person.name}
                    </h4>


                    <p>
                        ${person.role}
                    </p>


                    <div class="profile-detail-line">
                        Verified professional
                        within the ${person.category}
                        network.
                    </div>


                    <div class="profile-tags">

                        <span>
                            VERIFIED TALENT
                        </span>

                        <span>
                            ${person.displayCategory}
                        </span>

                    </div>

                </div>


                <button
                    class="profile-action"
                    type="button"
                    aria-label="View ${person.name}"
                >
                    View →
                </button>

            `;


            professionalList.appendChild(
                card
            );

        }
    );

}


/* =========================================
   SHOW CATEGORY
========================================= */

function showCategory(button) {

    if (!button) return;


    categoryButtons.forEach(
        item => {

            item.classList.remove(
                "active"
            );

        }
    );


    button.classList.add(
        "active"
    );


    if (professionalRole) {

        professionalRole.textContent =
            button.dataset.role;

    }


    if (professionalDescription) {

        professionalDescription.textContent =
            button.dataset.description;

    }


    const people =
        getCategoryPeople(
            button.dataset.category
        );


    renderProfessionals(
        people
    );

}


/* =========================================
   CATEGORY BUTTONS
========================================= */

categoryButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                showCategory(
                    button
                );

            }
        );

    }
);


/* =========================================
   INITIAL CATEGORY
========================================= */

const firstCategory =
    document.querySelector(
        ".talent-category.active"
    );


if (firstCategory) {

    showCategory(
        firstCategory
    );

}


/* =========================================
   CASE STUDY MOVEMENT
========================================= */

const caseStudy =
    document.querySelector(
        ".featured-case-study"
    );


const caseImage =
    document.querySelector(
        ".case-study-image"
    );


if (caseStudy && caseImage) {

    caseStudy.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                caseStudy.getBoundingClientRect();


            const x =
                (event.clientX - rect.left) /
                rect.width - 0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height - 0.5;


            caseImage.style.transform =
                `scale(1.025) translate(${x * 5}px, ${y * 5}px)`;

        }
    );


    caseStudy.addEventListener(
        "mouseleave",
        () => {

            caseImage.style.transform =
                "scale(1) translate(0, 0)";

        }
    );

}


/* =========================================
   REDUCED MOTION
========================================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (prefersReducedMotion.matches) {

    document.documentElement.style.scrollBehavior =
        "auto";

}
