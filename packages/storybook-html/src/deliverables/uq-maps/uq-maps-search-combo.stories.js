import './uq-maps.scss';
import docs from './uq-maps-search-combo.docs.mdx';

export default {
  title: 'Deliverables/UQ Maps/Search combo menu',
  parameters: {
    layout: 'fullscreen',
    // viewMode: 'story',
    previewTabs: {
      canvas: {hidden: false}
    },
    docs: {
      page: docs,
      inlineStories: false
    },
    backgrounds: {
      default: 'Diagonal stripes'
    }
  }
};

export const initial = () => `
  <div class="uq-maps__search">

    <!-- START search field component -->
    <div class="uq-maps__search-field">
      <label for="search" class="uq-maps__search-field__label">Search</label>
      <input type="text" class="uq-maps__search-field__input" placeholder="Search" autocomplete="off" />
    </div>
    <!-- END search field component -->

    <ul class="uq-maps__search__results"></ul>

    <div class="uq-maps__search__no-results">No results found</div>
    
  </div>
`;

initial.storyName = "Initial";

export const focused = () => `
  <div class="uq-maps__search uq-maps__search--is-focused">

    <!-- START search field component -->
    <div class="uq-maps__search-field uq-maps__search-field--is-focused">
      <button class="uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search</label>
      <input type="text" class="uq-maps__search-field__input" placeholder="Search" autocomplete="off" />
      <button class="uq-maps__search-field__clear">Clear</button>
    </div>
    <!-- END search field component -->
    
    <ul class="uq-maps__search__results">
      <li class="uq-maps__search__results__item uq-maps__search__results__item--category">
        <a href="javascript:void(0)" title="Open banks & ATMs category">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_banks-and-atms.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Banks & ATMs</span>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item uq-maps__search__results__item--category">
        <a href="javascript:void(0)" title="Open bicycle repair stations category">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_bike-repair-station.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Bicycle repair stations</span>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item uq-maps__search__results__item--category">
        <a href="javascript:void(0)" title="Open bicycle storage rooms category">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_bike-storage-room.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Bicycle storage rooms</span>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item uq-maps__search__results__item--category">
        <a href="javascript:void(0)" title="Open bike boxes category">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_bike-box.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Bike boxes</span>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item uq-maps__search__results__item--category">
        <a href="javascript:void(0)" title="Open bike racks category">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_bike-rack.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Bike racks</span>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item uq-maps__search__results__item--category">
        <a href="javascript:void(0)" title="Open car parking category">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_car-parking.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Car parking</span>
            <small><span class="uq-maps__live-data-dot uq-maps__live-data-dot--green"></span> excellent availability</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item uq-maps__search__results__item--category">
        <a href="javascript:void(0)" title="Open child care facility category">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_parenting-facility.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Child care facility</span>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item uq-maps__search__results__item--category">
        <a href="javascript:void(0)" title="Open CityCycle category">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_citycycle.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>CityCycle</span>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item uq-maps__search__results__item--category">
        <a href="javascript:void(0)" title="Open computers — open access category">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_computer-lab.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Computers — open access</span>
            <small><span class="uq-maps__live-data-dot uq-maps__live-data-dot--yellow"></span> good availability</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item uq-maps__search__results__item--category">
        <a href="javascript:void(0)" title="Open emergency points category">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_emergency-distress-beacon.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Emergency points</span>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item uq-maps__search__results__item--category">
        <a href="javascript:void(0)" title="Open food & beverage category">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Food & beverage</span>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item uq-maps__search__results__item--category">
        <a href="javascript:void(0)" title="Open hand sanitiser category">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_hand-sanitiser.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Hand sanitiser</span>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item uq-maps__search__results__item--category">
        <a href="javascript:void(0)" title="Open landmarks category">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_landmark.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Landmarks</span>
          </span>
        </a>
      </li>
    </ul>
  </div>
`;

focused.storyName = "On focus or selecting origin/destination";

export const searching = () => `
  <div class="uq-maps__search uq-maps__search--is-searching">

    <!-- START search field component -->
    <div class="uq-maps__search-field uq-maps__search-field--is-searching">
      <button class="uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search</label>
      <input type="text" class="uq-maps__search-field__input" placeholder="Search" value="Food" autocomplete="off" />
      <button class="uq-maps__search-field__clear">Clear</button>
    </div>
    <!-- END search field component -->
    
    <ul class="uq-maps__search__results">
      <li class="uq-maps__search__results__item uq-maps__search__results__item--category">
        <a href="javascript:void(0)" title="Open food & beverage category">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span><em>Food</em> & beverage</span>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Main Food Court">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_generic.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">

            <!-- One of these as the primary description -->
            <span>Main <em>Food</em> Court</span>

            <!-- Zero or more of these as supporting description -->
            <small>Floor 3 • 21B (Main Refectory)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Main Course Food Precinct">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Main Course <em>Food</em> Precinct</span>
            <small>Floor 3 • 21B (Main Refectory)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Phizz Food Court">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Phizz <em>Food</em> Court</span>
            <small>Floor 2 • 63 (Physiology Lecture Theatres)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Market Cart">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Market Cart</span>
            <small>Floor 2 • 63 (Physiology Lecture Theatres)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Pizza Caffe">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Pizza Caffe</span>
            <small>Floor 3 • 22 (Schonell Theatre)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Kenko Sushi">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Kenko Sushi</span>
            <small>Floor 2 • 63 (Physiology Lecture Theatres)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Bam Boo Haus">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Bam Boo Haus</span>
            <small>Floor 3 • 21B (Main Refectory)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Vending machine with fresh food">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" aria-hidden="true" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Vending machine with fresh <em>food</em></span>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Red Room Bar and Grill">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Red Room Bar and Grill</span>
            <small>Floor 2 • 21C (Aung San Suu Kyi Conference Centre)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Student microwave">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_microwave.svg" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Student microwave</span>
            <small>Floor 3 • 21B (Main Refectory)</small>
          </span>
        </a>
      </li>
    </ul>
  </div>
`;

searching.storyName = "With search value";

export const searchingNoResults = () => `
  <div class="uq-maps__search uq-maps__search--is-searching">
    <!-- START search field component -->
    <div class="uq-maps__search-field uq-maps__search-field--is-searching">
      <button class="uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search</label>
      <input type="text" class="uq-maps__search-field__input" placeholder="Search" value="Food" autocomplete="off" />
      <button class="uq-maps__search-field__clear">Clear</button>
    </div>
    <!-- END search field component -->
    <div class="uq-maps__search__no-results">No results found</div>
  </div>
`;

searchingNoResults.storyName = "With search value but no results";

export const searchingError = () => `
  <div class="uq-maps__search uq-maps__search--is-searching">
    <!-- START search field component -->
    <div class="uq-maps__search-field uq-maps__search-field--is-searching">
      <button class="uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search</label>
      <input type="text" class="uq-maps__search-field__input" placeholder="Search" value="Food" autocomplete="off" />
      <button class="uq-maps__search-field__clear">Clear</button>
    </div>
    <!-- END search field component -->
    <div class="uq-maps__search__no-results">There was a problem with your search.<br/>Please try again later.</div>
  </div>
`;

searchingError.storyName = "With search value but with error";

export const searchingInCategory = () => `
  <div class="uq-maps__search uq-maps__search--is-searching">

    <!-- START search field component -->
    <div class="uq-maps__search-field uq-maps__search-field--is-searching">
      <button class="uq-maps__search-field__back">Back</button>
      <label for="search" class="uq-maps__search-field__label">Search</label>
      <input type="text" class="uq-maps__search-field__input" placeholder="Search" value="Food" autocomplete="off" />
      <button class="uq-maps__search-field__clear">Clear</button>
    </div>
    <!-- END search field component -->
    
    <div class="uq-maps__search__category-title">Food & beverage</div>

    <ul class="uq-maps__search__results">
      <li class="uq-maps__search__results__item uq-maps__search__results__item--view-all">
        <a href="javascript:void(0)" title="View all on map">
          <span class="uq-maps__search__results__item__text">
            <span>View all on map</span>
            <small>42 locations</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Genies Cafe">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" aria-hidden="true" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Genies Cafe</span>
            <small>Floor 2 • 80 (Queensland Bioscience Precinct - QBP)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Merlo Coffee">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" aria-hidden="true" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Merlo Coffee</span>
            <small>Floor 2 • 2 (Duhig Tower)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Bean Engineered Coffee">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" aria-hidden="true" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Bean Engineered Coffee</span>
            <small>Floor 2 • 50 (Hawken Engineering Building)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Brew Point Synthetic Fields Cafe">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" aria-hidden="true" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Brew Point Synthetic Fields Cafe</span>
            <small>Floor 2 • 33 (Building 33)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Chatime">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" aria-hidden="true" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Chatime</span>
            <small>Floor 3 • 22 (Schonell Theatre)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Pizza Caffe">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" aria-hidden="true" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Pizza Caffe</span>
            <small>Floor 3 • 22 (Schonell Theatre)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Main Course Food Precinct">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" aria-hidden="true" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Main Course Food Precinct</span>
            <small>Floor 3 • 21B (Main Refectory)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Market Cart">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" aria-hidden="true" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Market Cart</span>
            <small>Floor 2 • 63 (Physiology Lecture Theatres)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Kenko Sushi">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" aria-hidden="true" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Kenko Sushi</span>
            <small>Floor 2 • 63 (Physiology Lecture Theatres)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Bam Boo Haus">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" aria-hidden="true" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Bam Boo Haus</span>
            <small>Floor 3 • 21B (Main Refectory)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Vending machine with fresh food">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" aria-hidden="true" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Vending machine with fresh food</span>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Red Room Bar and Grill">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" aria-hidden="true" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Red Room Bar and Grill</span>
            <small>Floor 2 • 21C (Aung San Suu Kyi Conference Centre)</small>
          </span>
        </a>
      </li>
      <li class="uq-maps__search__results__item">
        <a href="javascript:void(0)" title="Bagel Boys">
          <span class="uq-maps__search__results__item__icon">
            <img src="/images/app-maps/light_purple_food-and-beverage.svg" aria-hidden="true" />
          </span>
          <span class="uq-maps__search__results__item__text">
            <span>Bagel Boys</span>
          </span>
        </a>
      </li>
    </ul>
  </div>
`;

searchingInCategory.storyName = "With search value and category list open";
