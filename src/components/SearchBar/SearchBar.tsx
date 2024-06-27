import { Field, Form, Formik } from "formik";
import toast, { Toaster } from 'react-hot-toast';
import { SlMagnifier } from "react-icons/sl";
import css from './SearchBar.module.css'

interface ISearchBar {
    setSearchData: (value: string) => void
}
const SearchBar:React.FC<ISearchBar> = ({ setSearchData }) => {
  return <header className={css.header}>
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if (values.query.trim()) {
          setSearchData(values.query);
        } else {
          toast.error('Invalid request!')
        }
        actions.resetForm();
      }}>
      <Form className={css.searchForm}>
        <Toaster
          position="top-left"
          reverseOrder={false} />
        <button type="submit" className={css.submitButton}><SlMagnifier /></button>
        <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
          className={css.textField}
        >
        </Field>
        </Form>
      </Formik>
</header>
}

export default SearchBar