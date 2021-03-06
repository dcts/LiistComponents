var fs = require('fs');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function defaultTask(cb) {
  // place code for your default task here
  console.log("gulpfile initialized and default task is running!");
  buildIcons();
  buildIconNamesDictionary();
  cb();
}

function buildIcons() {
  // get file template as String (with placeholders)
  let jsFileContent = 'export const LiistSVGIcons = { \n@@@CONTENT@@@ };';

  // get all filenames and content as object (key=iconname, value=svgContent)
  const dirname = "./src/atoms/icons/svg/";
  const allContent = {};
  let files = fs.readdirSync(dirname);
  files.forEach(function (file) {
    var contents = fs.readFileSync(dirname + file, 'utf8');
    const iconName = file.split(".")[0];
    allContent[iconName] = contents;
  })

  // inject the filename and svg content
  const buildContent = [];
  for (const [key, value] of Object.entries(allContent)) {
    buildContent.push(`'${key}': \`${value}\``);
  }
  jsFileContent = jsFileContent.replace("@@@CONTENT@@@", buildContent.join(", \n"));

  // save as new file (override)
  fs.writeFileSync('./src/atoms/icons/LiistSVGIcons.js', jsFileContent);
}

function buildIconNamesDictionary() {
  // get file template as String (with placeholders)
  let jsFileContent = 'export const LiistIconNames = [ @@@CONTENT@@@ ];';

  // get all filenames and content as object (key=iconname, value=svgContent)
  const dirname = "./src/atoms/icons/svg/";
  const iconNamesArr = [];
  let files = fs.readdirSync(dirname);
  files.forEach(function (file) {
    const iconName = file.split(".")[0];
    iconNamesArr.push(`"${iconName}"`);
  });

  // save as new file (override)
  jsFileContent = jsFileContent.replace("@@@CONTENT@@@", iconNamesArr.join(","));
  fs.writeFileSync('./src/atoms/icons/LiistIconNames.js', jsFileContent);
}

// exports.buildIcons = buildIcons;
exports.default = defaultTask
