import { Collection } from "tinacms";
import commonFields from "../commonFields";

const name = "baas";
const label = "BaaS";

const baasSchema: Collection<false> = {
  name,
  label,
  path: `content/web-development/${name}`,
  format: "json",
  fields: [...commonFields],
};

export default baasSchema;
