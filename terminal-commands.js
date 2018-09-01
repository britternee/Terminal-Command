const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file} `;
        }, '');

    console.log(filesToString);
    });
};

module.exports.touch = () => {
    fs.writeFile('message.txt', 'Wow this worked!', 'utf8', (err) => {
        if (err) throw (err);

        console.log('great success');
    });
};

module.exports.mkdir = () => {
    fs.mkdir('./', function(err) {
        if (err) {
            return console.log('Failed to create directory', err);
        } else {
            console.log('Directory created');
        }
    });
};