//Internal dependencies
const fs = require("fs");
const os = require("os");
const path = require("path");

const { exec } = require("child_process");

//Creating the settings.json file in the root of os
const settingsPath = path.join(os.homedir(), ".bookmarkify", "settings.json");
let fileData;
try {
  fileData = require(`${settingsPath}`);
} catch (err) {
  if (err.code == "MODULE_NOT_FOUND") {
    const settingsDir = path.join(os.homedir(), ".bookmarkify");
    if (!fs.existsSync(settingsDir)) fs.mkdirSync(settingsDir);
  }
  fs.open(settingsPath, "w", (err) => {
    if (err) throw err;
  });
}

//Settings file format
const settings = {
  editor: "code",
  projects: fileData ? [...fileData.projects] : [],
};

// COMMAND: bm add (while you are in the directory which will be bookmarked)
async function save(projectName) {
  let project = {};
  let repeated = false;
  let pathName = "~/" + process.cwd().split("/").slice(3).join("/");
  let dirName = pathName.split("/").pop();

  settings.projects.forEach((item) => {
    if (item.name == dirName) repeated = true;
  });

  if (!repeated) {
    project = {
      name: projectName === undefined ? dirName : projectName,
      path: pathName,
    };

    settings.projects.push(project);

    fs.writeFileSync(settingsPath, JSON.stringify(settings));
  }
}

// COMMAND: bm remove <projectName> (Remove the project Directory from the list of bookmark)
async function remove(projectName) {
  let newList = [];
  let projectPresent = false;

  if (fileData.projects) {
    fileData.projects.forEach((item, i) => {
      if (item.name != projectName) {
        newList.push(item);
      } else projectPresent = true;
    });
  }
  if (!projectPresent) {
    console.log("Sorry! This project has not been bookmarked :(");
  } else {
    const newSettings = {
      ...settings,
      projects: newList,
    };
    fs.writeFileSync(settingsPath, JSON.stringify(newSettings));
    console.log("DONE! The project has been removed from the bookmarked list");
  }
}

//COMMAND: bm open <projectName> (To open the projectName in the editor)
async function open(projectName) {
  fileData.projects.forEach(async (item) => {
    if (item.name == projectName) {
        console.log("Wait while your editor is opening...")
      await exec(`${settings.editor} ${item.path}`);
    }
  });
}

module.exports = {
  save,
  open,
  remove,
};
