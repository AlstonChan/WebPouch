import design from "./toolsItemDetails/design";
import webDev from "./toolsItemDetails/webdev";

import { ToolsDetail, ToolsTitle } from "./types";

const tools: { [key: string]: ToolsDetail } = {
  ...webDev,
  ...design,
};
export default tools;

// convert ToolsTitle to ToolsTitleSlug
export const toLink = (text: ToolsTitle, basePath: boolean = true): string => {
  const lowerCaseText = text.toLowerCase();
  const noSpacing = lowerCaseText.replace(" ", "-");
  let result = "";
  if (basePath) {
    result = `/tools/${noSpacing}`;
  } else {
    result = noSpacing;
  }
  return result;
};
