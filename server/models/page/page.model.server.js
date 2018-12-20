var mongoose = require("mongoose");
var PageSchema = require("./page.schema.server");

var PageModel = mongoose.model("PageModel", PageSchema);

PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;
//create a page ---
function createPage(page) {
  return PageModel.create(page);
}
//Find pages by website Id
function findAllPagesForWebsite(wid) {
  return PageModel.find({ websiteId: wid });
}
//Find page by Id
function findPageById(pid) {
  return PageModel.findById(pid);
}
//Function to update a page
function updatePage(pid, page) {
  return PageModel.updateOne({ _id: pid }, page);
}
//Function to delete a page
function deletePage(pid) {
  return PageModel.deleteOne({ _id: pid });
}

module.exports = PageModel;
