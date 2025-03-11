import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export function dateFormatter(date: string) {
  const formattedDate = dayjs().to(dayjs(date));
  return formattedDate;
}

export function dateFormatterDetailed(date:string) {
  const formattedDate = dayjs(date).format("DD/MM/YYYY")
  return formattedDate
}
