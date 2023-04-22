import { ToolsDetail, ToolsTitle } from "./types";

const deployment: ToolsDetail = {
  title: "Deployment",
  subTitle:
    "Once you've finished building your web application on your local machine, it's time to take it live and share it with the world. This section features a list of web hosting services, each with its own unique pros and features. Compare popular options like Netlify, Vercel, and Cloudflare Pages to find the best fit for your web application.",
  metaDescription:
    "Compare popular options like Netlify, Vercel, and Cloudflare Pages here to find the best fit for your web application.",
};
const authentication: ToolsDetail = {
  title: "Authentication",
  subTitle:
    "Creating your own Authentication and Authorization system isn't an easy task, using trustworthy Identity-as-a-service (IDaaS) can streamline your development process and ensure your application security. You don't have to keep up with security vulnerabilities every day and can sleep peacefully knowing it will get handled and patch.",
  metaDescription:
    "Compare and contrast various options available and choose the one that best meets your specific authentication needs",
};

const tools: { [key: string]: ToolsDetail } = { deployment, authentication };
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
