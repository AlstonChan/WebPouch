import { Collection } from "tinacms";
import commonFields from "../commonFields";

const name = "authentication";
const label = "Authentication";

const authenticationSchema: Collection<false> = {
  name,
  label,
  path: `content/web-development/${name}`,
  format: "json",
  fields: [...commonFields],
};

export default authenticationSchema;
