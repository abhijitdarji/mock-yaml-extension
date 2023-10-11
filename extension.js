const vscode = require("vscode");

function activate(context) {
  console.log("Mock YAML Server Extension activated.");
}

function deactivate() {
  console.log("Mock YAML Server Extension deactivated.");
}

module.exports = {
  activate,
  deactivate
};
