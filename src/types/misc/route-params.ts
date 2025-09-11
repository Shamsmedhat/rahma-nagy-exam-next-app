import { Locale } from "next-intl";

export type Params<T = {}> = Promise<{ locale: Locale } & T>;
