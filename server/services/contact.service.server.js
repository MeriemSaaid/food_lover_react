module.exports = function(app) {
    const UserModel = require("../models/user/user.model.server");
    app.post('/api/contact', sendMessage)


    async function sendMessage(req, res) {
    var API_KEY = 'YOUR_API_KEY';
var DOMAIN = 'YOUR_DOMAIN_NAME';
var mailgun = require('mailgun-js')({apiKey: API_KEY, domain: DOMAIN});

      const data = req.body;

const data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'foo@example.com, bar@example.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

mailgun.messages().send(data, (error, body) => {
  console.log(body);
});
}
}