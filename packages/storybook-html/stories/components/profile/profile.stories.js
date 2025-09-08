import "@uqds/profile/src/scss/main.scss";

export default {
  title: "Components/Profile",
  argTypes: {
    titleElement: {
      name: "Title element",
      options: ["h2", "h3", "h4", "h5"],
      control: "select",
    },
    title: {
      control: "text",
    },
    name: {
      control: "text",
    },
    position: {
      control: "text",
    },
    bio: {
      control: "text",
    },
    hasContact: {
      name: "Contact block",
      control: "boolean",
    },
    email: {
      control: "text",
      if: { arg: "hasContact" },
    },
    Phone: {
      control: "text",
      if: { arg: "hasContact" },
    },
    ctaUrl: {
      control: "text",
    },
    hasImage: {
      name: "Profile Image",
      control: "boolean",
    },
    image: {
      name: "Image src",
      control: "select",
      options: ["none", "images/hero/hero-example--small.jpg"],
      if: { arg: "hasImage" },
    },
  },
  args: {
    titleElement: "h2",
    title: "Professor",
    name: "Ulrik Wisløff",
    position: "Head of School",
    bio: "Professor John Cairney is the Head of School of Human Movement and Nutrition Sciences. He is an academic leader in the field of paediatric exercise medicine and child health research and is particularly well-known for his work on developmental coordination disorder (DCD) and its impact on the health and well-being of children. Prof John Cairney started at UQ in January 2020.",
    hasContact: true,
    email: "john.cairney@uq.edu.au",
    Phone: "+61 7 3365 1111",
    ctaUrl: "https://about.uq.edu.au/experts/1371",
    hasImage: true,
    image: "none",
  },
  render: ({
    titleElement,
    title,
    name,
    position,
    bio,
    hasContact,
    email,
    Phone,
    ctaUrl,
    hasImage,
    image,
  }) => {
    return `<div class="uq-profile">
    <div class="uq-profile__content">
      <header class="uq-profile__header">
      <${titleElement} class="uq-profile__title">${title} ${name}</${titleElement}>
      ${position ? `<p>${position}</p>` : ""}
      </header>
      ${
        bio
          ? `<section class="uq-profile__bio">
        <p>${bio}</p>
      </section>`
          : ""
      }
      ${
        hasContact
          ? `
      <section class="uq-profile__contact">
      ${email ? `<a href="mailto:${email}">${email}</a>` : ""}
      ${
        Phone
          ? `${email ? `<br />` : ""}
        <a href="tel:${Phone}">${Phone}</a>`
          : ""
      }
      </section>
      `
          : ""
      }
      ${
        ctaUrl
          ? `
        <footer class="uq-profile__footer">
          <a href="${ctaUrl}"> View ${title} ${name}'s profile</a>
        </footer>
        `
          : ""
      }
    </div>
    ${
      hasImage
        ? `
    <div class="uq-profile--image">
      <div class="uq-profile__image">
        ${image !== "none" ? `<img src="${image}" alt="Image of ${title} ${name}" />` : ""}
      </div>
    </div>
      `
        : ""
    }
  </div>`;
  },
};

export const profile = {};

export const researcherCta = {
  args: {
    position: "",
    bio: "",
    hasContact: false,
    image: "images/hero/hero-example--small.jpg",
  },
};

export const researcherEmail = {
  args: {
    position: "",
    bio: "",
    email: "john.cairney@uq.edu.au",
    Phone: "",
    image: "images/hero/hero-example--small.jpg",
    ctaUrl: "",
  },
};

export const staffListingFull = {
  args: {
    image: "images/hero/hero-example--small.jpg",
  },
};

export const staffListingNoBio = {
  args: {
    bio: "",
    image: "images/hero/hero-example--small.jpg",
  },
};

export const staffListingCta = {
  args: {
    position: "",
    bio: "",
    hasContact: false,
    image: "none",
  },
};

export const staffListingNoPhoto = {
  args: {
    position: "",
    bio: "",
    hasContact: false,
    hasImage: false,
  },
};
