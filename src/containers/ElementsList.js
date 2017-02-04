import { connect } from 'react-redux';
import { selectElement } from './../actions/actions';
import Svg from './../components/Svg/Svg';

const mapStateToProps = (state) => {
  return {
    gelements: state.svg.gelements
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectElement : (type, id) => {
      dispatch(selectElement(type, id))
    } 
  }
}

const ElementsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Svg);

export default ElementsList;
