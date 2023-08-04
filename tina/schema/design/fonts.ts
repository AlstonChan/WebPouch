import { Collection } from "tinacms";
import commonFields from "../commonFields";

const fontsSchema: Collection<false> = {
  name: "fonts",
  label: "Fonts",
  path: "content/web-design/fonts",
  format: "json",
  fields: [...commonFields],
};

export default fontsSchema;
