import { Collection } from "tinacms";
import commonFields from "../commonFields";

const stockPhotosSchema: Collection<false> = {
  name: "stockPhotos",
  label: "Stock Photos",
  path: "content/web-design/stockPhotos",
  format: "json",
  fields: [...commonFields],
};

export default stockPhotosSchema;
