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
  subTitle:
    "Cloud services offer a wide range of solutions for building various applications, from virtual machines to managed app platforms, making it easy for you to build anything you can imagine. Explore our comprehensive list of free services provided by each cloud provider to minimize your application costs.",
  metaDescription:
    "Build anything you can imagine with cloud services. Explore our curated list of free services from top providers to minimize your app costs.",
};
const paas: ToolsDetail = {
  title: "PaaS",
  subTitle:
    "After building your full-stack application, backend server or discord bot. It is time to showcase it online, by using a Platform as a Service, you can easily deploy your app without the hassle of managing the underlying infrastructure.",
  metaDescription:
    "Find the best fit Platform as a Service (PaaS) that has a free tier to reduce cost.",
};
const baas: ToolsDetail = {
  title: "BaaS",
  subTitle:
    "Sometimes, you may want to build a web application without getting bogged down in complex backend tasks such as creating an authentication and authorization system. With the use of Backend as a Service (BaaS), you can focus on building your app instead of worrying about securing your server or setting up your database.",
  metaDescription:
    "Compare a list of BaaS providers to find the most suitable one for your project.",
};

const webDev: { [key: string]: ToolsDetail } = {
  "web-hosting": webHosting,
  authentication,
  frameworks,
  "cloud-providers": cloudProviders,
  paas,
  baas,
};

export default webDev;
