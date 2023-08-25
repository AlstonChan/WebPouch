import { TinaField } from "tinacms";

const title: TinaField = {
  name: "title",
  label: "Title",
  type: "string",
  isTitle: true,
  required: true,
};
const description: TinaField = {
  name: "description",
  label: "Description",
  type: "string",
  required: true,
  ui: {
    component: "textarea",
  },
};
const freePlanDescription: TinaField = {
  name: "descriptionOfFreePlan",
  label: "Free Usage Description",
  type: "string",
};
const siteLink: TinaField = {
  name: "siteLink",
  label: "Site Link",
  type: "string",
  required: true,
};

const additionalInfo: TinaField = {
  name: "additionalInfo",
  label: "Additional Information",
  type: "object",
  list: true,
  templates: [
    {
      name: "infoListItem",
      label: "Info List Item",
      fields: [
        {
          label: "Content",
          name: "content",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      name: "infoListWarning",
      label: "Info List Warning",
      fields: [
        {
          label: "Content",
          name: "content",
          type: "string",
        },
      ],
    },
  ],
};

const commonFields = [
  title,
  description,
  freePlanDescription,
  siteLink,
  additionalInfo,
];
export default commonFields;
