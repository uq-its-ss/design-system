import { layoutDecorator } from "../../../../lib/decorators";
import { storyRenderer } from "../../../../lib/storyRenderer";
import * as StoryCardStories from "../../../components/story-card/story-card.stories";
import * as CardStories from "../../../components/card/card.stories";
import "@uqds/layout/src/scss/main.scss";

const { NewsCard, LandscapeCard, LandscapeNoImageCard, FeatureCard } =
  storyRenderer(StoryCardStories);
const { Text: Card } = storyRenderer(CardStories);

export default {
  title: "Layout/Page layouts/Sidebar right",
  parameters: {
    layout: "fullscreen",
  },
};

export const SidebarRight = {
  decorators: [layoutDecorator],
  render: () => `
<div class="uq-container">
  <div class="uq-sidebar-right-layout">
    <div class="uq-sidebar-right-layout__main">
      <div class="uqds-layout-demo-el"></div> 
    </div>
    <div class="uq-sidebar-right-layout__sidebar">
      <div class="uqds-layout-demo-el"></div> 
    </div>
  </div>
</div>
`,
};

export const NewsExample = {
  render: () => `
<div class="uq-container">
  <div class="uq-sidebar-right-layout uq-reduced-spacing">
    <div class="uq-sidebar-right-layout__main">
      <div class="uq-section">
        <div class="uq-card-grid">
          ${FeatureCard({ title: "How to host a climate positive Olympic Games", description: "Online gaming could be the answer to engaging young Queenslanders to help create a legacy for the city from the Brisbane 2032 Olympic and Paralympic Games.", image: "images/news/feature.jpg", topLabel: null })}
          <div class="uq-card-grid uq-card-grid--target-2x">
            ${NewsCard({ title: "Giant new snake species identified in the Amazon", description: "A team of scientists on location with a film crew in the remote Amazon has uncovered a previously undocumented species.", image: "images/news/image-1.jpg", topLabel: null })}
            ${NewsCard({ title: "Setting a course for improving Queensland’s waterways", description: "University of Queensland scientists are leading efforts to explore a water quality trading scheme to improve the state’s water.", image: "images/news/image-3.jpg", topLabel: null })}
            ${NewsCard({ title: "UQ start-up to help solar farms power on", description: "A tech start-up from The University of Queensland is set to make efficiencies in the renewable energy sector by detecting.", image: "images/news/image-4.jpg", topLabel: "Feature" })}
            ${NewsCard({ title: "Overweight or obese COVID-19 patients at risk of more severe disease", description: "COVID-19 patients who are overweight or obese have more severe symptoms and are highly likely to require invasive respiratory.", image: "images/news/image-2.jpg", topLabel: null })}
          </div>
        </div>
      </div>
      <div class="uq-section">
        <div class="uq-section__header">
          <h2 class="uq-section__title">Science and technology news</h2>
          <div class="uq-section__link"><a href="#">See more science and technology news</a></div>
        </div>
        <div class="uq-card-grid">
          ${LandscapeCard({ title: "Sustainable battery research wins UQ's Three Minute Thesis", image: "images/news/image-1.jpg", topLabel: null })}
          ${LandscapeCard({ title: "UQ's most fascinating research gadgets revealed", image: "images/news/image-2.jpg", topLabel: null })}
          ${LandscapeCard({ title: "Innovative research to prevent medication related harm", image: "images/news/image-3.jpg", topLabel: null })}
        </div> 
      </div>
      <div class="uq-section">
        <div class="uq-section__header">
          <h2 class="uq-section__title">Brisbane Olympics 2032</h2>
        </div>
        <div class="uq-card-grid">
          ${LandscapeCard({ title: "Our commitment to 2032 Olympic and Paralympic Games", image: "images/news/image-7.jpg", topLabel: null })}
          ${LandscapeCard({ title: "Olympic and Paralympian medallists among UQ Sporting Scholarship received", image: "images/news/image-8.jpg", topLabel: null })}
          ${LandscapeCard({ title: "Young Queenslanders changing the game on Brisbane 2032 legacy", image: "images/news/image-9.jpg", topLabel: null })}
        </div> 
      </div>
    </div>
    <div class="uq-sidebar-right-layout__sidebar">
      <div class="uq-section">
        <div class="uq-section__header">
          <h2 class="uq-section__title">Editors' pick</h2>
        </div>
        <div class="uq-card-grid">
            ${LandscapeCard({ title: "Moving policy forward nanotechnology", image: "images/news/image-2.jpg", topLabel: null })}
            ${LandscapeCard({ title: "From 'face of UQ' to champion of diversity", image: "images/news/image-1.jpg", topLabel: null })}
            ${LandscapeCard({ title: "Gene editing for fun and profit: it’s a knockout!", image: "images/news/image-3.jpg", topLabel: null })}
            ${LandscapeCard({ title: "Broome diaries: in search of bushfoods in the Kimberly region", image: "images/news/image-4.jpg", topLabel: null })}
        </div>    
      </div>
      <div class="uq-section">
        <div class="uq-card-grid">
          ${Card({ title: "Subscribe to UQ News", description: "Get the latest from our newsroom." })}
        </div>
      </div>
      <div class="uq-section">
        <div class="uq-section__header">
          <h2 class="uq-section__title">More news</h2>
          <div class="uq-section__link"><a href="#">See all news</a></div>
        </div>
        <div class="uq-card-grid">
          ${LandscapeNoImageCard({ title: "UQ art exhibition honours intergenerational storytelling", topLabel: null })}
          ${LandscapeNoImageCard({ title: "ATAR advice for school leavers from Australia’s University Teacher of the Year", topLabel: "Video" })}
          ${LandscapeNoImageCard({ title: "UQ researcher investigates Indigenous health inequalities", topLabel: null })}
          ${LandscapeNoImageCard({ title: "Dangerous pregnancy complications linked to COVID-19", topLabel: null })}
          ${LandscapeNoImageCard({ title: "Dangerous pregnancy complications linked to COVID-19", topLabel: null })}
        </div>
      </div>
      <div class="uq-section">
        <div class="uq-section__header">
          <h2 class="uq-section__title">Media</h2>
        </div>
        <div class="uq-card-grid uq-card-grid--target-2x">
          ${NewsCard({ title: "Unpacking the potential of wattleseed", description: "A tech start-up from The University of Queensland is set to make efficiencies in the renewable energy sector by detecting.", image: "images/news/image-5.jpg", topLabel: "Audio" })}
          ${NewsCard({ title: "A Grey Matter podcast: Autism and genetics", description: "COVID-19 patients who are overweight or obese have more severe symptoms and are highly likely to require invasive respiratory.", image: "images/news/image-6.jpg", topLabel: "Video" })}
        </div>
      </div>
    </div>
  </div>
</div>
`,
};
