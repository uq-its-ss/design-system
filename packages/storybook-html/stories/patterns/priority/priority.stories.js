// import stylesheet
import "../../components/core/_colour.scss";

export default {
  title: "Patterns/priority",
  parameters: {
    layout: "padded",
    previewTabs: {
      canvas: { hidden: false },
    },
  },
};

export const scaleMonochrome = {
    render: () => {
      return `
          <div class="uqds-colour__swatches">
            <div class="uqds-colour__palette uqds-colour--grey-600">Priority 1<br /> grey-600</div>
            <div class="uqds-colour__palette uqds-colour--grey-500">Priority 2<br /> grey-500</div> 
            <div class="uqds-colour__palette uqds-colour--grey-400">Priority 3<br /> grey-400</div>
            <div class="uqds-colour__palette uqds-colour--grey-300">Priority 4<br /> grey-300</div>
            <div class="uqds-colour__palette uqds-colour--grey-200">Priority 5<br /> grey-200</div>
            <div class="uqds-colour__palette uqds-colour--grey-100">Priority 6<br /> grey-100</div>
          </div>
        `;
    },
    name: "Monochrome scale",
};

export const scaleRisk = {
    render: () => {
      return `
          <div class="uqds-colour__swatches">
          <div class="uqds-colour__palette uqds-colour--error-500">At risk<br /> Error-500</div>  
          <div class="uqds-colour__palette uqds-colour--warning-500">Weak<br /> warning-500</div>  
          <div class="uqds-colour__palette uqds-colour--warning-200">Requires action<br /> warning-200</div>
          <div class="uqds-colour__palette uqds-colour--grey-300">Requires improvement<br /> grey-300</div>
          <div class="uqds-colour__palette uqds-colour--grey-200">Satisfactory progress<br /> grey-100</div>
          <div class="uqds-colour__palette uqds-colour--grey-50">Another level<br /> grey-50</div>      
          </div>
        `;
    },
    name: "Risk scale",
};

export const scaleOutcome = {
    render: () => {
      return `
          <div class="uqds-colour__swatches">
          <div class="uqds-colour__palette uqds-colour--error-500">Group 1<br /> Error-500</div>  
          <div class="uqds-colour__palette uqds-colour--error-200">Group 1<br /> Error-200</div>  
          <div class="uqds-colour__palette uqds-colour--warning-500">Group 2<br /> Warming-500</div>  
          <div class="uqds-colour__palette uqds-colour--warning-200">Group 2<br /> Warning-200</div>
          <div class="uqds-colour__palette uqds-colour--success-200">Group 3<br /> success-200</div>
          <div class="uqds-colour__palette uqds-colour--success-50">Group 3<br /> success-50</div>
          </div>
        `;
    },
    name: "Outcome scale",
};

    export const auditFinding = {
        render: () => {
          return `
    <table class="uqds-table uqds-table--card uqds-table--colour">
                <tbody class="uqds-table__body">
                    <tr class="uqds-table__mobile-heading">
                    <th class="uqds-table__heading">Example</th>
                    <th class="uqds-table__heading">Variable</th>
                    <th class="uqds-table__heading">HEX</th>
                    <th class="uqds-table__heading">Usage</th>
                    </tr>
    
                    <tr class="uqds-table__row">
                    <td class="uqds-table__item">
                        <div class="uqds-colour__palette uqds-colour--error-500">Extreme</div> 
                    </td>
                    <td class="uqds-table__item" data-title="Variable:">
                        <code>$error-500</code>
                    </td>
                    <td class="uqds-table__item" data-title="HEX:">
                        <code>#d62929</code>
                    </td>
                    <td class="uqds-table__item" data-title="Usage:">
                        Priority 1, group 1, Red – indicates danger or stop
                    </td>
                    </tr>
    
                    <tr class="uqds-table__row">
                    <td class="uqds-table__item">
                        <div class="uqds-colour__palette uqds-colour--warning-500">High</div>  
                    </td>
                    <td class="uqds-table__item" data-title="Variable:">
                        <code>$warning-500</code>
                    </td>
                    <td class="uqds-table__item" data-title="HEX:">
                        <code>#f7ba1e</code>
                    </td>
                    <td class="uqds-table__item" data-title="Usage:">
                        Priority 2, group 2, Yellow – warns of hazards and means caution.
                    </td>
                    </tr>
    
                    <tr class="uqds-table__row">
                    <td class="uqds-table__item">
                        <div class="uqds-colour__palette uqds-colour--warning-200">Medium</div>
                    </td>
                    <td class="uqds-table__item" data-title="Variable:">
                        <code>$warning-200</code>
                    </td>
                    <td class="uqds-table__item" data-title="HEX:">
                        <code>#fce3a5</code>
                    </td>
                    <td class="uqds-table__item" data-title="Usage:">
                        Priority 3, group 2, warning
                    </td>
                    </tr>
    
                    <tr class="uqds-table__row">
                    <td class="uqds-table__item">
                        <div class="uqds-colour__palette uqds-colour--grey-300">Low</div>
                    </td>
                    <td class="uqds-table__item" data-title="Variable:">
                        <code>grey-300</code>
                    </td>
                    <td class="uqds-table__item" data-title="HEX:">
                        <code>#d1d0d2</code>
                    </td>
                    <td class="uqds-table__item" data-title="Usage:">
                        Priority 4, group 3, lower contrast
                    </td>
                    </tr>
    
                    
                </tbody>
            </table>
            `;
        },
        name: "Audit finding",
      };

  export const actionPriority = {
    render: () => {
      return `
<table class="uqds-table uqds-table--card uqds-table--colour">
            <tbody class="uqds-table__body">
                <tr class="uqds-table__mobile-heading">
                <th class="uqds-table__heading">Example</th>
                <th class="uqds-table__heading">Variable</th>
                <th class="uqds-table__heading">HEX</th>
                <th class="uqds-table__heading">Usage</th>
                </tr>

                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--error-500">Priority 1</div> 
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$error-500</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#d62929</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Priority 1, group 1, Red – indicates danger or stop
                </td>
                </tr>

                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--warning-500">Priority 2</div>  
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$warning-500</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#f7ba1e</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Priority 2, group 2, Yellow – warns of hazards and means caution.
                </td>
                </tr>

                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--warning-200">Priority 3</div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$warning-200</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#fce3a5</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Priority 3, group 2, warning
                </td>
                </tr>

                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--grey-300">Priority 4</div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>grey-300</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#d1d0d2</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Priority 4, group 3, lower contrast
                </td>
                </tr>

                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--grey-200">Priority 5</div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>grey-200</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#e8e8e8</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Priority 5, group 3, lower contrast
                </td>
                </tr>

                
            </tbody>
        </table>
        `;
    },
    name: "Action priority",
  };


  export const reportingRating = {
    render: () => {
      return `
        <table class="uqds-table uqds-table--card uqds-table--colour">
            <tbody class="uqds-table__body">
                <tr class="uqds-table__mobile-heading">
                <th class="uqds-table__heading">Example</th>
                <th class="uqds-table__heading">Variable</th>
                <th class="uqds-table__heading">HEX</th>
                <th class="uqds-table__heading">Usage</th>
                </tr>

                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--error-500">At risk</div> 
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$error-500</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#d62929</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    Highest Priority
                </td>
                </tr>

                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--warning-500">Weak</div>  
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$warning-500</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#f7ba1e</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    secondary Priority
                </td>
                </tr>

                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--warning-200">Requires action</div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>$warning-200</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#fce3a5</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    secondary Priority
                </td>
                </tr>

                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--grey-300">Requires improvement</div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>grey-300</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#d1d0d2</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    secondary Priority
                </td>
                </tr>

                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--grey-200">Satisfactory progress</div>
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>grey-200</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#e8e8e8</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    secondary Priority
                </td>
                </tr>

                <tr class="uqds-table__row">
                <td class="uqds-table__item">
                    <div class="uqds-colour__palette uqds-colour--grey-50">Another level</div>   
                </td>
                <td class="uqds-table__item" data-title="Variable:">
                    <code>grey-50</code>
                </td>
                <td class="uqds-table__item" data-title="HEX:">
                    <code>#f3f3f4</code>
                </td>
                <td class="uqds-table__item" data-title="Usage:">
                    secondary Priority
                </td>
                </tr>

                
            </tbody>
        </table>
        `;
    },
    name: "Reporting Rating",
  };
