const puppeteer = require("puppeteer");
const cliProgress = require("cli-progress");
const config = require("./screenshot.config.json");

// Remove these selectors in all scenarios.
const globalRemoveSelectors = [".visual-regression-remove"];

// Hide these selectors in all scenarios.
const globalHideSelectors = [
  "iframe[src*='youtube']",
  ".visual-regression-hide",
  "Test",
];

const removeSelectors = async (page) => {
  return Promise.all(
    globalRemoveSelectors.map(async (selector) => {
      await page.evaluate((sel) => {
        document.querySelectorAll(sel).forEach((s) => {
          s.style.cssText = "display: none !important;";
          s.classList.add("__86d");
        });
      }, selector);
    })
  );
};

const hideSelectors = async (page) => {
  return Promise.all(
    globalHideSelectors.map(async (selector) => {
      await page.evaluate((sel) => {
        document.querySelectorAll(sel).forEach((s) => {
          s.style.visibility = "hidden";
        });
      }, selector);
    })
  );
};

const screenshot = async (browser, viewportName, pageName) => {
  const page = await browser.newPage();
  const filename = `${pageName}-${viewportName}.png`;
  const viewport = config.viewports[viewportName];
  const uri = config.uris[pageName];
  await page.setViewport(viewport);
  await page.goto(uri, { waitUntil: "load", timeout: 0 });
  // Give it 2 seconds for images etc to load and animations to fire.
  await new Promise((res) => {
    setTimeout(() => res(), 2000);
  });

  if (globalHideSelectors.length > 0) await hideSelectors(page);
  if (globalRemoveSelectors.length > 0) await removeSelectors(page);

  await page.screenshot({
    path: `screenshots/${filename}`,
    fullPage: true,
  });
  await page.close();
};

const main = async () => {
  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);

  const jobs = [];
  Object.keys(config.uris).forEach((pageName) => {
    Object.keys(config.viewports).forEach((viewportName) => {
      jobs.push({ viewportName, pageName });
    });
  });

  bar.start(jobs.length, 0);
  const concurrentBrowsers = 5;
  const chunkSize = Math.ceil(jobs.length / concurrentBrowsers);
  const chunks = jobs.reduce((carry, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!carry[chunkIndex]) {
      carry[chunkIndex] = [];
    }

    carry[chunkIndex].push(item);

    return carry;
  }, []);

  const doProcess = async (browser, chunkJobs, index, resolve) => {
    const { viewportName, pageName } = chunkJobs[index];
    screenshot(browser, viewportName, pageName).then(() => {
      bar.increment();
      index += 1;
      if (index < chunkJobs.length) {
        doProcess(browser, chunkJobs, index, resolve);
      } else {
        browser.close();
        resolve();
      }
    });
  };

  await Promise.all(
    chunks.map(
      (chunk) =>
        new Promise((resolve) => {
          puppeteer
            .launch({
              args: ["--no-sandbox", "--disable-setuid-sandbox"],
            })
            .then((browser) => {
              doProcess(browser, chunk, 0, resolve);
            });
        })
    )
  );
  bar.stop();
};

main();
