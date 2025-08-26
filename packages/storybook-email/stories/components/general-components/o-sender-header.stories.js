export default {
  title: "Components/General components",
  tags: ["autodocs"],
  argTypes: {
    title: "text",
  },
  args: {
    title: "Sender header",
  },
};

export const senderHeader = {
  render: ({
    title,
  }) => `
<!-- Sender Header -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="width: 100% !important; min-width: 100% !important;">
    <tr>
        <td>
            <table border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color: #51247a; width: 100% !important;" width="100%">
                <tr>
                    <td style="padding-top: 16px; padding-bottom: 16px; padding-left: 24px; padding-right: 24px;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100% !important;" width="100%">
                            <tr>
                                <td
                                    class="title c-white l-white"
                                    style="font-family: 'Roboto', Arial, sans-serif; font-size: 20px; line-height: 24px; text-align: left; color: #ffffff; font-weight: bold; width: 100% !important;"
                                >
                                    ${title}
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- END Sender Header -->
`,
};

export const senderHeaderGradient = {
  render: () => `
<!-- Sender Header -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="width: 100% !important; min-width: 100% !important;">
    <tr>
        <td>
            <table border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color: #51247a; width: 100% !important;" width="100%">
                <tr>
                    <td style="padding-top: 16px; padding-bottom: 16px; padding-left: 24px; padding-right: 24px;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100% !important;" width="100%">
                            <tr>
                                <td
                                    class="title c-white l-white"
                                    style="font-family: 'Roboto', Arial, sans-serif; font-size: 20px; line-height: 24px; text-align: left; color: #ffffff; width: 100% !important;"
                                >
                                    From the Deputy Vice-Chancellor (Academic)
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- END Sender Header -->
`,
};
