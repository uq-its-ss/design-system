import iconCatalog from "@uqds/icon";
import "./icon.scss";

/**
 * Transform the icon catalog arr module from @uqds/icon into nicely iterable
 * data object for docs:
 * {
 *   categories: [
 *     [name:string, start:int, end:int]
 *   ],
 *   icons: [
 *     name:string
 *   ]
 * }
 */
const iconsByCat = iconCatalog.reduce(
  (acc, { name, category }, i) => {
    const { categories, icons } = acc;

    if (categories.length && categories[categories.length - 1][0] == category) {
      categories[categories.length - 1][2] = i;
    } else {
      categories.push([category, i, i]);
    }

    icons.push(name);

    return acc;
  },
  { categories: [], icons: [] },
);

export default {
  title: "Components/Icon",
  parameters: {
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const icon = () => {
  return iconsByCat.categories.reduce((acc, category) => {
    return (
      acc +
      `<h3>${category[0]}</h3>\n<div class="uqds-icon-list">` +
      iconsByCat.icons
        .slice(category[1], category[2] + 1)
        .reduce((acc, icon) => {
          return (
            acc +
            `<div class="uqds-icon-list__item">
              <div class="uqds-icon-list__item__icon">
                <span class="uq-icon uq-icon--${category[0]}--${icon}"></span>
              </div>
              <div class="uqds-icon-list__item__label">
                <small>${icon}</small>
              </div>
            </div>\n`
          );
        }, "") +
      "</div>"
    );
  }, "");
};
