import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations.js';
import * as Yup from 'yup';

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
    email: '',
    password: '',
  };

  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      <Form>
        <div>
          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage />
        </div>
        <div>
          <label>Password</label>
          <Field type="text" name="password" />
          <ErrorMessage />
        </div>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}
