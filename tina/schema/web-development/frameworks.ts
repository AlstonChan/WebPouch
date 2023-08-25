import { Collection } from "tinacms";
import commonFields from "../commonFields";

const name = "frameworks";
const label = "Frameworks";

const frameworkFields = commonFields.filter(
  (field) => field.name !== "descriptionOfFreePlan"
);

const frameworksSchema: Collection<false> = {
  name,
  label,
  path: `content/web-development/${name}`,
  fields: [...frameworkFields],
  format: "json",
};

export default frameworksSchema;
