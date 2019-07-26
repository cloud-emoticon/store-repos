import { resolve } from "path";
import * as TJS from "typescript-json-schema";

const settings: TJS.PartialArgs = {
    required: true
};

const compilerOptions: TJS.CompilerOptions = {
    strictNullChecks: true
}

const program = TJS.getProgramFromFiles(
    [resolve("./src/api/JsonRepository.ts")],
    compilerOptions
);

export default TJS.generateSchema(program, "JsonRepository", settings);
