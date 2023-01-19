const templates = require("../templates");

module.exports = data => {
  // console.log(data)
  switch (data.template) {
    case "Original":
      return templates.original(data);
    case "Starter":
      return templates.starter(data);
    default:
      throw new Error("Incorrect template name?!? Who programmed this thing!");
  }
};
