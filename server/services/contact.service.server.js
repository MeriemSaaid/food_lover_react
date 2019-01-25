module.exports = function(app) {
  // const UserModel = require("../models/user/user.model.server");
  app.post("/api/contact", sendMessage);

  async function sendMessage(req, res) {
    var API_KEY = "8622f1254e879a6802c241eb2536ad8a-2d27312c-bbc5fe81";
    var DOMAIN = "sandboxb658c0162ee44b4e8b552e1db2650714.mailgun.org";
    var mailgun = require("mailgun-js")({ apiKey: API_KEY, domain: DOMAIN });
    // const data = "asdsfsdf";
    // console.log(req.body);
    const data = {
      from: req.body.email,
      to: "msimbo2018@gmail.com",
      subject: req.body.subject,
      text: req.body.message
    };

    mailgun.messages().send(data, (error, body) => {
      // console.log(body);
    });
  }
};
