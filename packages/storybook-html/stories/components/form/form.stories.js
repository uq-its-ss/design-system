export default {
  title: "Components/Form",
  parameters: {
    previewTabs: {
      canvas: {
        hidden: false,
      },
    },
  },
  render: () => {
    return `
    <div>
      <div class="uq-form">
        <form>
          <fieldset>
            <div>
              <label for="full-name">Full name</label>
              <input id="full-name" type="text" name="full-name" placeholder="Enter your full name">
            </div>

            <div>
              <label for="email-address">Email address</label>
              <input id="email-address" type="email" name="email-address" placeholder="name@example.com">
            </div>

            <div>
              <label for="course">Course</label>
              <select id="course" name="course">
                <option value="">Select a course</option>
                <option value="bachelor-of-commerce">Bachelor of Commerce</option>
                <option value="bachelor-of-engineering">Bachelor of Engineering</option>
                <option value="bachelor-of-science">Bachelor of Science</option>
              </select>
            </div>

            <div>
              <label for="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Tell us about your enquiry"></textarea>
            </div>
          </fieldset>

          <fieldset>
            <legend>Preferred contact method</legend>
            <label class="uq-label--inline">
              <input type="radio" name="contact-method" value="email" checked>
              <span>Email</span>
            </label>
            <label class="uq-label--inline">
              <input type="radio" name="contact-method" value="phone">
              <span>Phone</span>
            </label>
          </fieldset>

          <label class="uq-label--inline">
            <input type="checkbox" name="consent" checked>
            <span>I agree to be contacted about this enquiry</span>
          </label>

          <button type="submit" class="uq-button">Submit</button>
        </form>
      </div>
    </div>
    `;
  },
};

export const Default = {};
