import fs from "fs";

const path = new URL("../src/data/content.ts", import.meta.url);
let s = fs.readFileSync(path, "utf8");

s = s.replace(
  'title: "byAcre Size Calculator"',
  'title: "ByAcre Calculator Design"',
);

const start = s.indexOf("export const projects: Project[] = [");
const end = s.indexOf("export function getProject");
if (start < 0 || end < 0) throw new Error("markers not found");

const before = s.slice(0, start);
const after = s.slice(end);
const arrText = s.slice(start, end);

const order = [
  "byacre-rollator",
  "dabster-craft-shop",
  "insting-loan",
  "byacre-calculator",
  "rentmates",
  "order-extension",
];

function extractProject(text, slug) {
  const marker = `slug: "${slug}"`;
  const mi = text.indexOf(marker);
  if (mi < 0) throw new Error(`missing ${slug}`);
  let i = mi;
  while (i > 0 && text[i] !== "{") i--;
  let depth = 0;
  for (let j = i; j < text.length; j++) {
    if (text[j] === "{") depth++;
    else if (text[j] === "}") {
      depth--;
      if (depth === 0) {
        let k = j + 1;
        while (k < text.length && (text[k] === "," || text[k] === "\r")) k++;
        if (text[k] === "\n") k++;
        return text.slice(i, k).replace(/,?\s*$/, ",\n");
      }
    }
  }
  throw new Error(`unclosed ${slug}`);
}

const body = order.map((slug) => extractProject(arrText, slug)).join("\n");
const newArr = `export const projects: Project[] = [\n${body}];\n\n`;
fs.writeFileSync(path, before + newArr + after);
console.log("reordered:", order.join(" -> "));
