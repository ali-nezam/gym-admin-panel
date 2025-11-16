export default function formatPhoneNumber(number: string) {
  if (!number) return "";

  // حذف تمام کاراکترهای غیرعددی
  const digits = number.replace(/\D/g, "");
  // حذف صفر ابتدایی (در صورت وجود)
  const cleaned = digits.startsWith("0") ? digits.slice(1) : digits;

  // بررسی طول
  if (cleaned.length !== 10) return "شماره نامعتبر است";

  // اعمال فرمت
  return `${cleaned.slice(0, 3)} - ${cleaned.slice(3, 6)} - ${cleaned.slice(
    6
  )}`;
  // console.log(
  //   `${cleaned.slice(0, 3)} - ${cleaned.slice(3, 6)} - ${cleaned.slice(6)}`
  // );
}
