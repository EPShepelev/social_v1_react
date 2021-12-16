import React from 'react';
import { Formik, Field, Form } from 'formik';

const LoginFormBase = ({btntext}) => (
  <>
    <Formik
      initialValues={{
        email: '',
        password: '',
        rememberMe: false,
      }}
    >
      <Form>
        <Field id="email" name="email" placeholder="E-mail" />
        <Field id="password" name="password" placeholder="Password"/>
        <Field type="checkbox" name="rememberMe" /> Remember me
        <button type="submit">{btntext}</button>
      </Form>
    </Formik>
  </>
);

export default LoginFormBase