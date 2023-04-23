import { Collection } from "tinacms";
import commonFields from "../commonFields";

const analyticsSchema: Collection<false> = {
  name: "analytics",
  label: "Analytics",
  path: "content/web-development/analytics",
  fields: [...commonFields],
  format: "json",
};

export default analyticsSchema;
