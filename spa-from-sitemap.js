#!/usr/bin/node

const fs = require("fs");
const path = require("path");
const Sitemapper = require("sitemapper");
const sitemap = new Sitemapper();

const args = Array.prototype.slice.call(process.argv || [])
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

  const index = fs.readFileSync(
    path.resolve(...distDir.split("/"), "index.html"),
    { encoding: "utf8" }
  );

  routes.forEach(route => {
    fs.mkdirSync(path.resolve(...distDir.split("/"), ...route.split("/")), {
      recursive: true
    });
    copySync(
      path.resolve(...distDir.split("/"), ...route.split("/"), "index.html"),
      index
    );
  });
});

function copySync(dest, data) {
  fs.writeFileSync(dest, data);
}
