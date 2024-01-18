import { resolve } from "path";
import * as TJS from "typescript-json-schema";
import { compilerOptions, settings } from "./tjsSettings"

const toJsonSchema = (pathname: string, fullTypeName: string) => {
	const program = TJS.getProgramFromFiles(
		[resolve(pathname)],
		compilerOptions
	);

	return TJS.generateSchema(program, fullTypeName, settings);
};

export default toJsonSchema;
