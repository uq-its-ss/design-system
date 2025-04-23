import { layoutDecorator } from "../../../lib/decorators";
import "@uqds/layout/src/scss/main.scss";

export default {
  title: "Newsletter/Salesforce",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: `<div class="uqds-layout-demo-el"></div>`,
  },
  decorators: [layoutDecorator],
};

export const Salesforce = {
  render: () => `



  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en" xml:lang="en">
  <head><meta name="robots" content="noindex, nofollow"/><meta name="referrer" content="no-referrer"/>
   <!--[if gte mso 9]>  <xml>   <o:OfficeDocumentSettings>   <o:AllowPNG/>   <o:PixelsPerInch>96</o:PixelsPerInch>   </o:OfficeDocumentSettings>  </xml>  <![endif]-->
   <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
   <meta name="viewport" content="width=device-width, initial-scale=.5, maximum-scale=12.0, minimum-scale=.25, user-scalable=yes"/>
   <meta http-equiv="X-UA-Compatible" content="IE=edge" />
   <meta name="format-detection" content="date=no" />
   <meta name="format-detection" content="address=no" />
   <meta name="format-detection" content="telephone=no" />
   <meta name="x-apple-disable-message-reformatting" />
   <meta name="color-scheme" content="light dark" />
   <meta name="supported-color-schemes" content="light dark" />
   <title>The University of Queensland</title>
   <!--[if gte mso 9]>  <style type="text/css" media="all">   sup { font-size: 100% !important; }  </style>  <![endif]-->
   
   
   <!--[if !mso]><!-->
   <style type="text/css" media="all"> 
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
       span, td, table, div {
        font-family: 'Roboto', Arial, serif !important;
      }
     a {text-decoration: none;}
   </style>
   <!--<![endif]-->
  
   <style type="text/css" media="screen">
    body { padding:0 !important; margin:0 auto !important; display:block !important; min-width:100% !important; width:100% !important; background:#C7C7C7; -webkit-text-size-adjust:none }
    a { color:#000001; text-decoration:none }
    p { margin:0 !important } 
    img { margin: 0 !important; -ms-interpolation-mode: bicubic; /* Allow smoother rendering of resized image in Internet Explorer */ }
    strong { font-weight: 700 !important; }
    .main-table div { background: transparent !important; }
    #MessageViewBody, #MessageWebViewDiv { width: 100% !important; } /* Samsung Galaxy Note 4 Samsung Mail - make email stay centered */
  
     a.skip-main { left:-999px; position:absolute; top:auto; width:1px; height:1px; overflow:hidden; z-index:-999; }
     a.skip-main:focus, a.skip-main:active { color: #ffffff; background-color:#ffffff; left: auto; top: auto; width: 30%; height: auto; overflow:auto; margin: 10px 35%; padding:5px; border-radius: 15px; border:4px solid yellow; text-align:center; font-size:12em; z-index:999; }     
     h1, h2, h3, h4, h5, h6, p { padding: 0 !important; margin: 0 !important; mso-line-height-rule:exactly; Margin: 0; }
  
    .btnp-9-20 a { display: inline-block; padding: 9px 20px; text-decoration: none; }
  
    .l-grey a { color: #6f6f6f; }
    .l-gold a { color: #BB9D65; }
    .l-white a { color: #ffffff; }
    .l-lpurple a { color: #962A8B; }
    .l-dpurple a { color: #51247A; }
  
    :root {
     Color-scheme: light dark;
     supported-color-schemes:light dark;
    }
  
    @media (prefers-color-scheme: dark ) {
      
     .title { color: #FFFFFF !important; }
     .text { color: #E8E8E8 !important; }
     a { color: #C29FDF !important; }
     .c-grey, .l-grey a { color: #6f6f6f !important; }
     .c-gold, .l-gold a { color: #BB9D65 !important; }
     .c-white, .l-white a { color: #ffffff !important; }
     .c-lpurple, .l-lpurple a { color: #C29FDF !important; }
     .c-dpurple, .l-dpurple a { color: #51247A !important; }
  
     
      
     .bg-white { background-color: #19151C !important; }
     .bg-grey-f7 { background-color: #302C33 !important; }
      
     .bg-black { background-color: #000001 !important; }
     .bg-purple { background-color: #51247A !important; }
     .bg-grey-c7 { background-color: #5E5B60 !important; }
     .bg-white-fa { background-color: #19151C !important; }
  
     .bd-grey { border-color: #c4c4c4 !important; }
     .bd-purple { border-color: #962a8b !important; }
     .bd-lpurple { border-color: #C29FDF !important; }
      
    }
     
    [data-ogsc] .title { color: #FFFFFF !important; }
    [data-ogsc] .text { color: #E8E8E8 !important; }
    [data-ogsc] a { color: #C29FDF !important; }
    [data-ogsc] .c-grey, [data-ogsc] .l-grey a { color: #6f6f6f !important; }
    [data-ogsc] .c-gold, [data-ogsc] .l-gold a { color: #BB9D65 !important; }
    [data-ogsc] .c-white, [data-ogsc] .l-white a { color: #ffffff !important; }
    [data-ogsc] .c-lpurple, [data-ogsc] .l-lpurple a { color: #C29FDF !important; } 
    [data-ogsc] .c-dpurple, [data-ogsc] .l-dpurple a { color: #51247A !important; }
  
    [data-ogsc] .bg-white { background-color: #19151C !important; }
    [data-ogsc] .bg-grey-f7 { background-color: #302C33 !important; }
     
    [data-ogsc] .bg-black { background-color: #000001 !important; }
    [data-ogsc] .bg-purple { background-color: #51247A !important; }
    [data-ogsc] .bg-grey-c7 { background-color: #5E5B60 !important; }
    [data-ogsc] .bg-white-fa { background-color: #fafafa !important; }
  
    [data-ogsc] .bd-grey { border-color: #c4c4c4 !important; }
    [data-ogsc] .bd-purple { border-color: #962a8b !important; }
    [data-ogsc] .bd-lpurple { border-color: #C29FDF !important; }
  
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
  </head>
  <body class="body bg-grey-c7" style="padding:0 !important; margin:0 auto !important; display:block !important; min-width:100% !important; width:100% !important; background:#D1D0D2; -webkit-text-size-adjust:none; background-color:#D1D0D2;">
     <!-- ======|| TRACKING ||====== -->
      
      <div id="tracking_pixel">
        <img src="http://click.explore-test.uq.edu.au/open.aspx?ffcb10-feca12737562077e-fe2b157070620775771778-fe34117175640478711779-ff991072-fe3115707162077d701077-ffce15&d=500015&bmt=0" width="1" height="1" alt="">
      </div>
      <div id="dmp_pixel">
        
      </div>
      <!-- ======|| TEMPLATE ||====== -->
   <center>
    <table class="main-table bg-grey-c7" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin: 0; padding: 0; width: 100%; height: 100%; background-color:#D1D0D2;" bgcolor="#D1D0D2">
     <tr>
      <td style="margin: 0; padding: 0; width: 100%; height: 100%;" align="center" valign="top">
       <table class="m-hide" style="mso-hide: all;" width="100%" border="0" cellspacing="0" cellpadding="0">
        <!-- Preview Text -->
        <tr>
         <td style="font-size: 0pt; line-height: 0pt;">
           
         </td>
        </tr>
        <!-- END Preview Text -->
  
        <!-- Fix -->
        <tr>
         <td style="font-size: 0pt; line-height: 0pt;">
         
   &#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;
  &zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;
  &nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;
  &#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp;&#847;&zwnj;&nbsp; 
          <a class="skip-main" style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;" href="#main" aria-hidden="true">Skip to main content</a>
         </td>
        </tr>
        <!-- END Fix -->
       </table>
       
       <table class="mw-100p bg-white-fa" width="640" border="0" cellspacing="0" cellpadding="0" style="background-color:#FFFFFF;">
        <tr>
         <td style="font-size: 0pt; line-height: 0pt;">
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Header --><table border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247A;" width="100%">
    
      <tr>
        <td class="pt-20 px-20 pb-34" style="padding-top: 32px; padding-left: 30px; padding-right: 30px; padding-bottom: 32px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
            
              <tr>
                <td class="img" style="font-size:0pt; line-height:0pt; text-align:left;">
                  <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac9679fa0f8d60c267fa8874df9ee15699aabef98759bc3e75eba5e3c376283d79e7b384150eae500e57d49139340cf6082a6c910b57414320" target="_blank" title="The University of Queensland"><img alt="The University of Queensland logo" data-assetid="81270" height="50" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/a04b5099-9772-4cff-92fd-af188038c008.png" style="height: 42px; width: 160px; padding: 0px; text-align: center;" width="190"></a><a href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9aca95d46d212daaed400d1f8aec1870a3ebacc9b99374a61c95b2569a043163ef05fcf8a265308f55664e14d8f9506f9c3" target="_blank"> </a></td><td class="text fz-10 lh-14 a-right c-white l-white pb-10" style="font-family:'Roboto', Arial, sans-serif; font-size: 16px; line-height: 20px; text-align:right; color:#fffffe; padding-bottom: 10px;">
                  <a class="link-u c-white" href="http://view.explore-test.uq.edu.au/?qs=5687294870903d6b4f661915cd6a9ba9ec8820e738ad515e1aa26d6ec82389441eba13892b25341c691a7fd481f26f28b072947e9136ec38163534c3170b99f87bf4e3d9bc322c41bbcc0387c622681d" style="text-decoration:underline; color:#fffffe; font-weight:normal" target="_blank">View in browser</a></td></tr></table></td></tr></table><!-- END Header --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Hero image --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:center;">
      <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9acd793106ddf165a2896a825fca8e2948dd085690de495446250d080bb2b95ca873972f281881429a6a963489f58a77f7646ec6829d006b7f1" target="_blank" title="#"><img alt="Hero image" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/7d6b42b1-bb12-4eaa-a8d6-1c6ca8165721.png" style="height: auto; width: 100%;" width="640"></a><a href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9aca95d46d212daaed400d1f8aec1870a3ebacc9b99374a61c95b2569a043163ef05fcf8a265308f55664e14d8f9506f9c3" target="_blank"> </a></td></tr></table><!-- END Hero image --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Purple Intro Banner --><table border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247A;" width="100%">
    
      <tr>
        <td class="pt-22 pb-25 px-40" style="padding-top: 23px; padding-bottom: 25px; padding-left: 24px; padding-right: 24px;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
            
              <tr>
                <td class="title fz-24 lh-28 a-center c-white l-white py-6" style="font-family:'Roboto', Arial, sans-serif; font-size: 32px; line-height: 40px; text-align:left; color:#ffffff">
                  <p>
                    Hi Melissa</p></td></tr><tr>
                <td class="text fz-16 lh-22 a-center c-white l-white py-6" style="font-family:'Roboto', Arial, sans-serif; font-size: 18px; line-height: 28px; text-align:left; color:#ffffff; padding-top: 18px; padding-bottom: 6px;">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare pharetra elit, ac dapibus diam fermentum a. Fusce varius mauris et ante.</p></td></tr></table></td></tr></table><!-- END Purple Intro Banner --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 48px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td style="font-size:1px;line-height:48px" width="111">
      &nbsp;</td></tr></table><!-- END Divider - 48px --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td class="pt-25 px-40 mpx-20" style="padding-left: 24px; padding-right: 24px;padding-bottom:48px">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
       <!-- Headings -->
        <tr>
         <td class="title fz-26 lh-31 pb-24" style="font-family:'Roboto', Arial, sans-serif; font-size: 24px; line-height: 29px; color:#19151C; font-weight: bold; padding-bottom: 20px;">
          <p>
           Headline goes here</p></td></tr><!-- END Headings --><!-- Body Text --><tr>
         <td class="text fz-14 lh-20 pb-24" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; font-size: 16px; line-height: 26px; padding-bottom: 20px;">
          <p>
           Introduction text will go here incid que iusam hitio dolupti aspicaes quatus elenecatem voluptatur? Quiatur simpori oreria dolorerro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, accusantium?</p></td></tr><!-- END Body Text --><!-- Button --><tr>
         <td>
          <table border="0" cellpadding="0" cellspacing="0" style="background-color:#51247A; border-radius: 4px;">
           
            <tr>
             <td class="btn btnp-9-20 fz-14 lh-18" style="font-family:'Roboto', Arial, sans-serif; text-align:center; mso-padding-alt:16px 24px; font-size: 16px; line-height: 18px; color:#ffffff;">
              <p>
               <a  class="link c-white"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac16fb1b4b831a6ea040629cc7e4bfe06702a097ef497af05008aed74e4452ecd7f7fc44edd95b2d39e028ac156c5d141a0c05ff7ca37ba365" style="color:#fffffe;text-decoration:none;display: block; padding: 16px 24px;" target="_blank" title="This is a primary CTA">This is a primary CTA</a></p></td></tr></table></td></tr><!-- END Button --><!-- Button --><!-- END Button --></table></td></tr></table></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- 2 Column Story Block --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td class="pt-24 px-20 pb-4 mpb-8" style="padding-left: 24px; padding-right: 24px">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
       
        <tr>
         <th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="286">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <td class="fluid-img pb-19" style="font-size:0pt; line-height:0pt; text-align:center; padding-bottom: 20px;">
              <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac4ce6686549d51b62c9e3cec13354fc60068ea022656537a51d10a70b62ea93090a6cf1a99ba1fe86252df1057b112c5257571ba6bc4de484" title="#"><img alt="image-1" border="0" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/174f995e-003b-43ad-990d-1a9ee71e7304.jpg" style="height: auto; width: 100%;" width="284"></a></td></tr><tr>
             <td class="title fz-20 lh-24 pb-20 px-10" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 24px; line-height: 24px; color:#19151C; padding-bottom: 20px;">
              <p>
               Headline</p></td></tr><tr>
             <td class="text fz-14 lh-20 pb-18 px-10" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; padding-bottom: 18px;">
              <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et consectetur adipiscing nulla rhoncus, dapibus ipsum feugiat.</p></td></tr><tr>
             <td style="padding-bottom: 24px;">
              <!-- Button --><table border="0" cellpadding="0" cellspacing="0" class="bd-lpurple" style="background-color:#FFFFFF; border-radius: 4px;border-color:#51247A;border-width:2px;border-style:solid">
               
                <tr>
                 <td class="btn btnp-9-20 fz-14 lh-18 c-lpurple l-lpurple" style="font-family:'Roboto', Arial, sans-serif; text-align:center; mso-padding-alt:16px 24px; font-size: 16px; line-height: 18px; color:#fffffe;">
                  <p>
                   <a  class="link "  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac07f84655b1d36b4cf7174c09db7cdca1412ee46a4401011b9de5a610d818129a9bfc043df75a2e691aac7430bfa2a18bceb6d507b9c9666a" style="color:#51247A;text-decoration:none;display: block; padding: 16px 24px;" target="_blank" title="Secondary CTA">Secondary CTA</a></p></td></tr></table><!-- END Button --></td></tr></table></th><th class="column mpb-10" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" width="24">
         </th><th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="286">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <td class="fluid-img pb-19" style="font-size:0pt; line-height:0pt; text-align:center; padding-bottom: 20px;">
              <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac4ce6686549d51b62c9e3cec13354fc60068ea022656537a51d10a70b62ea93090a6cf1a99ba1fe86252df1057b112c5257571ba6bc4de484" title="#"><img alt="image 2" border="0" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/174f995e-003b-43ad-990d-1a9ee71e7304.jpg" style="height: auto; width: 100%;" width="284"></a></td></tr><tr>
             <td class="title fz-20 lh-24 pb-20 px-10" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 24px; line-height: 24px; color:#19151C; padding-bottom: 20px;">
              <p>
               Headline</p></td></tr><tr>
             <td class="text fz-14 lh-20 pb-18 px-10" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; padding-bottom: 18px;">
              <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et consectetur adipiscing nulla rhoncus, dapibus ipsum feugiat.</p></td></tr><tr>
             <td style="padding-bottom: 24px;">
              <!-- Button --><table border="0" cellpadding="0" cellspacing="0" class="bd-lpurple" style="background-color:#FFFFFF; border-radius: 4px;border-color:#51247A;border-width:2px;border-style:solid">
               
                <tr>
                 <td class="btn btnp-9-20 fz-14 lh-18 c-lpurple l-lpurple" style="font-family:'Roboto', Arial, sans-serif; text-align:center; mso-padding-alt:16px 24px; font-size: 16px; line-height: 18px; color:#fffffe;">
                  <p>
                   <a  class="link"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac07f84655b1d36b4cf7174c09db7cdca1412ee46a4401011b9de5a610d818129a9bfc043df75a2e691aac7430bfa2a18bceb6d507b9c9666a" style="color:#51247A;text-decoration:none;display: block; padding: 16px 24px;" target="_blank" title="Secondary CTA">Secondary CTA</a></p></td></tr></table><!-- END Button --></td></tr></table></th></tr></table></td></tr></table><!-- END 2 Column Story Block --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 24px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td style="font-size:1px;line-height:24px" width="111">
      &nbsp;</td></tr></table><!-- END Divider - 24px --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Image Left Block --><table border="0" cellpadding="0" cellspacing="0" style="padding-left:24px;padding-right:24px;">
   
    <tr>
     <td>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
       
        <tr>
         <th class="column-top" style="font-size:0pt; line-height:0pt; padding-right: 20px; padding-bottom: 24px; margin:0; font-weight:normal; vertical-align:top;" width="320">
          <div class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:left;">
           <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac4ce6686549d51b62c9e3cec13354fc60068ea022656537a51d10a70b62ea93090a6cf1a99ba1fe86252df1057b112c5257571ba6bc4de484" title="#"><img alt="image" border="0" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/174f995e-003b-43ad-990d-1a9ee71e7304.jpg" style="height: auto; width: 100%;" width="320"></a></div></th><th class="column-top" style="font-size:0pt; line-height:0pt; padding-bottom: 24px; margin:0; font-weight:normal; vertical-align:top;" width="320">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <td class="p-20 mpb-10" style="">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
               
                <tr>
                 <td class="title fz-20 lh-24 pb-20" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 24px; line-height: 29px; color:#19151c; padding-bottom: 18px;">
                  <p>
                   Headline</p></td></tr><tr>
                 <td class="text fz-14 lh-19 ff-os pb-16" style="color:#000001; text-align:left; font-size: 16px; line-height: 26px; font-family:'Roboto', Arial, sans-serif; padding-bottom: 16px;">
                  <p>
                   Body copy will go here untur, soluptae nimil idi repelit laborpossume untur nimil idi repelit laborpossume veri vidicae pos dustiatetur ma natem.</p></td></tr><tr>
                 <td class="text fz-18 lh-22" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#BB9D65;">
                  <p>
                   <a  class="link"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac07f84655b1d36b4cf7174c09db7cdca1412ee46a4401011b9de5a610d818129a9bfc043df75a2e691aac7430bfa2a18bceb6d507b9c9666a" style="color:#51247a;text-decoration:underline;" target="_blank" title="#">This is a text link</a></p></td></tr></table></td></tr></table></th></tr></table></td></tr></table><!-- END Image Left Block --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 24px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td style="font-size:1px;line-height:24px" width="111">
      &nbsp;</td></tr></table><!-- END Divider - 24px --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Image Left Block --><table border="0" cellpadding="0" cellspacing="0" style="padding-left:24px;padding-right:24px;">
   
    <tr>
     <td>
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
       
        <tr>
         <th class="column-top" style="font-size:0pt; line-height:0pt; padding-right: 20px; padding-bottom: 24px; margin:0; font-weight:normal; vertical-align:top;" width="320">
          <div class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:left;">
           <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac4ce6686549d51b62c9e3cec13354fc60068ea022656537a51d10a70b62ea93090a6cf1a99ba1fe86252df1057b112c5257571ba6bc4de484" title="#"><img alt="image" border="0" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/174f995e-003b-43ad-990d-1a9ee71e7304.jpg" style="height: auto; width: 100%;" width="320"></a></div></th><th class="column-top" style="font-size:0pt; line-height:0pt; padding-bottom: 24px; margin:0; font-weight:normal; vertical-align:top;" width="320">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <td class="p-20 mpb-10" style="">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
               
                <tr>
                 <td class="title fz-20 lh-24 pb-20" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 24px; line-height: 29px; color:#19151c; padding-bottom: 18px;">
                  <p>
                   Headline</p></td></tr><tr>
                 <td class="text fz-14 lh-19 ff-os pb-16" style="color:#000001; text-align:left; font-size: 16px; line-height: 26px; font-family:'Roboto', Arial, sans-serif; padding-bottom: 16px;">
                  <p>
                   Body copy will go here untur, soluptae nimil idi repelit laborpossume untur nimil idi repelit laborpossume veri vidicae pos dustiatetur ma natem.</p></td></tr><tr>
                 <td class="text fz-18 lh-22" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#BB9D65;">
                  <p>
                   <a  class="link"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac07f84655b1d36b4cf7174c09db7cdca1412ee46a4401011b9de5a610d818129a9bfc043df75a2e691aac7430bfa2a18bceb6d507b9c9666a" style="color:#51247a;text-decoration:underline;" target="_blank" title="#">This is a text link</a></p></td></tr></table></td></tr></table></th></tr></table></td></tr></table><!-- END Image Left Block --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 24px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td style="font-size:1px;line-height:24px" width="111">
      &nbsp;</td></tr></table><!-- END Divider - 24px --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td class="pt-25 px-40 mpx-20" style="padding-left: 24px; padding-right: 24px;padding-bottom: 48px">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
       <!-- Headings -->
        <tr>
         <td class="title fz-26 lh-31 pb-24" style="font-family:'Roboto', Arial, sans-serif; font-size: 24px; line-height: 29px; color:#19151C; font-weight: bold; padding-bottom: 20px;">
          <p>
           Experience Social Science Webinar</p></td></tr><!-- END Headings --><!-- Body Text --><tr>
         <td class="text fz-14 lh-20 a-center pb-24" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; font-size: 18px; line-height: 29px; padding-bottom: 20px;">
          <p>
           We're sorry you missed the Experience Social Science Webinar.</p></td></tr><!-- END Body Text --><!-- Body Text --><tr>
         <td class="text fz-14 lh-20 a-center pb-24" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; font-size: 16px; line-height: 26px; padding-bottom: 20px;">
          <p>
           Introduction text will go here incid que iusam hitio dolupti aspicaes quatus elenecatem voluptatur? Quiatur simpori oreria dolorerro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, accusantium?</p></td></tr><!-- END Body Text --><!-- Button --><!-- END Button --><!-- Button --><tr>
         <td>
          <table border="0" cellpadding="0" cellspacing="0" class="bd-lpurple" style="background-color:#FFFFFF; border-radius: 4px;border-color:#51247A;border-width:2px;border-style:solid">
           
            <tr>
             <td class="btn btnp-9-20 fz-14 lh-18 c-lpurple l-lpurple" style="font-family:'Roboto', Arial, sans-serif; text-align:center; mso-padding-alt:16px 24px; font-size: 16px; line-height: 18px; color:#ffffff;">
              <p>
               <a  class="link"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac07f84655b1d36b4cf7174c09db7cdca1412ee46a4401011b9de5a610d818129a9bfc043df75a2e691aac7430bfa2a18bceb6d507b9c9666a" style="color:#51247A;text-decoration:none;display: block; padding: 16px 24px;" target="_blank" title="This is a secondary CTA">Watch event recording</a></p></td></tr></table></td></tr><!-- END Button --></table></td></tr></table></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- 2 Column Event Listing --><table border="0" cellpadding="0" cellspacing="0" class="bg-grey-f7" style="background-color:#f3f4f4;" width="100%">
   
    <tr>
     <td class="pt-24 px-30" style="padding-top: 24px; padding-left: 24px; padding-right: 24px;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
       
        <tr>
         <th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="265">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <td class="img pb-12" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 24px;">
              <img alt="calendar" border="0" data-assetid="71815" height="51" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/d0a75930-eedf-459d-bcb3-c356e817cc49.png" style="height: 51px; width: 51px;" width="51"></td></tr><tr>
             <td class="title fz-16 lh-20 pb-12" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 24px; line-height: 29px; color:#19151c; padding-bottom: 18px;">
              <p>
               Event heading</p></td></tr><tr>
             <td class="text fz-14 lh-18 pb-14" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 16px;">
              <p>
               September 25, 2021</p></td></tr><tr>
             <td class="text fz-14 lh-20 pb-25" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 18px;">
              <p>
               Introduction text will go here incid que iusam est, accusantium?</p></td></tr><tr>
             <td class="text fz-18 lh-22" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; padding-bottom:24px">
              <p>
               <a  class="link"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac07f84655b1d36b4cf7174c09db7cdca1412ee46a4401011b9de5a610d818129a9bfc043df75a2e691aac7430bfa2a18bceb6d507b9c9666a" style="color:#51247a;text-decoration:underline;" target="_blank" title="#">This is a text link</a></p></td></tr></table></th><th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" width="50">
         </th><th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="265">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <td class="img pb-12" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 24px;">
              <img alt="calendar" border="0" data-assetid="71815" height="51" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/d0a75930-eedf-459d-bcb3-c356e817cc49.png" style="height: 51px; width: 51px;" width="51"></td></tr><tr>
             <td class="title fz-16 lh-20 pb-12" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 24px; line-height: 29px; color:#19151c; padding-bottom: 18px;">
              <p>
               Event heading</p></td></tr><tr>
             <td class="text fz-14 lh-18 pb-14" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 16px;">
              <p>
               September 25, 2021</p></td></tr><tr>
             <td class="text fz-14 lh-20 pb-25" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 18px;">
              <p>
               Introduction text will go here incid que iusam est, accusantium?</p></td></tr><tr>
             <td class="text fz-18 lh-22" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#BB9D65;padding-bottom:24px">
              <p>
               <a  class="link"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac07f84655b1d36b4cf7174c09db7cdca1412ee46a4401011b9de5a610d818129a9bfc043df75a2e691aac7430bfa2a18bceb6d507b9c9666a" style="color:#51247a;text-decoration:underline;" target="_blank" title="#">This is a text link</a></p></td></tr></table></th></tr></table></td></tr></table><!-- END 2 Column Event Listing --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 48px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td style="font-size:1px;line-height:48px" width="111">
      &nbsp;</td></tr></table><!-- END Divider - 48px --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Event Checklist --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td class="pt-24 px-30" style="padding-left: 24px; padding-right: 24px;padding-bottom: 48px;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
       <!-- Title -->
        <tr>
         <td class="title fz-24 lh-28 pb-16" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 24px; line-height: 29px; color:#19151c; padding-bottom: 28px;">
          <p>
           Get the most out of the webinar</p></td></tr><!-- END Title --><!-- 2 Cols --><tr>
         <td>
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="265">
              <!-- Ordered List --><table border="0" cellpadding="0" cellspacing="0" width="100%">
               
                <tr>
                 <td class="img pb-4" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 10px;" valign="top" width="41">
                  <img alt="num 1" border="0" data-assetid="81256" height="41" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/e6cfa079-a8d6-4c0b-88e3-b9d608bcb419.png" style="height: 41px; width: 41px;" width="41"></td><td class="pb-4" style="font-size: 0pt; line-height: 0pt;" width="14">
                  &nbsp;</td><td class="text fz-16 lh-20 pb-4" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 10px;">
                  The webinar will commence at 6pm. Please ensure you are seated comfortably a few minutes before the session begins.</td></tr><tr>
                 <td class="img pb-4" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 10px;" valign="top" width="41">
                  <img alt="num 2" border="0" data-assetid="81253" height="41" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/32e39374-5fef-4870-bbf7-925a99adad1d.png" style="height: 41px; width: 41px;" width="41"></td><td class="pb-4" style="font-size: 0pt; line-height: 0pt; padding-bottom: 10px;" width="14">
                 </td><td class="text fz-16 lh-20 pb-4" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 10px;">
                  When you enter the webinar, your microphone and camera will automatically switch off throughout the session.</td></tr><tr>
                 <td class="img pb-4" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 10px;" valign="top" width="41">
                  <img alt="num 3" border="0" data-assetid="81255" height="41" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/7631ab46-a0df-47df-934c-25d1cc40e839.png" style="height: 41px; width: 41px;" width="41"></td><td class="pb-4" style="font-size: 0pt; line-height: 0pt; padding-bottom: 10px;" width="14">
                 </td><td class="text fz-16 lh-20 pb-4" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 10px;">
                  There will be a Q&amp;A at the end of the session. Submit your questions through the Q&amp;A function on Zoom.</td></tr><tr>
                 <td class="img pb-4" style="font-size:0pt; line-height:0pt; text-align:left;" valign="top" width="41">
                  <img alt="num 4" border="0" data-assetid="81252" height="41" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/cd5a02c7-cb8a-458b-b031-a8f97c328ea0.png" style="height: 41px; width: 41px;" width="41"></td><td class="pb-4" style="font-size: 0pt; line-height: 0pt;" width="14">
                 </td><td class="text fz-16 lh-20 pb-4" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e;">
                  You do not need a Zoom account to attend the webinar, however we recommend downloading the Zoom app prior to the session.</td></tr></table><!-- END Ordered List --></th></tr></table></td></tr><!-- END 2 Cols --></table></td></tr></table><!-- END Event Checklist --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Purple Intro Banner --><table border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247A;" width="100%">
   
    <tr>
     <td class="pt-22 pb-25 px-40" style="padding-top: 23px; padding-bottom: 25px; padding-left: 24px; padding-right: 24px;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
       
        <tr>
         <td class="text fz-20 lh-32 c-white l-white" style="font-family:'Roboto', Arial, sans-serif; font-size: 20px; line-height: 32px; text-align:left; color:#ffffff; padding-bottom: 18px;">
          <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare pharetra elit, ac dapibus diam fermentum a. Fusce varius mauris et ante.</p></td></tr><!-- Button --><!-- END Button --><!-- Alt Button --><tr>
         <td align="left">
          <table border="0" cellpadding="0" cellspacing="0" style="background-color:none; border-radius: 4px;border:1px solid #FFF">
           
            <tr>
             <td class="btn btnp-9-20 fz-14 lh-18 c-white l-white" style="font-family:'Roboto', Arial, sans-serif; text-align:center; mso-padding-alt:9px 20px; font-size: 16px; line-height: 18px; color:#ffffff;">
              <p>
               <a  class="link c-purple"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac07f84655b1d36b4cf7174c09db7cdca1412ee46a4401011b9de5a610d818129a9bfc043df75a2e691aac7430bfa2a18bceb6d507b9c9666a" style="color:#ffffff; text-decoration:none; display: block; padding: 16px 24px" target="_blank" title="Register now">Secondary inverse button</a></p></td></tr></table></td></tr><!-- END Alt Button --></table></td></tr></table><!-- END Purple Intro Banner --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 48px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td style="font-size:1px;line-height:48px" width="111">
      &nbsp;</td></tr></table><!-- END Divider - 48px --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- 3 Column Event Summary --><table border="0" cellpadding="0" cellspacing="0" class="bg-grey-f7" role="presentation" style="background-color:#f3f4f4;" width="100%">
   
    <tr>
     <td class="pt-24 px-30" style="padding-top: 24px; padding-left: 24px; padding-right: 24px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
       
        <tr>
         <td class="title fz-26 lh-30 pb-19" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 26px; line-height: 30px; color:#19151c; font-weight:bold; padding-bottom: 30px;">
          <p>
           Headline Goes Here</p></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%">
       
        <tr>
         <th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="176">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <td class="img pb-12" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 24px;">
              <img alt="calendar" border="0" data-assetid="71815" height="51" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/d0a75930-eedf-459d-bcb3-c356e817cc49.png" style="height: 51px; width: 51px; padding: 0px; text-align: center;" width="51"></td></tr><tr>
             <td class="title fz-16 lh-20 pb-12" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 20px; line-height: 24px; color:#19151c; padding-bottom: 18px;">
              <p>
               Event heading</p></td></tr><tr>
             <td class="text fz-14 lh-18 pb-14" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 14px;">
              <p>
               September 25, 2021</p></td></tr><tr>
             <td class="text fz-14 lh-18 pb-14" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 14px;">
              <p>
               Introduction text will go here incid que iusam est, accusantium?</p></td></tr><tr>
             <td class="text fz-18 lh-22" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#BB9D65;padding-bottom:25px">
              <p>
               <a  class="link"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac07f84655b1d36b4cf7174c09db7cdca1412ee46a4401011b9de5a610d818129a9bfc043df75a2e691aac7430bfa2a18bceb6d507b9c9666a" style="color:#51247a;text-decoration:underline;" target="_blank" title="#">This is a text link</a></p></td></tr></table></th><th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" width="26">
         </th><th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="176">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <td class="img pb-12" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 24px;">
              <img alt="calendar" border="0" data-assetid="71815" height="51" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/d0a75930-eedf-459d-bcb3-c356e817cc49.png" style="height: 51px; width: 51px; padding: 0px; text-align: center;" width="51"></td></tr><tr>
             <td class="title fz-16 lh-20 pb-12" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 20px; line-height: 24px; color:#19151c; padding-bottom: 18px;">
              <p>
               Event heading</p></td></tr><tr>
             <td class="text fz-14 lh-18 pb-14" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 14px;">
              <p>
               September 25, 2021</p></td></tr><tr>
             <td class="text fz-14 lh-18 pb-14" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 14px;">
              <p>
               Introduction text will go here incid que iusam est, accusantium?</p></td></tr><tr>
             <td class="text fz-18 lh-22" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#BB9D65;padding-bottom:25px">
              <p>
               <a  class="link"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac07f84655b1d36b4cf7174c09db7cdca1412ee46a4401011b9de5a610d818129a9bfc043df75a2e691aac7430bfa2a18bceb6d507b9c9666a" style="color:#51247a;text-decoration:underline;" target="_blank" title="#">This is a text link</a></p></td></tr></table></th><th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" width="26">
         </th><th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="176">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <td class="img pb-12" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 24px;">
              <img alt="calendar" border="0" data-assetid="71815" height="51" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/d0a75930-eedf-459d-bcb3-c356e817cc49.png" style="height: 51px; width: 51px; padding: 0px; text-align: center;" width="51"></td></tr><tr>
             <td class="title fz-16 lh-20 pb-12" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 20px; line-height: 24px; color:#19151c; padding-bottom: 18px;">
              <p>
               Event heading</p></td></tr><tr>
             <td class="text fz-14 lh-18 pb-14" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 14px;">
              <p>
               September 25, 2021</p></td></tr><tr>
             <td class="text fz-14 lh-18 pb-14" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 14px;">
              <p>
               Introduction text will go here incid que iusam est, accusantium?</p></td></tr><tr>
             <td class="text fz-18 lh-22" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#BB9D65;padding-bottom:25px">
              <p>
               <a  class="link"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac07f84655b1d36b4cf7174c09db7cdca1412ee46a4401011b9de5a610d818129a9bfc043df75a2e691aac7430bfa2a18bceb6d507b9c9666a" style="color:#51247a;text-decoration:underline;" target="_blank" title="#">This is a text link</a></p></td></tr></table></th></tr></table></td></tr></table><!-- END 3 Column Event Summary --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 48px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
    
      <tr>
        <td style="font-size:1px;line-height:48px" width="111">
          &nbsp;</td></tr></table><!-- END Divider - 48px --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td class="pt-25 px-40 mpx-20" style="padding-left: 24px; padding-right: 24px;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
       <!-- Headings -->
        <tr>
         <td class="title fz-26 lh-31 pb-24" style="font-family:'Roboto', Arial, sans-serif; font-size: 24px; line-height: 29px; color:#19151C; font-weight: bold; padding-bottom: 20px;">
          <p>
           Event name here</p></td></tr><!-- END Headings --><!-- Body Text --><tr>
         <td class="text fz-14 lh-20 a-center pb-24" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; font-size: 16px; line-height: 26px">
          <p>
           Introduction text will go here incid que iusam hitio dolupti aspicaes quatus elenecatem voluptatur? Quiatur simpori oreria dolorerro. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, accusantium?</p></td></tr><!-- END Body Text --><!-- Button --><!-- END Button --><!-- Button --><!-- END Button --></table></td></tr></table></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 24px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td style="font-size:1px;line-height:24px" width="111">
      &nbsp;</td></tr></table><!-- END Divider - 24px --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Event Details --><table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
   
    <tr>
     <td class="py-16 px-10 mpx-20" style="padding-left: 10px; padding-right: 10px;">
      <table border="0" cellpadding="0" cellspacing="0" class="mw-100p me-center" width="100%">
       
        <tr>
         <td align="center">
          <table border="0" cellpadding="0" cellspacing="0" class="mw-100p">
           
            <tr>
             <th class="column bg-grey-f7 mh-auto mpt-30 mpb-25" height="160" style="font-size:0pt; line-height:0pt; padding-top:16px; margin:0; font-weight:normal;background-color:#f3f4f4;" valign="top" width="180">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
               
                <tr>
                 <td class="img-center pb-12" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 16px;padding-left:16px;padding-right:16px;">
                  <img alt="calendar" border="0" data-assetid="81261" height="55" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/d0a75930-eedf-459d-bcb3-c356e817cc49.png" style="height: 55px; width: 55px;" width="55"></td></tr><tr>
                 <td class="text fz-14 lh-20 a-center" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; font-size: 16px; line-height: 26px; text-align:left;padding-left:16px;padding-right:16px;">
                  <p>
                   August 4</p></td></tr></table></th><th class="m-hide" style="font-size: 0pt; line-height: 0pt;" width="27">
             </th><th class="column bg-grey-f7 mh-auto" style="font-size:0pt; line-height:0pt; padding-top:24px; margin:0; font-weight:normal;" valign="top">
             </th><th class="column bg-grey-f7 mh-auto mpt-30 mpb-25" height="160" style="font-size:0pt; line-height:0pt; padding-top:16px; margin:0; font-weight:normal;background-color:#f3f4f4;" valign="top" width="180">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
               
                <tr>
                 <td class="img-center pb-12" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 16px;padding-left:16px;padding-right:16px;">
                  <img alt="clock" border="0" data-assetid="81259" height="55" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/0835d720-87f9-4174-b5bc-d461a9604800.png" style="height: 55px; width: 55px;" width="55"></td></tr><tr>
                 <td class="text fz-14 lh-20 a-center" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; font-size: 16px; line-height: 26px; text-align:left;padding-left:16px;padding-right:16px;">
                  <p>
                   4:30 &ndash; 5:15pm<br>
                   (Brisbane GMT+10)</p></td></tr></table></th><th class="m-hide" style="font-size: 0pt; line-height: 0pt;" width="27">
             </th><th class="column bg-grey-f7 mh-auto" style="font-size:0pt; line-height:0pt; padding-top:24px; margin:0; font-weight:normal;" valign="top">
             </th><th class="column bg-grey-f7 mh-auto mpt-30 mpb-25" height="160" style="font-size:0pt; line-height:0pt; padding-top:16px; margin:0; font-weight:normal;background-color:#f3f4f4;" valign="top" width="180">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
               
                <tr>
                 <td class="img-center pb-12" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 16px;padding-left:16px;padding-right:16px;">
                  <img alt="pin" border="0" data-assetid="81260" height="55" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/5d10e78e-677b-4ec6-8a85-b8d72e27f130.png" style="height: 55px"></td></tr><tr>
                 <td class="text fz-14 lh-20 a-center" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; font-size: 16px; line-height: 26px; text-align:left;padding-left:16px;padding-right:16px;">
                  <p>
                   Online via Zoom</p></td></tr></table></th></tr></table></td></tr></table></td></tr></table><!-- END Event Details --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 48px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td style="font-size:1px;line-height:48px" width="111">
      &nbsp;</td></tr></table><!-- END Divider - 48px --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table border="0" cellpadding="0" cellspacing="0" width="100%">
    
      <tr>
        <td class="pt-25 px-40 mpx-20" style="padding-left: 24px; padding-right: 24px;">
          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
            <!-- Headings -->
              <tr>
                <td class="title fz-26 lh-31 pb-24" style="font-family:'Roboto', Arial, sans-serif; font-size: 24px; line-height: 29px; color:#19151C; font-weight: bold">
                  <p>
                    Important dates</p></td></tr><!-- END Headings --><!-- Body Text --><!-- END Body Text --><!-- Button --><!-- END Button --><!-- Button --><!-- END Button --></table></td></tr></table></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 24px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td style="font-size:1px;line-height:24px" width="111">
      &nbsp;</td></tr></table><!-- END Divider - 24px --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Key Dates - lt bkgd --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td class="pt-18 px-30" style="padding-left: 24px; padding-right: 24px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
       <!-- Date 1 -->
        <tr>
         <td class="pb-18">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <th class="column-top img" style="padding:0; margin:0; font-weight:normal; vertical-align:top; font-size:0pt; line-height:0pt; text-align:left;" width="65">
              <img alt="calendar" border="0" data-assetid="81257" height="56" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/d0a75930-eedf-459d-bcb3-c356e817cc49.png" style="height: 56px; width: 56px;" width="65"></th><th style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" width="24">
             </th><th style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
               
                <tr>
                 <td class="title fz-16 lh-20 pb-12" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 20px; line-height: 24px; color:#19151c; padding-bottom: 8px;">
                  <p>
                   August 31, 2025</p></td></tr><tr>
                 <td class="text fz-14 lh-20" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px;">
                  <p>
                   Introduction text will go here incid que iusam est, accusantium?</p></td></tr></table></th></tr></table></td></tr><!-- END Date 1 --></table></td></tr></table><!-- END Key Dates - lt bkgd --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 24px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td style="font-size:1px;line-height:24px" width="111">
      &nbsp;</td></tr></table><!-- END Divider - 24px --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Key Dates - lt bkgd --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td class="pt-18 px-30" style="padding-left: 24px; padding-right: 24px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
       <!-- Date 1 -->
        <tr>
         <td class="pb-18">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <th class="column-top img" style="padding:0; margin:0; font-weight:normal; vertical-align:top; font-size:0pt; line-height:0pt; text-align:left;" width="65">
              <img alt="calendar" border="0" data-assetid="81257" height="56" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/d0a75930-eedf-459d-bcb3-c356e817cc49.png" style="height: 56px; width: 56px;" width="65"></th><th style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" width="24">
             </th><th style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
               
                <tr>
                 <td class="title fz-16 lh-20 pb-12" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 20px; line-height: 24px; color:#19151c; padding-bottom: 8px;">
                  <p>
                   August 31, 2025</p></td></tr><tr>
                 <td class="text fz-14 lh-20" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px;">
                  <p>
                   Introduction text will go here incid que iusam est, accusantium?</p></td></tr></table></th></tr></table></td></tr><!-- END Date 1 --></table></td></tr></table><!-- END Key Dates - lt bkgd --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 24px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td style="font-size:1px;line-height:24px" width="111">
      &nbsp;</td></tr></table><!-- END Divider - 24px --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Key Dates - lt bkgd --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td class="pt-18 px-30" style="padding-left: 24px; padding-right: 24px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
       <!-- Date 1 -->
        <tr>
         <td class="pb-18">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <th class="column-top img" style="padding:0; margin:0; font-weight:normal; vertical-align:top; font-size:0pt; line-height:0pt; text-align:left;" width="65">
              <img alt="calendar" border="0" data-assetid="81257" height="56" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/d0a75930-eedf-459d-bcb3-c356e817cc49.png" style="height: 56px; width: 56px;" width="65"></th><th style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" width="24">
             </th><th style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
               
                <tr>
                 <td class="title fz-16 lh-20 pb-12" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 20px; line-height: 24px; color:#19151c; padding-bottom: 8px;">
                  <p>
                   August 31, 2025</p></td></tr><tr>
                 <td class="text fz-14 lh-20" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px;">
                  <p>
                   Introduction text will go here incid que iusam est, accusantium?</p></td></tr></table></th></tr></table></td></tr><!-- END Date 1 --></table></td></tr></table><!-- END Key Dates - lt bkgd --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 48px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td style="font-size:1px;line-height:48px" width="111">
      &nbsp;</td></tr></table><!-- END Divider - 48px --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Event Checklist --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td class="pt-24 px-30" style="padding-left: 24px; padding-right: 30px;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
       <!-- Title --><!-- END Title --><!-- 2 Cols -->
        <tr>
         <td class="pb-24">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="280">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
               
                <tr>
                 <td class="title fz-24 lh-28 pb-16" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 24px; line-height: 29px; color:#19151c; padding-bottom: 20px;">
                  <p>
                   Event checklist</p></td></tr><tr>
                 <td class="text fz-16 lh-20" style="color:#000001; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px;color:#3b383e; ">
                  <p>
                   Make sure you&rsquo;re ready for the event and have completed all the steps.<br>
                   <br>
                   Have a question or need some help registering? <a alias="TEXT-checklist-email" class="link-u" conversion="true" data-linkto="mailto:" href="mailto:ask@uq.edu.au?subject=" style="color:#51247a;text-decoration:underline;" target="_blank" title="Email Us">Email us</a> for more information.</p></td></tr></table></th><th class="column mpb-32 " style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" width="35">
             </th><th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="265">
              <!-- Ordered List --><table border="0" cellpadding="0" cellspacing="0" width="100%">
               
                <tr>
                 <td class="img pb-4" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 4px;" width="35">
                  <img alt="num 1" border="0" data-assetid="81256" height="43" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/e6cfa079-a8d6-4c0b-88e3-b9d608bcb419.png" style="height: 43px; width: 43px;" width="43"></td><td class="pb-4" style="font-size: 0pt; line-height: 0pt; padding-bottom: 4px;" width="16">
                  &nbsp;</td><td class="text fz-16 lh-20 pb-4" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 4px;">
                  Go to the <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac3cf63f0a5b9a132b409209331e126353e6eb085b47aa440356dcd55233abf496f9362b724f366654d2f5014f2a11fa0a0f94b5d404fa1294" style="color:#51247a;text-decoration:underline;" target="_blank" title="Go to the website">website</a></td></tr><tr>
                 <td class="img pb-4" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 4px;" width="35">
                  <img alt="num 2" border="0" data-assetid="81253" height="43" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/32e39374-5fef-4870-bbf7-925a99adad1d.png" style="height: 43px; width: 43px;" width="43"></td><td class="pb-4" style="font-size: 0pt; line-height: 0pt; padding-bottom: 4px;" width="16">
                  &nbsp;</td><td class="text fz-16 lh-20 pb-4" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 4px;">
                  <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9aca3150649d7473c31e3d4dbe4cc18e925deaa0d78724d4a683d5c65cfe03adb0b253d0e30f8217963350ef60d70733168e554ff26e38630c1" style="color:#51247a;text-decoration:underline;" title="Register for the event">Register</a>&nbsp;for the event</td></tr><tr>
                 <td class="img pb-4" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 4px;" width="35">
                  <img alt="num 3" border="0" data-assetid="81255" height="43" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/7631ab46-a0df-47df-934c-25d1cc40e839.png" style="height: 43px; width: 43px;" width="43"></td><td class="pb-4" style="font-size: 0pt; line-height: 0pt; padding-bottom: 4px;" width="16">
                  &nbsp;</td><td class="text fz-16 lh-20 pb-4" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 4px;">
                  Add it to your calendar</td></tr><tr>
                 <td class="img pb-4" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 4px;" width="35">
                  <img alt="num 4" border="0" data-assetid="81252" height="43" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/cd5a02c7-cb8a-458b-b031-a8f97c328ea0.png" style="height: 43px; width: 43px;" width="43"></td><td class="pb-4" style="font-size: 0pt; line-height: 0pt; padding-bottom: 4px;" width="16">
                  &nbsp;</td><td class="text fz-16 lh-20 pb-4" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 4px;">
                  Get directions to the event</td></tr><tr>
                 <td class="img pb-4" style="font-size:0pt; line-height:0pt; text-align:left;" width="35">
                  <img alt="num 5" border="0" data-assetid="81254" height="43" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/c906d57f-3a5f-4000-ae75-05a97effa5f2.png" style="height: 43px; width: 43px;" width="43"></td><td class="pb-4" style="font-size: 0pt; line-height: 0pt;" width="16">
                  &nbsp;</td><td class="text fz-16 lh-20 pb-4" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e">
                  You're done!</td></tr></table><!-- END Ordered List --></th></tr></table></td></tr><!-- END 2 Cols --></table></td></tr></table><!-- END Event Checklist --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 48px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
    
      <tr>
        <td style="font-size:1px;line-height:48px" width="111">
          &nbsp;</td></tr></table><!-- END Divider - 48px --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- 3 Column Event Summary --><table border="0" cellpadding="0" cellspacing="0" class="bg-grey-f7" role="presentation" style="background-color:#f3f4f4;" width="100%">
   
    <tr>
     <td class="pt-24 px-30" style="padding-top: 24px; padding-left: 24px; padding-right: 24px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
       
        <tr>
         <td class="title fz-26 lh-30 pb-19" style="font-weight: 500; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 26px; line-height: 30px; color:#19151c; font-weight:bold; padding-bottom: 30px;">
          <p>
           Starter program webinars</p></td></tr></table><table border="0" cellpadding="0" cellspacing="0" width="100%">
       
        <tr>
         <th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="176">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <td class="img pb-12" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 24px;">
              <img alt="clock" border="0" data-assetid="71804" height="50" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/0835d720-87f9-4174-b5bc-d461a9604800.png" style="height: 50px; width: 50px;" width="50"></td></tr><tr>
             <td class="title fz-16 lh-20 pb-12" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 20px; line-height: 24px; color:#19151c; padding-bottom: 18px;">
              <p>
               Student clubs and connection</p></td></tr><tr>
             <td class="text fz-14 lh-18 pb-14" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 14px;">
              <p>
               November 6, 2024<br>
               4pm &ndash; 5:30pm*</p></td></tr><tr>
             <td class="text fz-14 lh-18 pb-14" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 24px;">
              <p>
               Find out about the extracurricular programs on offer and how to improve your employability skills during your studies.</p></td></tr></table></th><th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" width="26">
         </th><th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="176">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <td class="img pb-12" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 24px;">
              <img alt="calendar" border="0" data-assetid="71815" height="51" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/d0a75930-eedf-459d-bcb3-c356e817cc49.png" style="height: 51px; width: 51px; padding: 0px; text-align: center;" width="51"></td></tr><tr>
             <td class="title fz-16 lh-20 pb-12" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 20px; line-height: 24px; color:#19151c; padding-bottom: 18px;">
              <p>
               Student clubs and connection</p></td></tr><tr>
             <td class="text fz-14 lh-18 pb-14" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 14px;">
              <p>
               November 6, 2024<br>
               4pm &ndash; 5:30pm*</p></td></tr><tr>
             <td class="text fz-14 lh-18 pb-14" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 24px;">
              <p>
               Find out about the extracurricular programs on offer and how to improve your employability skills during your studies.</p></td></tr></table></th><th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" width="26">
         </th><th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="176">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <td class="img pb-12" style="font-size:0pt; line-height:0pt; text-align:left; padding-bottom: 24px;">
              <img alt="pin" border="0" data-assetid="71810" height="51" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/5d10e78e-677b-4ec6-8a85-b8d72e27f130.png" style="height: 51px"></td></tr><tr>
             <td class="title fz-16 lh-20 pb-12" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 20px; line-height: 24px; color:#19151c; padding-bottom: 18px;">
              <p>
               Student clubs and connection</p></td></tr><tr>
             <td class="text fz-14 lh-18 pb-14" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 14px;">
              <p>
               November 6, 2024<br>
               4pm &ndash; 5:30pm*</p></td></tr><tr>
             <td class="text fz-14 lh-18 pb-14" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#3b383e; padding-bottom: 24px;">
              <p>
               Find out about the extracurricular programs on offer and how to improve your employability skills during your studies.</p></td></tr></table></th></tr></table></td></tr></table><!-- END 3 Column Event Summary --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 48px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td style="font-size:1px;line-height:48px" width="111">
      &nbsp;</td></tr></table><!-- END Divider - 48px --></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- 2 Column Story Block --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td class="pt-24 px-20 pb-4" style="padding-left: 24px; padding-right: 24px">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
       
        <tr>
         <th class="column-top mpb-18" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="286">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <td class="fluid-img pb-19" style="font-size:0pt; line-height:0pt; text-align:center; padding-bottom: 20px;">
              <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac4ce6686549d51b62c9e3cec13354fc60068ea022656537a51d10a70b62ea93090a6cf1a99ba1fe86252df1057b112c5257571ba6bc4de484" title="#"><img alt="image-1" border="0" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/174f995e-003b-43ad-990d-1a9ee71e7304.jpg" style="height: auto; width: 100%;" width="284"></a></td></tr><tr>
             <td class="title fz-16 lh-20 pb-20 px-10" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px;padding-bottom:6px">
              <p>
               Uni life</p></td></tr><tr>
             <td class="title fz-20 lh-24 pb-20 px-10" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 24px; line-height: 24px; color:#19151C; padding-bottom: 20px;">
              <p>
               Headline goes here</p></td></tr><tr>
             <td class="text fz-14 lh-20 pb-18 px-10" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; padding-bottom: 18px;">
              <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et consectetur adipiscing nulla rhoncus, dapibus ipsum feugiat.</p></td></tr><tr>
             <td class="text fz-14 lh-20 pb-18 px-10" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; padding-bottom: 18px;">
              <p>
               6-minute read</p></td></tr><tr>
             <td class="text fz-18 lh-22" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#BB9D65;">
              <p>
               <a  class="link"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac07f84655b1d36b4cf7174c09db7cdca1412ee46a4401011b9de5a610d818129a9bfc043df75a2e691aac7430bfa2a18bceb6d507b9c9666a" style="color:#51247a;text-decoration:underline;" target="_blank" title="#">This is a text link</a></p></td></tr></table></th><th class="column mpb-10" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" width="24">
         </th><th class="column-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; vertical-align:top;" width="286">
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
           
            <tr>
             <td class="fluid-img pb-19" style="font-size:0pt; line-height:0pt; text-align:center; padding-bottom: 20px;">
              <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac4ce6686549d51b62c9e3cec13354fc60068ea022656537a51d10a70b62ea93090a6cf1a99ba1fe86252df1057b112c5257571ba6bc4de484" title="#"><img alt="image 2" border="0" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/174f995e-003b-43ad-990d-1a9ee71e7304.jpg" style="height: auto; width: 100%;" width="284"></a></td></tr><tr>
             <td class="title fz-16 lh-20 pb-20 px-10" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px;padding-bottom:6px">
              <p>
               Uni life</p></td></tr><tr>
             <td class="title fz-20 lh-24 pb-20 px-10" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 24px; line-height: 24px; color:#19151C; padding-bottom: 20px;">
              <p>
               Headline goes here</p></td></tr><tr>
             <td class="text fz-14 lh-20 pb-18 px-10" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; padding-bottom: 18px;">
              <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et consectetur adipiscing nulla rhoncus, dapibus ipsum feugiat.</p></td></tr><tr>
             <td class="text fz-14 lh-20 pb-18 px-10" style="color:#3b383e; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; padding-bottom: 18px;">
              <p>
               6-minute read</p></td></tr><tr>
             <td class="text fz-18 lh-22" style="font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 16px; line-height: 26px; color:#BB9D65;">
              <p>
               <a  class="link"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac07f84655b1d36b4cf7174c09db7cdca1412ee46a4401011b9de5a610d818129a9bfc043df75a2e691aac7430bfa2a18bceb6d507b9c9666a" style="color:#51247a;text-decoration:underline;" target="_blank" title="#">This is a text link</a></p></td></tr></table></th></tr></table></td></tr></table><!-- END 2 Column Story Block --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Divider - 48px --><table border="0" cellpadding="0" cellspacing="0" width="100%">
   
    <tr>
     <td style="font-size:1px;line-height:48px" width="111">
      &nbsp;</td></tr></table><!-- END Divider - 48px --></td></tr></table>
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Contact Banner --><table border="0" cellpadding="0" cellspacing="0" class="bg-purple" style="background-color:#51247A;" width="100%">
   
    <tr>
     <td class="pt-24 pb-36 px-24 mpt-24 mpb-24 mpx-24" style="padding-top: 24px; padding-bottom: 24px; padding-left: 24px; padding-right: 24px;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%">
       
        <tr>
         <td class="title fz-18 lh-22 c-white l-white" style="font-weight: bold; font-family:'Roboto', Arial, sans-serif; text-align:left; font-size: 24px; line-height: 30px; color:#f3f3f4; padding-bottom: 20px;">
          Get in touch with us</td></tr><tr>
         <td class="text fz-18 lh-20 c-white l-white" style="font-family:'Roboto', Arial, sans-serif; font-size: 18px; line-height: 20px; text-align:left; color:#f3f3f4;padding-bottom: 12px" valign="top">
          <a  class="link c-white"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac0a8b2d00915c5238b0e0de85286a4691468c9b01dde435e48cdd33363ae03a8819cf79fc787bed97c2145701477bf940" style="text-decoration:underline;color:#fffffe;" target="_blank" title="Submit Enquiry">Send us an enquiry</a></td></tr><tr>
         <td class="text fz-18 lh-20 c-white l-white" style="font-family:'Roboto', Arial, sans-serif; font-size: 18px; line-height: 20px; text-align:left; color:#f3f3f4;padding-bottom: 12px" valign="top">
          <a class="link c-white" href="tel:+61 733469872" style="text-decoration:underline; color:#fffffe;" target="_blank">+61 7 3346 9872</a></td></tr><tr>
         <td class="text fz-18 lh-20 c-white l-white" style="font-family:'Roboto', Arial, sans-serif; font-size: 18px; line-height: 20px; text-align:left; color:#f3f3f4;padding-bottom: 30px" valign="top">
          <a class="link c-white" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9aca95d46d212daaed400d1f8aec1870a3ebacc9b99374a61c95b2569a043163ef05fcf8a265308f55664e14d8f9506f9c3" style="text-decoration:underline; color:#fffffe;" target="_blank">uq.edu.au</a></td></tr><tr>
         <th class="column-dir-top" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal; direction:ltr; vertical-align:top;text-align:left;" width="185">
          <!-- Socials --><table border="0" cellpadding="0" cellspacing="0">
           
            <tr>
             <td class="img" style="font-size:0pt; line-height:0pt; text-align:left;">
              <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9accc9871bb940a289a9cd7cb339efc512435e0b5011cdef3a8906b7fc7e3978baf4779cb4a311546dd8f62a016b5e8e4faa559d9a67b0b54df" target="_blank" title="Facebook"><img alt="Facebook" data-assetid="234101" height="32" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/dab272e1-4a73-4075-a9a1-fce4bd121725.png" style="height: 32px; width: 32px; padding: 0px; text-align: center;" width="32"></a></td><td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
              &nbsp;</td><td class="img" style="font-size:0pt; line-height:0pt; text-align:left;">
              <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9aca31d4ae6a496a429dbf548887bd0961c4204c7221c6b5dfdd5cdc45dd3156fadb8027f3300446a70ac0a16bca5468d0cac547c656c3fbca9" target="_blank" title="Linkedin"><img alt="Linkedin" data-assetid="177239" height="32" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/39271ee0-141e-4c24-a3d9-c5adbb4c03e8.png" style="height: 32px; width: 32px; padding: 0px; text-align: center;" width="32"></a></td><td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
              &nbsp;</td><td class="img" style="font-size:0pt; line-height:0pt; text-align:left;">
              <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac06af0e885f8ee2bf751e66c1147fc5b7fcd2d500e2907d89ad685558a3f251ecb4d73a019317a57816abc6cde0977076c3a501c208bce80e" target="_blank" title="X"><img alt="X, formerly known as Twitter" data-assetid="177234" height="32" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/ee2c24c9-4c2c-4171-b0d3-c4f56b2b0358.png" style="height: 32px; width: 32px; padding: 0px; text-align: center;" width="32"></a></td><td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
              &nbsp;</td><td class="img" style="font-size:0pt; line-height:0pt; text-align:left;">
              <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9acaca668a3cac13be770e87afcc9868d90e9ef040049db8495af2dd1a71a748c5af242bf3d2783aec9bcd0a815b7ddee244950ada59d334c0d" target="_blank" title="Youtube"><img alt="Youtube" data-assetid="177231" height="32" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/66a16759-bf45-4062-bd4e-6781527d77d7.png" style="height: 32px; width: 32px; padding: 0px; text-align: center;" width="32"></a></td><td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
              &nbsp;</td><td class="img" style="font-size:0pt; line-height:0pt; text-align:left;">
              <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac1e9057b40858b564e50bfd4753b5857dd831173bf86225fcea51948512e6618cbcfe3c569fb02e53a9b966497581fe31a2575e898218df1a" target="_blank" title="Instagram"><img alt="Instagram" data-assetid="177236" height="32" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/cfddad1c-b608-4a89-bf15-567129ddec01.png" style="height: 32px; width: 32px; padding: 0px; text-align: center;" width="32"></a></td><td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
              &nbsp;</td><td class="img" style="font-size:0pt; line-height:0pt; text-align:left;">
              <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac97e8081eac687eca8fbd031095e66e3f9ddf20425847561ad11284ddf48ee1572bb7306954a8939afd726944d3f133555c9dfddddf0b024c" target="_blank" title="TikTok"><img alt="TikTok" data-assetid="177236" height="32" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/da1fc854-daef-4538-aeda-e1de93253627.png" style="height: 32px; width: 32px; padding: 0px; text-align: center;" width="32"></a></td><td class="mw-20" style="font-size: 0pt; line-height: 0pt;" width="16">
              &nbsp;</td><td class="img" style="font-size:0pt; line-height:0pt; text-align:left;">
              <a   data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9acdc691b72a5c3ec78fd13d92370a4d8f40fad38b55ede772bf27e701df8309cc6e7015ce4c4c56f74b4c04683e7e152514ffd35943f6dcfed" target="_blank" title="Weibo"><img alt="Weibo" data-assetid="177236" height="32" src="https://image.explore.uq.edu.au/lib/fe37117175640478711776/m/1/92b0da4c-07a5-4026-9974-a599c4cfefa6.png" style="height: 32px; width: 32px; padding: 0px; text-align: center;" width="32"></a></td></tr></table><!-- END Socials --></th></tr></table></td></tr></table><!-- END Contact Banner --></td></tr></table>
          <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><!-- Footer --><table border="0" cellpadding="0" cellspacing="0" class="bg-white" style="background-color:#ffffff;" width="100%">
   
    <tr>
     <td class="pt-24 pb-20 px-70 mpx-25" style="padding-top: 24px; padding-bottom: 20px; padding-left: 24px; padding-right: 24px;">
      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
       
        <tr>
         <td class="text fz-10 lh-14 a-center pb-23" style="color:#000001; font-family:'Roboto', Arial, sans-serif; font-size: 16px; line-height: 20px; text-align:left; padding-bottom: 20px">
          <p>
           The University of Queensland, St Lucia Qld 4072 Australia<br>
           <a  class="link-u"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac4402ff3727b8d9c9c6323aa7dbd4e05f9e3a9e3e447cd0c094ced9e72dd8e420737db8ad0730b4d8632c9c2a77bed5c4" style="color:#51247a;text-decoration:underline;font-weight:normal" target="_blank" title="Institution details">CRICOS 00025B</a>&nbsp;&nbsp; | &nbsp;&nbsp; <a  class="link-u"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9ac4aa6ce7b8e4918515f27f5668d8351e29221c03b20c507ce8f2076a469c44cd07529f8603f6961bbc8226e7ab0e55240" style="color:#51247a;text-decoration:underline;font-weight:normal" target="_blank" title="Institution details">TEQSA PRV12080</a></p></td></tr><tr>
         <td class="text fz-10 lh-14 a-center pb-23" style="color:#000001; font-family:'Roboto', Arial, sans-serif; font-size: 16px; line-height: 20px; text-align:left; padding-bottom: 28px">
          <p>
           Read <a  class="link-u"  data-linkto="https://" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9acb7e504baf8761ba9863229400e0d21476ef37229ee5cdf6fbb4ad5d4f62da57f5f4d9940d45f6a374ec9ebbc835badf9" style="color:#51247a;text-decoration:underline;font-weight:normal" target="_blank" title="Marketing consent and privacy notice">UQ's marketing consent and privacy notice</a>.</p></td></tr><tr>
         <td class="text fz-10 lh-14 a-center pb-23" style="color:#000001; font-family:'Roboto', Arial, sans-serif; font-size: 16px; line-height: 20px; text-align:left; padding-bottom: 10px">
          <p>
           <a  class="link"  data-linkto="other" href="http://click.explore-test.uq.edu.au/?qs=0b948bfd746bc9acefd7ace50307a250b28783a9dd9321f2b942ff668665355ec52f883ab81cc1b1d6576cb64af4c88958c57bfa64f72db5d1870e14eff3e4f24578e858ff52df5f" style="color:#51247a;text-decoration:underline;font-weight:normal" target="_blank" title="Opt out or manage your subscriptions">Unsubscribe</a> from {mailing list name}</p></td></tr></table></td></tr></table><!-- END Footer --></td></tr></table>
         </td>
        </tr>
       </table>
      </td>
     </tr>
    </table>
   </center>
  </body>
  </html>

`,
};
