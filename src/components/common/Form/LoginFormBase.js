import React from "react";
import { Formik, Field, Form } from "formik";
import style from "./LoginFormBase.module.css";

const LoginFormBase = ({ btntext, login, captchaUrl }) => (
  <>
    <Formik
      initialValues={{
        email: "",
        password: "",
        rememberMe: false,
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        login(values.email, values.password, values.rememberMe);
        setSubmitting(false);
        resetForm();
      }}
    >
      <Form className={style.form}>
        <Field name="email" placeholder="E-mail" className={style.inputField} />
        <Field
          type="password"
          name="password"
          placeholder="Password"
          className={style.inputField}
        />
        <button type="submit" className={style.formBtn}>
          {btntext}
        </button>
        <Field type="checkbox" name="rememberMe" /> Remember me
        {captchaUrl && <img src={captchaUrl} alt="captcha text" />}
        {captchaUrl && (
          <Field name="captcha" placeholder="symbols from image" />
        )}
      </Form>
    </Formik>
  </>
);

export default LoginFormBase;
