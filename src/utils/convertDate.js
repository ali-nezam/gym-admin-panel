import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { toPersianDigits } from "./convertNumberToPersianDigits";

dayjs.extend(jalaliday);

export function toPersianDate(dateString) {
  const jalaliDate = dayjs(dateString)
    .calendar("jalali")
    .locale("fa")
    .format("YYYY/MM/DD");
  return toPersianDigits(jalaliDate);
}
