import "@uqds/layout/src/scss/main.scss";

export default {
  title: "Components",
  tags: ["autodocs"],
};

export const header = {
  render: () => `
<!-- Header -->
<table border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247A;" width="100%">
    <tr>
        <td style="padding-top: 32px; padding-left: 24px; padding-right: 24px; padding-bottom: 32px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td class="img" style="font-size:0pt; line-height:0pt; text-align:left;" width="304"><a target="_blank" href="https://support.my.uq.edu.au/rd?1=AvMd~wq5Dv8S~xb~Gv8h~yLqu70pBS77Mv_r~z7~Pv9i&amp;2=85827"><img alt="The University of Queensland logo" height="42" src="https://content.app.uq.edu.au/axugymxgvs/oracle-template/uq-orac-logo.png" style="padding: 0px; text-align: center;" /></a></td>
                    <td class="text c-white l-white" style="font-family:'Roboto', Arial, sans-serif; font-size: 16px; line-height: 20px; text-align:right; color:#fffffe; padding-bottom: 10px;padding-left:20px;" width="316">View in browser</td>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- END Header -->    
`,
};
