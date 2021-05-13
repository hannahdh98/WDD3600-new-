//file system(fs) module
const fs = require('fs');

//delete file
const deleteFile = (filePath) => {
    fs.unlink(filePath, (err) => {
        if (err) {
            throw (err);
        }
    })
}
//exports the deletefile
exports.deleteFile = deleteFile;
