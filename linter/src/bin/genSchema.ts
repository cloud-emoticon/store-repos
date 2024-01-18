import * as fs from 'fs'
import toJsonSchema from "../lib/toJsonSchema"

const JsonRepositorySchema = toJsonSchema("./src/api/JsonRepository.ts", "JsonRepository")
const RepositoryMetadataSchema = toJsonSchema("./src/api/RepositoryMetadata.ts", "RepositoryMetadata")

fs.mkdirSync("../schema", { recursive: true })
fs.writeFileSync("../schema/JsonRepository.json", JSON.stringify(JsonRepositorySchema, null, '    '))
fs.writeFileSync("../schema/RepositoryMetadata.json", JSON.stringify(RepositoryMetadataSchema, null, '    '))
