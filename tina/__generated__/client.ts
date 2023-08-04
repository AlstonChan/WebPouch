import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '5b2d218ff47fa5b69756095608b5afe6d0d4c0bb', queries });
export default client;
  