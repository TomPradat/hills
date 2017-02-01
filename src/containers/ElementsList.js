import { connect } from 'react-redux';
import Svg from './../components/Svg/Svg';

const mapStateToProps = (state) => {
  return {
    gelements: state.gelements
  }
}

const ElementsList = connect(
  mapStateToProps
)(Svg);

export default ElementsList;
