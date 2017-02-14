import React from 'react';
import { Field, reduxForm } from 'redux-form';

let CircleForm = ({handleSubmit}) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="label">Label :</label>
          <Field name="label" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="properties">Properties :</label>
          <Field name="properties" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="activity">Activities :</label>
          <Field name="activities" component="input" type="text"/>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
  );

CircleForm = reduxForm({
  form: 'circle',
  enableReinitialize: true
})(CircleForm);

export default CircleForm;