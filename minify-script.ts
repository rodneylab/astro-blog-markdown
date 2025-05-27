import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { optimize } from "svgo";

const __dirname = path.resolve();
const svgString = readFileSync("./assets/sprite.svg", "utf8");

const { data: optimisedSVG } = optimize(svgString, {
  path: "./assets/sprite.svg",
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeHiddenElems: false,
        },
      },
    },
  ],
});
const optimisedSpriteFile = path.join(__dirname, "public/sprite.svg");

writeFileSync(optimisedSpriteFile, optimisedSVG);
