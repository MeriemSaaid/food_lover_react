var mongoose = require("mongoose");
var WidgetSchema = mongoose.Schema(
  {
    pageId: { type: mongoose.Schema.Types.ObjectId, ref: "PageModel" },
    widgetType: { type: String, enum: ["HEADING", "IMAGE", "YOUTUBE"] },
    name: String,
    text: String,
    url: String,
    width: String,
    size: String,
    dateCreated: { type: Date, default: Date.now }
  },
  { collection: "widget" }
);

module.exports = WidgetSchema;
