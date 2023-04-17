import { Collection } from "tinacms";
import commonFields from "../commonFields";

const deploymentSchema: Collection<false> = {
  name: "deployment",
  label: "Deployment",
  path: "content/web-development/deployment",
  fields: [...commonFields],
  format: "json",
};

export default deploymentSchema;
