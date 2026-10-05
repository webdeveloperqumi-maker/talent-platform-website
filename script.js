/* ============================================================
   TALENT PLATFORM
   Main JavaScript
   ============================================================ */

(() => {
  "use strict";

  /* ============================================================
     TALENT DATA
     ============================================================ */

  const talentPool = [

    /* =========================
       DEVELOPERS
       ========================= */

    {
      name: "Jose Miguel Arreola",
      category: "engineering",
      role: "Software Architect & Developer"
    },
    {
      name: "Keith Zimmerman",
      category: "engineering",
      role: "Developer"
    },
    {
      name: "Mike Hutton",
      category: "engineering",
      role: "Software Architect & Developer"
    },
    {
      name: "Ebru Yigit",
      category: "engineering",
      role: "Application Development Consultant"
    },
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
      name: "Ujunwa Melvis Okeke",
      category: "design",
      role: "UX/UI Designer"
    },
    {
      name: "Alex Gilev",
      category: "design",
      role: "AI Product Designer"
    },
    {
      name: "Ritika Sharma",
      category: "design",
      role: "Product Designer"
    },
    {
      name: "Jiyoun Lee-Lodge",
      category: "design",
      role: "Product Designer"
    },
    {
      name: "Kate Valdes",
      category: "design",
      role: "UX Designer"
    },
    {
      name: "Mini Kim",
      category: "design",
      role: "UX Designer"
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

    /* =========================
       MANAGEMENT CONSULTANTS
       ========================= */

    {
      name: "Kelly Sickles",
      category: "consulting",
      role: "Finance Expert"
    },
    {
      name: "Brion Roberto",
      category: "consulting",
      role: "Management Consultant"
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
      name: "Julia Manning",
      category: "project",
      role: "Project Manager"
    },
    {
      name: "Erin Michelle Stewart",
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
      name: "Darren",
      category: "project",
      role: "Technical Program Leader"
    },
    {
      name: "Jose Maria Polo",
      category: "project",
      role: "Project Manager"
    },
    {
      name: "Dimiter Shalvardjiev",
      category: "project",
      role: "Project Manager & Business Consultant"
    },
    {
      name: "Alvaro Villena",
      category: "project",
      role: "Technical Project Manager"
    },

    /* =========================
       PRODUCT MANAGERS
       ========================= */

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
      name: "Erin Michelle Stewart",
      category: "product",
      role: "Product Manager"
    },
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
      name: "Mayank Mittal",
      category: "product",
      role: "Product Manager"
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


  /* ============================================================
     CATEGORY INFORMATION
     ============================================================ */

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


  const categoryLabels = {
    engineering: "Developers",
    design: "Designers",
    marketing: "Marketing Experts",
    consulting: "Management Consultants",
    project: "Project Managers",
    product: "Product Managers",
    sales: "Sales Experts"
  };


  /* ============================================================
     DOM REFERENCES
     ============================================================ */

  const professionalList =
    document.getElementById("professional-list");

  const professionalRole =
    document.getElementById("professional-role");

  const professionalDescription =
    document.getElementById("professional-description");

  const talentCategories =
    document.querySelectorAll(".talent-category");


  /* ============================================================
     UTILITY FUNCTIONS
     ============================================================ */

  function escapeHTML(value) {
    if (typeof value !== "string") {
      return "";
    }

    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  function createTalentId(name) {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }


  function getInitials(name) {
    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map(word => word.charAt(0).toUpperCase())
      .join("");
  }


  /* ============================================================
     PROFILE DATA HELPERS
     ============================================================ */

  function getTalentProfile(talent) {

    /*
     * We intentionally do not invent biographies or employment
     * histories for real people.
     *
     * Additional verified information can be added here later.
     */

    return {
      name: talent.name,
      role: talent.role,
      category: categoryLabels[talent.category] || "Professional",
      description:
        categoryDescriptions[talent.category] ||
        "Experienced professional available through the Talent Platform network."
    };
  }


  /* ============================================================
     RENDER TALENT DIRECTORY
     ============================================================ */

  function renderTalent(category) {

    if (!professionalList) {
      return;
    }

    const filteredTalent = talentPool.filter(
      person => person.category === category
    );

    if (professionalRole) {
      professionalRole.textContent =
        categoryLabels[category] || "Professionals";
    }

    if (professionalDescription) {
      professionalDescription.textContent =
        categoryDescriptions[category] ||
        "Explore professionals in the Talent Platform network.";
    }

    professionalList.innerHTML = "";

    if (!filteredTalent.length) {

      const emptyState = document.createElement("div");

      emptyState.className = "talent-empty";

      emptyState.textContent =
        "No professionals are currently listed in this category.";

      professionalList.appendChild(emptyState);

      return;
    }


    filteredTalent.forEach((talent, index) => {

      const button = document.createElement("button");

      button.type = "button";

      button.className = "professional-item";

      button.dataset.talentId =
        createTalentId(talent.name);

      button.setAttribute(
        "aria-label",
        `View profile for ${talent.name}`
      );


      button.innerHTML = `
        <span class="professional-number">
          ${String(index + 1).padStart(2, "0")}
        </span>

        <span class="professional-information">
          <strong>
            ${escapeHTML(talent.name)}
          </strong>

          <small>
            ${escapeHTML(talent.role)}
          </small>
        </span>

        <span class="professional-arrow" aria-hidden="true">
          →
        </span>
      `;


      button.addEventListener("click", () => {
        openTalentProfile(talent);
      });


      professionalList.appendChild(button);

    });

  }


  /* ============================================================
     TALENT CATEGORY FILTERS
     ============================================================ */

  function activateTalentCategory(button) {

    talentCategories.forEach(categoryButton => {
      categoryButton.classList.remove("active");
      categoryButton.setAttribute("aria-selected", "false");
    });


    button.classList.add("active");

    button.setAttribute("aria-selected", "true");


    const category =
      button.dataset.category;

    if (!category) {
      return;
    }

    renderTalent(category);

  }


  talentCategories.forEach(button => {

    button.addEventListener("click", () => {
      activateTalentCategory(button);
    });

  });


  /* ============================================================
     TALENT PROFILE MODAL
     ============================================================ */

  let talentModal = null;


  function createTalentModal() {

    if (talentModal) {
      return talentModal;
    }


    talentModal = document.createElement("div");

    talentModal.className = "talent-profile-modal";

    talentModal.setAttribute("aria-hidden", "true");

    talentModal.innerHTML = `
      <div
        class="talent-profile-backdrop"
        data-close-talent
      ></div>

      <div
        class="talent-profile-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="talent-profile-name"
      >

        <button
          type="button"
          class="talent-profile-close"
          aria-label="Close profile"
          data-close-talent
        >
          ×
        </button>

        <div class="talent-profile-header">

          <div
            class="talent-profile-initials"
            id="talent-profile-initials"
          ></div>

          <div>

            <p class="talent-profile-eyebrow">
              VERIFIED TALENT
            </p>

            <h2 id="talent-profile-name"></h2>

            <p id="talent-profile-role"></p>

          </div>

        </div>


        <div class="talent-profile-content">

          <div class="talent-profile-section">

            <span>AREA OF EXPERTISE</span>

            <strong id="talent-profile-category"></strong>

          </div>


          <div class="talent-profile-section">

            <span>ABOUT</span>

            <p id="talent-profile-description"></p>

          </div>

        </div>


        <div class="talent-profile-actions">

          <button
            type="button"
            class="glass-button talent-hire-button"
            id="talent-hire-button"
          >
            Hire Talent →
          </button>

        </div>

      </div>
    `;


    document.body.appendChild(talentModal);


    talentModal
      .querySelectorAll("[data-close-talent]")
      .forEach(element => {

        element.addEventListener("click", closeTalentProfile);

      });


    return talentModal;

  }


  /* ============================================================
     OPEN TALENT PROFILE
     ============================================================ */

  function openTalentProfile(talent) {

    const modal = createTalentModal();

    const profile = getTalentProfile(talent);


    const initials =
      modal.querySelector("#talent-profile-initials");

    const name =
      modal.querySelector("#talent-profile-name");

    const role =
      modal.querySelector("#talent-profile-role");

    const category =
      modal.querySelector("#talent-profile-category");

    const description =
      modal.querySelector("#talent-profile-description");

    const hireButton =
      modal.querySelector("#talent-hire-button");


    initials.textContent =
      getInitials(profile.name);

    name.textContent =
      profile.name;

    role.textContent =
      profile.role;

    category.textContent =
      profile.category;

    description.textContent =
      profile.description;


    hireButton.onclick = () => {

      startHiringProcess(talent);

    };


    modal.classList.add("is-open");

    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("talent-modal-open");


    requestAnimationFrame(() => {

      const closeButton =
        modal.querySelector(".talent-profile-close");

      if (closeButton) {
        closeButton.focus();
      }

    });

  }


  /* ============================================================
     CLOSE TALENT PROFILE
     ============================================================ */

  function closeTalentProfile() {

    if (!talentModal) {
      return;
    }


    talentModal.classList.remove("is-open");

    talentModal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("talent-modal-open");

  }


  /* ============================================================
     ESCAPE KEY FOR PROFILE MODAL
     ============================================================ */

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

      if (
        talentModal &&
        talentModal.classList.contains("is-open")
      ) {

        closeTalentProfile();

      }

    }

  });


  /* ============================================================
     HIRING FLOW
     ============================================================ */

  function startHiringProcess(talent) {

    /*
     * This is intentionally a frontend entry point.
     *
     * The real hiring/payment process must later connect to the
     * client's backend/payment system once those credentials/API
     * details are supplied.
     */


    const hireSection =
      document.getElementById("contact");


    closeTalentProfile();


    if (hireSection) {

      const hireTarget =
        document.querySelector(
          "#hire-talent-form"
        );


      if (hireTarget) {

        const selectedTalentInput =
          hireTarget.querySelector(
            '[name="talent"]'
          );


        if (selectedTalentInput) {

          selectedTalentInput.value =
            talent.name;

        }

      }


      hireSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });


      return;

    }


    /*
     * If the actual hiring form has not been connected yet,
     * keep the selected professional available for the future
     * backend integration.
     */

    window.TalentPlatform.selectedTalent =
      talent;

  }


  /* ============================================================
     HIRE TALENT BUTTONS
     * ============================================================ */

  document
    .querySelectorAll(
      ".final-primary, [data-hire-talent]"
    )
    .forEach(button => {

      button.addEventListener("click", event => {

        const hireSection =
          document.getElementById("contact");


        if (hireSection) {

          event.preventDefault();

          hireSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      });

    });


  /* ============================================================
     INITIAL TALENT RENDER
     ============================================================ */

  const initialTalentCategory =
    document.querySelector(
      ".talent-category.active"
    );


  if (initialTalentCategory) {

    const initialCategory =
      initialTalentCategory.dataset.category;

    if (initialCategory) {
      renderTalent(initialCategory);
    }

  } else if (professionalList) {

    renderTalent("engineering");

  }


  /* ============================================================
     HERO ROTATION
     ============================================================ */

  const heroPeople =
    document.querySelectorAll(
      ".hero-person"
    );


  const heroImages =
    document.querySelectorAll(
      ".hero-person img"
    );


  const heroRotationDelay =
    5000;


  let heroRotationTimer = null;

  let heroRotationIndex = 0;


  function rotateHeroPeople() {

    if (
      heroPeople.length < 2 ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {

      return;

    }


    heroPeople.forEach(person => {
      person.classList.remove("is-active");
    });


    heroRotationIndex =
      (heroRotationIndex + 1) %
      heroPeople.length;


    heroPeople[
      heroRotationIndex
    ].classList.add("is-active");

  }


  function startHeroRotation() {

    if (
      heroPeople.length < 2 ||
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {

      return;

    }


    clearInterval(heroRotationTimer);


    heroRotationTimer =
      setInterval(
        rotateHeroPeople,
        heroRotationDelay
      );

  }


  function stopHeroRotation() {

    clearInterval(heroRotationTimer);

    heroRotationTimer = null;

  }


  if (heroPeople.length) {

    heroPeople[0].classList.add("is-active");

    startHeroRotation();

  }


  document.addEventListener(
    "visibilitychange",
    () => {

      if (document.hidden) {

        stopHeroRotation();

      } else {

        startHeroRotation();

      }

    }
  );


  /* ============================================================
     CASE STUDY INTERACTION
     ============================================================ */

  const caseStudy =
    document.querySelector(
      ".featured-case-study"
    );


  if (caseStudy) {

    const caseImage =
      caseStudy.querySelector(
        ".case-study-image"
      );


    caseStudy.addEventListener(
      "mousemove",
      event => {

        if (
          window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          ).matches
        ) {

          return;

        }


        const rect =
          caseStudy.getBoundingClientRect();


        const x =
          (event.clientX - rect.left) /
          rect.width;


        const y =
          (event.clientY - rect.top) /
          rect.height;


        const rotateX =
          (0.5 - y) * 2;


        const rotateY =
          (x - 0.5) * 2;


        if (caseImage) {

          caseImage.style.transform =
            `perspective(1200px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

        }

      }
    );


    caseStudy.addEventListener(
      "mouseleave",
      () => {

        if (caseImage) {

          caseImage.style.transform =
            "";

        }

      }
    );

  }


  /* ============================================================
     MOBILE HORIZONTAL SCROLL
     ============================================================ */

  const horizontalContainers =
    document.querySelectorAll(
      ".company-grid, .talent-categories, .professional-list"
    );


  horizontalContainers.forEach(container => {

    container.addEventListener(
      "wheel",
      event => {

        if (
          window.innerWidth > 768 ||
          Math.abs(event.deltaY) <=
          Math.abs(event.deltaX)
        ) {

          return;

        }


        if (
          container.scrollWidth <=
          container.clientWidth
        ) {

          return;

        }


        event.preventDefault();

        container.scrollLeft +=
          event.deltaY;

      },
      {
        passive: false
      }
    );

  });


  /* ============================================================
     SMOOTH INTERNAL LINKS
     ============================================================ */

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetId =
            link.getAttribute("href");


          if (
            !targetId ||
            targetId === "#"
          ) {

            return;

          }


          const target =
            document.querySelector(
              targetId
            );


          if (!target) {
            return;
          }


          event.preventDefault();


          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }
      );

    });


  /* ============================================================
     COMPANY CARD INTERACTION
     ============================================================ */

  document
    .querySelectorAll(
      ".company-glass-card"
    )
    .forEach(card => {

      card.setAttribute(
        "tabindex",
        "0"
      );


      card.addEventListener(
        "keydown",
        event => {

          if (
            event.key !== "Enter" &&
            event.key !== " "
          ) {

            return;

          }


          event.preventDefault();


          const link =
            card.querySelector("a");


          if (link) {
            link.click();
          }

        }
      );

    });


  /* ============================================================
     REDUCED MOTION
     ============================================================ */

  const reducedMotionQuery =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );


  function handleMotionPreference(event) {

    if (event.matches) {

      stopHeroRotation();

    } else {

      startHeroRotation();

    }

  }


  if (
    typeof reducedMotionQuery.addEventListener ===
    "function"
  ) {

    reducedMotionQuery.addEventListener(
      "change",
      handleMotionPreference
    );

  } else if (
    typeof reducedMotionQuery.addListener ===
    "function"
  ) {

    reducedMotionQuery.addListener(
      handleMotionPreference
    );

  }


  /* ============================================================
     PUBLIC TALENT PLATFORM API
     ============================================================ */

  window.TalentPlatform = {

    talentPool,

    categoryDescriptions,

    categoryLabels,

    renderTalent,

    openTalentProfile,

    closeTalentProfile,

    startHiringProcess,

    getTalentProfile,

    getTalentByName(name) {

      return talentPool.find(
        person =>
          person.name.toLowerCase() ===
          String(name).toLowerCase()
      ) || null;

    },

    getTalentByCategory(category) {

      return talentPool.filter(
        person =>
          person.category === category
      );

    },

    getTalentCount() {

      return talentPool.length;

    }

  };


  /* ============================================================
     DEBUG INFORMATION
     ============================================================ */

  if (
    typeof console !== "undefined" &&
    typeof console.info === "function"
  ) {

    console.info(
      `Talent Platform loaded: ${talentPool.length} talent entries.`
    );

  }

})();
