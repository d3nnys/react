import css from './ContactForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { addContact } from '../../redux/contacts/operations.js';
import toast from 'react-hot-toast';

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
    dispatch(addContact(values))
      .unwrap()
      .then(() => {
        toast.success(`Added new contact`);
      })
      .catch(() => {
        toast.error('Something went wrong, please try again later');
      });

    actions.resetForm();
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.fieldWrapper}>
          <label className={css.label} htmlFor={nameId}>
            Name:
          </label>
          <Field className={css.input} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.fieldWrapper}>
          <label className={css.label} htmlFor={numberId}>
            Number:
          </label>
          <Field
            className={css.input}
            name="number"
            id={numberId}
            placeholder="000-00-00"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
