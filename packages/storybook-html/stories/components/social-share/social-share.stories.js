import { socialShare } from "@uqds/social/src/js/main";
import { initJs } from "../../../lib/initJs";

export default {
  title: "Components/Social Share",
  argTypes: {
    url: "text",
    title: "text",
  },
  args: {
    url: "https://news.uq.edu.au/article/2024/12/biodiversity-risk-most-rainforests",
    title: "Biodiversity at risk in most rainforests",
  },
  decorators: [
    (storyFn) =>
      initJs(storyFn, (component) => {
        socialShare(component);
      }),
  ],
  render: ({ url, title }) => {
    return `<div class="uq-social-share">
  <div class="uq-social-share__title">Share</div>
  <ul class="uq-social-share__list">
    <li class="uq-social-share__list__item">
      <a href="http://www.facebook.com/sharer.php?u=${url}&t=${title}" target="_blank" title="Share by Facebook">
        <span class="uq-icon uq-icon--social--facebook"></span>
      </a>
    </li>
    <li class="uq-social-share__list__item">
      <a href="https://www.linkedin.com/feed/?shareActive=true&shareUrl=${url}&text=${title}" target="_blank" title="Share by LinkedIn">
        <span class="uq-icon uq-icon--social--linkedin"></span>
      </a>
    </li>
    <li class="uq-social-share__list__item">
      <a href="https://x.com/intent/post?url=${url}&text=${title}" target="_blank" title="Share by X">
        <span class="uq-icon uq-icon--social--social-x-twitter"></span>
      </a>
    </li>
    <li class="uq-social-share__list__item">
      <button data-copy="${url}" class="uq-social-share__copy" title="Copy link">
        <span class="uq-icon uq-icon--standard--link"></span>
      </button>
    </li>
  </ul>
</div>`;
  },
};

export const SocialShare = {};
