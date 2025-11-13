import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { toPersianDigits } from "./convertNumberToPersianDigits";
import { DateObject } from "react-multi-date-picker";

dayjs.extend(jalaliday);

export function toPersianDate(dateString: string) {
  const jalaliDate = dayjs(dateString)
    .calendar("jalali")
    .locale("fa")
    .format("YYYY/MM/DD");
  return toPersianDigits(jalaliDate);
}

////

export function convertToMiladiFromObject(
  persianDate?: DateObject | null | string
): string | null {
  if (!persianDate) return null;
  if (typeof persianDate === "string") return persianDate;
  return persianDate.toDate()?.toISOString()?.split("T")[0] ?? null;
}

export function toDatepersianFromMiladi(miladi?: string | null): string | null {
  if (!miladi) return null;
  const jalaliDate = dayjs(miladi)
    .calendar("jalali")
    .locale("en")
    .format("YYYY/MM/DD");
  return toPersianDigits(jalaliDate) ?? null;
}
