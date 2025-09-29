export function toEditedPrice(price) {
  // const digits = price.replace(/\D/g, "");
  const formatted = Number(price).toLocaleString("fa-IR");
  const formattedWithToman = `${formatted}  تومان`;
  return formattedWithToman;
}
export function toEditedPrice2(price) {
  // const digits = price.replace(/\D/g, "");
  const formatted = Number(price).toLocaleString("fa-IR");
  return formatted;
}
