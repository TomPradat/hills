import { connect } from 'react-redux';
import { selectElement, updateElement } from './../actions/actions';
import Svg from './../components/Svg/Svg';

const mapStateToProps = (state) => {
  return {
    gelements: state.svg.gelements,
    selectedElement: state.svg.selectedElement
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    selectElement : (type, id) => {
      dispatch(selectElement(type, id))
    } ,
    updateElement : (type, id, event, ui) => {
      dispatch(updateElement(type, id, {x: ui.x, y: ui.y}))
    }
  }
}

const ElementsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Svg);

export default ElementsList;
