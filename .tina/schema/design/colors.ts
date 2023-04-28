import { Collection } from "tinacms";
import commonFields from "../commonFields";

const colorsSchema: Collection<false> = {
  name: "colors",
  label: "Colors",
  path: "content/web-design/colors",
  format: "json",
  fields: [...commonFields],
};

export default colorsSchema;
