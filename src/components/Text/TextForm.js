import React from 'react';
import { Field, reduxForm } from 'redux-form';

let TextForm = ({handleSubmit}) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Text :</label>
          <Field name="text" component="textarea"/>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
  );

TextForm = reduxForm({
  form: 'text',
  enableReinitialize: true
})(TextForm);

export default TextForm;