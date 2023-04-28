import { Collection } from "tinacms";
import commonFields from "../commonFields";

const illustratorSchema: Collection<false> = {
  name: "illustrator",
  label: "Illustrator",
  path: "content/web-design/illustrator",
  format: "json",
  fields: [...commonFields],
};

export default illustratorSchema;
