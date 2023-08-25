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
  additionalInfo
];
var commonFields_default = commonFields;

// tina/schema/web-development/authentication.ts
var name = "authentication";
var label = "Authentication";
var authenticationSchema = {
  name,
  label,
  path: `content/web-development/${name}`,
  format: "json",
  fields: [...commonFields_default]
};
var authentication_default = authenticationSchema;

// tina/schema/web-development/webHosting.ts
var name2 = "webHosting";
var label2 = "Web Hosting";
var webHostingSchema = {
  name: name2,
  label: label2,
  path: `content/web-development/${name2}`,
  format: "json",
  fields: [...commonFields_default]
};
var webHosting_default = webHostingSchema;

// tina/schema/web-development/baas.ts
var name3 = "baas";
var label3 = "BaaS";
var baasSchema = {
  name: name3,
  label: label3,
  path: `content/web-development/${name3}`,
  format: "json",
  fields: [...commonFields_default]
};
var baas_default = baasSchema;

// tina/schema/web-development/cloudProviders.ts
var name4 = "cloudProviders";
var label4 = "Cloud Providers";
var cloudProvidersSchema = {
  name: name4,
  label: label4,
  path: `content/web-development/${name4}`,
  format: "json",
  fields: [...commonFields_default]
};
var cloudProviders_default = cloudProvidersSchema;

// tina/schema/web-development/frameworks.ts
var name5 = "frameworks";
var label5 = "Frameworks";
var frameworkFields = commonFields_default.filter(
  (field) => field.name !== "descriptionOfFreePlan"
);
var frameworksSchema = {
  name: name5,
  label: label5,
  path: `content/web-development/${name5}`,
  fields: [...frameworkFields],
  format: "json"
};
var frameworks_default = frameworksSchema;

// tina/schema/web-development/paas.ts
var name6 = "paas";
var label6 = "PaaS";
var paasSchema = {
  name: name6,
  label: label6,
  path: `content/web-development/${name6}`,
  format: "json",
  fields: [...commonFields_default]
};
var paas_default = paasSchema;

// tina/config.ts
var branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.TINACMS_CLIENT_ID,
  token: process.env.TINACMS_TOKEN,
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
