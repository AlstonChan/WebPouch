// SPDX-License-Identifier: GPL-3.0-or-later
// SPDX-FileCopyrightText: Copyright © 2023 WebPouch Chan Alston

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${Suffix}`
  : S;
type ToSlug<S extends string> = Lowercase<Replace<S, " ", "-">>;

export type WebDev =
  | "Authentication"
  | "Web Hosting"
  | "Frameworks"
  | "Cloud Providers"
  | "PaaS"
  | "BaaS";

type WebDevSlug = ToSlug<WebDev>;

export type Design =
  | "Illustrator"
  | "CSS"
  | "Icons"
  | "Stock Photos"
  | "Fonts"
  | "Colors"
  | "Patterns"
  | "Miscellaneous";

type DesignSlug = ToSlug<Design>;

export type ToolsTitle = WebDev | Design | "Tools";
export type ToolsTitleSlug = WebDevSlug | DesignSlug | "tools";

export interface NavList {
  title: ToolsTitle;
  icon: JSX.Element;
}

export interface ToolsDetail {
  title: ToolsTitle;
  subTitle: string;
  metaDescription: string;
}
