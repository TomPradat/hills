import React, { Component } from 'react';

class CircleForm extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="label">Label :</label>
          <input type="text" name="label" id="label" value={this.props.data.label}/>
        </div>
        <div>
          <label htmlFor="properties">Properties :</label>
          <input type="text" name="properties" id="properties" value={this.props.data.properties}/>
        </div>
        <div>
          <label htmlFor="activity">Activity :</label>
          <input type="text" name="activity" id="activity" value={this.props.data.activity}/>
        </div>
        <input type="submit"/>
      </form>
    );
  }
}

export default CircleForm;