import React from 'react';
import { Field, reduxForm } from 'redux-form';

let IrectangleForm = ({handleSubmit}) => (
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
          <label htmlFor="activities">Activities :</label>
          <Field name="activities" component="input" type="text"/>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
  );

IrectangleForm = reduxForm({
  form: 'irectangle',
  enableReinitialize: true
})(IrectangleForm);

export default IrectangleForm;