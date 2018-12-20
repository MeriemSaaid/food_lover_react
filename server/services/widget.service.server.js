module.exports = function(app) {
  var WidgetModel = require("../models/widget/widget.model.server");
  // create website
  app.post("/api/widget", createWidget);
  // find website by user Id
  app.get("/api/page/:pid/widget", findWidgetsByPageId);
  // find Website By wid
  app.get("/api/widget/:wgid", findWidgetById);
  // update a  website
  app.put("/api/widget", updateWidget);
  // delete a website
  app.delete("/api/widget/:wgid", deleteWidget);

  //Function to a widget
  async function createWidget(req, res) {
    var widget = req.body;
    const data = await WidgetModel.createWidget(widget);
    res.json(data);

    //return user.id;
  }
  //Function to find widget by page
  async function findWidgetsByPageId(req, res) {
    const pid = req.params["pid"];
    let result = await WidgetModel.findAllWidgetForPage(pid);
    res.json(result);
  }

  //Function to find widge by  id
  async function findWidgetById(req, res) {
    const wgid = req.params["wgid"];
    const data = await WidgetModel.findWidgetById(wgid);
    res.json(data);
  }

  //Update widget
  async function updateWidget(req, res) {
    const widget = req.body;
    //const wgid = req.params["wgid"];
    const data = await WidgetModel.updateWidget(widget._id, widget);
    res.json(data);
  }
  //Delete a widget
  async function deleteWidget(req, res) {
    const wgid = req.params["wgid"];
    const data = await WidgetModel.deleteWidget(wgid);
    res.json(data);
  }
};
