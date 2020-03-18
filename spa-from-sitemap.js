#!/usr/bin/node

const fs = require("fs");
const fx = require("mkdir-recursive");
const Sitemapper = require("sitemapper");
const sitemap = new Sitemapper();

const args = Array.prototype.slice.call(process.argv || []);
const distDir = args.pop();
const sitemapUrl = args.pop();

if (!sitemapUrl || !distDir) {
  console.log(`
    Example Usage: npm run spa-from-sitemap https://pietal.dev/sitemap.xml ./dist
  `);
  process.exit(1);
}

console.log({ sitemapUrl, distDir });

sitemap.fetch(sitemapUrl).then(({ sites }) => {
  let pageUrl = sitemapUrl.split("/");
  pageUrl.pop();
  pageUrl = pageUrl.join("/");

  const routes = sites
    .map(url => url.replace(pageUrl, ""))
    .filter(route => route.startsWith("/"));

  const index = fs.readFileSync(distDir + "/index.html", { encoding: "utf8" });

  routes.forEach(route => {
    console.log(distDir + route + "index.html");
    try {
      fx.mkdirSync(distDir + route);
    } catch (err) {
      console.error(Err);
    } finally {
      copySync(distDir + route + "index.html", index, console.error);
    }
  });
});

function copySync(dest, data) {
  process.nextTick(() => {
    fs.writeFileSync(dest, data);
  });
}

function getDownDir(route) {
  return (
    new Array(
      route
        .replace(/\//g, " ")
        .trim()
        .split(" ").length
    )
      .fill("..")
      .join("/") + "/"
  );
}
