const fs = require('fs');
const parser = require('xml2json');

const drawio = "/Users/albrecht/Documents/Studium/Diplomarbeit/Arbeit/diagrams/Ist-Architektur/Paketdiagram-Grob.drawio";
const target = "/Users/albrecht/freedesign5_clean/allowed.json"

const packageFilter = e => e.style && e.style.indexOf("shape=folder;") > -1
    && e.value !== 'Package A' && e.value !== 'Package B';

const relationFilter = e => e.style && e.style.indexOf("edgeStyle=orthogonalEdgeStyle") > -1;

fs.readFile(drawio, function (err, data) {
    const json = JSON.parse(parser.toJson(data));
    const cells = json.mxfile.diagram.mxGraphModel.root.mxCell;
    const packages = cells.filter(packageFilter);
    const relations = cells.filter(relationFilter);
    console.log("packages count:", packages.length);
    console.log("relations count:", relations.length);

    const getPackedById = (id) => packages.find(e => id === e.id);

    const packageRelations = relations.map(r => {
        const { source, target } = r;
        const sPackage = getPackedById(source);
        const tPackage = getPackedById(target);

        if (sPackage && tPackage) {
            // console.log(sPackage.value, tPackage.value);
            return {
                from: tPackage.value,
                to: sPackage.value,
            };
        }
        return undefined;
    })
        .filter(v => v !== undefined)
        .map(v => ({
            from: { path: "^src/" + v.from },
            to: { path: "^src/" + v.to }
        }))
        ;
    const str = JSON.stringify(packageRelations);
    console.log("packageRelations", str);
    fs.writeFile(target, new Uint8Array(Buffer.from(str)), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });

    // cells.filter(e => e.id !== "0" && e.id !== "1").forEach(element => {
    //     console.log(element);
    // });
});