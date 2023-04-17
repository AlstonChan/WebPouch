import { Collection } from "tinacms";
import commonFields from "../commonFields";

const cloudProvidersSchema: Collection<false> = {
  name: "cloudProviders",
  label: "Cloud Providers",
  path: "content/web-development/cloudProviders",
  fields: [...commonFields],
  format: "json",
};

export default cloudProvidersSchema;
