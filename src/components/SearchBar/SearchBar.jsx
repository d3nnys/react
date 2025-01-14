import { Field, Form, Formik } from 'formik';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (values, actions) => {
    onSubmit(values.query);
    actions.resetForm();
  };

  return (
    <header>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
}
