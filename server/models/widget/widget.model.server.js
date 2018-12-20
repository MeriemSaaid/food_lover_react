var mongoose = require("mongoose");
var WidgetSchema = require("./widget.schema.server");
var WidgetModel = mongoose.model("WidgetModel", WidgetSchema);

WidgetModel.createWidget = createWidget;
WidgetModel.findAllWidgetForPage = findAllWidgetForPage;
WidgetModel.findWidgetById = findWidgetById;
WidgetModel.updateWidget = updateWidget;
WidgetModel.deleteWidget = deleteWidget;

//Create a widget
function createWidget(widget) {
  return WidgetModel.create(widget);
}

//Find all widgets by page Id
function findAllWidgetForPage(pid) {
  return WidgetModel.find({ pageId: pid });
}
//Find a widget by Id
function findWidgetById(pid) {
  return WidgetModel.findById(pid);
}
//Update a  widget
function updateWidget(wgid, widget) {
  // console.log(wgid);
  return WidgetModel.updateOne({ _id: wgid }, widget);
}

//delete a  widget
function deleteWidget(wgid) {
  return WidgetModel.deleteOne({ _id: wgid });
}
module.exports = WidgetModel;
