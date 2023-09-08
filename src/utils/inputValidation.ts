const TextValidation = (
  text: string | null = "",
  maxLength: number = 255,
  fieldName: string = "Field Name",
  required: boolean = true
) => {
  if ((text === null || text === "") && required) {
    return `${fieldName} is required`;
  }
  if (text && text?.length > 255) {
    return `${fieldName} max ${maxLength} characters`;
  }

  return "";
};

const EmailValidation = (
  text: string | null = "",
  maxLength: number = 255,
  fieldName: string = "Field Name",
  required: boolean = true
) => {
  if ((text === null || text === "") && required) {
    return `${fieldName} is required`;
  }
  if (text && text?.length > 255) {
    return `${fieldName} max ${maxLength} characters`;
  }
  if (text && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(text)) {
    return `${fieldName} Invalid`;
  }
  return "";
};

const PasswordValidation = (
  text: string | null = "",
  minLength: number = 8,
  maxLength: number = 12,
  fieldName: string = "Field Name",
  required: boolean = true
) => {
  if ((text === null || text === "") && required) {
    return `${fieldName} is required`;
  }
  if (text && (text?.length < minLength || text?.length > maxLength)) {
    return `${fieldName} minimum ${minLength} and maximum ${maxLength} characters`;
  }

  return "";
};

export { TextValidation, EmailValidation, PasswordValidation };
