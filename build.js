let sass = require("sass");
let fs = require("fs");

let options = {
  file: "src/style.scss",
  outFile: "dist/style.css",
  sourceMap: false
};

sass.render(options, (err, res) => {
  if (!err) {
    fs.writeFile(options.outFile, res.css, console.error);
  } else {
    console.error(err);
  }
});
