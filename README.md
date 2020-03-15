# spa-from-sitemap
Auto make folders for routes and copy index.html - all from sitemap.xml

## install

```
npm i --save-dev spa-from-sitemap
```

## usage

First build your app into `./dist`

```
    Example Usage: npm run spa-from-sitemap https://pietal.dev/sitemap.xml ./dist
```

## example

```
$ yarn spa-from-sitemap https://pietal.dev/sitemap.xml ./dist
$ /home/jpietal/projects/pietal.dev/node_modules/.bin/spa-from-sitemap https://pietal.dev/sitemap.xml ./dist
{ sitemapUrl: 'https://pietal.dev/sitemap.xml',
  distDir: './dist' }
./dist/page/home/index.html
./dist/page/games/index.html
./dist/page/privacy-policy/index.html
./dist/page/author/index.html
./dist/game/chi-land/index.html
./dist/game/meteor/index.html
./dist/game/jan-ken-do/index.html
./dist/game/japan/index.html
./dist/game/ubik/index.html
./dist/game/stoned/index.html
./dist/game/space/index.html
./dist/game/ubik-rpg/index.html
./dist/game/tv/index.html
./dist/game/ctf/index.html
./dist/game/tactics/index.html
```

