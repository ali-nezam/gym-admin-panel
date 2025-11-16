export function toPersianDigits(str: string | number): string {
  if (typeof str === "number") {
    str = str.toString();
  }
  return str.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[parseInt(d)]);
}
