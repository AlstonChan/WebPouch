import { MoneyOff, GitHub, Difference } from "@mui/icons-material";

interface Features {
  icon: JSX.Element;
  title: string;
  description: string;
}

export const features: Features[] = [
  {
    icon: <Difference fontSize="large" />,
    title: "One-stop-shop",
    description:
      "Entripel is a one-stop-shop for web developers, offering them a single platform to discover and compare various cloud services from multiple providers, so you can make informed decisions based on your specific project requirements.",
  },
  {
    icon: <MoneyOff fontSize="large" />,
    title: "Focused on Free tier",
    description:
      "Our platform is tailored for web developers on a budget, providing them with a comprehensive range of cloud services and tools at no cost or at low prices.",
  },
  {
    icon: <GitHub fontSize="large" />,
    title: "Open source on GitHub",
    description:
      "This is an open-source project, which means its code is freely available for developers to access, modify, and customize according to their needs.",
  },
];
