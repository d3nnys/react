import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations.js';
import * as Yup from 'yup';
import css from './LoginPage.module.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required('Is required field'),
  password: Yup.string()
    .min(8, 'Too short!')
    .max(36, 'Too Long!')
    .required('Is required field'),
});

export default function LoginPage() {
  const dispatch = useDispatch();

  const initialValues = {
    email: 'sfsdfsd@mail.com',
    password: 'sfsdfsd@mail.com',
  };

  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };

  return (
    <>
      <p className={css.text}>Log in</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        <Form className={css.form}>
          <div className={css.fieldWrapper}>
            <label className={css.label}>Email</label>
            <Field className={css.input} type="email" name="email" />
            <ErrorMessage className={css.error} name="email" component="span" />
          </div>
          <div className={css.fieldWrapper}>
            <label className={css.label}>Password</label>
            <Field className={css.input} type="text" name="password" />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </div>
          <button className={css.btn} type="submit">
            Log in
          </button>
        </Form>
      </Formik>
    </>
  );
}
