import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { processManualRoll } from '../../modules/game';
import ManualRoll from '../../components/actions/manual-roll';

const mapStateToProps = state => ({
  turn: state.game.turn,
  gameInProgress: state.game.inProgress
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onManualRoll: processManualRoll
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ManualRoll);
