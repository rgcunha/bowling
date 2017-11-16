import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Frame from '../../components/frame';

const mapStateToProps = state => ({
  pins: state.game.turn.pinsLeft
});

export default connect(mapStateToProps, null)(Frame);
