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
  <section class="flex flex-col relative min-h-[500px] border border-gray-700" id="sec">
    <div class="relative z-10 flex flex-col justify-center flex-grow" id="rel">
      <div class="space-y-6" id="inner">
        <h1 class="text-6xl font-serif font-bold">
          <span id="first">Adetola</span><span class="inline-block w-[0.2em]" id="gap"><span class="absolute bottom-8 -translate-x-1/2 z-20 text-red-500" id="arrow">V</span></span>Adetunji
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
  console.log('Gap:', gap.x, gap.y, gap.width);
  console.log('Arrow:', arrow.x, arrow.y, arrow.width);
  await browser.close();
})();
