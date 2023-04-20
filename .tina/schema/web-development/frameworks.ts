import { Collection } from "tinacms";
import commonFields from "../commonFields";

const frameworksSchema: Collection<false> = {
  name: "frameworks",
  label: "Frameworks",
  path: "content/web-development/frameworks",
  fields: [...commonFields],
  format: "json",
};

export default frameworksSchema;
