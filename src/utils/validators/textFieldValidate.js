const minTextFieldLength = 3;
const maxTextFieldLength = 100;

 export const textFieldValidate = (values) => {
    const errors = {};
    if (!values.fullName) {
      errors.fullName = 'Name is required!';
    }
    else if (values.fullName.length < minTextFieldLength) {
      errors.fullName = `Min Name size is about ${minTextFieldLength} symbols`;
    }
    else if (values.fullName.length > maxTextFieldLength) {
      errors.fullName = `Max Name size is about ${maxTextFieldLength} symbols`;
    }
    if (!values.lookingForAJobDescription) {
      errors.lookingForAJobDescription = 'Add at least one of your skills';
    }
    if (!values.aboutMe) {
      errors.aboutMe = 'Add somthing about yourself';
    }
    if (!values.github) {
      errors.github = 'Github link is required!';
    }
    return errors;
  };