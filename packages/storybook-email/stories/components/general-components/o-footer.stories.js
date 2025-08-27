export default {
  title: "Components/General components",
  tags: ["autodocs"],
};

export const footerStandard = {
  render: () => `
<!-- Footer -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%;">
    <tr>
        <td>
            <table border="0" cellpadding="0" cellspacing="0" class="bg-dgrey" style="background-color: #ffffff;" width="100%">
                <tr>
                    <td style="padding-top: 24px; padding-bottom: 20px; padding-left: 25px; padding-right: 25px;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tr>
                                <td class="text" style="color: #3b383e; font-family: 'Roboto', Arial, sans-serif; font-size: 18px; line-height: 29px; text-align: left; padding-bottom: 20px;">
                                    UQ acknowledges the Traditional Owners and their custodianship of the lands on which UQ is situated.
                                    <rn:tracklink link_id="85830" style="color: #51247a; text-decoration: underline; font-weight: normal;" target="_blank" title="Reconciliation at UQ">
                                        Reconciliation at UQ
                                    </rn:tracklink>
                                </td>
                            </tr>
                            <tr>
                                <td class="text" style="color: #3b383e; font-family: 'Roboto', Arial, sans-serif; font-size: 16px; line-height: 26px; text-align: left; padding-bottom: 20px;">
                                    The University of Queensland, St&#160;Lucia Qld 4072 Australia<br />
                                    <rn:tracklink link_id="85831" style="color: #51247a; text-decoration: underline; font-weight: normal;" target="_blank" title="Institution details">CRICOS 00025B</rn:tracklink>
                                    &#160;&#160;|&#160;&#160;
                                    <rn:tracklink link_id="85832" style="color: #51247a; text-decoration: underline; font-weight: normal;" target="_blank" title="Institution details">TEQSA PRV12080</rn:tracklink>
                                </td>
                            </tr>
                            <tr>
                                <td class="text" style="color: #3b383e; font-family: 'Roboto', Arial, sans-serif; font-size: 16px; line-height: 26px; text-align: left; padding-bottom: 10px;">
                                    Read
                                    <rn:tracklink link_id="89403" style="color: #51247a; text-decoration: underline; font-weight: normal;" title="Click to see our privacy policy">
                                        UQ's Privacy policy
                                    </rn:tracklink>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- END Footer -->
`,
  name: "Standard footer",
};
