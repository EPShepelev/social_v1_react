import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import style from "./ProfileEditFormBase.module.css";
import { textFieldValidate } from "../../../utils/validators/textFieldValidate";

const ProfileEditFormBase = ({ btntext, profile, onEditProfileSubmit }) => (
  <>
    <Formik
      enableReinitialize={true}
      initialValues={profile}
      validate={textFieldValidate}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onEditProfileSubmit(values, profile.userId);
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
        <Form className={style.form}>
          <Field type="checkbox" name="lookingForAJob" /> Looking for a job?
          <Field
            name={"lookingForAJobDescription"}
            value={values.lookingForAJobDescription || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Skills description"
            className={style.inputField}
          />
          {errors.lookingForAJobDescription &&
            touched.lookingForAJobDescription &&
            errors.lookingForAJobDescription}
          <Field
            name={"fullName"}
            placeholder="Name"
            value={values.fullName || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            className={style.inputField}
          />
          {errors.fullName && touched.fullName && errors.fullName}
          <Field
            name={"aboutMe"}
            placeholder="About"
            value={values.aboutMe || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            className={style.inputField}
          />
          {errors.aboutMe && touched.aboutMe && errors.aboutMe}
          <Field
            name={"github"}
            placeholder="github link"
            value={values.github || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            className={style.inputField}
          />
          {errors.github && touched.github && errors.github}
          {/* <Field name="contacts.vk" placeholder="vk link" value={values.contacts.vk}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        <Field name="contacts.facebook" placeholder="facebook link" value={values.contacts.facebook}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        <Field name="contacts.instagram" placeholder="instagram link" value={values.contacts.instagram}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        <Field name="contacts.twitter" placeholder="twitter link" value={values.contacts.twitter}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        <Field name="contacts.website" placeholder="website link" value={values.contacts.website}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        <Field name="contacts.youtube" placeholder="youtube link" value={values.contacts.youtube}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        <Field name="contacts.mainLink" placeholder="mainLink" value={values.contacts.mainLink}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} /> */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={style.saveBtn}
          >
            {btntext}
          </button>
        </Form>
      )}
    </Formik>
  </>
);

export default ProfileEditFormBase;
