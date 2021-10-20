const fs = require('fs');
const path = require('path');

module.exports = class Messages {

    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message
    }

    save() {
        const p = path.join(path.dirname(require.main.filename), 'data', 'messages.json');

        fs.readFile(p, (err, fileContent) => {

            if (!fileContent.length) {
                fs.writeFile(p, JSON.stringify([this]), err => {
                    if (err) {
                        throw new Error('пустой файл')
                    }
                })
            }
            else {
                let messages = [];

                messages = JSON.parse(fileContent);

                messages.push(this);

                fs.writeFile(p, JSON.stringify(messages), err => {
                    if (err) {
                        throw new Error('что-то не так')
                    }
                })
            }
        })
    }
}
