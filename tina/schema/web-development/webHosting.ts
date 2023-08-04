import { Collection } from "tinacms";
import commonFields from "../commonFields";

const deploymentSchema: Collection<false> = {
  name: "webHosting",
  label: "Web Hosting",
  path: "content/web-development/webHosting",
  format: "json",
  fields: [
    ...commonFields,
    {
      label: "Comparison Info",
      name: "comparisonInfo",
      type: "object",
      fields: [
        {
          label: "Site Limit",
          name: "siteLimit",
          type: "string",
        },
        {
          label: "Free Bandwidth",
          name: "freeBandwidth",
          type: "string",
        },
        {
          label: "Additional Bandwidth Cost",
          name: "additionalBandwidthCost",
          type: "string",
        },
        {
          label: "Free Build Minutes",
          name: "freeBuildMinutes",
          type: "string",
        },
        {
          label: "Concurrent Builds",
          name: "concurrentBuilds",
          type: "string",
        },
        {
          label: "Deployment Preview",
          name: "deploymentPreview",
          type: "boolean",
        },
        {
          label: "Serverless Function Execution",
          name: "serverlessFunctionExecution",
          type: "string",
        },
        {
          label: "Serverless Function Invocations",
          name: "serverlessFunctionInvocations",
          type: "string",
        },
        {
          label: "Serverless Function Execution Timeout",
          name: "serverlessFunctionExecutionTimeout",
          type: "string",
        },
        {
          label: "Edge Function Execution",
          name: "edgeFunctionExecution",
          type: "string",
        },
        {
          label: "Global CDN",
          name: "globalCdn",
          type: "boolean",
        },
        {
          label: "Custom HTTP Headers",
          name: "customHeaders",
          type: "boolean",
        },
        {
          label: "HTTPS/SSL",
          name: "https",
          type: "boolean",
        },
        {
          label: "DDoS Protection",
          name: "ddosProtection",
          type: "boolean",
        },
      ],
    },
  ],
};

export default deploymentSchema;
