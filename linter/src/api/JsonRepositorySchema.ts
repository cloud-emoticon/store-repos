import { resolve } from "path";
import * as TJS from "typescript-json-schema";
import { compilerOptions, settings } from "./tjsSettings"

const program = TJS.getProgramFromFiles(
    [resolve("./src/api/JsonRepository.ts")],
    compilerOptions
);

export default TJS.generateSchema(program, "JsonRepository", settings);
