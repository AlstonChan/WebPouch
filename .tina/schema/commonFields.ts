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
const features: TinaField = {
  name: "features",
  type: "string",
  label: "Features",
  required: true,
  list: true,
  ui: {
    max: 5,
  },
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
  siteLink,
  pricingPage,
  features,
  thumbnail,
];
export default commonFields;
