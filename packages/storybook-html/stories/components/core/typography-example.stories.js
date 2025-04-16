import "@uqds/layout/src/scss/main.scss";

export default {
  title: "Core/Typography",
};

export const Example = {
  name: "Examples",
  render: () => `
<table className="uq-table uq-table--card">
  <thead>
    <tr className="uq-table__mobile-heading">
      <th className="uq-table__heading">Element</th>
      <th className="uq-table__heading">Font</th>
      <th className="uq-table__heading">Weight</th>
      <th className="uq-table__heading">Size</th>
      <th className="uq-table__heading">Line-height</th>
      <th className="uq-table__heading">Colour</th>
    </tr>
  </thead>
  <tbody>
    <tr className="uq-table__row">
      <td className="uq-table__item"><div class="h1">Heading 1</div></td>
      <td className="uq-table__item" data-title="Font:">Montserrat</td>
      <td className="uq-table__item" data-title="Weight:">500</td>
      <td className="uq-table__item" data-title="Size:">40px</td>
      <td className="uq-table__item" data-title="Line-height:">1.2</td> 
      <td className="uq-table__item" data-title="Colour:">$black</td>
    </tr>
    <tr className="uq-table__row">
      <td className="uq-table__item"><div class="h2">Heading 2</div></td>
      <td className="uq-table__item" data-title="Font:">Roboto</td>
      <td className="uq-table__item" data-title="Weight:">500</td>
      <td className="uq-table__item" data-title="Size:">32px</td>
      <td className="uq-table__item" data-title="Line-height:">1.2</td>
      <td className="uq-table__item" data-title="Colour:">$black</td>
    </tr>
    <tr className="uq-table__row">
      <td className="uq-table__item"><div class="h3">Heading 3</div></td>
      <td className="uq-table__item" data-title="Font:">Roboto</td>
      <td className="uq-table__item" data-title="Weight:">500</td>
      <td className="uq-table__item" data-title="Size:">24px</td>
      <td className="uq-table__item" data-title="Line-height:">1.2</td>
      <td className="uq-table__item" data-title="Colour:">$black</td>
    </tr>
    <tr className="uq-table__row">
      <td className="uq-table__item"><div class="h4">Heading 4</div></td>
      <td className="uq-table__item" data-title="Font:">Roboto</td>
      <td className="uq-table__item" data-title="Weight:">500</td>
      <td className="uq-table__item" data-title="Size:">20px</td>
      <td className="uq-table__item" data-title="Line-height:">1.2</td>
      <td className="uq-table__item" data-title="Colour:">$black</td>
    </tr>
    <tr className="uq-table__row">
      <td className="uq-table__item"><div class="h5">Heading 5</div></td>
      <td className="uq-table__item" data-title="Font:">Roboto</td>
      <td className="uq-table__item" data-title="Weight:">500</td>
      <td className="uq-table__item" data-title="Size:">18px</td>
      <td className="uq-table__item" data-title="Line-height:">1.2</td>
      <td className="uq-table__item" data-title="Colour:">$black</td>
    </tr>
    <tr className="uq-table__row">
      <td className="uq-table__item"><div class="h6">Heading 6</div></td>
      <td className="uq-table__item" data-title="Font:">Roboto</td>
      <td className="uq-table__item" data-title="Weight:">500</td>
      <td className="uq-table__item" data-title="Size:">16px</td>
      <td className="uq-table__item" data-title="Line-height:">1.2</td>
      <td className="uq-table__item" data-title="Colour:">$black</td>
    </tr>
    <tr className="uq-table__row">
      <td className="uq-table__item"><p>Body</p></td>
      <td className="uq-table__item" data-title="Font:">Roboto</td>
      <td className="uq-table__item" data-title="Weight:">400</td>
      <td className="uq-table__item" data-title="Size:">16px</td>
      <td className="uq-table__item" data-title="Line-height:">1.5</td>
      <td className="uq-table__item" data-title="Colour:">$grey-900</td>
    </tr>
    <tr className="uq-table__row">
      <td className="uq-table__item"><p><small>Body - small</small></p></td>
      <td className="uq-table__item" data-title="Font:">Roboto</td>
      <td className="uq-table__item" data-title="Weight:">400</td>
      <td className="uq-table__item" data-title="Size:">14px</td>
      <td className="uq-table__item" data-title="Line-height:">1.5</td>
      <td className="uq-table__item" data-title="Colour:">$grey-900</td>
    </tr>
    <tr className="uq-table__row">
      <td className="uq-table__item"><a href="#">Link</a></td>
      <td className="uq-table__item" data-title="Font:">Roboto</td>
      <td className="uq-table__item" data-title="Weight:">500</td>
      <td className="uq-table__item" data-title="Size:">16px</td>
      <td className="uq-table__item" data-title="Line-height:">1.5</td>
      <td className="uq-table__item" data-title="Colour:">$purple-500</td>
    </tr>
    <tr className="uq-table__row">
      <td className="uq-table__item"><ol><li>Ordered list</li></ol></td>
      <td className="uq-table__item" data-title="Font:">Roboto</td>
      <td className="uq-table__item" data-title="Weight:">400</td>
      <td className="uq-table__item" data-title="Size:">16px</td>
      <td className="uq-table__item" data-title="Line-height:">1.5</td>
      <td className="uq-table__item" data-title="Colour:">$grey-900</td>
    </tr>
    <tr className="uq-table__row">
      <td className="uq-table__item"><ul><li>Unordered list</li></ul></td>
      <td className="uq-table__item" data-title="Font:">Roboto</td>
      <td className="uq-table__item" data-title="Weight:">400</td>
      <td className="uq-table__item" data-title="Size:">16px</td>
      <td className="uq-table__item" data-title="Line-height:">1.5</td>
      <td className="uq-table__item" data-title="Colour:">$grey-900</td>
    </tr>
    <tr className="uq-table__row">
      <td className="uq-table__item"><label>Label</label></td>
      <td className="uq-table__item" data-title="Font:">Roboto</td>
      <td className="uq-table__item" data-title="Weight:">400</td>
      <td className="uq-table__item" data-title="Size:">14px</td>
      <td className="uq-table__item" data-title="Line-height:">1.5</td>
      <td className="uq-table__item" data-title="Colour:">$grey-900</td>
    </tr>
    <tr className="uq-table__row">
      <td className="uq-table__item"><blockquote>Blockquote</blockquote></td>
      <td className="uq-table__item" data-title="Font:">Roboto</td>
      <td className="uq-table__item" data-title="Weight:">400</td>
      <td className="uq-table__item" data-title="Size:">20px</td>
      <td className="uq-table__item" data-title="Line-height:">1.5</td>
      <td className="uq-table__item" data-title="Colour:">$grey-900</td>
    </tr>
  </tbody>
</table>
`,
};
