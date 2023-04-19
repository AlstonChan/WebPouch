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
  required: true,
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

const commonFields = [
  title,
  description,
  freePlanDescription,
  siteLink,
  pricingPage,
  thumbnail,
];
export default commonFields;
