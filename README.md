# Dice

Rotating CSS dice in 3D using jQuery. Based on my old CodePen [Roll the dice!](https://codepen.io/alexerlandsson/pen/yyWdLE).

## How to use

Include `/docs/css/dice.min.css`, `/docs/js/dice.js` in your project and copy the HTML from `/docs/index.html`. Please note the JavaScript requires jQuery to work.

Place the CSS before inside the head.
```html
<link href="PATH_TO_CSS/dice.min.css" rel="stylesheet" type="text/css" />
```

Place the JavaScript before the closing body tag below the page content. jQuery has to be included before `dice.js`.

```html
<script src="PATH_TO_JS/dice.js"></script>
```

## Browser support

Works in all modern browsers. Since Internet Explorer does not support `transform-style: preserve-3d;` the dice will not be displayed in 3d in these browsers, but a fallback is included to make sure the die roll still works.

## Working in this repository

#### Install dependencies (npm)

```shell
$ npm install
```

#### Build

To build the project, run gulp from the project root. After the project has been built, the production files are located in the folder `docs`. This folder is published using GitHub Pages.

```shell
$ gulp
```

To watch for changes, a watch gulp task is also added. Start it by running the following command.

```shell
$ gulp watch
```

#### SCSS

You can modify the css by changing the scss variabes in `/src/css/dice.scss`. I do not recommend you changing anything else in this file besides the settings variables at the top.
