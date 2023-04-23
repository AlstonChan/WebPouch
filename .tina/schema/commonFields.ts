import { TinaField } from "tinacms";

const title: TinaField = {
  name: "title",
  type: "string",
  label: "Title",
  isTitle: true,
  required: true,
};
const description: TinaField = {
  name: "description",
  type: "string",
  label: "Description",
  required: true,
};
const freePlanDescription: TinaField = {
  name: "descriptionOfFreePlan",
  type: "string",
  label: "Free Usage Description",
};
const siteLink: TinaField = {
  name: "siteLink",
  type: "string",
  label: "Site Link",
  required: true,
};
const pricingPage: TinaField = {
  name: "pricingPage",
  type: "string",
  label: "Pricing Page Link",
};
const thumbnail: TinaField = {
  name: "thumbnail",
  type: "image",
  label: "Thumbnail",
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

const commonFields = [
  title,
  description,
  freePlanDescription,
  siteLink,
  pricingPage,
  thumbnail,
  addOnThumbnail,
  githubInfo,
];
export default commonFields;
