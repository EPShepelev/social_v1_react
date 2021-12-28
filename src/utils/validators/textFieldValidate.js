const minTextFieldLength = 3;
const maxTextFieldLength = 100;

 export const textFieldValidate = (values) => {
    const errors = {};
    if (!values.fullName) {
      errors.message = 'Name is required!';
    }
    else if (
      values.fullName.length < minTextFieldLength
    ) {
      errors.message = `Min Name size is about ${minTextFieldLength} symbols`;
    }
    else if (
      values.fullName.length > maxTextFieldLength
    ) {
      errors.message = `Max Name size is about ${maxTextFieldLength} symbols`;
    }
    else if (!values.contacts.github) {
      errors.message = 'Github link is required :-(';
    }
    return errors;
  };