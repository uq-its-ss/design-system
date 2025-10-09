import "@uqds/profile/src/scss/main.scss";
import avatar from "../avatar/avatar.stories";

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
      options: ["none", "images/profile/profile.png"],
      if: { arg: "hasImage" },
    },
  },
  args: {
    titleElement: "h2",
    title: "Professor",
    name: "Jane Doe",
    position: "Head of School",
    bio: "",
    hasContact: true,
    email: "jane.doe@uq.edu.au",
    Phone: "+61 7 3000 0000",
    ctaUrl: "https://about.uq.edu.au/experts/1371",
    hasImage: true,
    image: "images/profile/profile.png",
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
    return `<article class="uq-profile">
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
      ${email ? `<div><a href="mailto:${email}">${email}</a></div>` : ""}
      ${Phone ? `<div><a href="tel:${Phone}">${Phone}</a></div>` : ""}
      </section>`
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
    <div class="uq-profile__image">
      ${avatar.render({ userName: title + " " + name, userAvatar: image })}
    </div>
      `
        : ""
    }
  </article>`;
  },
};

export const profile = {};

export const NoImage = {
  args: {
    hasImage: false,
  },
};

export const FallbackImage = {
  args: {
    hasImage: true,
    image: "none",
  },
};

export const BioProfile = {
  args: {
    title: "Professor",
    name: "Jane Doe",
    position: "Head of School",
    bio: "Dr Jane Doe is a Senior Lecturer specialising in behavioural science and wellbeing research. She teaches undergraduate and postgraduate courses, mentors research students, and collaborates on projects improving student mental health.",
    hasContact: true,
    email: "jane.doe@uq.edu.au",
    Phone: "+61 7 3000 0000",
    ctaUrl: "https://about.uq.edu.au/experts/1371",
    hasImage: true,
    image: "images/profile/profile.png",
  },
};

export const contactProfile = {
  args: {
    position: "Head of School",
    image: "images/profile/profile.png",
    ctaUrl: "",
  },
};

export const CallToAction = {
  args: {
    position: "Head of School",
    bio: "",
    email: "john.cairney@uq.edu.au",
    Phone: "",
    image: "images/profile/profile.png",
    ctaUrl: "",
  },
};

export const ExpertProfile = {
  args: {
    position: "",
    bio: "",
    hasContact: false,
    image: "images/profile/profile.png",
  },
};
