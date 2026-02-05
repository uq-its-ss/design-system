**[⬅ Back to root](/../../#readme)**

# Storybook Naming and structure conventions

Examining the code base and reviewing existing components is a good way to understand how we are naming and structuring components. This guide outlines general observations of the current approaches.

## Story name and Component name

The **Story File Name** and the **Component Name** within the stories should follow these conventions:

| Element                              | Recommended Case | Example                                          |
| :----------------------------------- | :--------------- | :----------------------------------------------- |
| **Story File Name**                  | `kebab-case`     | `button.stories.js` or `button-block.stories.js` |
| **Component Name** (within the file) | `PascalCase`     | `export const PrimaryButton = { ... };`          |

## Args, Parameters, and Decorators

For Storybook, the naming case for arguments (which map directly to a component's props or arguments) should follow the exact same convention as the language the component is written in.

| Language / Framework              | Component Prop Case | Storybook Arg Case | Example             |
| :-------------------------------- | :------------------ | :----------------- | :------------------ |
| **Vanilla HTML/Web Components**   | `camelCase`         | `camelCase`        | `headerTitle`       |
| **React (JavaScript/TypeScript)** | `camelCase`         | `camelCase`        | `primaryButtonText` |

### Grouping related args into categories:

Group `args` to organise related controls, this will make component structure and related fields easier to understand. This is particularly useful for components with lots of controls or when they are used for specific purposes. Giving context and making it easier to configure good use cases.

Use descriptive labels:
The goal is to make the group's purpose obvious, which helps with management and communication.

Example: (Will create a collapsable contianer called `Biography`)

```
bio: {
      control: "text",
      table: {
        category: "Biography", // Groups the field
      },
    },
```

## naming

### Containers and wrappers

Containers, wrapper, and blocks these are the boxes that make structural sections of a component and contain other visual elements.

`Header`, `Footer`, `list`, `item`, `Content`, `body`.

They are typically reflected in the HTML structure by elements `<div>`, `<article>`, `<section>`, `<header>`, `<footer>`.

### Elements

These are objects that contain different types of visual information.

| Element   | Example                                 |
| :-------- | :-------------------------------------- |
| text      | `title`, `label`, `description`, `link` |
| Component | `pagination`, `button`, `navigation`    |
| Media     | `image`, `video`, `asset`, `icon`       |

### Naimng Variants

Layout modifers

Scale

Colour `dark`, `light`, `inverse`,

Variant **argTypes**, consider your usage when configuring the **Control** type.

| Variant    | usage              | Control type        | Example                                                                                            |
| :--------- | :----------------- | :------------------ | :------------------------------------------------------------------------------------------------- |
| Style      | Mutually exclusive | `select` or `radio` | `Primary`, `Secondary` or `info`, `warning`, `success`                                             |
| Size       | Mutually exclusive | `select` or `radio` | `large`, `small`                                                                                   |
| Position   | Mutually exclusive | `select` or `radio` | `top`, `buttom`, `middle`, `right`, `left`, `top-left`, `top-right`, `buttom-left`, `buttom-right` |
| Expand     | Coexist            | `toggle`            | `expand`                                                                                           |
| Visibility | Coexist            | `toggle`            | `show`, `hide`                                                                                     |

### Naming States (Boolean Flags, Conditional Properties)

**"States"** represent conditions, attributes, or the current status of a "thing." These are typically named using **adjectives** or **adjective phrases** often prefixed with a verb to clearly signify their boolean (true/false) nature.

**Key Principle:** The name should answer the question: **"What is its status/condition?"**

| Element Type      | Part of Speech                       | Recommended Prefix                           | Examples                                         |
| :---------------- | :----------------------------------- | :------------------------------------------- | :----------------------------------------------- |
| **Is Status**     | **`is` + Adjective/Past Participle** | Indicates a current condition.               | `isLoading`, `isLoggedIn`, `isOpen`              |
| **Has Property**  | **`has` + Noun**                     | Indicates the presence of a feature or data. | `hasError`, `hasPermission`, `hasUnsavedChanges` |
| **Can Action**    | **`can` + Verb**                     | Indicates ability or capability.             | `canSubmit`, `canEdit`, `canView`                |
| **Should Action** | **`should` + Verb**                  | Indicates a recommendation or future action. | `shouldUpdate`, `shouldRedirect`                 |
