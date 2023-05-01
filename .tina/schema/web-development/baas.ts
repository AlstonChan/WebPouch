import { Collection } from "tinacms";
import commonFields from "../commonFields";
import { authComparisonInfo } from "./authentication";

const baasSchema: Collection<false> = {
  name: "baas",
  label: "BaaS",
  path: "content/web-development/baas",
  format: "json",
  fields: [
    ...commonFields,
    {
      label: "Comparison Info",
      name: "comparisonInfo",
      type: "object",
      fields: [
        {
          label: "Authentication",
          name: "authentication",
          type: "object",
          fields: authComparisonInfo,
        },
        {
          label: "Database",
          name: "database",
          type: "object",
          fields: [
            {
              label: "Database Type",
              name: "databaseType",
              type: "string",
            },
            {
              label: "DatabaseSize",
              name: "databaseSize",
              type: "string",
            },
            {
              label: "DatabaseEgress",
              name: "databaseEgress",
              type: "string",
            },
            {
              label: "Realtime Database",
              name: "realtimeDatabase",
              type: "string",
            },
          ],
        },
        {
          label: "Serverless Function",
          name: "serverlessFunction",
          type: "object",
          fields: [
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
              label: "Number of functions",
              name: "numberOfFunctions",
              type: "string",
            },
          ],
        },
        {
          label: "Storage",
          name: "storage",
          type: "object",
          fields: [
            {
              label: "Storage Size",
              name: "storageSize",
              type: "string",
            },
            {
              label: "Storage Egress",
              name: "storageEgress",
              type: "string",
            },
            {
              label: "Max file upload size",
              name: "maxFileUploadSize",
              type: "string",
            },
          ],
        },
        {
          label: "Push Notification",
          name: "pushNotification",
          type: "boolean",
        },
        {
          label: "GraphQL API",
          name: "graphqlApi",
          type: "boolean",
        },
      ],
    },
  ],
};

export default baasSchema;
