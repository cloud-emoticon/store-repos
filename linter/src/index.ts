import * as fs from 'fs'
import * as process from "process"

for (let path of fs.readdirSync('..')) {
    if (path.endsWith(".meta.json")) {
        const metaString = fs.readFileSync(`../${path}`, "utf-8")
        let meta
        try {
            meta = JSON.parse(metaString)
        } catch (e) {
            console.error(`fail to parse meta file ${path}`)
            process.exit(42)
        }
        if (!meta["name"]) {
            console.error(`cannot find name in meta file ${path}`)
            process.exit(42)
        }
        if (!meta["location"]) {
            console.error(`cannot find location in meta file ${path}`)
            process.exit(42)
        }
        if (!meta["location"]["type"]) {
            console.error(`cannot find location type in meta file ${path}`)
            process.exit(42)
        }
        if (!(new Set(["localJson", "localXml", "remoteJson"]).has(meta["location"]["type"]))) {
            console.error(`unknown location type ${meta["location"]["type"]} for meta file ${path}`)
            process.exit(42)
        }
        const possibleLocalFilename = path.substring(0, path.length - ".meta.json".length)
        if (meta["location"]["type"] === "localJson" && !fs.existsSync(`../${possibleLocalFilename}.json`)) {
            // TODO: validate json as well
            console.error(`cannot find local json for meta file ${path}`)
            process.exit(42)
        }
        if (meta["location"]["type"] === "localXml" && !fs.existsSync(`../${possibleLocalFilename}.xml`)) {
            // TODO: validate xml as well
            console.error(`cannot find local xml for meta file ${path}`)
            process.exit(42)
        }
        if (meta["location"]["type"] === "remoteJson" && !meta["location"]["remoteUrl"]) {
            // TODO: validate url
            console.error(`cannot find remote json url for meta file ${path}`)
            process.exit(42)
        }
        if (!meta["description"]) {
            console.error(`cannot find description in meta file ${path}`)
            process.exit(42)
        }
        if (!meta["author"]) {
            console.error(`cannot find author in meta file ${path}`)
            process.exit(42)
        }
        if (!meta["author"]["name"]) {
            console.error(`cannot find author name in meta file ${path}`)
            process.exit(42)
        }
        console.log(`successfully linted meta file ${path}`)
    }
}

console.log(`successfully linted all meta files, yay!`)