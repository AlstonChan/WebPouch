import { Collection } from "tinacms";
import commonFields from "../commonFields";

const baasSchema: Collection<false> = {
  name: "baas",
  label: "BaaS",
  path: "content/web-development/baas",
  fields: [...commonFields],
  format: "json",
};

export default baasSchema;
