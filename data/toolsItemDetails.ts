import { ToolsDetail, ToolsTitle } from "./types";

const deployment: ToolsDetail = {
  title: "Deployment",
  subTitle:
    "Once you've finished building your web application on your local machine, it's time to take it live and share it with the world. This section features a list of web hosting services, each with its own unique pros and features. Compare popular options like Netlify, Vercel, and Cloudflare Pages to find the best fit for your web application.",
  metaDescription:
    "Compare popular options like Netlify, Vercel, and Cloudflare Pages here to find the best fit for your web application.",
};

const tools: { [key: string]: ToolsDetail } = { deployment };
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
