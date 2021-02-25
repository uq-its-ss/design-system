**[⬅ Back to root](/../#readme)**

# Status

In the UQ design system, status tags help us in understanding the current status of each component package and its documentation and enhance it further as needed.

## 1. Package status

Below are some of the status tags used for component packages and it's description

<StatusBadge.Development /><StatusBadge.DraftDoc />
<StatusBadge.Review /><StatusBadge.ReviewDoc />
<StatusBadge.Stable /><StatusBadge.StableDoc />
<StatusBadge.Deprecated />

`<StatusBadge.Development />` - Component packages are in development. Can be used to check and test. Should not be used in development.
`<StatusBadge.Review />` - Component packages are under review. Can be used to check and test. Should not be used in development.
`<StatusBadge.Stable />` - Component packages are stable. Ready to be used in development.
`<StatusBadge.Deprecated />` - Component package is deprecated and should not be used.


## 2. Documentation status

Below are some of the status tags used for documentation of component packages and it's description

`<StatusBadge.DraftDoc />` - Documentation of component package is in draft mode. Needs to follow the documentation template **[⬅ Documentation template](/../packages/storybook-html/templates/component.docs.mdx)**. Do not use in development.
`<StatusBadge.ReviewDoc />` - Documentation of component package is under review. Can be tested but not used in development.
`<StatusBadge.StableDoc />` - Documentation of component package is stable. Has followed (need not be scrictly) the documentation template. Ready to be used 
