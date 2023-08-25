import { Collection } from "tinacms";
import commonFields from "../commonFields";

const name = "webHosting";
const label = "Web Hosting";

const webHostingSchema: Collection<false> = {
  name,
  label,
  path: `content/web-development/${name}`,
  format: "json",
  fields: [...commonFields],
};

export default webHostingSchema;
