var mongoose = require("mongoose");
var WebsiteSchema = require("./website.schema.server.js");
var WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);

WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;
//Create a website for a user
function createWebsiteForUser(website) {
  return WebsiteModel.create(website);
}
//Find All websites by uid
function findAllWebsitesForUser(uid) {
  return WebsiteModel.find({ developerId: uid });
}
//Find a website by wid
function findWebsiteById(wid) {
  return WebsiteModel.findById(wid);
}

//Update a website
function updateWebsite(wid, website) {
  //return WebsiteModel.updateOne({ _id: wid }, website);
  return WebsiteModel.updateOne({ _id: wid }, website);
}

//Delete a website
function deleteWebsite(wid) {
  return WebsiteModel.deleteOne({ _id: wid });
}
module.exports = WebsiteModel;
