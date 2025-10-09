import profile from "./profile.stories";

export default {
  title: "Components/Profile/Profile List Examples",
};

export const profileCardGrid = {
  render: (args) => {
    return `<h2>Profile using Card grid</h2>

    <div class="uq-card-grid uq-card-grid--target-2x">
      <div>
        ${profile.render(args)}
      </div>
      <div>
        ${profile.render({
          ...args,
          name: "Jane Doe",
          title: "Associate Professor",
          email: "jane.doe@uq.edu.au",
        })}
      </div>
      <div>
        ${profile.render(args)}
      </div>
      <div>
        ${profile.render(args)}
      </div>
    </div>
    `;
  },
  args: { ...profile.args },
};
