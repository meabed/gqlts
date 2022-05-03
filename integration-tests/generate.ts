import { generate } from "@genqlx/cli/src/main";
import fs from "fs";
import path from "path";

generate({
  schema: fs.readFileSync(path.join(__dirname, "schema.graphql")).toString(),
  output: path.join(__dirname, "generated"),
  scalarTypes: {
    MongoID: "string",
  },
}).catch(console.error);
