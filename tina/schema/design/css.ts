import { Collection } from "tinacms";
import commonFields from "../commonFields";

const cssSchema: Collection<false> = {
  name: "css",
  label: "CSS",
  path: "content/web-design/css",
  format: "json",
  fields: [...commonFields],
};

export default cssSchema;
