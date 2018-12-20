module.exports = function(app) {
  const PageModel = require("../models/page/page.model.server");
  // create a page
  app.post("/api/page", createPage);
  // find page by website Id
  app.get("/api/website/:wid/page", findPagesByWebsiteId);
  // find page By pid
  app.get("/api/page/:pid", findPageById);
  // update a  page
  app.put("/api/page", updatePage);
  // delete a website
  app.delete("/api/page/:pid", deletePage);

  //Function to create user
  async function createPage(req, res) {
    var page = req.body;
    const data = await PageModel.createPage(page);
    res.json(page);

    //return user.id;
  }
  //Function to find websites by userId
  async function findPagesByWebsiteId(req, res) {
    const wid = req.params["wid"];
    const result = await PageModel.findAllPagesForWebsite(wid);
    res.json(result);
  }

  //Function to find website by website id
  async function findPageById(req, res) {
    const pid = req.params["pid"];
    const page = await PageModel.findPageById(pid);
    res.json(page);
  }

  //Update Website
  async function updatePage(req, res) {
    const page = req.body;
    const pid = page._id;
    const data = await PageModel.updatePage(pid, page);
    res.json(data);
  }
  //Delete a page
  async function deletePage(req, res) {
    const pid = req.params["pid"];
    const data = await PageModel.deletePage(pid);
    res.json(data);
  }
};
