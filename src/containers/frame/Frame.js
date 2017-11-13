import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Frame from '../../components/frame';

const mapStateToProps = state => ({
  pins: state.bowling.turn.pinsLeft
});

export default connect(mapStateToProps, null)(Frame);
