export default {
  title: "Components/Vision6 components",
  tags: ["autodocs"],
  parameters: {
    story: {
      inline: false,
    },
  },
};

export const Header = {
  render: () => `
<!-- UQ Header -->
<table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%" width="100%">
    <tbody>
        <tr>
            <td>
                <table bgcolor="#51247a" border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247a" width="100%">
                    <tbody>
                        <tr>
                            <td style="padding-bottom:32px; padding-top:32px">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        <td align="left" class="img" style="font-size:0pt; line-height:0pt; padding-left:30px" width="190"><a href="https://www.uq.edu.au" rel="noreferrer noopener" target="_blank" title="The University of Queensland"><img alt="The University of Queensland logo" height="42" src="https://static.uq.net.au/v39/logos/corporate/uq-logo-email.png" style="padding:0px; text-align:center" width="160"></a></td>
                                        <td align="right" class="c-white l-white text" style="color:#fffffe; font-family:Roboto,Arial,sans-serif; font-size:16px; line-height:20px; padding-bottom:10px; padding-left:10px; padding-right:30px" width="450"><a href="%%email_link%%" style="text-decoration: underline;color: #fffffe;"><span style="font-weight:normal">View in browser</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
<!-- END UQ Header -->
`,
};
