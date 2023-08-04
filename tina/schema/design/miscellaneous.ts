import { Collection } from "tinacms";
import commonFields from "../commonFields";

const miscellaneousSchema: Collection<false> = {
  name: "miscellaneous",
  label: "Miscellaneous",
  path: "content/web-design/miscellaneous",
  format: "json",
  fields: [...commonFields],
};

export default miscellaneousSchema;
