import { Collection } from "tinacms";
import commonFields from "../commonFields";

const securitySchema: Collection<false> = {
  name: "security",
  label: "Security",
  path: "content/web-development/security",
  fields: [...commonFields],
  format: "json",
};

export default securitySchema;
