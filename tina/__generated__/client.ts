import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'https://content.tinajs.io/1.4/content/15b91600-bcf8-49f2-8652-baab6358e974/github/main', token: '5b2d218ff47fa5b69756095608b5afe6d0d4c0bb', queries });
export default client;
  