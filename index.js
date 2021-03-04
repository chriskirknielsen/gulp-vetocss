const vetocss = require('vetocss');
const through = require('through2');
const Buffer = require('buffer').Buffer;

module.exports = (selectors) => {
    return through.obj(function (vinylFile, encoding, callback) {
        let transformedFile = vinylFile.clone();
        let styles = transformedFile.contents.toString('utf-8');

        let vetodStyles = vetocss(styles, styles);

        // Return the fully processed stylesheet content
        transformedFile.contents = Buffer.from(vetodStyles); 

        callback(null, transformedFile);
    });
};