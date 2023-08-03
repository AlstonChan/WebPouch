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
  clientId: "15b91600-bcf8-49f2-8652-baab6358e974", // Get this from tina.io
  token: "3bebfeffd0c0c74283d1183945e271a25517bb63", // Get this from tina.io
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
      // colors,
      // css,
      // fonts,
      // icons,
      // illustrator,
      // misc,
      // pattern,
      // photo,
    ],
  },
});
