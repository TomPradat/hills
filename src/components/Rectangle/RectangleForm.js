import React from 'react';
import { Field, reduxForm } from 'redux-form';

let RectangleForm = ({handleSubmit}) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="label">Label :</label>
          <Field name="label" component="input" type="text"/>
        </div>
        <div>
          <label htmlFor="sojournTime">Sojourn Time :</label>
          <Field name="sojournTime" component="input" type="text"/>
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

RectangleForm = reduxForm({
  form: 'rectangle',
})(RectangleForm);

export default RectangleForm;