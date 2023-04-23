import { Collection } from "tinacms";
import commonFields from "../commonFields";

const imagesSchema: Collection<false> = {
  name: "images",
  label: "Images",
  path: "content/web-development/images",
  fields: [...commonFields],
  format: "json",
};

export default imagesSchema;
