export default {
  title: "Components/General components",
  tags: ["autodocs"],
};

export const header = {
  render: () => `
<!-- UQ Header -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%;">
    <tr>
        <td>
            <table border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color: #51247a;" width="100%">
                <tr>
                    <td style="padding-top: 32px; padding-left: 24px; padding-right: 24px; padding-bottom: 32px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td class="img" style="font-size: 0pt; line-height: 0pt; text-align: left;" width="304">
                                    <rn:tracklink link_id="85827" target="_blank" title="The University of Queensland">
                                        <img
                                            alt="The University of Queensland logo"
                                            height="42"
                                            src="https://static.uq.net.au/v39/logos/corporate/uq-logo-email.png"
                                            style="padding: 0px; text-align: center;"
                                        />
                                    </rn:tracklink>
                                </td>
                                <td
                                    class="text c-white l-white"
                                    style="font-family: 'Roboto', Arial, sans-serif; font-size: 16px; line-height: 20px; text-align: right; color: #fffffe; padding-bottom: 10px; padding-left: 20px;"
                                    width="316"
                                >
                                    <rn:view target="_blank" style="color: #ffffff; text-decoration: underline;">View in browser</rn:view>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- END UQ Header -->
`,
};
