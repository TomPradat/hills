import { connect } from 'react-redux';
import Form from './../components/Form/Form';
import { updateElement } from './../actions/actions';

const findElementInState = (state) => {
    if (!state.selectedElement) {
      return false;
    }

    const {type, id} = state.selectedElement;
    return {
      type,
      values: state.gelements[type].filter( (element ) => element.id === id )[0]
    }
}

const mapStateToProps = (state) => {
  return {
    selectedElement: findElementInState(state.svg),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
      handleSubmit: (values) => {
        dispatch(updateElement('circle', 1, values))
      }
    }
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer;
