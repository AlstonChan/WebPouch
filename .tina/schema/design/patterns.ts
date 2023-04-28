import { Collection } from "tinacms";
import commonFields from "../commonFields";

const patternsSchema: Collection<false> = {
  name: "patterns",
  label: "Patterns",
  path: "content/web-design/patterns",
  format: "json",
  fields: [...commonFields],
};

export default patternsSchema;
