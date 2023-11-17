import type { ReadTimeResults } from "reading-time";

type FormatReadingTimeFnParams = {
  t: ReadTimeResults;
  prefix?: string;
  suffix?: string;
};
export const formatReadingTime = ({
  t,
  prefix = "",
  suffix = "",
}: FormatReadingTimeFnParams): string =>
  `${prefix}${Math.round(t.minutes)}${suffix}`;
