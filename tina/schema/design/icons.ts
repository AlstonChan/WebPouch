import { Collection } from "tinacms";
import commonFields from "../commonFields";

const iconsSchema: Collection<false> = {
  name: "icons",
  label: "Icons",
  path: "content/web-design/icons",
  format: "json",
  fields: [...commonFields],
};

export default iconsSchema;
