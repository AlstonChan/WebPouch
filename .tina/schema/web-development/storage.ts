import { Collection } from "tinacms";
import commonFields from "../commonFields";

const storageSchema: Collection<false> = {
  name: "storage",
  label: "Storage",
  path: "content/web-development/storage",
  fields: [...commonFields],
};

export default storageSchema;
