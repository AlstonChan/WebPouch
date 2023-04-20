import { Collection } from "tinacms";
import commonFields from "../commonFields";

const authenticationSchema: Collection<false> = {
  name: "authentication",
  label: "Authentication",
  path: "content/web-development/authentication",
  fields: [...commonFields],
  format: "json",
};

export default authenticationSchema;
