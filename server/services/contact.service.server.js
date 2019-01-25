module.exports = function(app) {
  // const UserModel = require("../models/user/user.model.server");
  app.post("/api/contact", sendMessage);

  async function sendMessage(req, res) {
    var API_KEY = "";
    var DOMAIN = "";
    if (process.env.MLAB_USERNAME_WEBDEV) {
      API_KEY = process.env.MAILGUN_API_KEY;
      DOMAIN = process.env.MAILGUN_DOMAIN;
    }

    var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });

    const data = {
      from: req.body.email,
      to: "msimbo2018@gmail.com",
      subject: req.body.subject,
      text: req.body.message
    };

    // const data = {
    //   from: "Excited User <me@samples.mailgun.org>",
    //   to: "msimbo2018@gmail.com",
    //   subject: "Hello",
    //   text: "Testing some Mailgun awesomeness!"
    // };
    mailgun.messages().send(data, (error, body) => {
      console.log(body);
    });
  }
};
