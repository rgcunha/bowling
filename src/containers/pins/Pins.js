import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Pins from '../../components/pins';

const mapStateToProps = state => ({
  pins: state.bowling.turn.pinsLeft
});

export default connect(mapStateToProps, null)(Pins);
