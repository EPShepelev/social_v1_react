import React from 'react';
import { Formik, Field, Form } from 'formik';

const LoginFormBase = ({btntext, login}) => (
  <>
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        login(values.email, values.password, values.rememberMe);
        setSubmitting(false);
        resetForm();
    }}
    >
      <Form>
        <Field  name="email" placeholder="E-mail" />
        <Field type="password"  name="password" placeholder="Password"/>
        <Field type="checkbox" name="rememberMe" /> Remember me
        <button type="submit">{btntext}</button>
      </Form>
    </Formik>
  </>
);

export default LoginFormBase