import { Collection } from "tinacms";
import commonFields from "../commonFields";

const frameworksSchema: Collection<false> = {
  name: "frameworks",
  label: "Frameworks",
  path: "content/web-development/frameworks",
  fields: [...commonFields],
};

export default frameworksSchema;
