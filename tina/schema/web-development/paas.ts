import { Collection, TinaField } from "tinacms";
import commonFields from "../commonFields";

const paasComparisonInfo: TinaField[] = [
  {
    label: "Hourly Limit",
    name: "hourlyLimit",
    type: "string",
  },
  {
    label: "App Limit",
    name: "appLimit",
    type: "string",
  },
  {
    label: "Database Limit",
    name: "databaseLimit",
    type: "string",
  },
  {
    label: "Request Limit",
    name: "requestLimit",
    type: "string",
  },
  {
    label: "Free Bandwidth",
    name: "freeBandwidth",
    type: "string",
  },
  {
    label: "CPU",
    name: "cpu",
    type: "string",
  },
  {
    label: "RAM",
    name: "ram",
    type: "string",
  },
  {
    label: "Supported Language",
    name: "supportedLanguage",
    type: "string",
  },
  {
    label: "Supported Database",
    name: "supportedDatabase",
    type: "string",
  },
  {
    label: "Persistent Storage",
    name: "persistentStorage",
    type: "string",
  },
  {
    label: "HTTPS",
    name: "https",
    type: "boolean",
  },
  {
    label: "Edge Deployment",
    name: "edgeDeployment",
    type: "boolean",
  },
  {
    label: "Deploy from any GitHub repo",
    name: "deployFromAnyGithubRepo",
    type: "boolean",
  },
  {
    label: "Custom Domain",
    name: "customDomain",
    type: "boolean",
  },
  {
    label: "Sleeps",
    name: "sleeps",
    type: "string",
  },
];

const paasSchema: Collection<false> = {
  name: "paas",
  label: "PaaS",
  path: "content/web-development/paas",
  format: "json",
  fields: [
    ...commonFields,
    {
      label: "Comparison Info",
      name: "comparisonInfo",
      type: "object",
      fields: paasComparisonInfo,
    },
  ],
};

export default paasSchema;
