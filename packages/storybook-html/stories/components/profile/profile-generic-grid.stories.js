import profile from "./profile.stories";

export default {
  title: "Components/Profile/Profile List Examples",
};

export const profileGenericGrid = {
  render: (args) => {
    return `
    <h2>Profile using Generic grid 2x</h2>

    <div class="generic-grid generic-grid--2x">
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
    
    <h2>Profile using Generic grid</h2>

    <div class="generic-grid">
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
