import "@uqds/layout/src/scss/main.scss";

export default {
  title: "Core/Typography",
};

export const Example = {
  name: "Example",
  render: () => `
<table className="uqds-table uqds-table--card">
  <thead>
    <tr className="uqds-table__mobile-heading">
      <th className="uqds-table__heading">Element</th>
      <th className="uqds-table__heading">Font</th>
      <th className="uqds-table__heading">Weight</th>
      <th className="uqds-table__heading">Size</th>
      <th className="uqds-table__heading">Line-height</th>
      <th className="uqds-table__heading">Colour</th>
    </tr>
  </thead>

  <tbody>
    <tr className="uqds-table__row">
      <td className="uqds-table__item"><h1>Heading 1</h1></td>
      <td className="uqds-table__item" data-title="Font:">Montserrat</td>
      <td className="uqds-table__item" data-title="Weight:">Medium, 500</td>
      <td className="uqds-table__item" data-title="Size:">$font-size-xxxxl</td>
      <td className="uqds-table__item" data-title="Line-height:">1.2</td> 
      <td className="uqds-table__item" data-title="Colour:">$black</td>
    </tr>

    <tr className="uqds-table__row">
      <td className="uqds-table__item"><h2>Heading 2</h2></td>
      <td className="uqds-table__item" data-title="Font:">Roboto</td>
      <td className="uqds-table__item" data-title="Weight:">Medium, 500</td>
      <td className="uqds-table__item" data-title="Size:">$font-size-xxxl</td>
      <td className="uqds-table__item" data-title="Line-height:">1.2</td>
      <td className="uqds-table__item" data-title="Colour:">$black</td>
    </tr>

    <tr className="uqds-table__row">
      <td className="uqds-table__item"><h3>Heading 3</h3></td>
      <td className="uqds-table__item" data-title="Font:">Roboto</td>
      <td className="uqds-table__item" data-title="Weight:">Medium, 500</td>
      <td className="uqds-table__item" data-title="Size:">$font-size-xxl</td>
      <td className="uqds-table__item" data-title="Line-height:">1.2</td>
      <td className="uqds-table__item" data-title="Colour:">$black</td>
    </tr>

    <tr className="uqds-table__row">
      <td className="uqds-table__item"><h4>Heading 4</h4></td>
      <td className="uqds-table__item" data-title="Font:">Roboto</td>
      <td className="uqds-table__item" data-title="Weight:">Medium, 500</td>
      <td className="uqds-table__item" data-title="Size:">$font-size-xl</td>
      <td className="uqds-table__item" data-title="Line-height:">1.2</td>
      <td className="uqds-table__item" data-title="Colour:">$black</td>
    </tr>

    <tr className="uqds-table__row">
      <td className="uqds-table__item"><h5>Heading 5</h5></td>
      <td className="uqds-table__item" data-title="Font:">Roboto</td>
      <td className="uqds-table__item" data-title="Weight:">Medium, 500</td>
      <td className="uqds-table__item" data-title="Size:">$font-size-l</td>
      <td className="uqds-table__item" data-title="Line-height:">1.2</td>
      <td className="uqds-table__item" data-title="Colour:">$black</td>
    </tr>

    <tr className="uqds-table__row">
      <td className="uqds-table__item"><h6>Heading 6</h6></td>
      <td className="uqds-table__item" data-title="Font:">Roboto</td>
      <td className="uqds-table__item" data-title="Weight:">Medium, 500</td>
      <td className="uqds-table__item" data-title="Size:">$font-size-m</td>
      <td className="uqds-table__item" data-title="Line-height:">1.2</td>
      <td className="uqds-table__item" data-title="Colour:">$black</td>
    </tr>

    <tr className="uqds-table__row">
      <td className="uqds-table__item"><p>Body</p></td>
      <td className="uqds-table__item" data-title="Font:">Roboto</td>
      <td className="uqds-table__item" data-title="Weight:">Regular, 400</td>
      <td className="uqds-table__item" data-title="Size:">$font-size-m</td>
      <td className="uqds-table__item" data-title="Line-height:">1.5</td>
      <td className="uqds-table__item" data-title="Colour:">$grey-900</td>
    </tr>

    <tr className="uqds-table__row">
      <td className="uqds-table__item"><p><small>Body - small</small></p></td>
      <td className="uqds-table__item" data-title="Font:">Roboto</td>
      <td className="uqds-table__item" data-title="Weight:">Regular, 400</td>
      <td className="uqds-table__item" data-title="Size:">$font-size-m</td>
      <td className="uqds-table__item" data-title="Line-height:">1.5</td>
      <td className="uqds-table__item" data-title="Colour:">$grey-900</td>
    </tr>

    <tr className="uqds-table__row">
      <td className="uqds-table__item"><a href="#">Link</a></td>
      <td className="uqds-table__item" data-title="Font:">Roboto</td>
      <td className="uqds-table__item" data-title="Weight:">Medium, 500</td>
      <td className="uqds-table__item" data-title="Size:">$font-size-m</td>
      <td className="uqds-table__item" data-title="Line-height:">1.5</td>
      <td className="uqds-table__item" data-title="Colour:">$purple-500</td>
    </tr>

    <tr className="uqds-table__row">
      <td className="uqds-table__item"><ol><li>Ordered list</li></ol></td>
      <td className="uqds-table__item" data-title="Font:">Roboto</td>
      <td className="uqds-table__item" data-title="Weight:">Regular, 400</td>
      <td className="uqds-table__item" data-title="Size:">$font-size-m</td>
      <td className="uqds-table__item" data-title="Line-height:">1.5</td>
      <td className="uqds-table__item" data-title="Colour:">$grey-900</td>
    </tr>

    <tr className="uqds-table__row">
      <td className="uqds-table__item"><ul><li>Unordered list</li></ul></td>
      <td className="uqds-table__item" data-title="Font:">Roboto</td>
      <td className="uqds-table__item" data-title="Weight:">Regular, 400</td>
      <td className="uqds-table__item" data-title="Size:">$font-size-m</td>
      <td className="uqds-table__item" data-title="Line-height:">1.5</td>
      <td className="uqds-table__item" data-title="Colour:">$grey-900</td>
    </tr>

    <tr className="uqds-table__row">
      <td className="uqds-table__item"><label>Label</label></td>
      <td className="uqds-table__item" data-title="Font:">Roboto</td>
      <td className="uqds-table__item" data-title="Weight:">Regular, 400</td>
      <td className="uqds-table__item" data-title="Size:">$font-size-s</td>
      <td className="uqds-table__item" data-title="Line-height:">1.5</td>
      <td className="uqds-table__item" data-title="Colour:">$grey-900</td>
    </tr>

    <tr className="uqds-table__row">
      <td className="uqds-table__item"><blockquote>Blockquote</blockquote></td>
      <td className="uqds-table__item" data-title="Font:">Roboto</td>
      <td className="uqds-table__item" data-title="Weight:">Regular, 400</td>
      <td className="uqds-table__item" data-title="Size:">$font-size-l</td>
      <td className="uqds-table__item" data-title="Line-height:">1.5</td>
      <td className="uqds-table__item" data-title="Colour:">$grey-900</td>
    </tr>

  </tbody>
</table>

`,
};
