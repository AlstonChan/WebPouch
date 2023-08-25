import { Collection } from "tinacms";
import commonFields from "../commonFields";

const name = "paas";
const label = "PaaS";

const paasSchema: Collection<false> = {
  name,
  label,
  path: `content/web-development/${name}`,
  format: "json",
  fields: [...commonFields],
};

export default paasSchema;
