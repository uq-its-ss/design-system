import { layoutDecorator } from "../../../lib/decorators";
import "@uqds/layout/src/scss/main.scss";

export default {
  title: "Components/Contact",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: `<div class="uqds-layout-demo-el"></div>`,
  },
  decorators: [layoutDecorator],
};

export const ContactDomestic = {
  render: () => `


<!-- Contact Banner -->
<table border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color: #51247a;" width="100%">
    <tr>
        <td class="pt-24 pb-36 px-24 mpt-24 mpb-24 mpx-24" style="padding-top: 24px; padding-bottom: 24px; padding-left: 24px; padding-right: 24px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td class="title fz-18 lh-22 c-white l-white" style="font-weight: bold; font-family: 'Roboto', Arial, sans-serif; text-align: left; font-size: 24px; line-height: 30px; color: #f3f3f4; padding-bottom: 20px;">
                        Get in touch with us
                    </td>
                </tr>
                <tr>
                    <td class="text fz-18 lh-20 c-white l-white" style="font-family: 'Roboto', Arial, sans-serif; font-size: 18px; line-height: 20px; text-align: left; color: #f3f3f4; padding-bottom: 12px;" valign="top">
                        <a
                            alias="TEXT-enquiry"
                            class="link c-white"
                            conversion="false"
                            data-linkto="https://"
                            href="https://study.uq.edu.au/contact/enquiry"
                            style="text-decoration: underline; color: #fffffe;"
                            target="_blank"
                            title="Submit Enquiry"
                        >
                            Send us an enquiry
                        </a>
                    </td>
                </tr>
                <tr>
                    <td class="text fz-18 lh-20 c-white l-white" style="font-family: 'Roboto', Arial, sans-serif; font-size: 18px; line-height: 20px; text-align: left; color: #f3f3f4; padding-bottom: 12px;" valign="top">
                        <a class="link c-white" href="tel:+61 733469872" style="text-decoration: underline; color: #fffffe;" target="_blank">+61 7 3346 9872</a>
                    </td>
                </tr>
                <tr>
                    <td class="text fz-18 lh-20 c-white l-white" style="font-family: 'Roboto', Arial, sans-serif; font-size: 18px; line-height: 20px; text-align: left; color: #f3f3f4; padding-bottom: 30px;" valign="top">
                        <a class="link c-white" href="https://www.uq.edu.au/" style="text-decoration: underline; color: #fffffe;" target="_blank">uq.edu.au</a>
                    </td>
                </tr>
                <tr>
                    <th class="column-dir-top" style="font-size: 0pt; line-height: 0pt; padding: 0; margin: 0; font-weight: normal; direction: ltr; vertical-align: top; text-align: left;" width="185">
                        <!-- Socials -->
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="img" style="font-size: 0pt; line-height: 0pt; text-align: left;">
                                    <a alias="ICON_facebook" conversion="true" data-linkto="https://" href="https://www.facebook.com/uniofqld" target="_blank" title="Facebook">
                                        <img
                                            alt="Facebook"
                                            data-assetid="234101"
                                            height="32"
                                            src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/dab272e1-4a73-4075-a9a1-fce4bd121725.png"
                                            style="height: 32px; width: 32px; padding: 0px; text-align: center;"
                                            width="32"
                                        />
                                    </a>
                                </td>
                                <td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
                                    &nbsp;
                                </td>
                                <td class="img" style="font-size: 0pt; line-height: 0pt; text-align: left;">
                                    <a alias="ICON-linkedin" conversion="true" data-linkto="https://" href="https://www.linkedin.com/school/university-of-queensland/" target="_blank" title="Linkedin">
                                        <img
                                            alt="Linkedin"
                                            data-assetid="177239"
                                            height="32"
                                            src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/39271ee0-141e-4c24-a3d9-c5adbb4c03e8.png"
                                            style="height: 32px; width: 32px; padding: 0px; text-align: center;"
                                            width="32"
                                        />
                                    </a>
                                </td>
                                <td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
                                    &nbsp;
                                </td>
                                <td class="img" style="font-size: 0pt; line-height: 0pt; text-align: left;">
                                    <a alias="ICON-x-logo" conversion="true" data-linkto="https://" href="https://x.com/uq_news" target="_blank" title="X">
                                        <img
                                            alt="X, formerly known as Twitter"
                                            data-assetid="177234"
                                            height="32"
                                            src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/ee2c24c9-4c2c-4171-b0d3-c4f56b2b0358.png"
                                            style="height: 32px; width: 32px; padding: 0px; text-align: center;"
                                            width="32"
                                        />
                                    </a>
                                </td>
                                <td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
                                    &nbsp;
                                </td>
                                <td class="img" style="font-size: 0pt; line-height: 0pt; text-align: left;">
                                    <a alias="ICON-youtube" conversion="true" data-linkto="https://" href="https://www.youtube.com/user/universityqueensland" target="_blank" title="Youtube">
                                        <img
                                            alt="Youtube"
                                            data-assetid="177231"
                                            height="32"
                                            src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/66a16759-bf45-4062-bd4e-6781527d77d7.png"
                                            style="height: 32px; width: 32px; padding: 0px; text-align: center;"
                                            width="32"
                                        />
                                    </a>
                                </td>
                                <td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
                                    &nbsp;
                                </td>
                                <td class="img" style="font-size: 0pt; line-height: 0pt; text-align: left;">
                                    <a alias="ICON-instagram" conversion="true" data-linkto="https://" href="https://instagram.com/uniofqld/" target="_blank" title="Instagram">
                                        <img
                                            alt="Instagram"
                                            data-assetid="177236"
                                            height="32"
                                            src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/cfddad1c-b608-4a89-bf15-567129ddec01.png"
                                            style="height: 32px; width: 32px; padding: 0px; text-align: center;"
                                            width="32"
                                        />
                                    </a>
                                </td>
                                <td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
                                    &nbsp;
                                </td>
                                <td class="img" style="font-size: 0pt; line-height: 0pt; text-align: left;">
                                    <a alias="ICON-tiktok" conversion="true" data-linkto="https://" href="https://www.tiktok.com/@uniofqld" target="_blank" title="TikTok">
                                        <img
                                            alt="TikTok"
                                            data-assetid="177236"
                                            height="32"
                                            src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/da1fc854-daef-4538-aeda-e1de93253627.png"
                                            style="height: 32px; width: 32px; padding: 0px; text-align: center;"
                                            width="32"
                                        />
                                    </a>
                                </td>
                            </tr>
                        </table>
                        <!-- END Socials -->
                    </th>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- END Contact Banner -->


    
`,
};

export const ContactInternational = {
  render: () => `

<!-- Contact Banner -->
<table border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color: #51247a;" width="100%">
    <tr>
        <td class="pt-24 pb-36 px-24 mpt-24 mpb-24 mpx-24" style="padding-top: 24px; padding-bottom: 24px; padding-left: 24px; padding-right: 24px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td class="title fz-18 lh-22 c-white l-white" style="font-weight: bold; font-family: 'Roboto', Arial, sans-serif; text-align: left; font-size: 24px; line-height: 30px; color: #f3f3f4; padding-bottom: 20px;">
                        Get in touch with us
                    </td>
                </tr>
                <tr>
                    <td class="text fz-18 lh-20 c-white l-white" style="font-family: 'Roboto', Arial, sans-serif; font-size: 18px; line-height: 20px; text-align: left; color: #f3f3f4; padding-bottom: 12px;" valign="top">
                        <a
                            alias="TEXT-enquiry"
                            class="link c-white"
                            conversion="false"
                            data-linkto="https://"
                            href="https://study.uq.edu.au/contact/enquiry"
                            style="text-decoration: underline; color: #fffffe;"
                            target="_blank"
                            title="Submit Enquiry"
                        >
                            Send us an enquiry
                        </a>
                    </td>
                </tr>
                <tr>
                    <td class="text fz-18 lh-20 c-white l-white" style="font-family: 'Roboto', Arial, sans-serif; font-size: 18px; line-height: 20px; text-align: left; color: #f3f3f4; padding-bottom: 12px;" valign="top">
                        <a class="link c-white" href="tel:+61 733469872" style="text-decoration: underline; color: #fffffe;" target="_blank">+61 7 3346 9872</a>
                    </td>
                </tr>
                <tr>
                    <td class="text fz-18 lh-20 c-white l-white" style="font-family: 'Roboto', Arial, sans-serif; font-size: 18px; line-height: 20px; text-align: left; color: #f3f3f4; padding-bottom: 30px;" valign="top">
                        <a class="link c-white" href="https://www.uq.edu.au/" style="text-decoration: underline; color: #fffffe;" target="_blank">uq.edu.au</a>
                    </td>
                </tr>
                <tr>
                    <th class="column-dir-top" style="font-size: 0pt; line-height: 0pt; padding: 0; margin: 0; font-weight: normal; direction: ltr; vertical-align: top; text-align: left;" width="185">
                         <!-- Socials -->
                        <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                                <td class="img" style="font-size: 0pt; line-height: 0pt; text-align: left;">
                                    <a alias="ICON_facebook" conversion="true" data-linkto="https://" href="https://www.facebook.com/uniofqld" target="_blank" title="Facebook">
                                        <img
                                            alt="Facebook"
                                            data-assetid="234101"
                                            height="32"
                                            src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/dab272e1-4a73-4075-a9a1-fce4bd121725.png"
                                            style="height: 32px; width: 32px; padding: 0px; text-align: center;"
                                            width="32"
                                        />
                                    </a>
                                </td>
                                <td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
                                    &nbsp;
                                </td>
                                <td class="img" style="font-size: 0pt; line-height: 0pt; text-align: left;">
                                    <a alias="ICON-linkedin" conversion="true" data-linkto="https://" href="https://www.linkedin.com/school/university-of-queensland/" target="_blank" title="Linkedin">
                                        <img
                                            alt="Linkedin"
                                            data-assetid="177239"
                                            height="32"
                                            src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/39271ee0-141e-4c24-a3d9-c5adbb4c03e8.png"
                                            style="height: 32px; width: 32px; padding: 0px; text-align: center;"
                                            width="32"
                                        />
                                    </a>
                                </td>
                                <td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
                                    &nbsp;
                                </td>
                                <td class="img" style="font-size: 0pt; line-height: 0pt; text-align: left;">
                                    <a alias="ICON-youtube" conversion="true" data-linkto="https://" href="https://www.youtube.com/user/universityqueensland" target="_blank" title="Youtube">
                                        <img
                                            alt="Youtube"
                                            data-assetid="177231"
                                            height="32"
                                            src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/66a16759-bf45-4062-bd4e-6781527d77d7.png"
                                            style="height: 32px; width: 32px; padding: 0px; text-align: center;"
                                            width="32"
                                        />
                                    </a>
                                </td>
                                <td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
                                    &nbsp;
                                </td>
                                <td class="img" style="font-size: 0pt; line-height: 0pt; text-align: left;">
                                    <a alias="ICON-instagram" conversion="true" data-linkto="https://" href="https://instagram.com/uniofqld/" target="_blank" title="Instagram">
                                        <img
                                            alt="Instagram"
                                            data-assetid="177236"
                                            height="32"
                                            src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/cfddad1c-b608-4a89-bf15-567129ddec01.png"
                                            style="height: 32px; width: 32px; padding: 0px; text-align: center;"
                                            width="32"
                                        />
                                    </a>
                                </td>
                                <td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
                                    &nbsp;
                                </td>
                                <td class="img" style="font-size: 0pt; line-height: 0pt; text-align: left;">
                                    <a alias="ICON-tiktok" conversion="true" data-linkto="https://" href="https://www.tiktok.com/@uniofqld" target="_blank" title="TikTok">
                                        <img
                                            alt="TikTok"
                                            data-assetid="177236"
                                            height="32"
                                            src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/da1fc854-daef-4538-aeda-e1de93253627.png"
                                            style="height: 32px; width: 32px; padding: 0px; text-align: center;"
                                            width="32"
                                        />
                                    </a>
                                </td>
                                <td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
                                    &nbsp;
                                </td>
                                <td class="img" style="font-size: 0pt; line-height: 0pt; text-align: left;">
                                    <a alias="ICON-weibo" conversion="true" data-linkto="https://" href="https://weibo.com/myuq" target="_blank" title="Weibo">
                                        <img
                                            alt="Weibo"
                                            data-assetid="177236"
                                            height="32"
                                            src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/92b0da4c-07a5-4026-9974-a599c4cfefa6.png"
                                            style="height: 32px; width: 32px; padding: 0px; text-align: center;"
                                            width="32"
                                        />
                                    </a>
                                </td>
                                <td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
                                    &nbsp;
                                </td>
                                <td class="img" style="font-size: 0pt; line-height: 0pt; text-align: left;">
                                    <a alias="ICON-rednote" conversion="true" data-linkto="https://" href="https://www.xiaohongshu.com/user/profile/6731e8d1000000001d02f433" target="_blank" title="RedNote">
                                        <img
                                            alt="RedNote"
                                            data-assetid="177236"
                                            height="32"
                                            src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/24fe891d-eccf-426b-b320-7a111166c445.png"
                                            style="height: 32px; width: 32px; padding: 0px; text-align: center;"
                                            width="32"
                                        />
                                    </a>
                                </td>
                            </tr>
                        </table>
                        <!-- END Socials -->
                    </th>
                </tr>
            </table>
        </td>
    </tr>
</table>
<!-- END Contact Banner -->

`,
};
