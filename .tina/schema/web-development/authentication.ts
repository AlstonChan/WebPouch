import { Collection } from "tinacms";
import commonFields from "../commonFields";

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
      fields: [
        {
          label: "Active Users",
          name: "monthlyActiveUsers",
          type: "string",
        },
        {
          label: "Email And Password Auth",
          name: "emailAndPasswordAuth",
          type: "boolean",
        },
        {
          label: "Magic Links",
          name: "magicLinks",
          type: "boolean",
        },
        {
          label: "Social Logins",
          name: "socialLogins",
          type: "string",
        },
        {
          label: "Phone Number Auth",
          name: "phoneNumberAuth",
          type: "string",
        },
        {
          label: "Anonymous Auth",
          name: "anonymousAuthentication",
          type: "boolean",
        },
        {
          label: "Multi Factor Authentication",
          name: "multiFactorAuthentication",
          type: "boolean",
        },
        {
          label: "User Interface Provided",
          name: "userInterfaceProvided",
          type: "boolean",
        },
        {
          label: "Custom Domain",
          name: "customDomain",
          type: "boolean",
        },
        {
          label: "No Brand Watermark",
          name: "noBrandWatermark",
          type: "boolean",
        },
      ],
    },
  ],
};

export default authenticationSchema;
