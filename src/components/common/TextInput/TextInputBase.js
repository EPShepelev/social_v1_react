import React from "react";
import { Formik, Field, Form } from 'formik';
import { messageValidate } from "../../../utils/validators/messageValidator";

const TextInputBase = ({btntext, placeholder, onSubmitClick}) => (
  <div>
    <Formik
      initialValues={{ message: "" }}
      validate={ messageValidate }
      onSubmit={(values, { setSubmitting, resetForm }) => {
          onSubmitClick(values);
          setSubmitting(false);
          resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <Form>
           <Field name={"message"} component={"textarea"} placeholder={placeholder} value={values.message} onChange={handleChange}  onBlur={handleBlur}/>
           {errors.message && touched.message && errors.message}
           <button type="submit" disabled={isSubmitting}>{btntext}</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default TextInputBase;