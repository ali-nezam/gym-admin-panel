export function toEditedPrice(price: string | number | (string | number)[]) {
  // const digits = price.replace(/\D/g, "");
  const formatted = Number(price).toLocaleString("fa-IR");
  const formattedWithToman = `${formatted}  تومان`;
  return formattedWithToman;
}
export function toEditedPrice2(price: string | number) {
  // const digits = price.replace(/\D/g, "");
  const formatted = Number(price).toLocaleString("fa-IR");
  return formatted;
}
