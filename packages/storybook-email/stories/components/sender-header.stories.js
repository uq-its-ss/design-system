import "@uqds/layout/src/scss/main.scss";

export default {
  title: "Components",
  tags: ["autodocs"],
};

export const senderHeader = {
  render: () => `
<table border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247A;width:100%!important" width="100%">
  <tr>
    <td style="padding-top: 16px; padding-bottom: 16px; padding-left: 24px; padding-right: 24px;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%!important" width="100%">
        <tr>
          <td class="title c-white l-white" style="font-family:'Roboto', Arial, sans-serif; font-size: 20px; line-height: 24px; text-align:left; color:#ffffff;font-weight:bold;width:100%!important"><!-- Purple Intro Banner Primary Heading -->Academic Services<!-- END Purple Intro Banner Primary Heading --></td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`,
};
