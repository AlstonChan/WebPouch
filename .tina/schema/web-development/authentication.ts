import { Collection, TinaField } from "tinacms";
import commonFields from "../commonFields";

export const authComparisonInfo: TinaField[] = [
  {
    label: "Monthly Active Users",
    name: "monthlyActiveUsers",
    type: "string",
    required: true,
  },
  {
    label: "Email And Password Auth",
    name: "emailAndPasswordAuth",
    type: "boolean",
    required: true,
  },
  {
    label: "Magic Links",
    name: "magicLinks",
    type: "boolean",
    required: true,
  },
  {
    label: "Social Logins",
    name: "socialLogins",
    type: "string",
    required: true,
  },
  {
    label: "Phone Number Auth",
    name: "phoneNumberAuth",
    type: "string",
    required: true,
  },
  {
    label: "Anonymous Auth",
    name: "anonymousAuthentication",
    type: "boolean",
    required: true,
  },
  {
    label: "Multi Factor Authentication",
    name: "multiFactorAuthentication",
    type: "boolean",
    required: true,
  },
  {
    label: "User Interface Provided",
    name: "userInterfaceProvided",
    type: "boolean",
    required: true,
  },
  {
    label: "Custom Domain",
    name: "customDomain",
    type: "boolean",
    required: true,
  },
  {
    label: "No Brand Watermark",
    name: "noBrandWatermark",
    type: "boolean",
    required: true,
  },
];

const authenticationSchema: Collection<false> = {
  name: "authentication",
  label: "Authentication",
  path: "content/web-development/authentication",
  format: "json",
  fields: [
    ...commonFields,
    {
      label: "Comparison Info",
      name: "comparisonInfo",
      type: "object",
      fields: authComparisonInfo,
    },
  ],
};

export default authenticationSchema;
