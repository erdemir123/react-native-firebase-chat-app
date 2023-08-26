import { object, string, number, date, InferType } from "yup";
const messages = {
  required: "Bu alan zorunludur",
  email: "Geçerli bir E-mail giriniz  ",
  min: "en az 5 karakter giriniz",
  number: "sadece sayı giriniz",
  pass: "Şifre en az 1 büyük harf 1 rakam , 1 özel işaret ve uzunluğu en 6 karakter olmalıdır",
  fullname: "sadece harf giriniz",
};
const validation = object({
  password: string()
    .required(messages.required)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
      messages.pass
    ),
  email: string().email(messages.email).required(messages.required),
});

export default validation;