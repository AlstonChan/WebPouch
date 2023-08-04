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
const pricingPage: TinaField = {
  name: "pricingPage",
  label: "Pricing Page Link",
  type: "string",
};
const thumbnail: TinaField = {
  name: "thumbnail",
  label: "Thumbnail",
  type: "image",
  required: true,
};

const addOnThumbnailTitle: TinaField = {
  name: "title",
  type: "string",
  label: "Small Thumbnail alt text",
};
const addOnThumbnailImage: TinaField = {
  name: "image",
  type: "image",
  label: "Small Thumbnail",
};
const addOnThumbnail: TinaField = {
  label: "Small Thumbnail",
  name: "addOnThumbnail",
  type: "object",
  fields: [addOnThumbnailTitle, addOnThumbnailImage],
};

const githubStars: TinaField = {
  name: "githubStars",
  type: "string",
  label: "GitHub Stars",
};
const githubLink: TinaField = {
  name: "githubLink",
  type: "string",
  label: "GitHub Repository Link",
};
const githubInfo: TinaField = {
  name: "githubInfo",
  label: "GitHub Info",
  type: "object",
  fields: [githubLink, githubStars],
};

const selfHost: TinaField = {
  name: "selfHost",
  label: "Can be Self Host",
  type: "boolean",
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
  pricingPage,
  thumbnail,
  addOnThumbnail,
  githubInfo,
  selfHost,
  additionalInfo,
];
export default commonFields;
