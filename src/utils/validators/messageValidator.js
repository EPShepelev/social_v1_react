const messageMaxLength = 300;

 export const messageValidate = (values) => {
    const errors = {};
    if (!values.message) {
      errors.message = 'Type a message!';
    } else if (
      values.message.length > messageMaxLength
    ) {
      errors.message = `Max message size is about ${messageMaxLength} symbols`;
    }
    return errors;
  };

