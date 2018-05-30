var fs = require('fs');

const util = require('util');
const writeFile = util.promisify(fs.writeFile);

module.exports = {
  handler: (request, reply) => {
    //console.log(request.payload);
    const dataWrite = `${JSON.stringify(request.payload)}\r\n`;
    writeFile('/tmp/test3.js', dataWrite, {'flag':'a'})
      .then(() => {
        return reply({
          "payload": "Successfully saved to database."
        })
      })
      .catch(error => {
        console.log(error);
        reply({
          error: `${error}`
        })
      })
  }
};



