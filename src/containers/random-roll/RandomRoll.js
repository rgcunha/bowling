import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { processRandomRoll } from '../../modules/game';
import RandomRoll from '../../components/actions/random-roll';

const mapStateToProps = state => ({
  turnInProgress: state.game.turn.inProgress,
  gameInProgress: state.game.inProgress
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onRoll: processRandomRoll
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RandomRoll);
