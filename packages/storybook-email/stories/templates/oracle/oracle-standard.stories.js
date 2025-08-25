export default {
  title: "Templates/Oracle",
  parameters: {
    story: {
      inline: false,
    },
  },
};

export const oracleStandard = {
  render: () => `
<!-- TOP WRAPPER -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"[]>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:rn="http://schemas.rightnow.com/crm/document" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" lang="en" xml:lang="en">
<head>
<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
<meta name="referrer" content="no-referrer" /><!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings> <o:AllowPNG /> <o:PixelsPerInch>96</o:PixelsPerInch> </o:OfficeDocumentSettings>
            </xml>
        <![endif]-->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<meta name="format-detection" content="date=no" />
<meta name="format-detection" content="address=no" />
<meta name="format-detection" content="telephone=no" />
<meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" />
<title>The University of Queensland</title>
<!--[if gte mso 9]>
            <style type="text/css" media="all">
                sup {
                    font-size: 100% !important;
                }
            </style>
        <![endif]-->
<!-- NON-OUTLOOK @import FONT CSS GOES HERE - BUGGY IN ORACLE -->
<link href="https://static.uq.net.au/v1/fonts/Roboto/roboto.css" rel="stylesheet" type="text/css" media="all" />
<style type="text/css">
            /*<![CDATA[*/
            body {
                padding: 0 !important;
                margin: 0 auto !important;
                display: block !important;
                min-width: 100% !important;
                width: 100% !important;
                background: #c7c7c7;
                -webkit-text-size-adjust: none;
            }
            a {
                color: #51247a;
                text-decoration: underline;
            }
            p {
                margin-left: 0 !important;
                margin-right: 0 !important;
            }
            img {
                margin: 0 !important;
                -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */
            }
            strong {
                font-weight: 700 !important;
            }
            .main-table div {
                background: transparent !important;
            }
            #MessageViewBody,
            #MessageWebViewDiv {
                width: 100% !important;
            } /* Samsung Galaxy Note 4 Samsung Mail - make email stay centered */

            a.skip-main {
                left: -999px;
                position: absolute;
                top: auto;
                width: 1px;
                height: 1px;
                overflow: hidden;
                z-index: -999;
            }
            a.skip-main:focus,
            a.skip-main:active {
                color: #ffffff;
                background-color: #ffffff;
                left: auto;
                top: auto;
                width: 30%;
                height: auto;
                overflow: auto;
                margin: 10px 35%;
                padding: 5px;
                border-radius: 15px;
                border: 4px solid yellow;
                text-align: center;
                font-size: 12em;
                z-index: 999;
            }
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                padding: 0 !important;
                margin: 0 !important;
                mso-line-height-rule: exactly;
                margin: 0;
            }

            .l-white a {
                color: #ffffff;
            }

            :root {
                color-scheme: light dark;
                supported-color-schemes: light dark;
            }

            @media (prefers-color-scheme: dark) {
                .title {
                    color: #ffffff !important;
                }
                .text {
                    color: #e8e8e8 !important;
                }
                a {
                    color: #c29fdf !important;
                }

                .c-white,
                .l-white a {
                    color: #ffffff !important;
                }

                .bg-purple {
                    background-color: #51247a !important;
                }
                .bg-grey-f7 {
                    background-color: #302c33 !important;
                }
                .bg-dgrey {
                    background-color: #19151c !important;
                }

            }

            [data-ogsc] .title {
                color: #ffffff !important;
            }
            [data-ogsc] .text {
                color: #e8e8e8 !important;
            }
            [data-ogsc] a {
                color: #c29fdf !important;
            }
            [data-ogsc] .c-white,
            [data-ogsc] .l-white a {
                color: #ffffff !important;
            }
            [data-ogsc] .bg-purple {
                background-color: #51247a !important;
            }
            [data-ogsc] .bg-grey-f7 {
                background-color: #302c33 !important;
            }
            [data-ogsc] .bg-dgrey {
                background-color: #19151c !important;
            }

            /* Mobile styles */
            @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
 
                body,
                .body {
                    background-color: #fffffe !important;
                }

                .fluid-img img {
                    width: 100% !important;
                    max-width: 100% !important;
                    height: auto !important;
                    max-height: auto !important;
                }

                .m-hide {
                    display: none !important;
                    width: 0 !important;
                    height: 0 !important;
                    font-size: 0 !important;
                    line-height: 0 !important;
                    min-height: 0 !important;
                }

                .mw-100p {
                    width: 100% !important;
                }
            }

            /*]]>*/
</style>
</head>

<body
    class="body bg-grey-c7"
    style="padding: 0 !important; margin: 0 !important; display: block !important; min-width: 100% !important; width: 100% !important; background: #c7c7c7; -webkit-text-size-adjust: none; background-color: #c7c7c7;"
>
    <center>
        <table class="main-table bg-grey-c7" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 0; padding: 0; width: 100%; height: 100%; background-color: #c7c7c7;" bgcolor="#C7C7C7">
            <tr>
                <td style="margin: 0; padding: 0; width: 100%; height: 100%;" align="center" valign="top">
                    <table class="m-hide" style="mso-hide: all;" width="100%" border="0" cellspacing="0" cellpadding="0">
                        <!-- Preview Text -->
                        <tr>
                            <td style="font-size: 0pt; line-height: 0pt;">Please review this message carefully.</td>
                        </tr>
                        <!-- END Preview Text -->
                        <!-- Fix -->
                        <tr>
                            <td style="font-size: 0pt; line-height: 0pt;">
                                <a class="skip-main" style="display: none; font-size: 0px; line-height: 0px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; visibility: hidden; mso-hide: all;" href="#main" aria-hidden="true">
                                    Skip to main content
                                </a>
                            </td>
                        </tr>
                        <!-- END Fix -->
                    </table>
                    <table class="mw-100p bg-dgrey" width="640" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff;">
                        <tr>
                            <td style="font-size: 0pt; line-height: 0pt;">
                            <!-- END TOP WRAPPER -->

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
                                                                    UQ Library
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

                                <!-- Divider - 24px -->
                                <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%;">
                                    <tr>
                                        <td>
                                            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                <tr>
                                                    <td style="font-size: 1px; line-height: 24px;" width="100%"></td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                </table>
                                <!-- END Divider - 24px -->

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
                                                                    <rn:tracklink link_id="85831" style="color: #51247a; text-decoration: underline; font-weight: normal;" target="_blank" title="Institution details">
                                                                        CRICOS 00025B
                                                                    </rn:tracklink>
                                                                    <rn:tracklink link_id="85832" style="color: #51247a; text-decoration: underline; font-weight: normal;" target="_blank" title="Institution details">
                                                                        TEQSA PRV12080
                                                                    </rn:tracklink>
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

                            <!-- BOTTOM WRAPPER -->
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>
<!-- END BOTTOM WRAPPER -->
`,
};
