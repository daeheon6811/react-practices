const fs = require('fs');
const util = require('util');
const path = require('path');
// require 구문을 이용해 파일 시스템 모듈을 불러온다.
module.exports = {
    findAllCards: async function () {

        try {
            const readFile = util.promisify(fs.readFile).bind(fs);
            const data = await readFile(path.resolve('.', 'backend', 'models', 'json', 'data.json'), 'utf8');
            return JSON.parse(data);
        } catch (e) {
            console.error(e);
        } finally {
  
        }

    },
    insertTask: async function () {}

}