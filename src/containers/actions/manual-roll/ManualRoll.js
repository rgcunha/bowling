import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { processManualRoll } from '../../../modules/game';
import ManualRoll from '../../../components/actions/manual-roll';

const mapStateToProps = state => ({
  pinsLeft: state.game.turn.pinsLeft
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onRoll: processManualRoll
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ManualRoll);
