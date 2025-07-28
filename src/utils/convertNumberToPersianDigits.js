export function toPersianDigits(str) {
  if (typeof str === "number") {
    str = str.toString();
  }
  return str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
