import React, { Component } from 'react';

const CircleForm = ({label, properties, activity}) => (
      <form>
        <div>
          <label htmlFor="label">Label :</label>
          <input type="text" name="label" id="label" value={label}/>
        </div>
        <div>
          <label htmlFor="properties">Properties :</label>
          <input type="text" name="properties" id="properties" value={properties}/>
        </div>
        <div>
          <label htmlFor="activity">Activity :</label>
          <input type="text" name="activity" id="activity" value={activity}/>
        </div>
        <input type="submit"/>
      </form>
  );

export default CircleForm;