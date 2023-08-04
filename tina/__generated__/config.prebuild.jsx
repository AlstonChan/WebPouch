// tina/config.ts
import { defineConfig } from "tinacms";

// tina/schema/commonFields.ts
var title = {
  name: "title",
  label: "Title",
  type: "string",
  isTitle: true,
  required: true
};
var description = {
  name: "description",
  label: "Description",
  type: "string",
  required: true,
  ui: {
    component: "textarea"
  }
};
var freePlanDescription = {
  name: "descriptionOfFreePlan",
  label: "Free Usage Description",
  type: "string"
};
var siteLink = {
  name: "siteLink",
  label: "Site Link",
  type: "string",
  required: true
};
var pricingPage = {
  name: "pricingPage",
  label: "Pricing Page Link",
  type: "string"
};
var thumbnail = {
  name: "thumbnail",
  label: "Thumbnail",
  type: "image",
  required: true
};
var addOnThumbnailTitle = {
  name: "title",
  type: "string",
  label: "Small Thumbnail alt text"
};
var addOnThumbnailImage = {
  name: "image",
  type: "image",
  label: "Small Thumbnail"
};
var addOnThumbnail = {
  label: "Small Thumbnail",
  name: "addOnThumbnail",
  type: "object",
  fields: [addOnThumbnailTitle, addOnThumbnailImage]
};
var githubStars = {
  name: "githubStars",
  type: "string",
  label: "GitHub Stars"
};
var githubLink = {
  name: "githubLink",
  type: "string",
  label: "GitHub Repository Link"
};
var githubInfo = {
  name: "githubInfo",
  label: "GitHub Info",
  type: "object",
  fields: [githubLink, githubStars]
};
var selfHost = {
  name: "selfHost",
  label: "Can be Self Host",
  type: "boolean"
};
var additionalInfo = {
  name: "additionalInfo",
  label: "Additional Information",
  type: "object",
  list: true,
  templates: [
    {
      name: "infoListItem",
      label: "Info List Item",
      fields: [
        {
          label: "Content",
          name: "content",
          type: "string",
          ui: {
            component: "textarea"
          }
        }
      ]
    },
    {
      name: "infoListWarning",
      label: "Info List Warning",
      fields: [
        {
          label: "Content",
          name: "content",
          type: "string"
        }
      ]
    }
  ]
};
var commonFields = [
  title,
  description,
  freePlanDescription,
  siteLink,
  pricingPage,
  thumbnail,
  addOnThumbnail,
  githubInfo,
  selfHost,
  additionalInfo
];
var commonFields_default = commonFields;

// tina/schema/web-development/authentication.ts
var authComparisonInfo = [
  {
    label: "Monthly Active Users",
    name: "monthlyActiveUsers",
    type: "string",
    required: true
  },
  {
    label: "Email And Password Auth",
    name: "emailAndPasswordAuth",
    type: "boolean",
    required: true
  },
  {
    label: "Magic Links",
    name: "magicLinks",
    type: "boolean",
    required: true
  },
  {
    label: "Social Logins",
    name: "socialLogins",
    type: "string",
    required: true
  },
  {
    label: "Phone Number Auth",
    name: "phoneNumberAuth",
    type: "string",
    required: true
  },
  {
    label: "Anonymous Auth",
    name: "anonymousAuthentication",
    type: "boolean",
    required: true
  },
  {
    label: "Multi Factor Authentication",
    name: "multiFactorAuthentication",
    type: "boolean",
    required: true
  },
  {
    label: "User Interface Provided",
    name: "userInterfaceProvided",
    type: "boolean",
    required: true
  },
  {
    label: "Custom Domain",
    name: "customDomain",
    type: "boolean",
    required: true
  },
  {
    label: "No Brand Watermark",
    name: "noBrandWatermark",
    type: "boolean",
    required: true
  }
];
var authenticationSchema = {
  name: "authentication",
  label: "Authentication",
  path: "content/web-development/authentication",
  format: "json",
  fields: [
    ...commonFields_default,
    {
      label: "Comparison Info",
      name: "comparisonInfo",
      type: "object",
      fields: authComparisonInfo
    }
  ]
};
var authentication_default = authenticationSchema;

// tina/schema/web-development/webHosting.ts
var deploymentSchema = {
  name: "webHosting",
  label: "Web Hosting",
  path: "content/web-development/webHosting",
  format: "json",
  fields: [
    ...commonFields_default,
    {
      label: "Comparison Info",
      name: "comparisonInfo",
      type: "object",
      fields: [
        {
          label: "Site Limit",
          name: "siteLimit",
          type: "string"
        },
        {
          label: "Free Bandwidth",
          name: "freeBandwidth",
          type: "string"
        },
        {
          label: "Additional Bandwidth Cost",
          name: "additionalBandwidthCost",
          type: "string"
        },
        {
          label: "Free Build Minutes",
          name: "freeBuildMinutes",
          type: "string"
        },
        {
          label: "Concurrent Builds",
          name: "concurrentBuilds",
          type: "string"
        },
        {
          label: "Deployment Preview",
          name: "deploymentPreview",
          type: "boolean"
        },
        {
          label: "Serverless Function Execution",
          name: "serverlessFunctionExecution",
          type: "string"
        },
        {
          label: "Serverless Function Invocations",
          name: "serverlessFunctionInvocations",
          type: "string"
        },
        {
          label: "Serverless Function Execution Timeout",
          name: "serverlessFunctionExecutionTimeout",
          type: "string"
        },
        {
          label: "Edge Function Execution",
          name: "edgeFunctionExecution",
          type: "string"
        },
        {
          label: "Global CDN",
          name: "globalCdn",
          type: "boolean"
        },
        {
          label: "Custom HTTP Headers",
          name: "customHeaders",
          type: "boolean"
        },
        {
          label: "HTTPS/SSL",
          name: "https",
          type: "boolean"
        },
        {
          label: "DDoS Protection",
          name: "ddosProtection",
          type: "boolean"
        }
      ]
    }
  ]
};
var webHosting_default = deploymentSchema;

// tina/schema/web-development/baas.ts
var baasSchema = {
  name: "baas",
  label: "BaaS",
  path: "content/web-development/baas",
  format: "json",
  fields: [
    ...commonFields_default,
    {
      label: "Comparison Info",
      name: "comparisonInfo",
      type: "object",
      fields: [
        {
          label: "Authentication",
          name: "authentication",
          type: "object",
          fields: authComparisonInfo
        },
        {
          label: "Database",
          name: "database",
          type: "object",
          fields: [
            {
              label: "Database Type",
              name: "databaseType",
              type: "string"
            },
            {
              label: "DatabaseSize",
              name: "databaseSize",
              type: "string"
            },
            {
              label: "DatabaseEgress",
              name: "databaseEgress",
              type: "string"
            },
            {
              label: "Realtime Database",
              name: "realtimeDatabase",
              type: "string"
            }
          ]
        },
        {
          label: "Serverless Function",
          name: "serverlessFunction",
          type: "object",
          fields: [
            {
              label: "Serverless Function Execution",
              name: "serverlessFunctionExecution",
              type: "string"
            },
            {
              label: "Serverless Function Invocations",
              name: "serverlessFunctionInvocations",
              type: "string"
            },
            {
              label: "Serverless Function Execution Timeout",
              name: "serverlessFunctionExecutionTimeout",
              type: "string"
            },
            {
              label: "Number of functions",
              name: "numberOfFunctions",
              type: "string"
            }
          ]
        },
        {
          label: "Storage",
          name: "storage",
          type: "object",
          fields: [
            {
              label: "Storage Size",
              name: "storageSize",
              type: "string"
            },
            {
              label: "Storage Egress",
              name: "storageEgress",
              type: "string"
            },
            {
              label: "Max file upload size",
              name: "maxFileUploadSize",
              type: "string"
            }
          ]
        },
        {
          label: "Push Notification",
          name: "pushNotification",
          type: "boolean"
        },
        {
          label: "GraphQL API",
          name: "graphqlApi",
          type: "boolean"
        }
      ]
    }
  ]
};
var baas_default = baasSchema;

// tina/schema/web-development/cloudProviders.ts
var cloudProvidersSchema = {
  name: "cloudProviders",
  label: "Cloud Providers",
  path: "content/web-development/cloudProviders",
  format: "json",
  fields: [
    ...commonFields_default,
    {
      label: "Features Info",
      name: "featuresInfo",
      type: "object",
      list: true,
      templates: [
        {
          label: "Feature",
          name: "feature",
          fields: [
            {
              label: "Feature",
              name: "feature",
              type: "string"
            },
            {
              label: "Description",
              name: "description",
              type: "string"
            },
            {
              label: "Duration",
              name: "duration",
              type: "string"
            },
            {
              label: "Limitations",
              name: "limitations",
              type: "string"
            }
          ]
        }
      ]
    }
  ]
};
var cloudProviders_default = cloudProvidersSchema;

// tina/schema/web-development/frameworks.ts
var frameworksSchema = {
  name: "frameworks",
  label: "Frameworks",
  path: "content/web-development/frameworks",
  fields: [...commonFields_default],
  format: "json"
};
var frameworks_default = frameworksSchema;

// tina/schema/web-development/paas.ts
var paasComparisonInfo = [
  {
    label: "Hourly Limit",
    name: "hourlyLimit",
    type: "string"
  },
  {
    label: "App Limit",
    name: "appLimit",
    type: "string"
  },
  {
    label: "Database Limit",
    name: "databaseLimit",
    type: "string"
  },
  {
    label: "Request Limit",
    name: "requestLimit",
    type: "string"
  },
  {
    label: "Free Bandwidth",
    name: "freeBandwidth",
    type: "string"
  },
  {
    label: "CPU",
    name: "cpu",
    type: "string"
  },
  {
    label: "RAM",
    name: "ram",
    type: "string"
  },
  {
    label: "Supported Language",
    name: "supportedLanguage",
    type: "string"
  },
  {
    label: "Supported Database",
    name: "supportedDatabase",
    type: "string"
  },
  {
    label: "Persistent Storage",
    name: "persistentStorage",
    type: "string"
  },
  {
    label: "HTTPS",
    name: "https",
    type: "boolean"
  },
  {
    label: "Edge Deployment",
    name: "edgeDeployment",
    type: "boolean"
  },
  {
    label: "Deploy from any GitHub repo",
    name: "deployFromAnyGithubRepo",
    type: "boolean"
  },
  {
    label: "Custom Domain",
    name: "customDomain",
    type: "boolean"
  },
  {
    label: "Sleeps",
    name: "sleeps",
    type: "string"
  }
];
var paasSchema = {
  name: "paas",
  label: "PaaS",
  path: "content/web-development/paas",
  format: "json",
  fields: [
    ...commonFields_default,
    {
      label: "Comparison Info",
      name: "comparisonInfo",
      type: "object",
      fields: paasComparisonInfo
    }
  ]
};
var paas_default = paasSchema;

// tina/config.ts
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: "15b91600-bcf8-49f2-8652-baab6358e974",
  // Get this from tina.io
  token: process.env.TINACMS_TOKEN,
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      authentication_default,
      webHosting_default,
      baas_default,
      cloudProviders_default,
      frameworks_default,
      paas_default
      // colors,
      // css,
      // fonts,
      // icons,
      // illustrator,
      // misc,
      // pattern,
      // photo,
    ]
  }
});
export {
  config_default as default
};
