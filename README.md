# PostCSS Extract Media Only [![Build Status][ci-img]][ci]

[PostCSS] plugin extract media query only.
Using it to create extra css for old browser when your project is mobile-first. Remove all normal rule, keep only media queries. Use it with [oldie] to create css for IE.

```css
/* before */
.container {
  padding: 10px;
}
@media (min-width: 576px) {
  .container {
    margin: 0;
  }
}
@media (min-width: 768px) {
  .container {
    background: #ff0000;
  }
}

/* after */

@media (min-width: 576px) {
  .container {
    margin: 0;
  }
}
@media (min-width: 768px) {
  .container {
    background: #ff0000;
  }
}
```

## Usage

Add [PostCSS Extract Media Only] to your build tool:

```bash
npm install postcss-extract-media-only --save-dev
```

#### PostCSS

Load [PostCSS Extract Media Only] as a PostCSS plugin:

```js
postcss([require('postcss-extract-media-only')({})]);
```

[postcss]: https://github.com/postcss/postcss
[oldie]: https://github.com/jonathantneal/oldie
[postcss extract media only]: https://github.com/namth0712/postcss-extract-media-only
