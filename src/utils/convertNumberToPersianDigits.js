export function toPersianDigits(str) {
  return str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
}
