const {readFile, writeFile, chmod} = require('fs');

const backupFile = `${__filename}-${Date.now()}`;

readFile(__filename, (err, data) => {
    if (err) {
        return console.error(err);
    }
    writeFile(backupFile, data, (err) => {
        if (err) {
            return console.error(err);
        }
    chmod(backupFile, 0o400, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('done')
    });
  });
});

console.log('A');
readFile(__filename, (err, data) => {
    console.log('B', data);
});

console.log('C');