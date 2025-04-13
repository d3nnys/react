import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations.js';
import * as Yup from 'yup';
import css from './LoginPage.module.css';
import { selectIsRefreshing, selectUser } from '../../redux/auth/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import toast from 'react-hot-toast';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required('Is required field'),
  password: Yup.string()
    .min(8, 'Too short!')
    .max(36, 'Too Long!')
    .required('Is required field'),
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, action) => {
    dispatch(login(values))
      .unwrap()
      .then(user => {
        toast.success(`Welcome back, ${user.user.name}`);
      })
      .catch(() => {
        toast.error('Something went wrong, please try again later');
      });
    action.resetForm();
  };

  return isRefreshing ? (
    <Loader />
  ) : (
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
