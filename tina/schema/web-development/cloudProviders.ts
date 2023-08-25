import { Collection } from "tinacms";
import commonFields from "../commonFields";

const name = "cloudProviders";
const label = "Cloud Providers";

const cloudProvidersSchema: Collection<false> = {
  name,
  label,
  path: `content/web-development/${name}`,
  format: "json",
  fields: [...commonFields],
};

export default cloudProvidersSchema;
