const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass");
const replace = require("gulp-replace");
const fs = require("fs");

sass.compiler = require("node-sass");

function sassTask() {
  return src("public/wc/wc-card.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(dest("public/wc/dist/"));
}

function replaceTask() {
  return src("public/wc/wc-card.js")
    .pipe(
      replace(
        "<style></style>",
        `<style>${fs.readFileSync("public/wc/dist/wc-card.css")}</style>`
      )
    )
    .pipe(dest("public/wc/dist"));
}

exports.build = series(sassTask, replaceTask);
exports.default = function() {
  watch(
    ["public/wc/*.(js|scss)", "src/card-element-base.scss"],
    { ignoreInitial: false },
    series(sassTask, replaceTask)
  );
};
