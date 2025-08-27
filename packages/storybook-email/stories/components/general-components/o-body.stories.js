export default {
  title: "Components/General components",
  tags: ["autodocs"],
};

export const body = {
  render: () => `
<!-- Body Text Block -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="background-color: transparent; min-width: 100%;">
    <tr>
        <td style="padding: 24px 24px 40px 24px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td>
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tr>
                                <td class="text" style="color: #3b383e; font-family: 'Roboto', Arial, sans-serif; font-size: 16px; line-height: 26px; text-align: left;">
                                    <!-- Body Text -->
                                    <rn:content_here></rn:content_here>
                                    <!-- END Body Text -->
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- END Body Text Block -->
`,
  name: "Body",
};
