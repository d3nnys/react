import css from './ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../redux/contactsSlice.js';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(30, 'Too long!')
    .required('Is required!'),
  number: Yup.string().min(9).max(9).required('Is required!'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));

    actions.resetForm();
  };

  // const idItem = nanoid();
  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.inputWrapper}>
          <label htmlFor={nameId}>Name:</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.inputWrapper}>
          <label htmlFor={numberId}>Number:</label>
          <Field name="number" id={numberId} placeholder="000-00-00" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
