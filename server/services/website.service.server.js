module.exports = function(app) {
  const WebsiteModel = require("../models/website/website.model.server");
  // create website
  app.post("/api/website", createWebsite);
  // find website by user Id
  app.get("/api/user/:uid/website", findWebsitesByUser);
  // find Website By wid
  app.get("/api/website/:wid", findWebsiteById);
  // update a  website
  app.put("/api/website", updateWebsite);
  // delete a website
  app.delete("/api/website/:wid", deleteWebsite);

  //Function to create user
  async function createWebsite(req, res) {
    var website = req.body;
    let data = await WebsiteModel.createWebsiteForUser(website);
    res.json(data);

    //return user.id;
  }
  //Function to find websites by userId
  async function findWebsitesByUser(req, res) {
    const uid = req.params["uid"];
    let result = await WebsiteModel.findAllWebsitesForUser(uid);
    res.json(result);
  }

  //Function to find website by website id
  async function findWebsiteById(req, res) {
    const wid = req.params["wid"];
    const website = await WebsiteModel.findWebsiteById(wid);
    res.json(website);
  }

  //Update Website
  async function updateWebsite(req, res) {
    var website = req.body;
    const wid = website._id;
    let data = await WebsiteModel.updateWebsite(wid, website);
    res.json(data);
  }
  //delete a website
  async function deleteWebsite(req, res) {
    const wid = req.params["wid"];
    let data = await WebsiteModel.deleteWebsite(wid);
    res.json(data);
  }
};
