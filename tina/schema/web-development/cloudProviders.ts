import { Collection } from "tinacms";
import commonFields from "../commonFields";

const cloudProvidersSchema: Collection<false> = {
  name: "cloudProviders",
  label: "Cloud Providers",
  path: "content/web-development/cloudProviders",
  format: "json",
  fields: [
    ...commonFields,
    {
      label: "Features Info",
      name: "featuresInfo",
      type: "object",
      list: true,
      templates: [
        {
          label: "Feature",
          name: "feature",
          fields: [
            {
              label: "Feature",
              name: "feature",
              type: "string",
            },
            {
              label: "Description",
              name: "description",
              type: "string",
            },
            {
              label: "Duration",
              name: "duration",
              type: "string",
            },
            {
              label: "Limitations",
              name: "limitations",
              type: "string",
            },
          ],
        },
      ],
    },
  ],
};

export default cloudProvidersSchema;
