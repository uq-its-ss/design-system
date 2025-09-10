import profile from "./profile.stories";

export default {
  title: "Components/Profile",
};

export const profileListing = {
  render: (args) => {
    return `<h2>Staff Listing using lists</h2>
    <ul class="uq-staff-listing">
      <li>
        ${profile.render(args)}
      </li>
      <li>
        ${profile.render({
          ...args,
          name: "Jane Doe",
          title: "Associate Professor",
          email: "jane.doe@uq.edu.au",
        })}
      </li>
            <li>
        ${profile.render(args)}
      </li>
            <li>
        ${profile.render(args)}
      </li>
    </ul>
    <h2>Staff Listing using divs</h2>
    <div class="uq-staff-listing">
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
