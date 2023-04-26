import { ToolsDetail } from "data/types";

const webHosting: ToolsDetail = {
  title: "Web Hosting",
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
    "Compare and contrast various options available and choose the one that best meets your specific authentication needs.",
};
const frameworks: ToolsDetail = {
  title: "Frameworks",
  subTitle:
    "Developing web with vanilla Javascript would just spend too much time, especially when developing a fairly complex site. A Javascript framework can streamline your workflow and write more readable code, with a plethora of Javascript framework nowadays, you should have no problem finding one.",
  metaDescription:
    "Here's a list of Javascript framework that you can compare of and choose what you should be using to build your next project.",
};
const cloudProviders: ToolsDetail = {
  title: "Cloud Providers",
  subTitle: "Placeholder",
  metaDescription: "Placeholder",
};
const security: ToolsDetail = {
  title: "Security",
  subTitle: "Placeholder",
  metaDescription: "Placeholder",
};
const baas: ToolsDetail = {
  title: "BaaS",
  subTitle: "Placeholder",
  metaDescription: "Placeholder",
};

const webDev: { [key: string]: ToolsDetail } = {
  "web-hosting": webHosting,
  authentication,
  frameworks,
  "cloud-providers": cloudProviders,
  security,
  baas,
};

export default webDev;
