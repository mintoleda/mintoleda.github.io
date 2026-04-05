const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent(`
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-black text-white p-12 h-screen">
  <section class="flex flex-col relative md:min-h-screen border border-gray-700" id="sec">
    <div class="relative z-10 flex flex-col justify-center flex-grow" id="rel">
      <div class="space-y-6" id="inner">
        <h1 class="text-6xl font-serif font-bold">
          <span id="first">Adetola</span><span class="inline-block w-[0.2em]" id="gap"></span><span class="absolute bottom-8 -translate-x-1/2 z-20" id="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </span>Adetunji
        </h1>
      </div>
    </div>
  </section>
</body>
</html>
  `);
  await page.waitForTimeout(1000);
  const gap = await page.$eval('#gap', el => el.getBoundingClientRect());
  const arrow = await page.$eval('#arrow', el => el.getBoundingClientRect());
  const sec = await page.$eval('#sec', el => el.getBoundingClientRect());
  console.log('Gap:', gap.x, gap.y);
  console.log('Arrow:', arrow.x, arrow.y);
  console.log('Section bottom:', sec.bottom);
  console.log('Arrow bottom:', arrow.bottom);
  await browser.close();
})();
