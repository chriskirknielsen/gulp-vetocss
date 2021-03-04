# gulp-vetocss
Gulp wrapper for VetoCSS: remove style blocks matching a specific selector from a stylesheet.

## Installation
Run the following command:

```bash
npm install gulp-vetocss
```

And require it in your `gulpfile.js` like so:

```js
const vetocss = require('gulp-vetocss');
```

## Usage
Add a pipe to your style build process, for example from a Sass-compiled stylesheet:

```js
var gulp = require('gulp');
var vetocss = require('gulp-vetocss');

gulp.task('styles', () => {
    return gulp.src('./scss/*.scss')
    // …your .pipe() to compile your Sass/SCSS
    .pipe(vetocss(['input::-webkit-details-marker']))
    // …other pipes (minification, save file, etc.)
});
```

Depending on your project, you might get quite a few selectors to drop in there. You can set this list in a top-level variable, or even an external file like `.vetocss.config.js` that you require:

```js
// .vetocss.config.js
module.exports = [
    'input::-webkit-details-marker',
    /div\.(btn|button)/
];

// gulpfile.js
var gulp = require('gulp');
var vetocss = require('gulp-vetocss');
var vetocssConfig = require('./.vetocss.config'); // Or an array of selectors (string or RegExp)

gulp.task('styles', () => {
    return gulp.src('./scss/*.scss')
    // …your .pipe() to compile your Sass/SCSS
    .pipe(vetocss(vetocssConfig))
    // …other pipes (minification, save file, etc.)
});
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)