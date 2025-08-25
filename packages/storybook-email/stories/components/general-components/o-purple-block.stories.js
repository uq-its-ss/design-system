export default {
  title: "Components/General components",
  tags: ["autodocs"],
};

export const purpleBlock = {
  render: () => `
<!-- Purple block -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="width: 100% !important; min-width: 100% !important;">
    <tr>
        <td>
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="width: 100% !important;">
                <tr>
                    <td style="font-size: 1pt; line-height: 1pt; height: 80px; background-color: #51247a; width: 100% !important;">&#160;</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- END Purple block -->
`,
};

export const purpleBlockGradient = {
  render: () => `
<!-- Purple Gradient Block -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; ">
    <tr>
        <td>
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:center;background-color:#51247a;"><img alt="Gradient banner" src="https://static.uq.net.au/latest/images/email/gradient-footer.png" height="80" width="auto" style="height: 80px; width: 100%; padding: 0px; text-align: center;" /></td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- END Purple Gradient Block -->

`,
};
