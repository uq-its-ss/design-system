export default {
  title: "Templates/Vision 6",
  parameters: {
    story: {
      inline: false,
    },
  },
};

export const vision6Standard = {
  render: () => `
<!-- TOP WRAPPER -->
<!--[if gte mso 9]>  <xml>   <o:OfficeDocumentSettings>   <o:AllowPNG/>   <o:PixelsPerInch>96</o:PixelsPerInch>   </o:OfficeDocumentSettings>  </xml>  <![endif]--><!--[if gte mso 9]>  <style type="text/css" media="all">   sup { font-size: 100% !important; }  </style>  <![endif]--><!--[if !mso]>
 <style type="text/css" media="all"> 
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
     span, td, table, div {
      font-family: 'Roboto', Arial, serif !important;
    }
   a {text-decoration: none;}
 </style>
 <!--<![endif]-->
<style type="text/css">body { padding:0 !important; margin:0 auto !important; display:block !important; min-width:100% !important; width:100% !important; background:#C7C7C7; -webkit-text-size-adjust:none }
  a { color:#51247A; text-decoration:underline }
  p { margin-left:0 !important;margin-right:0 !important; } 
  img { margin: 0 !important; -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
  strong { font-weight: 700 !important; }
  .main-table div { background: transparent !important; }
  #MessageViewBody, #MessageWebViewDiv { width: 100% !important; } /* Samsung Galaxy Note 4 Samsung Mail - make email stay centered */

   a.skip-main { left:-999px; position:absolute; top:auto; width:1px; height:1px; overflow:hidden; z-index:-999; }
   a.skip-main:focus, a.skip-main:active { color: #ffffff; background-color:#ffffff; left: auto; top: auto; width: 30%; height: auto; overflow:auto; margin: 10px 35%; padding:5px; border-radius: 15px; border:4px solid yellow; text-align:center; font-size:12em; z-index:999; }     
   h1, h2, h3, h4, h5, h6 { padding: 0 !important; margin: 0 !important; mso-line-height-rule:exactly; Margin: 0; }

  .btnp-9-20 a { display: inline-block; padding: 9px 20px; text-decoration: none; }

  .l-white a { color: #ffffff; }
  .l-lpurple a { color: #C29FDF; }
  .l-dpurple a { color: #51247A; }

  :root {
   Color-scheme: light dark;
   supported-color-schemes:light dark;
  }

  @media (prefers-color-scheme: dark ) {
    
   .title { color: #FFFFFF !important; }
   .text { color: #E8E8E8 !important; }
   a { color: #C29FDF !important; }

   .c-white, .l-white a { color: #FFFFFF !important; }
   .c-lpurple, .l-lpurple a { color: #C29FDF !important; }
   .c-dpurple, .l-dpurple a { color: #51247A !important; }

   .bg-white { background-color: #FFFFFF !important; }
   .bg-purple { background-color: #51247A !important; }
   .bg-grey { background-color: #3B383E !important; }
   .bg-grey-f7 { background-color: #302C33 !important; }
   .bg-dgrey { background-color: #19151C !important; }

   .bd-grey { border-color: #3B383E !important; }
   .bd-lpurple { border-color: #C29FDF !important; }
   .bd-dpurple { border-color: #51247A !important; }
  }
   
  [data-ogsc] .title { color: #FFFFFF !important; }
  [data-ogsc] .text { color: #E8E8E8 !important; }
  [data-ogsc] a { color: #C29FDF !important; }
   
  [data-ogsc] .c-white, .l-white a { color: #FFFFFF !important; }
  [data-ogsc] .c-lpurple, [data-ogsc] .l-lpurple a { color: #C29FDF !important; }
  [data-ogsc] .c-dpurple, [data-ogsc] .l-dpurple a { color: #51247A !important; }

  [data-ogsc] .bg-white { background-color: #FFFFFF !important; }
  [data-ogsc] .bg-purple { background-color: #51247A !important; }
  [data-ogsc] .bg-grey { background-color: #3B383E !important; }
  [data-ogsc] .bg-grey-f7 { background-color: #302C33 !important; }
  [data-ogsc] .bg-dgrey { background-color: #19151C !important; }

  [data-ogsc] .bd-grey { border-color: #3B383E !important; }
  [data-ogsc] .bd-lpurple { border-color: #C29FDF !important; }
  [data-ogsc] .bd-dpurple { border-color: #51247A !important; }

  /* Mobile styles */
  @media only screen and (max-device-width: 480px), only screen and (max-width: 480px) {
   .mpb-8 { padding-bottom: 8px !important; }

   .mpb-10 { padding-bottom: 10px !important; }

   .mpb-20 { padding-bottom: 20px !important; }

   .mpx-20 { padding-left: 20px !important; padding-right: 20px !important; }

   .mpt-30 { padding-top: 30px !important; }

   .mpb-25 { padding-bottom: 25px !important; }

   .mpb-21 { padding-bottom: 21px !important; }

   .mpt-20 { padding-top: 20px !important; }

   .mpx-0 { padding-left: 0px !important; padding-right: 0px !important; }

   .mpt-0 { padding-top: 0px !important; }

   .mfz-12 { font-size: 12px !important; }

   .mlh-16 { line-height: 16px !important; }

   .mpb-32 { padding-bottom: 32px !important; }

   .mpb-18 { padding-bottom: 18px !important; }

   .mpx-25 { padding-left: 25px !important; padding-right: 25px !important; }

   .mmpx-32 { padding-left: 32px !important; padding-right: 32px !important; }

   body, .body { background-color: #fffffe !important; }
   
   .mt-left { text-align: left !important; }
   .mt-center { text-align: center !important; }
   .mt-right { text-align: right !important; }
   
   .me-left { margin-right: auto !important; }
   .me-center { margin: 0 auto !important; }
   .me-right { margin-left: auto !important; }

   .mh-auto { height: auto !important; }
   .mw-auto { width: auto !important; }

   .fluid-img img { width: 100% !important; max-width: 100% !important; height: auto !important; max-height: auto !important; }

   .column,
   .column-top,
   .column-dir,
   .column-dir-top { float: left !important; width: 100% !important; display: block !important; }

   .m-hide { display: none !important; width: 0 !important; height: 0 !important; font-size: 0 !important; line-height: 0 !important; min-height: 0 !important; }
   .m-block { display: block !important; }

   .mw-20 { width: 20px !important; }
   .mw-182 { width: 182px !important; }

   .mw-2p { width: 2% !important; }
   .mw-32p { width: 32% !important; }
   .mw-49p { width: 49% !important; }
   .mw-50p { width: 50% !important; }
   .mw-100p { width: 100% !important; }
  }

  @media screen and (max-device-width: 365px), only screen and (max-width: 365px) {
   .mmpx-32 { padding-left: 10px !important; padding-right: 10px !important; }
  }
</style>
<center>
    <table bgcolor="#d1d0d2" border="0" cellpadding="0" cellspacing="0" class="bg-grey-c7 main-table" style="background-color:#d1d0d2; height:100%; margin:0; padding:0" width="100%">
        <tbody>
            <tr>
                <td align="center" style="height:100%; margin:0; padding:0" valign="top" width="100%">
                    <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="bg-dgrey mw-100p" style="background-color:#ffffff" width="640">
                        <tbody>
                            <tr>
                                <td style="font-size:0pt; line-height:0pt">
                                <!-- END TOP WRAPPER -->

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

                                    <!-- Sender Header -->
                                    <table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%" width="100%">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table bgcolor="#51247a" border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247a" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td style="padding-bottom:16px; padding-top:16px">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="left" class="c-white l-white title" style="color:#ffffff; font-family:Roboto,Arial,sans-serif; font-size:20px; font-weight:bold; line-height:24px; padding-left:24px" width="616">
                                                                            <div>Sender header</div>
                                                                            </td>
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
                                    <!-- END Sender Header -->

                                    <!-- Divider - 24px -->
                                    <table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%" width="100%">
                                        <tbody>
                                            <tr>
                                                <td>
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td style="font-size:1px; line-height:24px" width="111">&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- END Divider - 24px -->

                                    <!-- Email Body Content -->
                                    <table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%" width="100%">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td class="mpx-20" style="padding-left:24px; padding-right:24px">
                                                                    <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="text" style="color:#3b383e; font-family:Roboto,Arial,sans-serif; font-size:16px; line-height:26px; padding-bottom:20px; padding-top:24px">
                                                                                    <p style="font-size:24px; line-height:29px; margin-bottom:0px; margin-top:0px"><b>Email headline</b></p>

                                                                                    <p style="margin-bottom:0px; margin-top:10px">Email description (optional)</p>

                                                                                    <p>Dear student,<br>
                                                                                    <br>
                                                                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                                                                                    <p style="font-size:24px; line-height:29px; margin-bottom:0px"><b>Heading - 24px</b></p>

                                                                                    <p style="font-size:18px; line-height:22px; margin-bottom:25px; margin-top:8px"><b>Sub heading - 18px</b></p>
                                                                                    
                                                                                    <!-- Button -->
                                                                                    <table bgcolor="#51247a" border="0" cellpadding="0" cellspacing="0" style="background-color:#51247a; border-radius:4px">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="btn c-white l-white" style="color:#ffffff; font-family:Roboto,Arial,sans-serif; font-size:16px; line-height:18px; padding:16px 24px"><a class="link" href="https://www.uq.edu.au/" rel="noreferrer noopener" style="text-decoration: none;color: #fffffe;" target="_blank" title="Primary button">Primary button</a></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                    <!-- END Button -->
                                                                                </td>
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
                                    <!-- END Email Body Content -->

                                    <!-- Divider - 48px -->
                                    <table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%" width="100%">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td style="font-size:1px; line-height:48px" width="111">&nbsp;</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <!-- END Divider - 48px -->

                                    <!-- Contact Banner -->
                                    <table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%" width="100%">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table bgcolor="#51247a" border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247a" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td class="mpb-24 mpt-24 mpx-24" style="padding-bottom:24px; padding-left:24px; padding-right:24px; padding-top:24px" width="592">
                                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td align="left" class="c-white l-white title" style="color:#f3f3f4; font-family:Roboto,Arial,sans-serif; font-size:20px; font-weight:bold; line-height:32px; padding-bottom:20px">Contact {Sender name}</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left" class="c-white l-white text" style="color:#f3f3f4; font-family:Roboto,Arial,sans-serif; font-size:16px; line-height:20px; padding-bottom:12px" valign="top">Monday to Friday 8:30am–4:30pm AEST</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left" class="c-white l-white text" style="color:#f3f3f4; font-family:Roboto,Arial,sans-serif; font-size:16px; line-height:20px; padding-bottom:12px" valign="top"><a class="link c-white" href="mailto:email@uq.edu.au" rel="noreferrer noopener" style="text-decoration: underline;color: #fffffe;" target="_blank" title="Email us">email@uq.edu.au</a></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left" class="c-white l-white text" style="color:#f3f3f4; font-family:Roboto,Arial,sans-serif; font-size:16px; line-height:20px; padding-bottom:30px" valign="top"><a class="link c-white" href="tel:+61 7 0000 0000" rel="noreferrer noopener" style="text-decoration: underline;color: #fffffe;" target="_blank">+61 7 0000 0000</a></td>
                                                                            </tr>
                                                                            <tr>
                                                                                <td align="left" class="column-dir-top" style="font-size:0pt; font-weight:normal; line-height:0pt; margin:0; padding:0" valign="top">
                                                                                    <!-- Socials -->
                                                                                    <table border="0" cellpadding="0" cellspacing="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="left" class="img" style="font-size:0pt; line-height:0pt"><a href="https://www.facebook.com/uniofqld" rel="noreferrer noopener" target="_blank" title="Facebook"><img alt="Facebook" height="32" src="https://static.uq.net.au/v38/images/social/social-facebook-circle.png" style="padding:0px; text-align:center" width="32"></a></td>
                                                                                                <td class="mw-20" style="font-size:0pt; line-height:0pt" width="16">&nbsp;</td>
                                                                                                <td align="left" class="img" style="font-size:0pt; line-height:0pt"><a href="https://www.linkedin.com/school/university-of-queensland" rel="noreferrer noopener" target="_blank" title="Linkedin"><img alt="Linkedin" height="32" src="https://static.uq.net.au/v38/images/social/social-linkedin-circle.png" style="padding:0px; text-align:center" width="32"></a></td>
                                                                                                <td class="mw-20" style="font-size:0pt; line-height:0pt" width="16">&nbsp;</td>
                                                                                                <td align="left" class="img" style="font-size:0pt; line-height:0pt"><a href="https://x.com/uq_news" rel="noreferrer noopener" target="_blank" title="X"><img alt="X, formerly known as Twitter" height="32" src="https://static.uq.net.au/v38/images/social/social-x-circle.png" style="padding:0px; text-align:center" width="32"></a></td>
                                                                                                <td class="mw-20" style="font-size:0pt; line-height:0pt" width="16">&nbsp;</td>
                                                                                                <td align="left" class="img" style="font-size:0pt; line-height:0pt"><a href="https://www.youtube.com/user/universityqueensland" rel="noreferrer noopener" target="_blank" title="Youtube"><img alt="Youtube" height="32" src="https://static.uq.net.au/v38/images/social/social-youtube-circle.png" style="padding:0px; text-align:center" width="32"></a></td>
                                                                                                <td class="mw-20" style="font-size:0pt; line-height:0pt" width="16">&nbsp;</td>
                                                                                                <td align="left" class="img" style="font-size:0pt; line-height:0pt"><a href="https://www.instagram.com/uniofqld" rel="noreferrer noopener" target="_blank" title="Instagram"><img alt="Instagram" height="32" src="https://static.uq.net.au/v38/images/social/social-instagram-circle.png" style="padding:0px; text-align:center" width="32"></a></td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                    <!-- END Socials -->
                                                                                </td>
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
                                    <!-- END Contact Banner -->

                                    <!-- Footer -->
                                    <table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%" width="100%">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="bg-dgrey" style="background-color:#ffffff" width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td class="mpx-25" style="padding-bottom:20px; padding-left:24px; padding-right:24px; padding-top:24px">
                                                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align="left" class="text" style="color:#3b383e; font-family:Roboto,Arial,sans-serif; font-size:18px; line-height:29px; padding-bottom:20px">
                                                                            <div>UQ acknowledges the Traditional Owners and their custodianship of the lands on which UQ is situated. <a href="https://about.uq.edu.au/reconciliation" rel="noreferrer noopener" style="text-decoration: underline;color: #51247a;" target="_blank" title="Reconciliation at UQ"><span style="font-weight:normal">Reconciliation at UQ</span></a></div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align="left" class="text" style="color:#000001; font-family:Roboto,Arial,sans-serif; font-size:16px; line-height:26px; padding-bottom:20px">
                                                                            <div>The University of Queensland, St Lucia Qld 4072 Australia<br>
                                                                            <a href="https://cricos.education.gov.au/Institution/InstitutionDetails.aspx?ProviderCode=00025B" rel="noreferrer noopener" style="text-decoration: underline;color: #51247a;" target="_blank" title="Institution details"><span style="font-weight:normal">CRICOS 00025B</span></a>&nbsp;&nbsp; | &nbsp;&nbsp; <a href="https://www.teqsa.gov.au/provider/university-queensland" rel="noreferrer noopener" style="text-decoration: underline;color: #51247a;" target="_blank" title="Institution details"><span style="font-weight:normal">TEQSA PRV12080</span></a><br>
                                                                            <br>
                                                                            Read <a href="https://policies.uq.edu.au/document/view-current.php?id=480" rel="noreferrer noopener" style="text-decoration: underline;color: #51247a;" target="_blank" title="UQ Privacy Policy">UQ's Privacy Policy</a></div>
                                                                            </td>
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
                                    <!-- END Footer -->

                                    <!-- BOTTOM WRAPPER -->
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</center>
<!-- END BOTTOM WRAPPER -->
`,
};
