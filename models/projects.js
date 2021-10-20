const fs = require('fs');
const path = require('path');

module.exports = class Projects {
    constructor() { 

    }

    static fetchAll(skill, cb) {
        const p = path.join(path.dirname(require.main.filename), 'data', 'projects.json');
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return cb([])
            }
            if (!skill || skill === 'all') {
                cb(JSON.parse(fileContent))
            }
            else {
                cb(JSON.parse(fileContent).filter(prj => prj.skill === skill))
            }
        })
    }
}