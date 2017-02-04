import { connect } from 'react-redux';
import { addElement } from './../actions/actions';
import Factory from './../components/Factory/Factory';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (type, element) => {
      dispatch(addElement(type, element))
    }
  }
}

const FactoryContainer = connect(
  null,
  mapDispatchToProps
)(Factory);

export default FactoryContainer;
