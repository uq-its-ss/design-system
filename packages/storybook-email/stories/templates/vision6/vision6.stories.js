import { layoutDecorator } from "../../../lib/decorators";
import "@uqds/layout/src/scss/main.scss";

export default {
  title: "Templates/Vision 6",
  parameters: {
    layout: "fullscreen",
  },
  render: ({ label }) => {
    return `
    
  <!DOCTYPE html>
  <html><head><meta name="viewport" content="width=device-width" /><meta name="bal" content="width=device-width" /><link href="https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap" rel="stylesheet" type="text/css" />	<meta name="description" content="Suspendisse blandit risus ut tristique pellentesque. Donec non leo in mauris maximus consequat. Maecenas rhoncus porttitor nibh, vitae scelerisque eros auctor at." />
  
      
      <link rel="stylesheet" type="text/css" href="https://app4.vision6.com.au/download/scripts/6.4.75b/css/6/hide_view_online.css" />
      <meta name="ROBOTS" content="NOINDEX, NOFOLLOW">
  
      <title>UQ Email - Standard 2025 - UQ News</title>
  </head><body><style type="text/css">body { padding:0 !important; margin:0 auto !important; display:block !important; min-width:100% !important; width:100% !important; background:#C7C7C7; -webkit-text-size-adjust:none }
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
  </style><div id="tracking_pixel"><img alt="" height="1" src="http://click.explore-test.uq.edu.au/open.aspx?ffcb10-fec6127674660178-fe3215707260057b7d1670-fe34117175640478711779-ff991072-fe2f15707162077d701079-ffce15&amp;d=500009&amp;bmt=0" width="1" /></div>
  
  <div id="dmp_pixel"></div>
  
  
  <center>
  <table bgcolor="#d1d0d2" border="0" cellpadding="0" cellspacing="0" class="bg-grey-c7 main-table" style="background-color:#d1d0d2;height:100%;margin:0;padding:0;" width="100%"><tbody><tr><td align="center" style="height:100%;margin:0;padding:0;" valign="top" width="100%">
              <table border="0" cellpadding="0" cellspacing="0" class="m-hide" width="100%"><tbody><tr><td style="font-size:0pt;line-height:0pt;"></td>
                      </tr><tr><td style="font-size:0pt;line-height:0pt;">͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏ ‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌  ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌  ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌  <a class="skip-main" href="#main"><span style="font-size:0px;"><span style="display:none;line-height:0px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;visibility:hidden;">Skip to main content</span></span></a></td>
                      </tr></tbody></table><table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="bg-dgrey mw-100p" style="background-color:#ffffff;" width="640"><tbody><tr><td style="font-size:0pt;line-height:0pt;">
                          <table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="640"><tbody><tr><td>
                                      <table bgcolor="#51247a" border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247a;" width="640"><tbody><tr><td style="padding-bottom:32px;padding-left:30px;padding-right:30px;padding-top:32px;">
                                                  <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="left" class="img" style="font-size:0pt;line-height:0pt;" width="160px"><a href="https://app4.vision6.com.au/ch/50178/4tv6n/2909734/M_1bN0D2Zul9VBSQM8ca9ZnjvtbQc2YG.fBqZdN5.html" target="_blank" title="The University of Queensland" rel="noreferrer noopener"><img alt="The University of Queensland logo" height="42" src="https://cdn-au.mailsnd.com/87105/SjPVMjwz0ji3mmrpXN03q_PMuGU3b7BrYuFx6-nQpyU/1744247858/3990036.png" style="padding:0px;text-align:center;" width="160" /></a></td>
                                                              <td align="right" class="c-white l-white text" style="color:#fffffe;font-family:Roboto, Arial, sans-serif;font-size:16px;line-height:20px;padding-bottom:10px;" width="420"><a href="https://app4.vision6.com.au/ch/50178/4tv6n/2685764/M_1bN0D2Zul9VBSQM8ca6x3hsA36C3GCS92L9LqC.html" style="text-decoration:underline;color:#fffffe;"><span style="font-weight:normal;">View in browser</span></a></td>
                                                          </tr></tbody></table></td>
                                              </tr></tbody></table></td>
                                  </tr></tbody></table><table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="640"><tbody><tr><td>
                                      <table bgcolor="#51247a" border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247a;" width="640"><tbody><tr><td style="padding-bottom:25px;padding-left:24px;padding-right:24px;padding-top:23px;">
                                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="592"><tbody><tr><td align="left" class="c-white l-white title" style="color:#ffffff;font-family:Roboto, Arial, sans-serif;font-size:32px;font-weight:bold;line-height:40px;padding-top:12px;" width="592">
                                                              <div>${label}</div>
                                                              </td>
                                                          </tr><tr><td align="left" class="c-white l-white lh-22 text" style="color:#ffffff;font-family:Roboto, Arial, sans-serif;font-size:18px;line-height:28px;padding-bottom:6px;padding-top:16px;" width="592">
                                                              <div>Subheading - 18px</div>
                                                              </td>
                                                          </tr></tbody></table></td>
                                              </tr></tbody></table></td>
                                  </tr></tbody></table><table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="100%"><tbody><tr><td>
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="font-size:1px;line-height:24px;" width="111"> </td>
                                              </tr></tbody></table></td>
                                  </tr></tbody></table><table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="100%"><tbody><tr><td>
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="mpx-20" style="padding-left:24px;padding-right:24px;">
                                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td class="text" style="color:#3b383e;font-family:Roboto, Arial, sans-serif;font-size:16px;line-height:26px;padding-bottom:20px;">
                                                              <p><span style="font-size:24px;"><span style="line-height:29px;"><b>Heading - 24px</b></span></span></p>
  
                                                              <p><span style="font-size:18px;"><span style="line-height:22px;"><b>Sub heading - 18px</b></span></span></p>
  
                                                              <p>Lorem ipsum dolor sit amet, <a href="https://app4.vision6.com.au/ch/50178/4tv6n/2909767/M_1bN0D2Zul9VBSQM8cauU3IMTcPyC608fIfsLQb.html">consectetur adipiscing elit</a>. Suspendisse blandit risus ut tristique pellentesque. Donec non leo in mauris maximus consequat. Maecenas rhoncus porttitor nibh, vitae scelerisque eros auctor at. Duis condimentum dui est, at iaculis sem hendrerit ac.</p>
  
                                                              <p>Morbi risus leo, faucibus a placerat non, congue id nisl. Suspendisse ac turpis fringilla, feugiat leo eget, pretium nunc. Vestibulum viverra lacus blandit lectus congue, nec malesuada massa congue. Phasellus gravida ante tempus neque dapibus efficitur. Duis nisi dui, scelerisque condimentum sem vitae, volutpat ultrices ex.</p>
                                                              
  
                                                              <table bgcolor="#51247a" border="0" cellpadding="0" cellspacing="0" style="background-color:#51247a;border-radius:4px;"><tbody><tr><td align="center" class="btn btnp-9-20 c-white l-white" style="color:#ffffff;font-family:Roboto, Arial, sans-serif;font-size:16px;line-height:18px;padding:16px 24px;"><a class="link" href="https://app4.vision6.com.au/ch/50178/4tv6n/2909782/M_1bN0D2Zul9VBSQM8cawQ545YnYSBAKISgZ0s9Z.html" style="text-decoration:none;color:#fffffe;" target="_blank" title="This is a primary CTA" rel="noreferrer noopener">This is a primary CTA</a></td>
                                                                      </tr></tbody></table><table border="1" cellpadding="0" cellspacing="0" class="bd-lpurple" style="border-color:#51247a;border-radius:4px;border-style:solid;"><tbody><tr><td align="center" class="btn btnp-9-20 c-lpurple l-lpurple" style="color:#ffffff;font-family:Roboto, Arial, sans-serif;font-size:16px;line-height:18px;padding:16px 24px;"><a class="link" href="https://app4.vision6.com.au/ch/50178/4tv6n/2909783/M_1bN0D2Zul9VBSQM8ca_AV_dYXj3_SfyEl3JSC7.html" style="text-decoration:none;color:#51247A;" target="_blank" title="This is a secondary CTA" rel="noreferrer noopener">This is a secondary CTA</a></td>
                                                                      </tr></tbody></table><p><b>First Name Last Name</b><br />
                                                              Job title<br /><a href="mailto:email@uq.edu.au">email@uq.edu.au</a><br /><a href="tel:+61 7 0000 0000">+61 7 0000 0000</a></p>
                                                              </td>
                                                          </tr></tbody></table></td>
                                              </tr></tbody></table></td>
                                  </tr></tbody></table><table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="100%"><tbody><tr><td>
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="font-size:1px;line-height:48px;" width="111"> </td>
                                              </tr></tbody></table></td>
                                  </tr></tbody></table><table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="640"><tbody><tr><td>
                                      <table bgcolor="#51247a" border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247a;" width="640"><tbody><tr><td class="mpb-24 mpt-24 mpx-24" style="padding-bottom:24px;padding-left:24px;padding-right:24px;padding-top:24px;">
                                                  <table border="0" cellpadding="0" cellspacing="0" width="592"><tbody><tr><td align="left" class="c-white l-white title" style="color:#f3f3f4;font-family:Roboto, Arial, sans-serif;font-size:24px;font-weight:bold;line-height:30px;padding-bottom:20px;" width="592">Sender name</td>
                                                          </tr><tr><td align="left" class="c-white l-white text" style="color:#f3f3f4;font-family:Roboto, Arial, sans-serif;font-size:18px;line-height:20px;padding-bottom:12px;" valign="top" width="592"><a class="link c-white" href="mailto:email@uq.edu.au" style="text-decoration:underline;color:#fffffe;" target="_blank" title="Email us" rel="noreferrer noopener">email@uq.edu.au</a></td>
                                                          </tr><tr><td align="left" class="c-white l-white text" style="color:#f3f3f4;font-family:Roboto, Arial, sans-serif;font-size:18px;line-height:20px;padding-bottom:12px;" valign="top" width="592"><a class="link c-white" href="tel:+61 7 0000 0000" style="text-decoration:underline;color:#fffffe;" target="_blank" rel="noreferrer noopener">+61 7 0000 0000</a></td>
                                                          </tr><tr><td align="left" class="c-white l-white text" style="color:#f3f3f4;font-family:Roboto, Arial, sans-serif;font-size:18px;line-height:20px;padding-bottom:30px;" valign="top" width="592"><a class="link c-white" href="https://app4.vision6.com.au/ch/50178/4tv6n/2327957/M_1bN0D2Zul9VBSQM8caEjoub7N5S0kFmHXh6b5Z.html" style="text-decoration:underline;color:#fffffe;" target="_blank" rel="noreferrer noopener">uq.edu.au</a></td>
                                                          </tr><tr><th class="column-dir-top" style="font-size:0pt;line-height:0pt;padding:0;margin:0;font-weight:normal;vertical-align:top;text-align:left;" width="185">
                                                              <table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6n/2909737/M_1bN0D2Zul9VBSQM8ca0d5tINXYTTCL7niHun94.html" target="_blank" title="Facebook" rel="noreferrer noopener"><img alt="Facebook" height="32" src="https://cdn-au.mailsnd.com/87105/lyx9bikHHIoYgBEFjDnAn96h6Njb1xZeIRSl3Kuf66M/1744247799/3990024.png" style="padding:0px;text-align:center;" width="32" /></a></td>
                                                                          <td class="mw-20" style="font-size:0pt;line-height:0pt;" width="16"> </td>
                                                                          <td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6n/2909738/M_1bN0D2Zul9VBSQM8caj.zFztQTmHxS5f.kd__b.html" target="_blank" title="Linkedin" rel="noreferrer noopener"><img alt="Linkedin" height="32" src="https://cdn-au.mailsnd.com/87105/17V8_x6gzopzysLGb06I4iD0x9bvSjoF0U1BXu6mpOU/1744247799/3990021.png" style="padding:0px;text-align:center;" width="32" /></a></td>
                                                                          <td class="mw-20" style="font-size:0pt;line-height:0pt;" width="16"> </td>
                                                                          <td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6n/2909739/M_1bN0D2Zul9VBSQM8cawWvbyuuP3sGBVxMfmavL.html" target="_blank" title="X" rel="noreferrer noopener"><img alt="X, formerly known as Twitter" height="32" src="https://cdn-au.mailsnd.com/87105/zUyLu3wuzn7FrMje-msX3NffczeDxbAxkTpB1lY-wbo/1744247799/3990026.png" style="padding:0px;text-align:center;" width="32" /></a></td>
                                                                          <td class="mw-20" style="font-size:0pt;line-height:0pt;" width="16"> </td>
                                                                          <td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6n/2909740/M_1bN0D2Zul9VBSQM8ca1uoRvS3cIf_qEi1C4VrY.html" target="_blank" title="Youtube" rel="noreferrer noopener"><img alt="Youtube" height="32" src="https://cdn-au.mailsnd.com/87105/sA72U21r5GYKcbuImI7SeJT0RPH0-PXefo9gx-ZbzZw/1744247799/3990025.png" style="padding:0px;text-align:center;" width="32" /></a></td>
                                                                          <td class="mw-20" style="font-size:0pt;line-height:0pt;" width="16"> </td>
                                                                          <td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6n/2909741/M_1bN0D2Zul9VBSQM8cajfiyddUIkrv30xN4ukl0.html" target="_blank" title="Instagram" rel="noreferrer noopener"><img alt="Instagram" height="32" src="https://cdn-au.mailsnd.com/87105/-RD-85uSpcXw7IAjSsRNhnBXIxQuLgJg8NpMYZMAL7c/1744247799/3990027.png" style="padding:0px;text-align:center;" width="32" /></a></td>
                                                                          <td class="mw-20" style="font-size:0pt;line-height:0pt;" width="16"> </td>
                                                                          <td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6n/2909742/M_1bN0D2Zul9VBSQM8ca5uI7gw7brMfj0I6ZSOzj.html" target="_blank" title="TikTok" rel="noreferrer noopener"><img alt="TikTok" height="32" src="https://cdn-au.mailsnd.com/87105/Mqpxi6APIp29zKYcfv8cpy8WP-3DR8ogxHIxSl6bJjM/1744247799/3990022.png" style="padding:0px;text-align:center;" width="32" /></a></td>
                                                                          <td class="mw-20" style="font-size:0pt;line-height:0pt;" width="16"> </td>
                                                                          <td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6n/2909743/M_1bN0D2Zul9VBSQM8caqdlioXpNkM4bOyrvjPPT.html" target="_blank" title="Weibo" rel="noreferrer noopener"><img alt="Weibo" height="32" src="https://cdn-au.mailsnd.com/87105/s9ctRnUNBCGhsEMgEvgG1Q07l0qjuqIAewZ1eLCdrfc/1744247799/3990023.png" style="padding:0px;text-align:center;" width="32" /></a></td>
                                                                      </tr></tbody></table></th>
                                                          </tr></tbody></table></td>
                                              </tr></tbody></table></td>
                                  </tr></tbody></table><table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="100%"><tbody><tr><td>
                                      <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="bg-dgrey" style="background-color:#ffffff;" width="100%"><tbody><tr><td class="mpx-25" style="padding-bottom:20px;padding-left:24px;padding-right:24px;padding-top:24px;">
                                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td align="left" class="text" style="color:#3b383e;font-family:Roboto, Arial, sans-serif;font-size:18px;line-height:29px;padding-bottom:20px;">
                                                              <div>UQ acknowledges the Traditional Owners and their custodianship of the lands on which UQ is situated. <a href="https://app4.vision6.com.au/ch/50178/4tv6n/2909744/M_1bN0D2Zul9VBSQM8ca0zKwc2e_89YZHjgr6W6S.html" style="text-decoration:underline;color:#51247a;" target="_blank" title="Reconciliation at UQ" rel="noreferrer noopener"><span style="font-weight:normal;">Reconciliation at UQ</span></a></div>
                                                              </td>
                                                          </tr><tr><td align="left" class="text" style="color:#000001;font-family:Roboto, Arial, sans-serif;font-size:16px;line-height:26px;padding-bottom:20px;">
                                                              <div>The University of Queensland, St Lucia Qld 4072 Australia<br /><a href="https://app4.vision6.com.au/ch/50178/4tv6n/2909745/M_1bN0D2Zul9VBSQM8ca7Wx8wm2VQSyAKlkBdWwv.html" style="text-decoration:underline;color:#51247a;" target="_blank" title="Institution details" rel="noreferrer noopener"><span style="font-weight:normal;">CRICOS 00025B</span></a>   |    <a href="https://app4.vision6.com.au/ch/50178/4tv6n/2909746/M_1bN0D2Zul9VBSQM8ca1s6zjBfbkssI70JyBH_d.html" style="text-decoration:underline;color:#51247a;" target="_blank" title="Institution details" rel="noreferrer noopener"><span style="font-weight:normal;">TEQSA PRV12080</span></a></div>
                                                              </td>
                                                          </tr></tbody></table></td>
                                              </tr></tbody></table></td>
                                  </tr></tbody></table></td>
                      </tr></tbody></table></td>
          </tr></tbody></table></center>
  <br clear="all" /><div class="email_footer">
  <table width="550" border="0" align="center"><tr><td>
  <p align="center">
  <font face="Verdana, Arial, Helvetica, sans-serif" color="#555555" size="1">This email was sent by The University of Queensland, Read <a href="https://www.uq.edu.au/legal/marketing-consent" style="text-decoration: underline;color: #51247a;" target="_blank" title="Marketing consent and privacy notice">UQ's marketing consent and privacy notice</a>.<br /><br />To unsubscribe from _____________, please click the 'Unsubscribe' link below.<br /><br />This email was sent to l.keating@uq.edu.au</font>
  </p>
  <p align="center">
  <font face="Verdana, Arial, Helvetica, sans-serif" color="#000000" size="1"><br /><a target="_blank" href="https://app4.vision6.com.au/forms/u/_8O3hPOGU7IbK8uO8xNJjZktDVwSeFmv5vCn0-tf-p8/50178/4032203.html" rel="noreferrer noopener"><font size="1" face="arial" color="#000000">Unsubscribe</font></a><br /><br /><br /></font>
  </p>
  <p align="center">
  <a href="http://www.vision6.com.au/custom/vision6/click.php?a=50178" target="_blank" rel="noreferrer noopener"><img src="https://cdn-au.mailsnd.com/branding/583/header_1453182889.jpg" border="0" alt="" /></a>
  </p>
  </td></tr></table></div>
  <img width="100" height="1" src="https://app4.vision6.com.au/download/images/50178/4032203/b44a439/bg.gif" alt="" /></body>
  </html>
    `;
  },
  argTypes: {
    label: "text",
  },
  args: {
    label: "Heading - 32px",
  },
};

export const Vision6 = {};

export const WithImages = {
  render: () => `

  <!DOCTYPE html>
  <html><head><meta name="viewport" content="width=device-width" /><meta name="bal" content="width=device-width" /><link href="https://fonts.googleapis.com/css2?family=Roboto&amp;display=swap" rel="stylesheet" type="text/css" />	<meta name="description" content="Suspendisse blandit risus ut tristique pellentesque. Donec non leo in mauris maximus consequat. Maecenas rhoncus porttitor nibh, vitae scelerisque eros auctor at." />
  
      
      <link rel="stylesheet" type="text/css" href="https://app4.vision6.com.au/download/scripts/6.4.75b/css/6/hide_view_online.css" />
      <meta name="ROBOTS" content="NOINDEX, NOFOLLOW">
  
      <title>UQ Email - Standard w Images 2025 - UQ News</title>
  </head><body><style type="text/css">body { padding:0 !important; margin:0 auto !important; display:block !important; min-width:100% !important; width:100% !important; background:#C7C7C7; -webkit-text-size-adjust:none }
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
  </style><div id="tracking_pixel"><img alt="" height="1" src="http://click.explore-test.uq.edu.au/open.aspx?ffcb10-fec6127674660178-fe3215707260057b7d1670-fe34117175640478711779-ff991072-fe2f15707162077d701079-ffce15&amp;d=500009&amp;bmt=0" width="1" /></div>
  
  <div id="dmp_pixel"></div>
  
  
  <center>
  <table bgcolor="#d1d0d2" border="0" cellpadding="0" cellspacing="0" class="bg-grey-c7 main-table" style="background-color:#d1d0d2;height:100%;margin:0;padding:0;" width="100%"><tbody><tr><td align="center" style="height:100%;margin:0;padding:0;" valign="top" width="100%">
              <table border="0" cellpadding="0" cellspacing="0" class="m-hide" width="100%"><tbody><tr><td style="font-size:0pt;line-height:0pt;"></td>
                      </tr><tr><td style="font-size:0pt;line-height:0pt;">͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏ ‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌  ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌  ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌ ͏‌  <a class="skip-main" href="#main"><span style="font-size:0px;"><span style="display:none;line-height:0px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;visibility:hidden;">Skip to main content</span></span></a></td>
                      </tr></tbody></table><table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="bg-dgrey mw-100p" style="background-color:#ffffff;" width="640"><tbody><tr><td style="font-size:0pt;line-height:0pt;">
                          <table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="100%"><tbody><tr><td>
                                      <table bgcolor="#51247a" border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247a;" width="100%"><tbody><tr><td style="padding-bottom:32px;padding-left:30px;padding-right:30px;padding-top:32px;">
                                                  <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6y/2909734/T88vXvSuTSoo2gvBUMaI9ZnjvtbQc2YG.fBqZdN5.html" target="_blank" title="The University of Queensland" rel="noreferrer noopener"><img alt="The University of Queensland logo" height="42" src="https://cdn-au.mailsnd.com/87105/SjPVMjwz0ji3mmrpXN03q_PMuGU3b7BrYuFx6-nQpyU/1744247858/3990036.png" style="padding:0px;text-align:center;" width="160" /></a><a href="https://app4.vision6.com.au/ch/50178/4tv6y/2909710/T88vXvSuTSoo2gvBUMaIGSLOgoKGjxRECATVt0Lv.html" target="_blank" rel="noreferrer noopener"> </a></td>
                                                              <td align="right" class="c-white l-white text" style="color:#fffffe;font-family:Roboto, Arial, sans-serif;font-size:16px;line-height:20px;padding-bottom:10px;"><a href="https://app4.vision6.com.au/ch/50178/4tv6y/2685764/T88vXvSuTSoo2gvBUMaI6x3hsA36C3GCS92L9LqC.html" style="text-decoration:underline;color:#fffffe;"><span style="font-weight:normal;">View in browser</span></a></td>
                                                          </tr></tbody></table></td>
                                              </tr></tbody></table></td>
                                  </tr></tbody></table><table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="100%"><tbody><tr><td>
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="center" class="fluid-img" style="font-size:0pt;line-height:0pt;"><img alt="Hero image" src="https://cdn-au.mailsnd.com/87105/g50_Ft9uCaaBCe-Akx87W7djy6wAdXLvLs3MPw-qxyg/1744763757/3992700.png" style="height:auto;padding:0px;text-align:center;" /></td>
                                                  
                                              </tr></tbody></table></td>
                                  </tr></tbody></table><table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="100%"><tbody><tr><td>
                                      <table bgcolor="#51247a" border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247a;" width="100%"><tbody><tr><td style="padding-bottom:25px;padding-left:24px;padding-right:24px;padding-top:18px;">
                                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td align="left" class="c-white l-white title" style="color:#ffffff;font-family:Roboto, Arial, sans-serif;font-size:32px;font-weight:bold;line-height:40px;padding-top:12px;">
                                                              <div>Heading - 32px</div>
                                                              </td>
                                                          </tr><tr><td align="left" class="c-white l-white lh-22 text" style="color:#ffffff;font-family:Roboto, Arial, sans-serif;font-size:18px;line-height:28px;padding-bottom:6px;padding-top:16px;">
                                                              <div>Subheading - 18px</div>
                                                              </td>
                                                          </tr></tbody></table></td>
                                              </tr></tbody></table></td>
                                  </tr></tbody></table><table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="100%"><tbody><tr><td>
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="font-size:1px;line-height:24px;" width="111"> </td>
                                              </tr></tbody></table></td>
                                  </tr></tbody></table><table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="100%"><tbody><tr><td>
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td class="mpx-20" style="padding-left:24px;padding-right:24px;">Image dimensions 590
                                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td class="text" style="color:#3b383e;font-family:Roboto, Arial, sans-serif;font-size:16px;line-height:26px;padding-bottom:20px;">
                                                              <p><span style="font-size:24px;"><span style="line-height:29px;"><b>Heading - 24px</b></span></span></p>
  
                                                              <p><span style="font-size:18px;"><span style="line-height:22px;"><b>Sub heading - 18px</b></span></span></p>
  
                                                              <p>Lorem ipsum dolor sit amet, <a href="https://app4.vision6.com.au/ch/50178/4tv6y/2909767/T88vXvSuTSoo2gvBUMaIuU3IMTcPyC608fIfsLQb.html">consectetur adipiscing elit</a>. Suspendisse blandit risus ut tristique pellentesque. Donec non leo in mauris maximus consequat. Maecenas rhoncus porttitor nibh, vitae scelerisque eros auctor at. Duis condimentum dui est, at iaculis sem hendrerit ac.</p>
  
                                                              <p>Morbi risus leo, faucibus a placerat non, congue id nisl. Suspendisse ac turpis fringilla, feugiat leo eget, pretium nunc. Vestibulum viverra lacus blandit lectus congue, nec malesuada massa congue. Phasellus gravida ante tempus neque dapibus efficitur. Duis nisi dui, scelerisque condimentum sem vitae, volutpat ultrices ex.</p>
                                                              
  
                                                              <table bgcolor="#51247a" border="0" cellpadding="0" cellspacing="0" style="background-color:#51247a;border-radius:4px;"><tbody><tr><td align="center" class="btn btnp-9-20" style="color:#ffffff;font-family:Roboto, Arial, sans-serif;font-size:16px;line-height:18px;"><a class="link c-white" href="#" style="text-decoration:none;color:#fffffe;" target="_blank" title="Primary button" rel="noreferrer noopener"><span style="display:block;padding:16px 24px;">Primary button</span></a></td>
                                                                      </tr></tbody></table><p><img alt="Content image" border="0" height="425" src="https://cdn-au.mailsnd.com/87105/e8FU7qqxlTZ2S94p2dtfa1VyecjukVGm-hs-8SFisa4/1744247858/3990037.jpg" width="590" /><br />
                                                              Image caption (image width must be set to 592px)</p>
  
                                                              <p><b>First Name Last Name</b><br />
                                                              Job title<br /><a href="mailto:email@uq.edu.au">email@uq.edu.au</a><br /><a href="tel:+61 7 0000 0000">+61 7 0000 0000</a></p>
                                                              </td>
                                                          </tr></tbody></table></td>
                                              </tr></tbody></table></td>
                                  </tr></tbody></table><table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="100%"><tbody><tr><td>
                                      <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td style="font-size:1px;line-height:48px;" width="111"> </td>
                                              </tr></tbody></table></td>
                                  </tr></tbody></table><table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="100%"><tbody><tr><td>
                                      <table bgcolor="#51247a" border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247a;" width="100%"><tbody><tr><td class="mpb-24 mpt-24 mpx-24" style="padding-bottom:24px;padding-left:24px;padding-right:24px;padding-top:24px;">
                                                  <table border="0" cellpadding="0" cellspacing="0" width="100%"><tbody><tr><td align="left" class="c-white l-white title" style="color:#f3f3f4;font-family:Roboto, Arial, sans-serif;font-size:24px;font-weight:bold;line-height:30px;padding-bottom:20px;">Sender name</td>
                                                          </tr><tr><td align="left" class="c-white l-white text" style="color:#f3f3f4;font-family:Roboto, Arial, sans-serif;font-size:18px;line-height:20px;padding-bottom:12px;" valign="top"><a class="link c-white" href="mailto:email@uq.edu.au" style="text-decoration:underline;color:#fffffe;" target="_blank" title="Email us" rel="noreferrer noopener">email@uq.edu.au</a></td>
                                                          </tr><tr><td align="left" class="c-white l-white text" style="color:#f3f3f4;font-family:Roboto, Arial, sans-serif;font-size:18px;line-height:20px;padding-bottom:12px;" valign="top"><a class="link c-white" href="tel:+61 7 0000 0000" style="text-decoration:underline;color:#fffffe;" target="_blank" rel="noreferrer noopener">+61 7 0000 0000</a></td>
                                                          </tr><tr><td align="left" class="c-white l-white text" style="color:#f3f3f4;font-family:Roboto, Arial, sans-serif;font-size:18px;line-height:20px;padding-bottom:30px;" valign="top"><a class="link c-white" href="https://app4.vision6.com.au/ch/50178/4tv6y/2327957/T88vXvSuTSoo2gvBUMaIEjoub7N5S0kFmHXh6b5Z.html" style="text-decoration:underline;color:#fffffe;" target="_blank" rel="noreferrer noopener">uq.edu.au</a></td>
                                                          </tr><tr><th class="column-dir-top" style="font-size:0pt;line-height:0pt;padding:0;margin:0;font-weight:normal;vertical-align:top;text-align:left;" width="185">
                                                              <table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6y/2909737/T88vXvSuTSoo2gvBUMaI0d5tINXYTTCL7niHun94.html" target="_blank" title="Facebook" rel="noreferrer noopener"><img alt="Facebook" height="32" src="https://cdn-au.mailsnd.com/87105/lyx9bikHHIoYgBEFjDnAn96h6Njb1xZeIRSl3Kuf66M/1744247799/3990024.png" style="padding:0px;text-align:center;" width="32" /></a></td>
                                                                          <td class="mw-20" style="font-size:0pt;line-height:0pt;" width="16"> </td>
                                                                          <td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6y/2909738/T88vXvSuTSoo2gvBUMaIj.zFztQTmHxS5f.kd__b.html" target="_blank" title="Linkedin" rel="noreferrer noopener"><img alt="Linkedin" height="32" src="https://cdn-au.mailsnd.com/87105/17V8_x6gzopzysLGb06I4iD0x9bvSjoF0U1BXu6mpOU/1744247799/3990021.png" style="padding:0px;text-align:center;" width="32" /></a></td>
                                                                          <td class="mw-20" style="font-size:0pt;line-height:0pt;" width="16"> </td>
                                                                          <td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6y/2909739/T88vXvSuTSoo2gvBUMaIwWvbyuuP3sGBVxMfmavL.html" target="_blank" title="X" rel="noreferrer noopener"><img alt="X, formerly known as Twitter" height="32" src="https://cdn-au.mailsnd.com/87105/zUyLu3wuzn7FrMje-msX3NffczeDxbAxkTpB1lY-wbo/1744247799/3990026.png" style="padding:0px;text-align:center;" width="32" /></a></td>
                                                                          <td class="mw-20" style="font-size:0pt;line-height:0pt;" width="16"> </td>
                                                                          <td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6y/2909740/T88vXvSuTSoo2gvBUMaI1uoRvS3cIf_qEi1C4VrY.html" target="_blank" title="Youtube" rel="noreferrer noopener"><img alt="Youtube" height="32" src="https://cdn-au.mailsnd.com/87105/sA72U21r5GYKcbuImI7SeJT0RPH0-PXefo9gx-ZbzZw/1744247799/3990025.png" style="padding:0px;text-align:center;" width="32" /></a></td>
                                                                          <td class="mw-20" style="font-size:0pt;line-height:0pt;" width="16"> </td>
                                                                          <td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6y/2909741/T88vXvSuTSoo2gvBUMaIjfiyddUIkrv30xN4ukl0.html" target="_blank" title="Instagram" rel="noreferrer noopener"><img alt="Instagram" height="32" src="https://cdn-au.mailsnd.com/87105/-RD-85uSpcXw7IAjSsRNhnBXIxQuLgJg8NpMYZMAL7c/1744247799/3990027.png" style="padding:0px;text-align:center;" width="32" /></a></td>
                                                                          <td class="mw-20" style="font-size:0pt;line-height:0pt;" width="16"> </td>
                                                                          <td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6y/2909742/T88vXvSuTSoo2gvBUMaI5uI7gw7brMfj0I6ZSOzj.html" target="_blank" title="TikTok" rel="noreferrer noopener"><img alt="TikTok" height="32" src="https://cdn-au.mailsnd.com/87105/Mqpxi6APIp29zKYcfv8cpy8WP-3DR8ogxHIxSl6bJjM/1744247799/3990022.png" style="padding:0px;text-align:center;" width="32" /></a></td>
                                                                          <td class="mw-20" style="font-size:0pt;line-height:0pt;" width="16"> </td>
                                                                          <td align="left" class="img" style="font-size:0pt;line-height:0pt;"><a href="https://app4.vision6.com.au/ch/50178/4tv6y/2909743/T88vXvSuTSoo2gvBUMaIqdlioXpNkM4bOyrvjPPT.html" target="_blank" title="Weibo" rel="noreferrer noopener"><img alt="Weibo" height="32" src="https://cdn-au.mailsnd.com/87105/s9ctRnUNBCGhsEMgEvgG1Q07l0qjuqIAewZ1eLCdrfc/1744247799/3990023.png" style="padding:0px;text-align:center;" width="32" /></a></td>
                                                                      </tr></tbody></table></th>
                                                          </tr></tbody></table></td>
                                              </tr></tbody></table></td>
                                  </tr></tbody></table><table cellpadding="0" cellspacing="0" role="presentation" style="min-width:100%;" width="100%"><tbody><tr><td>
                                      <table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="bg-dgrey" style="background-color:#ffffff;" width="100%"><tbody><tr><td class="mpx-25" style="padding-bottom:20px;padding-left:24px;padding-right:24px;padding-top:24px;">
                                                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%"><tbody><tr><td align="left" class="text" style="color:#3b383e;font-family:Roboto, Arial, sans-serif;font-size:18px;line-height:29px;padding-bottom:20px;">
                                                              <div>UQ acknowledges the Traditional Owners and their custodianship of the lands on which UQ is situated. <a href="https://app4.vision6.com.au/ch/50178/4tv6y/2909744/T88vXvSuTSoo2gvBUMaI0zKwc2e_89YZHjgr6W6S.html" style="text-decoration:underline;color:#51247a;" target="_blank" title="Reconciliation at UQ" rel="noreferrer noopener"><span style="font-weight:normal;">Reconciliation at UQ</span></a></div>
                                                              </td>
                                                          </tr><tr><td align="left" class="text" style="color:#000001;font-family:Roboto, Arial, sans-serif;font-size:16px;line-height:26px;padding-bottom:20px;">
                                                              <div>The University of Queensland, St Lucia Qld 4072 Australia<br /><a href="https://app4.vision6.com.au/ch/50178/4tv6y/2909745/T88vXvSuTSoo2gvBUMaI7Wx8wm2VQSyAKlkBdWwv.html" style="text-decoration:underline;color:#51247a;" target="_blank" title="Institution details" rel="noreferrer noopener"><span style="font-weight:normal;">CRICOS 00025B</span></a>   |    <a href="https://app4.vision6.com.au/ch/50178/4tv6y/2909746/T88vXvSuTSoo2gvBUMaI1s6zjBfbkssI70JyBH_d.html" style="text-decoration:underline;color:#51247a;" target="_blank" title="Institution details" rel="noreferrer noopener"><span style="font-weight:normal;">TEQSA PRV12080</span></a></div>
                                                              </td>
                                                          </tr></tbody></table></td>
                                              </tr></tbody></table></td>
                                  </tr></tbody></table></td>
                      </tr></tbody></table></td>
          </tr></tbody></table></center>
  <br clear="all" /><div class="email_footer">
  <table width="550" border="0" align="center"><tr><td>
  <p align="center">
  <font face="Verdana, Arial, Helvetica, sans-serif" color="#555555" size="1">This email was sent by The University of Queensland, Read <a href="https://www.uq.edu.au/legal/marketing-consent" style="text-decoration: underline;color: #51247a;" target="_blank" title="Marketing consent and privacy notice">UQ's marketing consent and privacy notice</a>.<br /><br />To unsubscribe from _____________, please click the 'Unsubscribe' link below.<br /><br />This email was sent to l.keating@uq.edu.au</font>
  </p>
  <p align="center">
  <font face="Verdana, Arial, Helvetica, sans-serif" color="#000000" size="1"><br /><a target="_blank" href="https://app4.vision6.com.au/forms/u/UXoaWTxoATPFcd3z98iwYzzVqzblji-44ynjmhh-ndA/50178/4032204.html" rel="noreferrer noopener"><font size="1" face="arial" color="#000000">Unsubscribe</font></a><br /><br /><br /></font>
  </p>
  <p align="center">
  <a href="http://www.vision6.com.au/custom/vision6/click.php?a=50178" target="_blank" rel="noreferrer noopener"><img src="https://cdn-au.mailsnd.com/branding/583/header_1453182889.jpg" border="0" alt="" /></a>
  </p>
  </td></tr></table></div>
  <img width="100" height="1" src="https://app4.vision6.com.au/download/images/50178/4032204/a006a90/bg.gif" alt="" /></body>
  </html>
  `,
};
