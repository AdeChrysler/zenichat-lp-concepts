import { chromium } from "playwright";
import fs from "node:fs";

const HOSTS = [
  { name: "a", host: "zenichat-a.zenova.id" },
  { name: "b", host: "zenichat-b.zenova.id" },
  { name: "c", host: "zenichat-c.zenova.id" },
];

fs.mkdirSync("six-971-mockups/live", { recursive: true });
const browser = await chromium.launch();

for (const v of HOSTS) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const p = await ctx.newPage();
  await p.goto(`https://${v.host}/`, { waitUntil: "networkidle", timeout: 30000 });
  await p.waitForTimeout(800);
  await p.screenshot({ path: `six-971-mockups/live/${v.host}-desktop.png`, fullPage: true });

  const mctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const mp = await mctx.newPage();
  await mp.goto(`https://${v.host}/`, { waitUntil: "networkidle", timeout: 30000 });
  await mp.waitForTimeout(800);
  await mp.screenshot({ path: `six-971-mockups/live/${v.host}-mobile.png`, fullPage: true });

  await ctx.close(); await mctx.close();
  console.log(`captured ${v.host}`);
}
await browser.close();
console.log("done");
