import * as fs from 'fs'
import * as process from "process"
import Ajv from "ajv"
import toJsonSchema from "./lib/toJsonSchema"

const JsonRepositorySchema = toJsonSchema("./src/api/JsonRepository.ts", "JsonRepository")
const RepositoryMetadataSchema = toJsonSchema("./src/api/RepositoryMetadata.ts", "RepositoryMetadata")

const ajv = new Ajv()
const validateJsonRepository = ajv.compile(JsonRepositorySchema)
const validateRepositoryMetadata = ajv.compile(RepositoryMetadataSchema)

for (let path of fs.readdirSync('..')) {
    if (path.endsWith(".meta.json")) {
        const metadataString = fs.readFileSync(`../${path}`, "utf-8")
        let metadata
        try {
            metadata = JSON.parse(metadataString)
        } catch (e) {
            console.error(`fail to parse metadata file ${path}`)
            process.exit(42)
        }

        if (!validateRepositoryMetadata(metadata)) {
            console.error(`fail to validate metadata ${path}`)
            console.error(validateRepositoryMetadata.errors)
            process.exit(42)
        }

        const possibleLocalFilename = path.substring(0, path.length - ".meta.json".length)
        if (metadata["location"]["type"] === "localJson") {
            const localJsonFilename = `../${possibleLocalFilename}.json`
            if (!fs.existsSync(localJsonFilename)) {
                console.error(`cannot find local json repo for metadata ${path}`)
                process.exit(42)
            }
            const localJsonString = fs.readFileSync(localJsonFilename, 'utf-8')
            let localJson
            try {
                localJson = JSON.parse(localJsonString)
            } catch (e) {
                console.error(`fail to parse local json repo ${localJsonFilename}`)
                process.exit(42)
            }
            if (!validateJsonRepository(localJson)) {
                console.error(`fail to validate local json repo ${localJsonFilename}`)
                console.error(validateJsonRepository.errors)
                process.exit(42)
            } else {
                console.log(`successfully linted local json repo ${localJsonFilename}`)
            }
        }
        
        console.log(`successfully linted metadata ${path}`)
    }
}

console.log(`successfully linted all metadata files, yay!`)
