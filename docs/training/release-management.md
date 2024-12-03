# Release management

The design system automates the release processes where possible. 
This includes a stage and production workflow:

1. Publishing the stage website and creating alpha packages.
2. Publishing the production website and latest (stable) packages.


### When we push to stage

- Automatically when a pull request is approved and merged
- Critical bug fix

### When we push to Production

- At the start of each sprint
- After a major system change or scheduled release
- Critical bug fix

## Publishing UQDS websites (storybook)

### Automatic publishing

This is our default way to publish storybook.

When a Pull request is merged into `master` or `releases` branch, it triggers a github workflow `publish-sb.yml`
This workflow will run storybooks `build-storybook` and then update the files in the AWS S3 Bucket associated with stage or production. 

### Manual publishing

**Pre-update**

1. Update Master or Releases Branch `git pull`
2. Update dependencies `npm ci`
3. Go to storybook directory `cd packages/storybook-html`
4. Build site `npm run build-storybook`
5. This will create the storybook files in `packages/storybook-html/storybook-static` (this is what goes into AWS S3 bucket.) 

**Publish to stage or production** 

1. Login to [ITS Cloud Services](https://cloud-services.its.uq.edu.au/)
2. Select AWS management console 
3. Select the environment account, ending in `ads-staging` or `ads-prod`
4. Open S3 bucket starting with `uidf-client`
5. Replace all files and folders
6. Check staging [https://design-system.ads-staging.aws.uq.edu.au/](https://design-system.ads-staging.aws.uq.edu.au/)
7. Check production on [https://design-system.ads-prod.aws.uq.edu.au/](https://design-system.ads-prod.aws.uq.edu.au/)
8. If the main URL [https://design-system.uq.edu.au/](https://design-system.uq.edu.au/) does not update then there may be cache issues, follow the `clear cache` instructions.

**Clear cache**

1. Login to [ITS Cloud Services](https://cloud-services.its.uq.edu.au/)
2. Select AWS management console 
3. Select the environment account, ending in `ads-prod`
4. Select CloudFront service
5. click into the `UQDS` distribution
6. The tabs at the top, go into Invalidations
7. Create invalidation, in the paths box, just add `/* `
8. Then click Create invalidation, that will then clear out the cache for the cdn

## Publishing packages

All packages are published to the [NPM registry](https://www.npmjs.com/search?q=uqds). 

Packages are scoped to `@uqds/`



We automaticallu publish *Alpha* and *Latest* packages with semantic versioning.

Conventional Commits [eBay](https://ebay.com)