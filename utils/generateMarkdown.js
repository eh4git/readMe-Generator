const templates = require("../templates");

module.exports = data => {
  console.log(data);
  switch (data.template) {
    case "original":
      return templates.original(data);
    case "starter":
      return templates.starter(data);
    default:
      throw new Error("Incorrect template name?!? Who programmed this thing!");
  }
};
