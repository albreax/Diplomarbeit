const fs = require("fs");
const path = require('path'); 
const ignore = [".DS_Store"];
const file="chapter/anhang/index.tex";
const root = path.resolve(__dirname,"Anhang");

const recursiveRead = (dir, level = 0) => {
    const files = fs.readdirSync(dir, {});
    return files
    .filter(f => ignore.indexOf(f) === -1)
    .reduce((prev,curr) => {
        const p = path.resolve(dir, curr);
        const stat = fs.lstatSync(p);
        const relativ = p.replace(root, "");
        const pth = relativ.split("/").pop().replace(/_/g, "\\_").normalize();
        const obj = {level, }
        if (stat.isDirectory()){
            // console.log(relativ)
            const d = "\\textbf{" +pth + ":}";
            return [...prev, {level, path: d}, ...recursiveRead(p, level + 1)];
        } else {
            return [...prev, {level, path: pth}];
        }
    },[])
}
const space = "\\indent ";
const indent = (length) => new Array(length)
    .fill(space)
    .join("");

const result = recursiveRead(root);
const str = 
result.map(o => indent(o.level) + o.path).join("\\newline\n");

console.log(str)
fs.writeFileSync(file, str);