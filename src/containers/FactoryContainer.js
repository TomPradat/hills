import { connect } from 'react-redux';
import { addElement } from './../actions/actions';
import Factory from './../components/Factory/Factory';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (element, type) => {
      dispatch(addElement(element, type))
    }
  }
}

const FactoryContainer = connect(
  null,
  mapDispatchToProps
)(Factory);

export default FactoryContainer;
