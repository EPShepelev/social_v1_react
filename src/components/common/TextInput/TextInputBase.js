import React from "react";
import { Formik, Field, Form,  setFieldValue } from 'formik';

const TextInputBase = ({btntext, placeholder, name, onSubmitClick}) => {
 
 return ( <>
    <Formik
      initialValues={{
        message: ""
      }}
      onSubmit={(values) => {onSubmitClick(values)}}>
      <Form>
      <Field name={name} component={"textarea"} placeholder={placeholder} />
        <button type="submit">{btntext}</button>
      </Form>
    </Formik>
  </>
);
}

export default TextInputBase