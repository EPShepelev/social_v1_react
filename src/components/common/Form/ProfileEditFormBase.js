import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import style from "./ProfileEditFormBase.module.css";
import { textFieldValidate } from "../../../utils/validators/textFieldValidate";

const ProfileEditFormBase = ({ btntext, saveProfileData }) => (
  <>
<Formik
       initialValues={{
        lookingForAJob: false,
        lookingForAJobDescription: "",
        fullName: "",
        contacts: {
          github: "",
          vk: "",
          facebook: "",
          instagram: "",
          twitter: "",
          website: "",
          youtube: "",
          mainLink: "",
        }
      }}
      validate={textFieldValidate}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        saveProfileData(values.lookingForAJob, values.lookingForAJobDescription, values.fullName, values.github, values.vk, values.facebook, values.instagram, values.twitter, values.website, values.youtube, values.mainLink);
        setSubmitting(false);
        resetForm();
      }}
     >
       {({ values,
      errors,
      touched,
      handleChange,
      handleBlur,
      isSubmitting }) => (
        <Form className={style.form}>
        <Field type="checkbox" name="lookingForAJob" /> Looking for a job?
        <Field name="lookingForAJobDescription"  value={values.lookingForAJobDescription}  onChange={handleChange} onBlur={handleBlur} placeholder="Skills description" className={style.inputField} />
        <Field name="fullName" placeholder="Name" value={values.fullName}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        <Field name="contacts.github" placeholder="github link" value={values.contacts.github}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        <Field name="contacts.vk" placeholder="vk link" value={values.contacts.vk}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        <Field name="contacts.facebook" placeholder="facebook link" value={values.contacts.facebook}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        <Field name="contacts.instagram" placeholder="instagram link" value={values.contacts.instagram}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        <Field name="contacts.twitter" placeholder="twitter link" value={values.contacts.twitter}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        <Field name="contacts.website" placeholder="website link" value={values.contacts.website}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        <Field name="contacts.youtube" placeholder="youtube link" value={values.contacts.youtube}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        <Field name="contacts.mainLink" placeholder="mainLink" value={values.contacts.mainLink}  onChange={handleChange} onBlur={handleBlur} className={style.inputField} />
        {errors.message && touched.message && errors.message}
        <button type="submit" disabled={isSubmitting} className={style.saveBtn}>
          {btntext}
        </button>
      </Form>
       )}
     </Formik>
  </>
);

export default ProfileEditFormBase;