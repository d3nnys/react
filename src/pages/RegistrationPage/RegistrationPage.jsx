import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations.js';
import * as Yup from 'yup';
import css from './RegistrationPage.module.css';

const LoginSchema = Yup.object().shape({
  name: Yup.string().min(3).max(36).required('Us required field!'),
  email: Yup.string().email().required('Is required field'),
  password: Yup.string()
    .min(8, 'Too short!')
    .max(36, 'Too Long!')
    .required('Is required field'),
});

export default function RegistrationPage() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };

  return (
    <>
      <p className={css.text}>Register</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label className={css.label} htmlFor="name">
              Name
            </label>
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.fieldWrapper}>
            <label className={css.label} htmlFor="email">
              Email
            </label>
            <Field className={css.input} type="email" name="email" />
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>
          <div className={css.fieldWrapper}>
            <label className={css.label} htmlFor="password">
              Password
            </label>
            <Field className={css.input} type="text" name="password" />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </div>
          <button className={css.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
}
