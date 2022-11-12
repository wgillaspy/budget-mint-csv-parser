const fs = require('fs');
const csvReader = require('csv-reader');

let inputStream = fs.createReadStream('transactions.csv', 'utf8');

inputStream
    .pipe(new csvReader({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        console.log('A row arrived: ', row);
    })
    .on('end', function () {
        console.log('No more rows!');
    });