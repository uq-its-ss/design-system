import "@uqds/avatar/src/scss/main.scss";

export default {
  title: "Components/Avatar",
  argTypes: {
    userName: {
      control: "text",
    },
    userAvatar: {
      name: "Image src",
      control: "select",
      options: ["none", "images/hero/hero-example--small.jpg"],
    },
  },
  args: {
    userName: "Ulrik Wisløff",
    userAvatar: "none",
  },
  render: ({ userName, userAvatar }) => {
    return `

      <div class="uq-avatar">
        ${userAvatar !== "none" ? `<img src="${userAvatar}" alt="Avatar of ${userName}" />` : ""}
      </div>
    `;
  },
};

export const avatar = {};
