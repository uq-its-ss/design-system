import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'uq-footer-classic',
  styleUrl: 'footer.css',
  shadow: false
})
export class Footer {
  @Prop() pageUrl: string;
  @Prop() pageLastUpdated: string;

  @Watch('pageUrl')
  validateName(newValue: string) {
    const isBlank = typeof newValue == null;
    if (isBlank) { throw new Error("pageUrl: required") };
  }

  hasLastUpdated() {
    return (typeof this.pageLastUpdated !== "undefined" && this.pageLastUpdated !== null && /\S/.test(this.pageLastUpdated));
  }

  render() {
    return (
      <Host>
        <div class="site-footer">
          <div class="site-footer__content">
            <div class="row">
              <div class="columns large-9 medium-8">
                <span class="footer__copyright">&copy; The University of Queensland</span>
                <div class="footer__contact">
                  Enquiries: <a href="tel:+61733651111" class="footer__link footer__enquiries-phone">+61 7 3365 1111</a> &nbsp; | &nbsp; <a href="https://uq.edu.au/contacts" class="footer__link footer__contacts-link" >Contact directory</a>
                </div>
                <div class="footer__meta">
                  <abbr title="Australian Business Number">ABN</abbr>: 63 942 912 684 &nbsp; | &nbsp; <abbr title="Commonwealth Register of Institutions and Courses for Overseas Students">CRICOS</abbr> Provider No: <a class="footer__link cricos__link" href="https://www.uq.edu.au/about/cricos-link" rel="external">00025B</a>
                </div>
              </div>
              <div class="columns large-3 medium-4">
                <div class="site-footer__emergency-contact">
                  <strong class="site-footer__sub-title">Emergency</strong><br />
                  Phone: <a href="tel:+61733653333" class="footer__link footer__emergency-phone">3365 3333</a>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="site-footer__footer">
                <div class="columns large-9 medium-8 end">
                  <a href="https://www.uq.edu.au/terms-of-use/" rel="external" class="footer__link footer__terms-link">Privacy &amp; Terms of use</a> &nbsp; | &nbsp; <a href={`http://www.uq.edu.au/feedback?r=${this.pageUrl}`} rel="nofollow" class="footer__link footer__feedback-link">Feedback</a> {this.hasLastUpdated() ? (<span>&nbsp; | &nbsp; <span class="footer__last-updated">Updated: {this.pageLastUpdated}</span></span>) : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}
