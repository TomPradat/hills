import React from 'react';
import { Field, reduxForm } from 'redux-form';

let NodeForm = ({handleSubmit}) => (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="dot">dot :</label>
          <div>
            <label><Field name="dot" component="input" type="radio" value="right"/> Right</label>
            <label><Field name="dot" component="input" type="radio" value="left"/> Left</label>
            <label><Field name="dot" component="input" type="radio" value="top"/> Top</label>
            <label><Field name="dot" component="input" type="radio" value="bottom"/> Bottom</label>
          </div>
        </div>
        <button type="submit">Enregistrer</button>
      </form>
  );

NodeForm = reduxForm({
  form: 'node',
  enableReinitialize: true
})(NodeForm);

export default NodeForm;