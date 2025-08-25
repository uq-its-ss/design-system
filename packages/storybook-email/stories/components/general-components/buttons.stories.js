export default {
  title: "Components/General components",
  tags: ["autodocs"],
};

export const buttonPrimary = {
  render: () => `
<!-- Purple Button -->
<table role="presentation" cellspacing="0" cellpadding="0" width="100%" border="0">
  <tbody>
    <tr>
      <td>
        <table style="BACKGROUND-COLOR: #51247a; border-radius: 4px" cellspacing="0" cellpadding="0" border="0">
          <tbody>
            <tr>
              <td class="btn btnp-9-20 fz-14 lh-18 c-white l-white" style="FONT-SIZE: 16px; FONT-FAMILY: 'Roboto', Arial, sans-serif; COLOR: #ffffff; TEXT-ALIGN: center; LINE-HEIGHT: 18px; mso-padding-alt: 16px 24px">
              <p><a title="Primary button" class="link" style="TEXT-DECORATION: none; COLOR: #fffffe; PADDING-BOTTOM: 4px; PADDING-TOP: 4px; PADDING-LEFT: 24px; DISPLAY: block; PADDING-RIGHT: 24px" href="ADD BUTTON URL HERE" target="_blank">Primary button</a></p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
<!-- END Button -->
`,
};

export const buttonSecondary = {
  render: () => `
<!-- Button -->
<tr>
  <td>
    <table border="0" cellpadding="0" cellspacing="0" class="bd-lpurple" style="border-radius: 4px;border-color:#51247A;border-width:2px;border-style:solid">
      <tr>
        <td class="btn btnp-9-20 fz-14 lh-18 c-lpurple l-lpurple" style="font-family:'Roboto', Arial, sans-serif; text-align:center; mso-padding-alt:16px 24px; font-size: 16px; line-height: 18px; color:#ffffff;">
        <p><a href="#" class="link" style="color:#51247A;text-decoration:none;display: block; padding: 4px 24px;" target="_blank" title="Secondary button">Secondary button</a></p>
        </td>
      </tr>
    </table>
  </td>
</tr>
<!-- END Button -->
`,
};
