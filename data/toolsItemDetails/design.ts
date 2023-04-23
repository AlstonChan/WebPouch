import { ToolsDetail } from "data/types";

const illustrator: ToolsDetail = {
  title: "Illustrator",
  subTitle: "Placeholder",
  metaDescription: "Placeholder",
};
const css: ToolsDetail = {
  title: "CSS",
  subTitle: "Placeholder",
  metaDescription: "Placeholder",
};
const icons: ToolsDetail = {
  title: "Icons",
  subTitle: "Placeholder",
  metaDescription: "Placeholder",
};
const stockPhotos: ToolsDetail = {
  title: "Stock Photos",
  subTitle: "Placeholder",
  metaDescription: "Placeholder",
};
const fonts: ToolsDetail = {
  title: "Fonts",
  subTitle: "Placeholder",
  metaDescription: "Placeholder",
};
const colors: ToolsDetail = {
  title: "Colors",
  subTitle: "Placeholder",
  metaDescription: "Placeholder",
};
const pattern: ToolsDetail = {
  title: "Pattern",
  subTitle: "Placeholder",
  metaDescription: "Placeholder",
};
const miscellaneous: ToolsDetail = {
  title: "Miscellaneous",
  subTitle: "Placeholder",
  metaDescription: "Placeholder",
};

const design: { [key: string]: ToolsDetail } = {
  illustrator,
  css,
  icons,
  "stock-photos": stockPhotos,
  fonts,
  colors,
  pattern,
  miscellaneous,
};

export default design;
