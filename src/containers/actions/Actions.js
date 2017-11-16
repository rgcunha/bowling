import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../../components/actions';

const mapStateToProps = state => ({
  turnInProgress: state.game.turn.inProgress,
  gameInProgress: state.game.inProgress
});

export default connect(mapStateToProps, null)(Actions);
