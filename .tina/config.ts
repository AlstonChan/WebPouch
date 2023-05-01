import { defineConfig } from "tinacms";

import {
  auth,
  webHosting,
  baas,
  cloud,
  frameworks,
  paas,
} from "./schema/web-development/webDevelopmentSchema";

import {
  colors,
  css,
  fonts,
  icons,
  illustrator,
  misc,
  pattern,
  photo,
} from "./schema/design/designSchema";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "111", // Get this from tina.io
  token: "null", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      auth,
      webHosting,
      baas,
      cloud,
      frameworks,
      paas,
      colors,
      css,
      fonts,
      icons,
      illustrator,
      misc,
      pattern,
      photo,
    ],
  },
});
