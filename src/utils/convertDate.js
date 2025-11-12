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

export function toMiladiDate(date) {
  // console.log(date);
  const miladi = date?.toDate().toISOString().split("T")[0];
  // console.log(miladi);
  return miladi;
}

export function toPersianDateEn(dateString) {
  const jalaliDate = dayjs(dateString)
    .calendar("jalali")
    .locale("en")
    .format("YYYY/MM/DD");
  return toPersianDigits(jalaliDate);
}
