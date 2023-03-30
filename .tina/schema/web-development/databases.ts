import { Collection } from "tinacms";
import commonFields from "../commonFields";

const databasesSchema: Collection<false> = {
  name: "databases",
  label: "Databases",
  path: "content/web-development/databases",
  fields: [...commonFields],
};

export default databasesSchema;
