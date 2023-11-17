type ReadingTime = {
  text: string;
  minutes: number;
  time: number;
  words: number;
};
type FormatReadingTimeFnParams = {
  t: ReadingTime;
  prefix?: string;
  suffix?: string;
};
export const formatReadingTime = ({
  t,
  prefix = "",
  suffix = "",
}: FormatReadingTimeFnParams): string =>
  `${prefix}${Math.round(t.minutes)}${suffix}`;
