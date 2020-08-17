import { useEffect } from '@storybook/client-api';
import expandedStory from '../../../.storybook/decorators/expanded.js';

// import scripts
import headerCreate from '@uq-uidf/header/src/js/header.es6';
import siteHeaderNav from '@uq-uidf/site-header/src/js/site-header-navigation.es6';

// import HTML template strings
import headerHTML from '../../components/header/header.html';
import siteHeaderHTML from '../../components/site-header/site-header.html';
import footerHTML from '../../components/footer/footer.html';

export default {
    title: 'Patterns/Header - site title - content - footer',
    decorators: [expandedStory]
};

export const example = () => {
    useEffect(() => {
        new headerCreate();
        var navelement = document.getElementById("jsNav");
        var nav = new siteHeaderNav(navelement, "uq-site-header__navigation");
      });
    return `
      ${headerHTML}
      ${siteHeaderHTML}
      <br/><br/>
      <div class="row">
        <div class="column">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Ut tellus elementum sagittis vitae et leo. Eu sem integer vitae justo. Massa vitae tortor condimentum lacinia quis. Vel fringilla est ullamcorper eget nulla facilisi. Quis imperdiet massa tincidunt nunc. Convallis tellus id interdum velit laoreet id. Eu mi bibendum neque egestas congue quisque egestas diam in. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Vitae congue eu consequat ac felis donec et odio pellentesque. Mauris augue neque gravida in fermentum et. Dui vivamus arcu felis bibendum ut.</p>
          <p>Id diam vel quam elementum pulvinar. Vestibulum sed arcu non odio euismod lacinia. Facilisis sed odio morbi quis. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Porttitor eget dolor morbi non arcu risus quis varius quam. Parturient montes nascetur ridiculus mus mauris. Nunc congue nisi vitae suscipit tellus. Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Et ultrices neque ornare aenean euismod elementum nisi. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis. Tellus elementum sagittis vitae et leo. Porta nibh venenatis cras sed felis eget velit aliquet. Gravida in fermentum et sollicitudin ac orci phasellus.</p>
        </div>
      </div>
      <br/><br/>
      ${footerHTML}
    `;
};
